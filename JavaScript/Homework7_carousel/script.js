const PREV = document.querySelector(".prev");
const NEXT = document.querySelector(".next");
const PLAY = document.querySelector("#play-and-pause");
const IMG_CONTAINER = document.querySelector("#img-container");

let urls = [
    `https://secure.meetupstatic.com/photos/event/b/0/f/highres_475562831.jpeg`,
    `https://specials-images.forbesimg.com/imageserve/5bf429884bbe6f78bda8b82a/960x0.jpg?fit=scale`,
    `https://i.ytimg.com/vi/9PBidyUR-cg/maxresdefault.jpg`,
    `https://miro.medium.com/max/4660/1*GSjek0C5eLKQeQh0Snlzdw.png`,
    `https://i1.wp.com/opensourceforu.com/wp-content/uploads/2016/11/Brendan-Eich.jpg?fit=750%2C450&ssl=1`
]
let index = 0;

function change() {
    const FIRST_CHILD = IMG_CONTAINER.children[0];
    FIRST_CHILD.style.opacity = 0;
    setTimeout(() => {
        FIRST_CHILD.querySelector("img").src = urls[index % urls.length];
        FIRST_CHILD.style.opacity = 1;
    },500);
}

function prev(){
    change();
    index = index == 0 ? urls.length - 1 : index - 1 ;
}

function next(){
    change();
    index = index == urls.length - 1 ? 0 : index + 1;
}

PREV.addEventListener("click", prev);
NEXT.addEventListener("click", next);

let timerId;

function createInterval(){
    timerId = setTimeout(function tick() {
        next();
        timerId = setTimeout(tick, 3000); // (*)
    }, 3000);

}

createInterval();

let paused = false;
PLAY.addEventListener("click", function(event){
    paused = !paused;
    if(paused){
        clearInterval(timerId);
    } else {
        createInterval();
    }
    PLAY.innerHTML = paused ? "Play" : "Pause";
})


// const PREV = document.querySelector(".prev");
// const NEXT = document.querySelector(".next");
// const IMG_CONTAINER = document.querySelector("#img-container");
//
// let urls = [
//     `https://secure.meetupstatic.com/photos/event/b/0/f/highres_475562831.jpeg`,
//     `https://specials-images.forbesimg.com/imageserve/5bf429884bbe6f78bda8b82a/960x0.jpg?fit=scale`,
//     `https://i.ytimg.com/vi/9PBidyUR-cg/maxresdefault.jpg`,
// ]
// let index = 10000;
//
// function prev(){
//     PREV.disabled = true;
//     NEXT.disabled = true;
//     clearInterval(timerId);
//     const LAST_CHILD = IMG_CONTAINER.children[0].cloneNode(true);
//     LAST_CHILD.style.marginLeft = "-600px";
//     LAST_CHILD.querySelector("img").src = urls[index-- % urls.length];
//     IMG_CONTAINER.prepend(LAST_CHILD);
//     IMG_CONTAINER.children[0].style.marginLeft = "0";
//     setTimeout(() => {
//         IMG_CONTAINER.removeChild(IMG_CONTAINER.children[1]);
//         PREV.disabled = false;
//         NEXT.disabled = false;
//         createInterval();
//     }, 700);
// }
//
//
// function next(){
//     NEXT.disabled = true;
//     PREV.disabled = true;
//     clearInterval(timerId);
//     const FIRST_CHILD = IMG_CONTAINER.children[0].cloneNode(true);
//     FIRST_CHILD.querySelector("img").src = urls[index++ % urls.length];
//     IMG_CONTAINER.append(FIRST_CHILD);
//     IMG_CONTAINER.children[0].style.marginLeft = "-600px";
//     setTimeout(() => {
//         IMG_CONTAINER.removeChild(IMG_CONTAINER.children[0]);
//         NEXT.disabled = false;
//         PREV.disabled = false;
//         createInterval();
//     },700);
// }
//
// PREV.addEventListener("click", prev);
// NEXT.addEventListener("click", next);
//
// let timerId;
//
// function createInterval(){
//     timerId = setTimeout(function tick() {
//         next();
//         timerId = setTimeout(tick, 2000); // (*)
//     }, 2000);
//
// }
//
// createInterval();

