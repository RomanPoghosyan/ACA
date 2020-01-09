const TETRIS_ELEM = document.querySelector(".tetris");
const ITEMS = [
    {
        type: "I",
        cells: [
            {x: 3, y: 3},
            {x: 3, y: 4},
            {x: 3, y: 5},
            {x: 3, y: 6},
        ],
        leftTop: {x: 2, y: 3}
    },
    {
        type: "O",
        cells: [
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 2, y: 5},
        ],
        leftTop: {x: 1, y: 4}
    },
    {
        type: "L",
        cells: [
            {x: 1, y: 3},
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 2, y: 3},
        ],
        leftTop: {x: 0, y: 3}
    },
    {
        type: "J",
        cells: [
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 4},
        ],
        leftTop: {x: 1, y: 3}
    },
    {
        type: "T",
        cells: [
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 1, y: 6},
            {x: 2, y: 5},
        ],
        leftTop: {x: 0, y: 4}
    },
    {
        type: "S",
        cells: [
            {x: 1, y: 4},
            {x: 2, y: 4},
            {x: 2, y: 5},
            {x: 3, y: 5},
        ],
        leftTop: {x: 1, y: 3}
    },
    {
        type: "Z",
        cells: [
            {x: 1, y: 5},
            {x: 2, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 4},
        ],
        leftTop: {x: 1, y: 3}
    },
];
const COLORS = ["red", "yellow", "blue", "grey", "#00cc00"];
let currentItem;
let tetris = [];
let game = null;
let int = 1000;
let score = 0;

const  rotate = (o, length, matrix) => {
    const n = length;
    const x = Math.floor(n/ 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = matrix[i + o.x][j + o.y];
            matrix[i + o.x][j + o.y] = matrix[y - j + o.x][i + o.y];
            matrix[y - j + o.x][i + o.y] = matrix[y - i + o.x][y - j + o.y];
            matrix[y - i + o.x][y - j + o.y] = matrix[j + o.x][y - i + o.y];
            matrix[j + o.x][y - i + o.y] = k
        }
    }
};


const getRandItem = () => {
    return ITEMS[Math.floor(Math.random() * ITEMS.length)];
};

const getRandColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
};

const checkIfCompleteLine = () => {
    for (let i = 0; i < tetris.length; i++) {
        let done = true;
        for (let j = 0; j < tetris[0].length; j++) {
            if (tetris[i][j] === null) {
                done = false;
                break;
            }
        }
        if (done) {
            tetris.splice(i, 1);
            tetris.unshift(new Array(10).fill(null));
            addScore(10);
        }
    }
};

const render = () => {
    for (let i = 0; i < tetris.length; i++) {
        for (let j = 0; j < tetris[0].length; j++) {
            document.querySelector(`.i${i}j${j}`).style.background = tetris[i][j] !== null ? tetris[i][j] : "#ccff66";
        }
    }
};

const addScore = (a) => {
    score = score + a;
    document.querySelector("#score").innerHTML = score;
    if(score > 10){
        int = 700;
    }else if(score > 30){
        int = 400;
    }else if(score > 50){
        int = 200;
    }
};

class Figure {
    constructor(type, color, cells, leftTop) {
        this.type = type;
        this.color = color;
        this.leftTop = {...leftTop};
        this.cells = JSON.parse(JSON.stringify(cells));
        for (let i of this.cells) {
            if (tetris[i.x][i.y] !== null) {
                // clearTimeout(game);
                game = null;
                document.querySelector("h1").style.display = "block";
                return;
            }
            tetris[i.x][i.y] = this.color;
        }
        render();
    }

    right() {
        if (!this.checkIfOk(1)) return;
        this.clean();
        for (let i of this.cells) {
            tetris[i.x][++i.y] = this.color;
        }
        this.leftTop.y++;
        render();
    }

    left() {
        if (!this.checkIfOk(-1)) return;
        this.clean();
        for (let i of this.cells) {
            tetris[i.x][--i.y] = this.color;
        }
        this.leftTop.y--;
        render();
    }

    down() {
        if (!this.checkIfOk(0, 1)) {
            checkIfCompleteLine();
            this.leftTop = null;
            this.resetItem();
            return;
        }
        this.clean();
        for (let i of this.cells) {
            tetris[++i.x][i.y] = this.color;
        }
        this.leftTop.x++;
        render();
    }

    rotate() {
        let lt = this.leftTop;
        let length = this.type === "I" ? 4 : 3;
        let newCells = [];
        //checking if OK
        if(this.type === "O") return;
        for(let i = lt.x; i < lt.x + length; i++){
            for(let j = lt.y; j < lt.y + length; j++){
                if(i >= tetris.length || j >= tetris[0].length) return;
                if(tetris[i][j] !== null){
                    if(this.cells.some((i) => {i.x === i && i.y === j})){
                        return;
                    }
                }
            }
        }
        rotate(lt, length, tetris);
        for(let i = lt.x; i < lt.x + length; i++){
            for(let j = lt.y; j < lt.y + length; j++){
               if(tetris[i][j] !== null){
                   newCells.push({x: i, y: j});
               }
            }
        }
        this.cells = newCells;
        render();
    }

    clean() {
        for (let i of this.cells) {
            tetris[i.x][i.y] = null;
        }
    }

    checkIfOk(horizontal, down = 0) {
        for (let f of this.cells) {
            if (f.y + horizontal >= tetris[0].length || f.y + horizontal < 0
                || f.x + down >= tetris.length || tetris[f.x + down][f.y + horizontal] !== null) {
                if (!this.cells.some((i) => i.y === f.y + horizontal && i.x === f.x + down)) {
                    return false;
                }
            }
        }
        return true;
    }

    resetItem() {
        let item = getRandItem();
        currentItem = new Figure(item.type, getRandColor(), item.cells, item.leftTop);
        addScore(1);
    }
}


const initialize = () => {
    for (let i = 0; i < 19; i++) {
        tetris[i] = [];
        for (let j = 0; j < 10; j++) {
            tetris[i][j] = null;
            let div = document.createElement("div");
            div.className = `item i${i}j${j}`;
            if (i < 4) {
                div.style.display = "none";
            }
            TETRIS_ELEM.append(div);
        }
    }
    let item = getRandItem();
    currentItem = new Figure(item.type, getRandColor(), item.cells, item.leftTop);
};
initialize();

game = setTimeout(function run() {
    if(!game) return;
    currentItem.down();
    setTimeout(run, int);
}, int);


document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowRight":
            currentItem.right();
            break;
        case "ArrowLeft":
            currentItem.left();
            break;
        case "ArrowDown":
            currentItem.down();
            break;
        case " ":
            currentItem.rotate();
            break;
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === " "){
        e.preventDefault();
    }
})