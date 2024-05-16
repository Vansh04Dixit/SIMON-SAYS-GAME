let gameSequence = [];
let userSequence = [];

let level = 0;
let started = false;

document.querySelector("body").addEventListener("click",()=>{
    if(started == false){
        started = true;
        console.log("game is started");
    }
});