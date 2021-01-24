(function () {
    'use strict';
    const input = require('readline-sync');
    const readlineSync = require('readline-sync');
    const cuisine = ['Pasta', 'Sushi', 'Burger'];

    function getRestaurant(place) {
        let restaurant = {
            0: '\"Pasta Mia\"',
            1: '\"Sushi Bar Bazel\"',
            2: '\"Benz Brothers\"',
            [-1]: 'Better luck next time.',
        }
        return restaurant[place];
    }
    
    function getKosher(place) {
        let restaurant = {
            0: '\"Panika\"',
            1: '\"Kanki Sushi Wine Bar\"',
            2: '\"Memphis\"',
            [-1]: 'Better luck next time.',
        }
        return restaurant[place];
    }

    function getMehadrinKosher(place) {
        let restaurant = {
            0: 'ֿֿ\"Soupizza\"',
            1: '\"Best Sushi\"',
            2: '\"Burger Bar 39\"',
            [-1]: 'Better luck next time.',
        }
        return restaurant[place];
    }

    let partyOf = input.question("How many people are going with? ");
    while (partyOf < 0 || partyOf % 1 != 0 ){
        partyOf = input.question("How many people are going with? ");
    }

    let isKosher = readlineSync.keyInYNStrict('Should it be Kosher? '); 
    if (isKosher) {
        let isLemehadrin = readlineSync.keyInYNStrict('Should it be Kashrut Lemehadrin? ')
        if (isLemehadrin) {
            let index = readlineSync.keyInSelect(cuisine, 'what kind of food do you want? ');
            console.log(getMehadrinKosher(index));
        }
        else {
            let index = readlineSync.keyInSelect(cuisine, 'what kind of food do you want? ');
            console.log(getKosher(index));
        }
    }
    else{
        let index = readlineSync.keyInSelect(cuisine, 'what kind of food do you want? ');
        console.log(getRestaurant(index));
    }

})();