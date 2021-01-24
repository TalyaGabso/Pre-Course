(function(){
    'use strict'
    const input = require('readline-sync');
    
    let str = input.question("Enter a sentence of your choice: ");
    function longestWord(string){
        string = string.match(/[a-zA-Z]+/g);
        string.sort(function(a,b){return b.length - a.length;});
        return string.shift();
    }
    console.log('\"'+longestWord(str)+'\"');

})();