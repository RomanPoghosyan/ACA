/* Task 1 */
function findPair(arr){
    let largest = -Infinity;
    for(let i = 0; i < arr.length - 1; i++){
        if((arr[i] * arr[i + 1]) > largest){
            largest = arr[i] * arr[i + 1];
        }
    }
    return largest;
}

// console.log(findPair([2,1,4,5,2,9,1,7,3]));


/* Task 2 */
function findMissingNumbers(arr){
    arr.sort((a,b) => a - b);
    return arr[arr.length - 1] - arr[0] - arr.length + 1;
}

console.log(findMissingNumbers([6,4,3,8,10,12]));
console.log(findMissingNumbers([1,13,12,6,11]));


/* Task 3 */
function acronym(phrase) {
    let words = phrase.split(" ");
    let result = "";
    words.forEach((word) => {result += word[0]});
    return result.toUpperCase();
}

console.log(acronym("Hayastani Petakan Tntesagitakan Hamalsaran"));


/* Task 4 */
function subStringsOfLengthN(str, n) {
    let result = [];
    for(let i = 0; i < str.length - n + 1; i++){
        result.push(str.substr(i, n));
    }
    return result;
}

// console.log(subStringsOfLengthN("4952151", 3));


/* Task 5 */
function findChilds(id, arr) {
    let res = arr.filter((item) => item.parent == id);
    return res;
}

function buildTreeLikeObject(arr, id = 0, res = {}){
    res[id] = {};
    let childs = findChilds(id, arr);
    for(let i = 0; i < childs.length; i++){
        buildTreeLikeObject(arr, childs[i].id, res[id]);
    }
    return res;
}

let treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
];

// console.log( buildTreeLikeObject(treeNodes) );