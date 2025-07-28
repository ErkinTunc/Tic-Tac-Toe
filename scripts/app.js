// This file does not contain logic, just DOM variables

const gameData = [
  // if it is selected by player 1 array turns to 1, if it is selected by player 2 array turns to 2
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0; // ID of the player that is being edited
// 1 means player 1, 2 means player 2
let activePlayer = 0; //(the player who is currently playing)
let currentRound = 1; 
let gameIsOver = false; // to check if the game is over or not

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form"); // we have only one form in the document
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePLayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");

const editPlayer1ButtonElement = document.getElementById(
  "editPlayer1NameButton"
);
const editPlayer2ButtonElement = document.getElementById(
  "editPlayer2NameButton"
);
const cancelConfigButtonElement = document.getElementById(
  "editCancelNameButton"
);
const startNewGameButtonElement = document.getElementById("newGameButton");
const gameFieldElements = document.querySelectorAll("#game-board li"); // get all the list items in the game board
const gameBoardItemElement = document.getElementById("game-board");


// ============= Event Listeners ====================
editPlayer1ButtonElement.addEventListener("click", openPlayerConfig); // Should not put "()" at the end of function if not it will run without clicking the button
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig); // if someone clicks on the backdrop it will close the player config

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButtonElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
