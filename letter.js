//*constructor
//letter.js should control 
//whether or not a letter appears as a "_" or as itself on-screen.


//Runs the function from game.js that chooses the random word
// function letterGuess(word){
// 	this.correct = function(){
// 		var splitWord = word.split('');
// 		for(var i=0; i<splitWord.length; i++){
// 			if()
// 		}
// 	}
// }


//STORES THE RANDOM WORD
var word = require('./game.js');

var test = word.randomWord();

//Turns random word into an array
var fda = test.split('');

console.log(fda);
