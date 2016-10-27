//*constructor
//word.js should contain all of the methods 
//which will check the letters guessed versus the random word selected.


//GLOBAL VARIABLES

var inquirer = require('inquirer');

var numberOfGuesses = 10;

var guessed = [];


/////////////////////////////////////////////////////////////////////////////////////////////////
////STORES THE RANDOM WORD AS A GLOBAL VARIABLE
/////////////////////////////////////////////////////////////////////////////////////////////////


var word = require('./letter.js');

var gameWord = word.RandomWord();

var test = new word.RandomWord();

var gameWordBlanks = test.blanked();

var gameWordArray = test.array();

console.log(gameWordArray);

console.log(gameWordBlanks);


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

getUserGuess();

/////////////////////////////////////////////////////////////////////////////////////////////////
////STORES THE RANDOM WORD AS A GLOBAL VARIABLE
/////////////////////////////////////////////////////////////////////////////////////////////////

function getUserGuess(){

	inquirer.prompt([

		{
			type: "input",
			message: "Guess a letter",
			name: "question"
		}

	]).then(function(user){

		if(numberOfGuesses <= 0){
			return;
		}

		numberOfGuesses--;
		console.log(numberOfGuesses);

		guessed.push(user.question);
		console.log(guessed);

		for(var i=0; i < gameWordArray.length; i++){
			
			if(user.question === gameWordArray[i]){
				console.log("Yes");
			}

		}
		getUserGuess();
	});

}



