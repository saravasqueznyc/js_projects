"use strict";

const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newButton = document.querySelector(".btn--new");
const diceImage = document.querySelector(".dice");
const scorePlayer1 = document.querySelector("#score--0");
const currentScorePlayer1 = document.querySelector("#current--0");
const scorePlayer2 = document.querySelector("#score--1");
const currentScorePlayer2 = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let currentScore = 0;
let scoreList = [0, 0];
let currentPlayer = 0;
let playing = true;

startGame();

function startGame() {
  currentScore = 0;
  scoreList = [0, 0];
  currentPlayer = 0;
  playing = true;

  diceImage.classList.add("hidden");
  rollButton.classList.remove("hidden");

  currentScorePlayer1.innerText = currentScore;
  currentScorePlayer2.innerText = currentScore;
  scorePlayer1.innerText = scoreList[0];
  scorePlayer2.innerText = scoreList[1];

  player2.classList.remove("player--active");

  if (!player1.classList.contains("player--active")) {
    player1.classList.add("player--active");
  }

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
}

rollButton.addEventListener("click", () => {
  if(!playing) return;
  let dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.src = `./dice-${dice}.png`;

  if (diceImage.classList.contains("hidden")) {
    diceImage.classList.remove("hidden");
  }

  if (dice !== 1) {
    currentScore += dice;

    if (currentPlayer === 0) {
      currentScorePlayer1.innerText = currentScore;
    } else {
      currentScorePlayer2.innerText = currentScore;
    }
  } else {
    currentScore = 0;

    if (currentPlayer === 0) {
      currentScorePlayer1.innerText = currentScore;
      currentPlayer = 1;
      toggleActivePlayer();
    } else {
      currentScorePlayer2.innerText = currentScore;
      currentPlayer = 0;
      toggleActivePlayer();
    }
  }
});

function toggleActivePlayer() {
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

holdButton.addEventListener("click", () => {
  if (!playing) return;

  scoreList[currentPlayer] += currentScore;
  currentScore = 0;

  if (currentPlayer === 0) {
    scorePlayer1.innerText = scoreList[currentPlayer];
    currentScorePlayer1.innerText = currentScore;

    if (scoreList[currentPlayer] >= 100) {
      player1.classList.add("player--winner");
      rollButton.classList.add("hidden");
      holdButton.classList.add("hidden");
      diceImage.classList.add("hidden");

      playing = false;
    }

    currentPlayer = 1;
    toggleActivePlayer();
  } else {
    scorePlayer2.innerText = scoreList[currentPlayer];
    currentScorePlayer2.innerText = currentScore;

    if (scoreList[currentPlayer] >= 100) {
      player2.classList.add("player--winner");
      rollButton.classList.add("hidden");
      holdButton.classList.add("hidden");
      diceImage.classList.add("hidden");

      playing = false;
    }

    currentPlayer = 0;
    toggleActivePlayer();
  }
});

newButton.addEventListener("click", startGame);