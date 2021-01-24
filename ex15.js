(function(){
    'use strict'
    var arr1=['Hello'];
    var arr2=['AppleSeeds','Bootcamp'];
    joinedArray(arr1,arr2);
    function joinedArray(string1,string2){
        let mainArray= new Array;
        mainArray=string1.concat(string2);
        console.log(mainArray)
    }
})();