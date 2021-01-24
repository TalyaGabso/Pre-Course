(function(){
    const input = require('readline-sync');

    let num = input.question("Please enter a number: ");
    while (num%1 != 0 || num < 0|| num == NaN){
        num = input.question("Please enter a VALID number: ");
    }
    for(i = 1; i <= num; i++){
        if(i==1 || i==0)
            continue;
        isPrime = 1;
        for(x=2; x<=i/2; ++x){
            if(i%x == 0){
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1)
        console.log(i + " ");
    }
})();