var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardRank = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
        cardRank = 10;
      } else if (cardName == 12) {
        cardName = "queen";
        cardRank = 10;
      } else if (cardName == 13) {
        cardName = "king";
        cardRank = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: cardRank
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// Step 1: Create variables to define (i) computerDraw and (ii) playerDraw
// Step 1a: Create function to draw 2 cards for (i) computerDraw and (ii) playerDraw (show hand; Game Modes come in here)
var currentGameMode = "pleaseDrawCards";
var newDeck = [];
var newShuffle = [];
var playerCard = [];
var dealerCard = [];
var playerCardTotal;
var playerCardHitTotal;
var dealerCardTotal;
var dealerCardHitTotal;

var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "pleaseDrawCards") {
    newDeck = makeDeck();
    newShuffle = shuffleCards(newDeck);
    for (var i = 0; i < 2; i += 1) {
      dealerCard.push(newShuffle.pop());
      playerCard.push(newShuffle.pop());
    }
    playerCardTotal = playerCard[0].rank + playerCard[1].rank;
    dealerCardTotal = dealerCard[0].rank + dealerCard[1].rank;
    myOutputValue = `Dealer has drawn ${dealerCard[0].suit}${dealerCard[0].rank} and ${dealerCard[1].suit}${dealerCard[1].rank}.
    <br> Dealer scored ${dealerCardTotal} <br>
    <br> You have drawn ${playerCard[0].suit}${playerCard[0].rank} and ${playerCard[1].suit}${playerCard[1].rank}.
    <br> You scored ${playerCardTotal} <br>
    <br> Player, hit or stand?`;

    // Step 2: Player decides if they want to "hit" or "stand".
    currentGameMode = "hitOrStand";
    console.log(currentGameMode);
  } else if (currentGameMode == "hitOrStand") {
    dealerCardTotal = dealerCard[0].rank + dealerCard[1].rank;
    if (input == "hit" && dealerCardTotal > 17) {
      playerCard.push(newShuffle.pop());
      playerCardHitTotal =
        playerCard[0].rank + playerCard[1].rank + playerCard[2].rank;
      console.log(`player drawn ${playerCard[2].suit}${playerCard[2].rank}`);
      dealerCardHitTotal = dealerCard[0].rank + dealerCard[1].rank;
      if (playerCardHitTotal > 21 && dealerCardHitTotal <= 21) {
        // Scenario 1a: Player score is > 21 but Dealer score <= 21, dealer automatically wins.
        myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Dealer wins. Player, better luck next time`;
      } else if (
        (playerCardHitTotal > 21 && dealerCardHitTotal > 21) ||
        (playerCardHitTotal == 21 && dealerCardHitTotal == 21)
      ) {
        // Scenario 1b: Player and dealer score is > 21 OR Player and dealer score = 21 Both lose. i.e. draw.
        myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> It's a draw. Please try again`;
      } else if (playerCardHitTotal <= 21 && dealerCardHitTotal > 21) {
        // Scenario 1c: Player score is <= 21 but Dealer score > 21, player automatically wins.
        myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Congrats Player! You win`;
      } else if (
        playerCardHitTotal <= 21 &&
        dealerCardHitTotal <= 21 &&
        playerCardHitTotal > dealerCardHitTotal //Scenario 1d: Both player & dealer scores are <= 21, to win, player score has to be > dealer score.
      ) {
        myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Congrats Player! You win`;
      } else if (
        playerCardHitTotal == dealerCardHitTotal &&
        playerCardHitTotal < 21 //Scenario 1e: Player score = dealer score and is < 21, to win, player has to draw another card.
      ) {
        myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> It's a draw. Player please draw another card.`;
        playerCard.push(newShuffle.pop());
        playerCardHitTotal =
          playerCard[0].rank +
          playerCard[1].rank +
          playerCard[2].rank +
          playerCard[3].rank;
        console.log(`player drawn ${playerCard[3].suit}${playerCard[3].rank}`);
        if (
          playerCardHitTotal <= 21 &&
          dealerCardHitTotal <= 21 &&
          playerCardHitTotal > dealerCardHitTotal //Scenario 1d: Both player & dealer scores are <= 21, to win, player score has to be > dealer score.
        ) {
          myOutputValue = `You have drawn ${playerCard[3].suit}${playerCard[3].rank} <br>
            <br> Your total score is ${playerCardHitTotal}
            <br> Dealer's score is ${dealerCardHitTotal} <br>
            <br> Congrats Player! You win`;
        } else if (playerCardHitTotal > 21 && dealerCardHitTotal <= 21) {
          //Scenario 1a: Player score is > 21 but Dealer score <= 21, dealer automatically wins.
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Dealer wins. Player, better luck next time`;
        }
      } else if (input == "hit" && dealerCardTotal < 17) {
        playerCard.push(newShuffle.pop());
        playerCardHitTotal =
          playerCard[0].rank + playerCard[1].rank + playerCard[2].rank;
        console.log(`player drawn ${playerCard[2].suit}${playerCard[2].rank}`);
        dealerCard.push(newShuffle.pop());
        dealerCardHitTotal =
          dealerCard[0].rank + dealerCard[1].rank + dealerCard[2].rank;
        console.log(`dealer drawn ${dealerCard[2].suit}${dealerCard[2].rank}`);

        if (playerCardHitTotal > 21 && dealerCardHitTotal <= 21) {
          // Scenario 1a: Player score is > 21 but Dealer score <= 21, dealer automatically wins.
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Dealer wins. Player, better luck next time`;
        } else if (
          (playerCardHitTotal > 21 && dealerCardHitTotal > 21) ||
          (playerCardHitTotal == 21 && dealerCardHitTotal == 21)
        ) {
          // Scenario 1b: Player and dealer score is > 21 OR Player and dealer score = 21 Both lose. i.e. draw.
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> It's a draw. Please try again`;
        } else if (playerCardHitTotal <= 21 && dealerCardHitTotal > 21) {
          // Scenario 1c: Player score is <= 21 but Dealer score > 21, player automatically wins.
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Congrats Player! You win`;
        } else if (
          playerCardHitTotal <= 21 &&
          dealerCardHitTotal <= 21 &&
          playerCardHitTotal > dealerCardHitTotal //Scenario 1d: Both player & dealer scores are <= 21, to win, player score has to be > dealer score.
        ) {
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> Congrats Player! You win`;
        } else if (
          playerCardHitTotal == dealerCardHitTotal &&
          playerCardHitTotal < 21 //Scenario 1e: Player score = dealer score and is < 21, to win, player has to draw another card.
        ) {
          myOutputValue = `You have drawn ${playerCard[2].suit}${playerCard[2].rank} <br>
          <br> Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} <br>
          <br> Your total score is ${playerCardHitTotal}
          <br> Dealer's score is ${dealerCardHitTotal} <br>
          <br> It's a draw. Player please draw another card.`;
          playerCard.push(newShuffle.pop());
          playerCardHitTotal =
            playerCard[0].rank +
            playerCard[1].rank +
            playerCard[2].rank +
            playerCard[3].rank;
          console.log(
            `player drawn ${playerCard[3].suit}${playerCard[3].rank}`
          );
          if (
            playerCardHitTotal <= 21 &&
            dealerCardHitTotal <= 21 &&
            playerCardHitTotal > dealerCardHitTotal //Scenario 1d: Both player & dealer scores are <= 21, to win, player score has to be > dealer score.
          ) {
            myOutputValue = `You have drawn ${playerCard[3].suit}${playerCard[3].rank} <br>
            <br> Your total score is ${playerCardHitTotal}
            <br> Dealer's score is ${dealerCardHitTotal} <br>
            <br> Congrats Player! You win`;
          }
        }
      }
    } else if (input == "stand") {
      // If player hits stand, dealer will draw if dealer has <17, otherwise, dealer stands
      if (dealerCardTotal < 17) {
        dealerCard.push(newShuffle.pop());
        dealerCardHitTotal =
          dealerCard[0].rank + dealerCard[1].rank + dealerCard[2].rank;
        playerCardHitTotal = playerCard[0].rank + playerCard[1].rank;
        if (
          dealerCardHitTotal > 17 &&
          dealerCardHitTotal <= 21 &&
          dealerCardHitTotal > playerCardHitTotal
        ) {
          myOutputValue = `You have chosen to stand. Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank}<br>
              <br> Your score is ${playerCardHitTotal}
              <br> Dealer's score is ${dealerCardHitTotal} <br>
              <br> Dealer wins. Player, better luck next time`;
        } else if (dealerCardHitTotal < 17) {
          dealerCard.push(newShuffle.pop());
          dealerCardHitTotal =
            dealerCard[0].rank +
            dealerCard[1].rank +
            dealerCard[2].rank +
            dealerCard[3].rank;
          if (
            dealerCardHitTotal <= 21 &&
            dealerCardHitTotal > playerCardHitTotal
          ) {
            myOutputValue = `You have chosen to stand. Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} & ${dealerCard[3].suit}${dealerCard[3].rank} <br>
              <br> Your score is ${playerCardHitTotal}
              <br> Dealer's score is ${dealerCardHitTotal} <br>
              <br> Dealer wins. Player, better luck next time`;
          } else if (dealerCardHitTotal > 21) {
            myOutputValue = `You have chosen to stand. Dealer has drawn ${dealerCard[2].suit}${dealerCard[2].rank} & ${dealerCard[3].suit}${dealerCard[3].rank} <br>
              <br> Your score is ${playerCardHitTotal}
              <br> Dealer's score is ${dealerCardHitTotal} <br>
              <br> Congrats Player! You win`;
          }
        }
      }
    }
  }
  return myOutputValue;
};
