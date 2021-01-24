(function(){
    'use strict'
    const input = require('readline-sync');

    let num = input.question("Please enter a positive number: ");

    function getFactorial(num){
        if (num === 0 || num === 1){
            return 1;
        }
        for (let x = num -1; x>=1; x--){
            num *= x;
        }
        return num;
    }  
    if(num < 0 || num % 1 != 0){
       return console.log('Invalid Input');
    }else{
        console.log(num + '!', '=',getFactorial(num));
    }
})();