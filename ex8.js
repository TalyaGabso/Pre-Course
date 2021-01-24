(function(){
    'use strict'
    let isBoom = 7;

    for(let x = 1; x <= 100; x++){
        if ( x % isBoom == 0 || x.toString().includes(isBoom)){
            console.log('BOOM');
        }else{
            console.log(x);
        }
    }

})();