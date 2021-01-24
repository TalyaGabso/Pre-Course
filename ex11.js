(function(){
    'use strict'
    const input = require('readline-sync');

    const str = input.question("Enter a phrase to check if it is a palindrome: ");
    function isPalindrome(line){
        line = line.replace(/\W/g,'');
        line = line.toLowerCase();
        
        return line === line.split('').reverse().join('');
    }
    if(isPalindrome(str) === true){
        console.log('\"'+str+'\"', 'is a palindrom!');
    }else{
        console.log('\"'+str+'\"', 'is NOT a palindrome.')
    }

})();