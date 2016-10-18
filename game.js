//Your game.js file will randomly select a word for the player.


var randomWords = require('random-words');


var randomWord = function(){
 console.log(randomWords());
}

module.exports.randomWord = randomWord;