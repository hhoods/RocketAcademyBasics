var rollRandomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomWord;
  var randomInteger = Math.floor(randomDecimal); // 0, 1, 2

  if (randomInteger == 0) {
    randomWord = "banana";
  } else if (randomInteger == 1) {
    randomWord = "chisel";
  } else if (randomInteger == 2) {
    randomWord = "faucet";
  }

  return randomWord;
};

var score = 2;

var secretWordBaseMain = function (input) {
  var secretWord = rollRandomWord();
  var myOutputValue;
  if (secretWord == input) {
    score = score - 1;
    myOutputValue = "you got it correct!";
  } else {
    myOutputValue = "please try again";
  }
  // now check if player meets the criteria to win the game
  if (score == 0) {
    myOutputValue = "congrats you win";
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
