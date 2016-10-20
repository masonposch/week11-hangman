//*constructor
//word.js should contain all of the methods 
//which will check the letters guessed versus the random word selected.


//psuedo code:
		//Turn word into an array
		//create constructor that checks user guess against the array
		//export results of constructor to letter.js

		//create new object with constructor based off of the random word chosen

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

//Turns random word into an array
var gameWord = gameWord.split('');

console.log(gameWord);



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
					console.log('Nice game');
					return false;
				}
			} 
			// else if (user.guess !== gameWord[i]){
			// 	console.log('you suck');
			// 	numberOfGuesses--;
			// 	console.log(numberOfGuesses);
			// 	if(numberOfGuesses > 0){
			// 		guess();
			// 	}
			// }
		}

	});// end THEN promise

}//End guess function

guess();

