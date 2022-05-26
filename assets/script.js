var score = 0;
var availableQuestions = [];
var questionCounter = 0;
var allQuestions = [
    {
        question: 'commonly used data types DO Not include:',
        choices: 'strings',
        choices: 'booleans',
        choices: 'alerts',
        choices: 'numbers',
        answer: 1,
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___.',
        choices: 'quotes',
        choices: 'curly braces',
        choices: 'parenthesis',
        choices: 'square brackets',
        answer: 2,
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choices: 'numbers and strings',
        choices: 'other arrays',
        choices: 'booleans',
        choices: 'all of the above',
        answer: 3,
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choices: 'commas ',
        choices: 'curly brackets',
        choices: 'quotes',
        choices: 'parenthesis',
        answer: 4,
    },
    {
        question: 'Avery useful tool used during development and debugging.for printing content to the debugger is: ',
        choices: 'JavaScript',
        choices: 'terminal/bash',
        choices: 'for loops',
        choices: 'console.log',
        answer: '5',
    }
    
]
var currentQuestion = {};
var time =90;
var runningTimer;
var username ="";
var finalScore;
var correctAnswer = true; 

// Constants
const MAX_QUESTIONS = 5;
const startButton = document.getElementById("startButton");
const container = document.getElementById("container");
const question = document.getElementById("question");
// const answerButtons = document.getElementById("answer-box");
const countDown = document.getElementById("timerBox");
const highScores = document.getElementById("highScoresButton");
const questionBox = document.getElementById("questionBox");

//document.getElementById('btn1').innerText = allQuestions[0].choice1

startButton.addEventListener("click", startGame);
highScoresButton.addEventListener("click", highScores);

//function to start the game 
function startGame(){
    // classList in order to change the css in this case getting the "hide" elements 
    startButton.classList.add("hide");
    highScores.classList.add("hide");
    questionBox.classList.remove("hide");

    questionCounter = 0;
    score = 0;
    availableQuestions = [...allQuestions];
    console.log(availableQuestions);
    newQuestion();   
};

function newQuestion(){
    questionCounter++;
    const choiceIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(choiceIndex);
    currentQuestion = availableQuestions[choiceIndex];
    question.innerText = currentQuestion.question; 
    console.log(question.innerText);

    allQuestions.forEach(function(option) {
        const answers = option.choices;
       // const answers = document.createElement('button');
        //answers.innerText = availableQuestions;
        console.log(answers);
        // query selector to call the class from the html 
        const answerLi = document.querySelector(".btn-grid");
    // i is representing or calling the function 
    for(let i = 0; i < 5; i++){
            console.log(i);

    }
    
        
        





        

        
        
        
    
    });
    correctAnswer = true; 

}; 



















