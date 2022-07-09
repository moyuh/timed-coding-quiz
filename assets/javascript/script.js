//declare variables
//score===time
//starting time 75 
let score = 5;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countDown = document.getElementById("timer");
let qs = document.getElementById("qs");
let as = document.getElementById("as");
let timer = document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
// let ans1 = document.createElement("li");
// let ans2 = document.createElement("li");
// let ans3 = document.createElement("li");
// let ans4 = document.createElement("li");
//question:answer object
const questions = {
    Question1:"Commonly used daya types do not include:",
    Answer1:["strings", "booleans","numbers", "alert"]
}

timer.textContent= "Time Left: " + score;
countDown.appendChild(timer);
quiz.setAttribute("style", "visibility:hidden;")
// hide start button start button will start time
start.addEventListener("click", function(){
    console.log("hello world");
    //clear page div .welcome cleared  -HTML DIV WELCOME and BUTTON ELEMENT 
    welcome.setAttribute("style", "visibility:hidden;")
    //countdown loop- cant go below 0
    let timerInterval = setInterval(function () {
    if (score > 0 ) { 
    score--;
    timer.textContent= "Time Left: " + score;
    countDown.appendChild(timer);
    } else {
        clearInterval(timerInterval); //endGame() here
    }

    },1000)
    quiz.setAttribute("style", "visibility:visible;");
    question.textContent= questions.Question1;
    qs.appendChild(question);
    for (let index = 0; index < 4; index++) {
    document.getElementById(index).textContent=questions.Answer1[index];
     // need to add event listener to each answer choice
     // if statements go here with booleans  
    }

      // question
        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15sec
    
    
});
    
    
    // question
        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15sec

//if all questions are answered else timer reaches 0 

//end game
    //put in initials for leaderboard
    //go back button or Clear highscores
    // welcome.setAttribute("style", "visibility:visible;")
//view highscores






//logic for questions 
