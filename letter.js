//*constructor
//letter.js should control 
//whether or not a letter appears as a "_" or as itself on-screen.


var word = require('./game.js');

var gameWord = word.randomWord();

var gameWordArray;




//DO LETTER.JS

//THEN WORD.JS

//THEN MAIN.JS



function RandomWord(){
	this.blanked = function(){
		var gameWordHidden = [];
		var gameWordArray = gameWord.split('');
		console.log(gameWordArray);
		for(var i=0; i < gameWordArray.length; i++){
			gameWordHidden.push('_ ');
			console.log(gameWordHidden);
		}
	},

	this.array = function(){
		var gameWordArray = gameWord.split('');
		console.log(gameWordArray);
	}
}

var test = new RandomWord();

test.blanked();

