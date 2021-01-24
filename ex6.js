(function(){
    'use strict'
    const readlineSync = require('readline-sync');

    let num = readlineSync.questionInt('Please choose a number larger than 10: ');
    while(num <=10){
        num = readlineSync.questionInt('Please choose a number LARGER than 10: ');
        
        if (num > 10){
            console.log('Thank You');
            break;
        }        
    }
})();