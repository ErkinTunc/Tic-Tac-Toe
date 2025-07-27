// This file does not contain logic, just DOM variables

let editedPlayer = 0; // this variable will hold the ID of the player that is being edited
// 1 means player 1, 2 means player 2

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

const editPlayer1ButtonElement = document.getElementById(
  "editPlayer1NameButton"
);
const editPlayer2ButtonElement = document.getElementById(
  "editPlayer2NameButton"
);
const cancelConfigButtonElement = document.getElementById(
  "editCancelNameButton"
);

// ============= Event Listeners ====================
editPlayer1ButtonElement.addEventListener("click", openPlayerConfig); // Should not put "()" at the end of function if not it will run without clicking the button
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig); // Should not put "()" at the end of function if not it will run without clicking the button

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig); // if someone clicks on the backdrop it will close the player config

formElement.addEventListener("submit", savePlayerConfig);
