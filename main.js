//main.js will contain the logic of your app. 
//Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.



//------------------------------------------------------------------------------------------------------
//global variables

var inquirer = require('inquirer');

var word = require('./game.js');

var number = 10;


//------------------------------------------------------------------------------------------------------


//FOR REAL Runs the function from game.js that chooses the random word
var test = word.randomWord();

console.log(test);






