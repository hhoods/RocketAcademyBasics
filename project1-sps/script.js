// Step 1 : Create mathematical equation for bot to generate a try
  // Step 1a: Attach a randomNumber to scissors, paper or stone

var botTry = function () {
  var randomDecimal = Math.random() * 3;
  var randomTry;
  var randomNumber = Math.floor(randomDecimal); // scissors, paper, stone

  if (randomNumber == 0) {
    return "scissors";
  } 
  
  if (randomNumber == 1) {
     return "paper";
  }
  
  if (randomNumber == 2) {
    return "stone";
};


// Step 2: Create a functional logic to determine how player wins the game
  // scissors beats paper not stone
  // paper beats stone not scissors
  // stone beats scissors not paper


var playerToWin = function (playerTry, botTry) {
  return (
    (playerTry == scissors && botTry == paper) ||
    (playerTry == paper && botTry == stone) ||
    (playerTry == stone && botTry == scissors)
  )
};


// Step 3: Create a functional logic to determine if it's a draw
  // scissors = scissors
  // paper = paper
  // stone == stone

var playerToDraw = function (playerTry, botTry) {
  return (
    (playerTry == scissors && botTry == scissors) ||
    (playerTry == paper && botTry == paper) ||
    (playerTry == stone && botTry == stone)
  )
};


// Step 4: Create a functional logic to determine if player loses
  // scissors < stone
  // paper < scissors
  // stone < paper

var playerToLose = function (playerTry, botTry) {
  return (
    (playerTry == scissors && botTry == stone) ||
    (playerTry == paper && botTry == scissors) ||
    (playerTry == stone && botTry == paper)
  )
};


// Step 5: Define messaging for various outcomes (to Step 2, 3 or 4)


if (input == playerToWin) {
  return "Congrats you WON!";
};

if (input == playerToDraw) {
  return "It's a DRAW. Try again.";
}; 

if (input == playerToLose) {
  return "Oh no, you LOST"
}