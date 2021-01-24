(function(){
    'use strict'
    const input = require('readline-sync');

    let userStr = input.question("Please enter a sentence of your choice: ");
    function changeStr(str, find, change){
        var i =0;
        for(i=0; i<str.length; i++){
            str=str.replace(find,change);
        }
        return str;
    }
    console.log(changeStr(userStr,' ','*'));
})();