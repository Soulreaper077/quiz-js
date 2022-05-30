
var score = 0;
var availableQuestions = [];
var questionCounter = 0;
var currentQuestion = {};

var runningTimer;
var username ="";
var finalScore;
var correctAnswer = false; 
var allQuestions = [
    {
        question: 'commonly used data types DO Not include:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 3,
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___.',
        choice1: 'quotes',
        choice2: 'curly braces',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 2,
    },
    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choice1: 'numbers and strings',
        choice2: 'other arrays',
        choice3: 'booleans',
        choice4: 'all of the above',
        answer: 4,
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        choice1: 'commas ',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis',
        answer: 3,
    },
    {
        question: 'Avery useful tool used during development and debugging.for printing content to the debugger is: ',
        choice1: 'JavaScript',
        choice2: 'terminal/bash',
        choice3: 'for loops',
        choice4: 'console.log',
        answer: '4',
    }
    
]
const questionLimit = 5;
const timerEl = document.getElementById("timer");
const timeTick = document.getElementById("time-down");
const startButton = document.getElementById("startButton");
const container = document.getElementsByClassName("container");
const question = document.getElementById("question");
const ansButtons = Array.from(document.getElementsByClassName("btn"));
// console.log(ansButtons);
const countDown = document.getElementById("timerBox");
const highScores = document.getElementById("highScoresButton");
const highScoresList = document.getElementById("highScoresList");
const urScore = document.getElementById("urScore");
const logScore = document.getElementById("logScore");
const questionBox = document.getElementById("questionBox");
//document.getElementById('btn1').innerText = allQuestions[0].choice1
startButton.addEventListener("click", startGame);
highScoresButton.addEventListener("click", highScores);
// function for countdown timer 
var time = 60; // starting the countdown at 1 minute 
function countdown() {
var downloadTimer = setInterval(function(){
    if(time <= 0){ // if statement for time being time being finished 
    clearInterval(downloadTimer); // clear interval stops the set interval function 
    document.getElementById("time-down").innerHTML = "Done!"; // if no time left then it will be finished
    } else {
    document.getElementById("time-down").innerHTML = time + ""; // if there is time it will display on countdown
    }
    time -= 1;
}, 1000); // delayed by 1 second after the function is called 
}
//function to start the game 
function startGame(){
    // classList in order to change the css in this case getting the "hide" elements 
    startButton.classList.add("hide"); // hides the start btn 
    highScores.classList.add("hide"); // hides high score btn 
    //container.classList.remove("hide");
    questionBox.classList.remove("hide"); //remove to display the questions box and answers 
    questionCounter = 0;
    score = 0;
    availableQuestions = [...allQuestions]; // spread operator to display questions from array 
    console.log(availableQuestions);
    newQuestion();   // return new question  
    countdown();
};
// generate a new question for every turn 
function newQuestion(){
    questionCounter++;
    const choiceIndex = Math.floor(Math.random() * availableQuestions.length);
    //pulling the random question from the questions array 
    currentQuestion = availableQuestions[choiceIndex];
    console.log(currentQuestion);
    // change the text in the question box to display array question 
    question.innerText = currentQuestion.question;   
// getting the answer buttons a,b,c,d to display the correct questions 
    ansButtons.forEach(function(choice) {
        //getting the number dataset from the answer btn 
        const number = choice.dataset["number"];
        console.log(number);
        //change the text to display answers for each btn 
        choice.innerText = currentQuestion["choice" + number];
        console.log(choice);
    });
    availableQuestions.splice(choiceIndex, 1) // splice the choice index so that the questions wont repeat themselves 
    correctAnswer = true; 
}; 
ansButtons.forEach(choice => { // for each to get all the choices 
    choice.addEventListener("click", e => { // adding an event listener to each of the 4 choices 
        //alert( "clicked me");
        console.log(e.target);
    if(!correctAnswer) return; 
    correctAnswer = false;
    const selectChoice = e.target; // makes sure that the constant selectChoice is equal the the targeted event listener 
    //console.log(e.target); 
    const selectAnswer = selectChoice.dataset["number"]; // const selectAnswer will equal that of the dataset number chosen 
    console.log(selectAnswer, currentQuestion.answer);
        // trying to make the default of answers incorrect and switching to correct if choosing the right one 
    let setAns = ""; // setting the value of setAns to nothing 
    if (selectAnswer == currentQuestion.answer) {
        setAns = "correct!"; // if the value equals to that of the correct answer is will display correct 
    }else {
        setAns = "incorrect!"; // else if wrong answer display incorrect 
    };
    if(setAns === "correct!") {
        incrementScore(score)
    };
    console.log(setAns);
    setTimeout(() => { // setTimeout function calls the function after x amount of milliseconds 
    selectChoice.parentElement.classList.add(setAns);
    newQuestion(); // generates a new question after being answered 
    }, 100) // sets the set timeout to 100 millisecond wait 
    });
    });
// scores section 
    function incrementScore(num) { // called on function to increment the score by 1 in answered correctly 
        score ++; // adds 1 to the score board if the question was correct 
        logScore.innerText = score; // changes inner text of logScore element 
        console.log(logScore);
    }; 

    function productTime() {
        if (setAns === "correct!") {
            
        }
    }
    function resetScore() {
        localStorage.clear();
    };

    var finalScore = function() {
        score = (input.value);
        logScore.push(score);
        localStorage.setItem("logScore", JSON.stringify(logScore));
    };
/*
    highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">$(score.name) - $(score.score)<li>`
    })

    // game over function 
    function endGame() {
        questionBox.remove();

    }
*/

// start game function 
// startGame();


















