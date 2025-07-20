// Checks if the game feedback section is loaded
console.log("Game Feedback Section Loaded");

// ================== DOM variables of game elements =======================

// DOM variables player names and symbols
let userName1 = document.getElementById("userName1");
let userName2 = document.getElementById("userName2");
let symbol1 = document.getElementById("symbol1");
let symbol2 = document.getElementById("symbol2");

// DOM variables for the restarting the game board
let newGameButton = document.getElementById("newGameButton");

// DOM variables for the edit player section
let editPlayerSection = document.getElementById("editPlayerSection");
let editPlayerTitle = document.getElementById("editPlayerTitle");
let editPlayerNameButton = document.getElementById("editPlayerNameButton");
let editCancelNameButton = document.getElementById("editCancelNameButton");

// DOM variables for the game feedback section
let gameFeedbackSection = document.getElementById("gameFeedbackSection");
let winMessage = document.getElementById("winMessage");
let extraFeedback = document.getElementById("extraFeedback");

// DOM variables for the game board
let turnMessage = document.getElementById("turnMessage"); // tells whom turn it is
let gameBoard = document.querySelector(".gameBoard");
let cells = document.querySelectorAll(".cell");

// ================== Variables to access player names and symbols =======================
const player1Name = document.getElementById("userName1");
const player2Name = document.getElementById("userName2");
const player1Symbol = document.getElementById("symbol1");
const player2Symbol = document.getElementById("symbol2");


// ================== Functions to handle game feedback and player editing =======================

// edit player name
function editPlayerName() {
  const player1Name = document.getElementById("player1Name").value;
}

// Function to hide the game feedback section


// Function to show the game feedback section