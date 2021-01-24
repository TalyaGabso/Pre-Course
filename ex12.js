(function(){
    'use strict'
    const input = require('readline-sync');
    
    let str = input.question("Enter a sentence of your choice: ");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    for(let char of str){
        if(vowels.includes(char)){
            newStr += char.toUpperCase();
        }else{
            newStr += char;
        }
    }
    console.log(newStr);

})();