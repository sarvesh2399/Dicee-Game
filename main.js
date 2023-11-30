// Function to generate a random dice value
function getRandomDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the dice
function rollDice() {
  // Generate random dice values for Player 1 and Player 2
  var randomNumber1 = getRandomDiceValue();
  var randomNumber2 = getRandomDiceValue();

  // Update the dice images
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  // Determine and display the winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// Add a click event listener to the "Roll the Dice" button
document.getElementById("rollButton").addEventListener("click", rollDice);
