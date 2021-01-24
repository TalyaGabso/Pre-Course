(function(){
    'use strict'
    const input = require('readline-sync');    

    const vocabulary = ['practice','conduct','property','theory','elaborate',
    'neighborhood','manufacturing','different','important','picture',
    'paragraph','transportation','argument','advertisement','mountain']

    class HangManGame {
        constructor(){
            this.lifeCounter=10;
            this.storeGuesses=[];
        }
        say(something){
            console.log(something);
        }
        playGame(){

            var word=vocabulary[Math.floor(Math.random()*vocabulary.length)];
            word=word.toUpperCase();
            var symbolsWord=Array(word.length).fill(' _ ');
            var remainingLetters=word.length;

            while(this.lifeCounter>0 &&remainingLetters>0){
                this.say(`You have ${this.lifeCounter} guesses\nThe word is:\n${symbolsWord}`); 
                var guess = input.question('What is your guess? ');
                guess=guess.toUpperCase();
                if (!/[a-zA-Z]/.test(guess)){
                    this.say('Please enter a letter.');
                    this.lifeCounter+= 1;
                }
                else if(guess.length!==1){
                    this.say('Please enter ONE letter.');
                    this.lifeCounter+= 1;
                }
                else if(this.storeGuesses.includes(guess)){
                    this.say('Please enter a letter you did not try to guess already.');
                    this.lifeCounter+= 1;
                }else{
                    this.storeGuesses.unshift(guess);   
                }
                if(word.includes(guess)){
                    for(let index=0 ; index< word.length ; index++){
                        if(word[index]===guess){
                            symbolsWord[index]=guess;
                            remainingLetters--;
                        } 
                    }
                }else{ 
                    this.lifeCounter -= 1;
                }
            }
            if(this.lifeCounter==0){
                return this.say(`That was your last attempt to guess the word!\nThe word is ${word}\nBetter luck next time!`);
            } else if(remainingLetters==0){
                return this.say(`The word is ${word}\nYou guessed it!`);
            }
        }
    }
    let game=new HangManGame();
    game.playGame();
})();