const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");

const choiceBTn=document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBTn.forEach(button => button.addEventListener("click",()=>{
    player=button.textContent;
    computerTurn();
    playerText.textContent=`Player: ${player}`;
    computerText.textContent=`Computer: ${computer}`;
    resultText.textContent=checkWin();

}) 
    
);

function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}

function checkWin(){
    if(player==computer){
        return "Draw !!!";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER") ? "You Win!!" : "Computer Wins!!";

    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS") ? "You Win!!" : "Computer Wins!!";
        
    }

    else if(computer=="SCISSORS"){
        return (player=="ROCK") ? "You Win!!" : "Computer Wins!!";
        
    }
}