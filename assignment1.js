(function(){
    'use strict'
    const readlineSync = require('readline-sync');
    let answersSum = 0;

    console.log('#######################')
    console.log('Hello, let\'s discover what pet you should adopt!!')
    console.log('#######################')

    const questionsList = [

        {   
            answers: ['With the family - spouse and children', 'My parents are on board', 'My partner and I', 'Just me'],
            answerWieght: [1,1,1,1],
            question :  'Will you be adopting the pet by yourself or with someone?',
            resultIndex: undefined,
            result: 0,
        },

        {   
            answers  :['All day long\!', 'Majority of the time', 'After work hours', 'I don\’t have much time to spare'],
            answerWieght: [4,3,2,1],
            question : 'How much time can you dedicate to your pet each day?',
            resultIndex: undefined            ,
            result: 0,
         },

        {   answers  :['Money isn\’t an issue', 'All saved up', 'I started saving up', 'A pet isn\’t THAT expensive'],
            answerWieght:[4,4,2,1],
            question : 'Can you afford to own an animal?',
            resultIndex: undefined,
            result: 0,
        },

        {   answers  :['A best friend', 'Learn how to take care of others', 'Someone to hang with', 'Add content to my Instagram feed'],
            question : 'What do you hope to get out of the relationship?',
            answerWieght:[4,3,2,1],
            resultIndex: undefined,
            result: 0,
        },

        {  
            
            answers  :['I live in  small house with a backyard', 'I live in specious apartment', 'I got a cozy place', 'I live in an awesome apartment with my 2 roommates'],
            question : 'What is your housing situation?',
            answerWieght: [4,3,2,1],
            resultIndex: undefined,
            result: 0,
        },
    ];

    
    questionsList.forEach((element) => {        
       element.resultIndex = readlineSync.keyInSelect(element.answers,element.question);
       element.result = element.answerWieght[element.resultIndex];
       answersSum  +=  element.result;
    });
    if(answersSum <= 6){
        console.log('~~~~~~~~Quiz Results~~~~~~~~');
        console.log('I believe a couple of plants will be a great start for you!');
    }
    if(answersSum > 6 && answersSum < 10){
        console.log('~~~~~~~~Quiz Results~~~~~~~~');
        console.log('You should start with something low maintenance for now, like a hamster or a fish.');
    }
    if(answersSum >= 10 && answersSum < 14){
        console.log('~~~~~~~~Quiz Results~~~~~~~~');
        console.log('You are ready for this commitment! I will recommend a Cat or Small dog.');
    }
    if(answersSum >= 14){
        console.log('~~~~~~~~Quiz Results~~~~~~~~');
        console.log('It looks like you are SO ready to get a new best friend.');
    }

})();