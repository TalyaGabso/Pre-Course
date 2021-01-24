(function(){
    'use strict'
    let x = Math.floor(Math.random()*50+1);
    findMinMax(x);
    function findMinMax(number){
        let arr = new Array;
        while(arr.length<number){
            arr.push(Math.floor(Math.random()*50+1));
        }
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log('min is '+min+'\n'+'max is '+max);
    }
    
})();