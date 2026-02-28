'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
const numberElement = document.querySelector(".number");
const userGuessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
let score = 20;
let highscore = 0;
const bodyElement = document.querySelector("body");
const againButton = document.querySelector(".again");
// numberElement.innerText = randomNumber;

againButton.addEventListener("click", () => {
  score = 20;
  bodyElement.style.backgroundColor = "#222";
  numberElement.style.fontSize = "6rem";
  numberElement.innerText = "?";
  messageElement.innerText = "Start guessing...";
  scoreElement.innerText = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
});

checkButton.addEventListener("click", () => {
  console.log(userGuessInput.value);

  let userNumber = Number(userGuessInput.value);

  if (score > 0) {
    if (userNumber === randomNumber) {
      messageElement.innerText = "You guessed it!";
      bodyElement.style.backgroundColor = "#60b347ff";
      numberElement.style.fontSize = "60px";
      numberElement.innerText = randomNumber;

      if (score > highscore) {
        highscore = score;
        highscoreElement.innerText = highscore;
      }
    } else {
      let hint = userNumber > randomNumber ? "Too high" : "Too low";
      updateScore(hint);
    }
  } else {
    messageElement.innerText = "You lost, try again";
  }
});

function updateScore(newMessage) {
  messageElement.innerText = newMessage;
  score--;
  scoreElement.innerText = score;
}