(function () {
    'use strict'
    const input = require('readline-sync');
    const readlineSync = require('readline-sync');
   
   
    const suites = ['(♣️)', '(♦️)', '(♥️)', '(♠️)'];
    class Card {

        constructor() {
            this.value = Math.floor(Math.random() * 12) + 1;
            this.suite = suites[Math.floor(Math.random() * 4)];
        }

        toString() {
            return this.value + this.suite;
        }
    }

    class CardGame {

        constructor() {
            this.cards = [];
            this.totalMoney = 50;
            this.playerName;
            this.gameOver = false;
            this.gameOverMessage;
        }

        startGame() {

            this.greting();
            while (!this.gameOver) {
                this.playRound();
                if(!this.gameOver) this.contiue();
            }
            this.say(this.gameOverMessage);
        }

        greting() {
            this.say('\\/\\/\\/The Game of WAR\\/\\/\\/');
            this.playerName = this.ask("Please enter your name: ");
            this.say(`Hello ${this.playerName}, welcome to WAR.\nYou just recived ${this.totalMoney} ILS for the WAR.`);
        }

        playRound() {

            var betAmount = this.ask(`Place your bet for the next round 1 to ${this.totalMoney}: `);
            betAmount
            if (isNaN(betAmount)) {
                this.gameOverMessage = `I said between 1 to ${this.totalMoney} and you placed a bet of ${betAmount}\nI can\'t take you seriously. Bye!`;
                this.gameOver = true;
                return;
            }
            if (betAmount <= 0) {
                this.gameOverMessage = `I said between 1 to ${this.totalMoney} and you placed a bet of ${betAmount}\nI can\'t take you seriously. Bye!`;
                this.gameOver = true;
                return;
            }
            if (betAmount > this.totalMoney) {
                this.gameOverMessage = `I said between 1 to ${this.totalMoney} and you placed a bet of ${betAmount}\nI can\'t take you seriously. Bye!`;
                this.gameOver = true;
                return;
            }

            var playerCard = this.shuffleCards();
            var computerCard = this.shuffleCards();
            this.say(`Your card is ${playerCard.toString()} and my card is ${computerCard.toString()}`);

            while (this.checkResult(playerCard, computerCard, parseInt(betAmount))==false){
                var playerCard = this.shuffleCards();
                var computerCard = this.shuffleCards();
                this.say(`Your card is ${playerCard.toString()} and my card is ${computerCard.toString()}`);
            }

            if (this.gameOver) { return; }

        }

        checkResult(playerCard, computerCard, betAmount) {
            // player wins
            if (computerCard.value < playerCard.value) {
                this.totalMoney += betAmount;
                this.say(`You Won ${betAmount} ILS! Now you have ${this.totalMoney} ILS`);
                return true;
            }
            // coumputer wins
            else if (computerCard.value > playerCard.value) {
                this.totalMoney -= betAmount;
                if (this.totalMoney <= 0) {
                    this.gameOverMessage = `You lost ${betAmount}, that leaves you with NOTHING.\n ${this.playerName} you are BROKE. Bye!`;
                    this.gameOver = true;

                } else {
                    this.say(`You lost ${betAmount}, that leaves you with ${this.totalMoney} ILS`);
                }
                return true;
            }
            else if (computerCard.value == playerCard.value) {
                this.say(`Its a tie, drow again`);
                return false;
            }
        }

        say(sentence) {
            console.log(sentence);
        }

        ask(question) {
            let answer = input.question(question);
            return answer;
        }

        shuffleCards() {
            return new Card();
        }

        contiue() {
            let answer = undefined;
            let isValid = false;
            while (!isValid)
            {
                answer = this.ask('What would you like to do?\n 1. I\'m feeling lucky, play another round.\n 2. Leave with my money.\n');
                isValid = answer == 1 || answer == 2;
            }
            if(answer == 2){
                this.gameOver = true;
                this.gameOverMessage = `Nice playing with you ${this.playerName}, see you next time!`
            }
        }

    }
    let game = new CardGame();
    game.startGame();
})();