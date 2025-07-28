

/**
 * Opens the player configuration overlay to edit player names.
 * @param {*} event 
 */
function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // set the editedPlayer variable to the selected player ID // we placed "+" in the beginning to make it an integer  + "1" => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

/**
 * Closes the player configuration overlay.
 */
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error"); // remove error class from the first child of the form (the input field)
  errorsOutputElement.textContent = ""; // clear the error message
  formElement.firstElementChild.lastElementChild.value = ""; // clear the input field
}

/**
 * Saves the player configuration when the form is submitted.
 * @param {*} event 
 * @returns 
 */
function savePlayerConfig(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim(); // get the value of the input field and --> trim() remove all whitespace
  console.log("Entered Player Name:", enteredPlayerName);

  if (!enteredPlayerName) {
    // !enteredPlayerName --> "" is falsy  || soo enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error"); // add error class to the first child of the form (the input field)
    errorsOutputElement.textContent = "Please enter a valid name!";
    return; // stop the function execution if the name is invalid
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  ); // get the element with the ID of userName1 or userName2

  updatedPlayerDataElement.children[1].textContent = enteredPlayerName; // update the text content of the second child (the h3 element) with the entered player name

  players[editedPlayer - 1].name = enteredPlayerName; // update the name of the player in the players array

  closePlayerConfig(); // close the player config overlay
}
