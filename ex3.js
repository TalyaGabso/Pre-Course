(function(){
'use strict';
const readlineSync = require('readline-sync');

function getNumber(num){
    let answer ={
       0: 'Zero',
       1: 'One',
       2: 'Two',
       3: 'Three',
       4: 'Four',
       5: 'Five',
       6: 'Six',
       7: 'Seven',
       8: 'Eight',
       9: 'Nine'
   };
   if(num >= 0 && num <=9 ){
       return answer[num];
   }
   else{
       return 'Invalid input';
   }
   
};

let num = readlineSync.keyIn("Enter a number between 0-9: " ,{limit: '$<0-9>'});
console.log(getNumber(num));
})();
