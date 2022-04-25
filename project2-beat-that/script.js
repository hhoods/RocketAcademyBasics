var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var currentGameMode = "playerOneRolling";
var PlayerOneNumbers = [];
var PlayerTwoNumbers = [];
var combinedPlayerOneNumber;
var combinedPlayerTwoNumber;

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "playerOneRolling") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    PlayerOneNumbers[0] = rollDice1;
    PlayerOneNumbers[1] = rollDice2;
    myOutputValue = `Player One has rolled ${rollDice1} and ${rollDice2}. Please choose the First or Second order.`;

    currentGameMode = "playerOneOrder"; // changing to gamemode 2
  } else if (currentGameMode == "playerOneOrder") {
    if (input == "First") {
      combinedPlayerOneNumber = Number(
        `${PlayerOneNumbers[0]}${PlayerOneNumbers[1]}`
      );
      myOutputValue = `Player One. your number is ${PlayerOneNumbers[0]}${PlayerOneNumbers[1]}. Player Two can roll now.`;
    } else {
      combinedPlayerOneNumber = Number(
        `${PlayerOneNumbers[1]}${PlayerOneNumbers[0]}`
      );
      myOutputValue = `Player One, your number is ${PlayerOneNumbers[1]}${PlayerOneNumbers[0]}. Player Two can roll now.`;
    }

    currentGameMode = "playerTwoRolling"; // changing to gamemode 3
  } else if (currentGameMode == "playerTwoRolling") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    PlayerTwoNumbers[0] = rollDice1;
    PlayerTwoNumbers[1] = rollDice2;
    myOutputValue = `Player Two has rolled ${rollDice1} and ${rollDice2}. Please choose the First or Second order.`;

    currentGameMode = "playerTwoOrder"; // changing to gamemode 4
  } else if (currentGameMode == "playerTwoOrder") {
    if (input == "First") {
      combinedPlayerTwoNumber = Number(
        `${PlayerTwoNumbers[0]}${PlayerTwoNumbers[1]}`
      );
      myOutputValue = `Player Two, your number is ${PlayerTwoNumbers[0]}${PlayerTwoNumbers[1]}.`;
    } else {
      combinedPlayerTwoNumber = Number(
        `${PlayerTwoNumbers[1]}${PlayerTwoNumbers[0]}`
      );
      myOutputValue = `Player Two, your number is ${PlayerTwoNumbers[1]}${PlayerTwoNumbers[0]}.`;
    }

    currentGameMode = "whoWins"; // changing to gamemode 5
  } else if (currentGameMode == "whoWins") {
    if (combinedPlayerOneNumber > combinedPlayerTwoNumber) {
      console.log(typeof combinedPlayerOneNumber);
      console.log(typeof combinedPlayerTwoNumber);
      myOutputValue = `Congrats Player One, you won! Player Two, better luck next time.`;
    } else {
      myOutputValue = `Congrats Player Two, you won! Player One, better luck next time.`;
    }
  }
  return myOutputValue;
};
