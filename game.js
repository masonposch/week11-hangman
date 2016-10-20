//Your game.js file will randomly select a word for the player.


var randomWords = require('random-words');


exports.randomWord = function(){
 	var test = randomWords();
 	// console.log(test);
 	return test;
}

// module.exports.randomWord = randomWord;