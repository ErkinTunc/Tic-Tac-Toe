function resetGameStatues() {
  currentRound = 1; // reset the current round to 1
  activePlayer = 0; // reset the active player to player 1
  gameIsOver = false; // reset the game over status
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameAreaElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardItemElement.children[gameBoardIndex].textContent = "";
      gameBoardItemElement.children[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

/**
 * Starts a new game by checking if both players have entered their names.
 * If not, it shows an alert. If they have, it sets the active player name
 * @returns {void} Returns nothing.
 */
function startNewGame() {
  resetGameStatues();

  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter names for both players!");
    return;
  }
  activePLayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block"; // Show the game area
}

/**
 * Opens the player configuration overlay for editing player names.
 */
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePLayerNameElement.textContent = players[activePlayer].name;
}

/**
 * Handles the selection of a game field by the player. Increases the round count,
 * updates the game data, and checks for a winner, if there is one it finishes the game.
 * @param {*} event
 * @returns  {void} Returns nothing. If the field is already selected, it does nothing.
 */
function selectGameField(event) {
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if(gameIsOver) {
    // If the game is over, func does nothing
    return;
  }

  if (gameData[selectedRow][selectedColumn] > 0) {
    // If the field is already selected, func does nothing
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1; // we put "+1" bc our active player is either 0 or 1, but we want 1 or2
  console.log(gameData);

  const winnerId = checkForGameOver();
  console.log(winnerId);

  if (winnerId !== 0) {
    endGame(winnerId);
    return;
  }

  currentRound++;
  switchPlayer();
}

/**
 * Checks if the game is over by checking rows, columns, and diagonals.
 * @returns {number} Returns the ID of the winning player (1 or 2), -1 for a draw, or 0 if the game is still ongoing.
 */
function checkForGameOver() {
  // check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i]; // return the index of the winner (1 or 2)
    }
  }

  // check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2]
    ) {
      return gameData[i][0]; // return the index of the winner (1 or 2)
    }
  }
  // check diagonal left to right , up to down
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[0][0]; // return the index of the winner (1 or 2)
  }

  // check diagonal right to left , up to down
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2]; // return the index of the winner (1 or 2)
  }

  if (currentRound === 9) {
    return -1; // return -1 to indicate a draw
  }

  return 0; // return 0 if no one has won yet
}

/**
 * Ends the game by displaying the game over overlay and showing the winner's name or a draw message.
 * @param {*} winnerId
 */
function endGame(winnerId) {
  gameIsOver = true; 
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name; // get the name of the winner
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
