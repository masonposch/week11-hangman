//*constructor
//letter.js should control 
//whether or not a letter appears as a "_" or as itself on-screen.


var word = require('./game.js');

var gameWord = word.randomWord();

var gameWordArray;




//DO LETTER.JS

//THEN WORD.JS

//THEN MAIN.JS



exports.RandomWord = function(){
	this.blanked = function(){
		var gameWordHidden = [];
		var gameWordArray = gameWord.split('');
		// return gameWordArray;
		for(var i=0; i < gameWordArray.length; i++){
			gameWordHidden.push('_ ');
		}
		return gameWordHidden;
	},

	this.array = function(){
		var gameWordArray = gameWord.split('');
		return gameWordArray;
	}
}

var test = new exports.RandomWord();

test.blanked();

