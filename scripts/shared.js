// Checks if the game feedback section is loaded
console.log("Game Feedback Section Loaded");

// ================== DOM variables of game elements =======================

// DOM variables player names and symbols
let user1Name = document.getElementById("userName1");
let user2Name = document.getElementById("userName2");
let player1Symbol = document.getElementById("symbol1");
let player2Symbol = document.getElementById("symbol2");

// DOM variables for the restarting the game board
let newGameButton = document.getElementById("newGameButton");

// DOM variables for the edit player section
let editPlayerSection = document.getElementById("editPlayerSection");
let editPlayerTitle = document.getElementById("editPlayerTitle");
let editPlayerNameInput = document.getElementById("editPlayerNameInput"); // Note: The editPlayerNameInput is used to input the new player name
let editPlayer1NameButton = document.getElementById("editPlayer1NameButton");
let editPlayer2NameButton = document.getElementById("editPlayer2NameButton");
let editCancelNameButton = document.getElementById("editCancelNameButton");

// DOM variables for the game feedback section
let gameFeedbackSection = document.getElementById("gameFeedbackSection");
let winMessage = document.getElementById("winMessage");
let winnerName = document.getElementById("winner-name"); // span element inside winMessage to display the winner's name
let winnerName2 = document.getElementById("winner-name2"); // span element inside winMessage to display the winner's name for player 2
let winnerSymbol = document.getElementById("active-player-name"); // span element inside winMessage
let extraFeedback = document.getElementById("extraFeedback");

// DOM variables for the game board
let turnMessage = document.getElementById("turnMessage"); // tells whom turn it is
let gameBoard = document.querySelector(".gameBoard");
let cells = document.querySelectorAll(".cell");

// ==== console.dir messages =========
console.log("====== DOM Variables =======");
console.dir(user1Name)
console.dir(user2Name)
console.dir(player1Symbol)
console.dir(player2Symbol)
console.log("----------------------");
console.dir(newGameButton)
console.log("----------------------");
console.dir(editPlayerSection)
console.dir(editPlayerTitle)
console.dir(editPlayerNameInput)
console.dir(editPlayer1NameButton)
console.dir(editPlayer2NameButton)
console.dir(editCancelNameButton)
console.log("----------------------");
console.dir(gameFeedbackSection)
console.dir(winMessage)
console.dir(extraFeedback)
console.log("----------------------");
console.dir(turnMessage)
console.dir(gameBoard)
console.dir(cells)


// ================== Default values for player names and symbols =======================
user1Name.value = "Player 1"; // default name for player 1
user2Name.value = "Player 2"; // default name for player 2

player1Symbol.value = "X"; // default symbol for player 1
player2Symbol.value = "O"; // default symbol for player 2




// ================== Functions to handle game feedback and player editing =======================

// edit player name
function editPlayer1Name() {
  const player1Name = document.getElementById("player1Name").value;
  if (player1Name.textContent.trim() === "") { // trim() method removes whitespace from both ends of a string
    
  }
}

// Function to hide the game feedback section
// Function to show the game feedback section

// ================== Event listeners for the buttons ========================
newGameButton.addEventListener("click", startNewGame);
editPlayer1NameButton.addEventListener("click", editPlayer1Name);
editPlayer2NameButton.addEventListener("click", editPlayer2Name);
editCancelNameButton.addEventListener("click", cancelEditPlayerName);