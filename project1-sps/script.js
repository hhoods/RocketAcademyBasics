// Step 1 : Create mathematical equation to generate a randomtry

var generateRandomMove = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal); // scissors, paper, stone
  var randomNumber = randomInteger + 1;
  console.log(`random number generated is: ${randomNumber}`);
  
  // Step 1a: Attach a randomNumber to scissors, paper or stone (botMove)
  var randomNumber = generateRandomMove();
  var botMove;
  if (randomNumber == 1) {
    botMove = "scissors";
  } else if (randomNumber == 2) {
    botMove = "paper";
  } else if (randomNumber == 3) {
    botMove = "stone";
    console.log(`botMove generated is: ${botMove}`);
  }
};

// Step 2: Defining the source of inputs for Player & Bot variables

var main = function (input) {
  var myOutputValue = "";
  if (input != "scissors" || input != "paper" || input != "stone");
  myOutputValue = "Welcome to Scissors paper stone! Please input scissors, paper or stone to begin.";
  {
  
  // Step 3: Create a functional logic to determine how player wins the game
  // scissors beats paper not stone
  // paper beats stone not scissors
  // stone beats scissors not paper
  // Step 3a: Define messaging for various outcomes

  // Scenario 1: Player wins & Bot loses
  } else if(
    (input == "scissors" && botMove == "paper") ||
    (input == "paper" && botMove == "stone") ||
    (input == "stone" && botMove == "scissors")
  ); 
    myOutputValue = "Congrats, you WON!";
  {;

    // Scenario 2: Player & Bot draws
  } else if(
    (input == "scissors" && botMove == "scissors") ||
    (input == "paper" && botMove == "paper") ||
    (input == "stone" && botMove == "stone")
  );
    myOutputValue = "It's a draw. Please try again.";
  {;

    // Scenario 3: Player loses & Bot wins
  } else if (
    (input == "scissors" && botMove == "stone") ||
    (input == "paper" && botMove == "scissors") ||
    (input == "stone" && botMove == "paper")
  );
    myOutputValue = "Oh no, you lost. Please try again.";
  {;
  }
return myOutputValue;
};
