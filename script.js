let gameSequence = [];
let userSequence = [];
let level = 0;
let started = false;
let Heading = document.querySelector("h3");
let colors = ["red", "green" , "yellow", "purple"];


document.querySelector("body").addEventListener("keypress",()=>{
    // It starts the game for once.
    if (started == false){
        started = true;
        console.log("Game is started");

        LevelUp();
    }
});

function BtnFlash(Btn){ // Here buttons will be selected in Levelup function by variable RandColors. 
    Btn.classList.add("flash");

    setTimeout(function(){
        Btn.classList.remove("flash");
    },300);
}

function LevelUp(){
    userSequence = [];
    level++;
    Heading.innerText = `Level ${level}`;

    let RandomIndex = Math.floor(Math.random() * 3);
    let RndIdx = colors[RandomIndex];
    let RandBlinks= document.querySelector(`.${RndIdx}`); // Here randdom class will be selected from colors array because we maked array of defined class.
    // In RandColors we are selecting random index from array 'colors' and passing these as a argument in BtnFlash

    gameSequence.push(RndIdx);
    console.log(gameSequence);

    BtnFlash(RandBlinks); 
    // BtnPress();
}

function sequenceCheck (idx){
    // let idx = level-1; 

    if(userSequence[idx] == gameSequence[idx]){
        // console.log("Same");
        // setTimeout(LevelUp,1000);

        if(userSequence.length == gameSequence.length){
            setTimeout(LevelUp,1000);
        }
    }
    else{
        Heading.innerText = "Game Over! Start again";
        Reset();
    }
}

function BtnPress (){
    console.log("Button was pressed");
    let btn = this;
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    console.log(userSequence);

    sequenceCheck(userSequence.length-1);
}

let AllBtns = document.querySelectorAll(".btn");

for (const Bts of AllBtns) {
    Bts.addEventListener("click",BtnPress); // Calling the function
}

function Reset(){
    gameSequence = [];
    userSequence = [];
    level = 0;
    started = false;
}