
// Left Side Points System
const leftElementNumber = document.getElementById("leftNum");
let leftNum = 0;
leftElementNumber.textContent = leftNum;
let oneLeftPoint = () => {leftNum+=1;leftElementNumber.textContent = leftNum;}
let twoLeftPoint = () => {leftNum+=2;leftElementNumber.textContent = leftNum;}
let threeLeftPoint = () => {leftNum+=3;leftElementNumber.textContent = leftNum;}

// Right Side Points System
const rightElementNumber = document.getElementById("rightNum");
let rightNum = 0;
rightElementNumber.textContent = rightNum;
let oneRightPoint = () => {rightNum+=1;rightElementNumber.textContent = rightNum;}
let twoRightPoint = () => {rightNum+=2;rightElementNumber.textContent = rightNum;}
let threeRightPoint = () => {rightNum += 3;rightElementNumber.textContent = rightNum;}

// New Game
let newGame = () => {leftNum=rightNum=0;leftElementNumber.textContent = leftNum;rightElementNumber.textContent = rightNum;}

//Substitute Button
const subButton = document.getElementById("subButton");
const audio = new Audio("img/basketballBuzzer.wav");
subButton.addEventListener("click", () => {
    audio.play();
});
