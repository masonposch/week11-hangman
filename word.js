//*constructor
//word.js should contain all of the methods 
//which will check the letters guessed versus the random word selected.


//GLOBAL VARIABLES

var inquirer = require('inquirer');

var numberOfGuesses = 10;


/////////////////////////////////////////////////////////////////////////////////////////////////
//TURN THE WORD INTO AN ARRAY
/////////////////////////////////////////////////////////////////////////////////////////////////


//STORES THE RANDOM WORD
var word = require('./game.js');

var gameWord = word.randomWord();

console.log(gameWord);

var gameWord = gameWord.replace(/[^a-zA-Z0-9]/g,'_');

//Turns random word into an array
var gameWord = gameWord.split('');

exports.gameWord = gameWord;

console.log(gameWord);

guess();


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////
//INQUIRE USER INPUT
/////////////////////////////////////////////////////////////////////////////////////////////////



function guess(){

	inquirer.prompt([

		{
				type: "input",
				message: "Please guess a letter",
				name: "guess"
		}

	]).then(function(user){

		for(var i=0; i < gameWord.length; i++){
			if(user.guess === gameWord[i]){
				console.log('good guess');
				numberOfGuesses--;
				//Push correct user guess into an array within letter.js
				console.log(numberOfGuesses);
				if(numberOfGuesses > 0){
					guess();
				}
				else {
					console.log("Sorry, game over.");
					return false;
				}
			}
		}

	});// end THEN promise

}//End guess function




// function wrongGuess(){
// 	return
// 	console.log("Sorry, that is incorrect");
// 	numberOfGuesses--;
// 	console.log(numberOfGuesses);
// 	guess();

// }//End wrongGuess function






