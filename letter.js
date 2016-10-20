//*constructor
//letter.js should control 
//whether or not a letter appears as a "_" or as itself on-screen.


//STORES THE RANDOM WORD
var word = require('./game.js');

var gameWord = word.randomWord();

console.log(gameWord);

//Turns random word into an array
var gameWord = gameWord.split('');

console.log(gameWord);
































//Runs the function from game.js that chooses the random word
// function letterGuess(word){
// 	this.correct = function(){
// 		var splitWord = word.split('');
// 		for(var i=0; i<splitWord.length; i++){
// 			if()
// 		}
// 	}
// }