var adjectives = [];

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  // if input === "create" then myOutputValue = sentence + adjective 
  if (input != "create") {
    adjectives.push(input);
  }
  
  var myOutputValue = adjectives;

  if (input == "create") {
    var randomIndex = getRandomIndex(adjectives.length)
    var randomAdjective = adjectives[randomIndex];
    var madLib = `'You will never believe what I saw today! It was a '+ &{adjectives} + 'dog carrying a stick.'` ;
    myOutputValue = madLib;
  } else if (input != "create") {
    adjectives.push(input){
      found = true
    }
  }



  adjectives.push(input);
  var myOutputValue = 'hello world';
  return myOutputValue;
};


var madLib =
  '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
  adjectives +
  ' wife.';

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};


var madLib =
  '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
  randomAdj +
  ' wife.';

var madLibsAdjectivesMain = function (input) {
  // if input === "create" then myOutputValue = sentence + adjective 
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};