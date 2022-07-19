//declare variables
//score===time
//starting time 75 @ 5 for practice
let time = 15;
let points = 0;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countDown = document.getElementById("timer");
let hs = document.querySelector(".high-score");
let timer = document.createElement("p");
let scoreSheet= document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
let testing = document.querySelector(".testing");
let highScoreForm = document.getElementById("high-score-form");
let initialsInput = document.getElementById("initials");
let submit = document.getElementById("submit");
let i= 0;
let scoreList = document.createElement("li");

//question:answer:correctanswer object
const questions = [
    {
        Question:"Commonly used data types do not include:",
        Answer:["strings", "booleans","numbers", "alert"],
        correctAnswer: "alert",
    },

    {
        Question:"If you will be using a variable throughout your code what scope should it be on?:",
        Answer:["global", "mouthwash","terminal", "local"],
        correctAnswer: "global",
    },

    {   Question: "How to you make an HTML Element using JavaScript?:",
        Answer:["you can't", "document.createElement()", "document.makeElement()", "document.textContent"],
        correctAnswer: "document.createElement()",
        
    },
    {
        Question:"What does the following syntax do if this was already a defined function definedFunction()",
        Answer:["it breaks the code", "resets the function","it calls the function", "it causes headaches"],
        correctAnswer: "it calls the function",
    },
    {
        Question:"A variable named inside a function is in which scope:",
        Answer:["global", "local","main", "sub"],
        correctAnswer: "local",
    },
];


timer.textContent= "Time Left: " + time;
scoreSheet.textContent= "Your score: " + points;
countDown.append(timer);
quiz.append(scoreSheet);
quiz.setAttribute("style", "display:none;");
highScoreForm.setAttribute("style", "display:none;");

// hide start button start button will start time
start.addEventListener("click", function(){
    //clear page div .welcome cleared  -HTML DIV WELCOME and BUTTON ELEMENT 
    welcome.setAttribute("style", "display:none;")
    quiz.setAttribute("style", "visibility:visible;");
    questionAnswer();

    });

    //countdown loop- cant go below 0
let timerInterval = start.addEventListener("click", function() {
    clearInterval(timerInterval);
    setInterval(function () {
    if (time > 0 ) { 
    time--;
    timer.textContent= "Time Left: " + time;
    countDown.appendChild(timer);
    }else {
        //endGame() here
        endGame();
        
    }
    },1000); });

//logic for questions 
let questionAnswer = function() { 
    testing.textContent=" ";
    if(i != questions.length) 
    {qs.textContent=questions[i].Question;
        for (let b = 0; b < questions[i].Answer.length; b++) { 
            let list = document.createElement("li");
            list.textContent=questions[i].Answer[b];
            testing.append(list);  
        
   // question and answer based on user input
    list.addEventListener("click", function(event){
        let pick = event.target; 
        let q1a = questions[0].Answer[3];
        let q2a = questions[1].Answer[0];
        let q3a = questions[2].Answer[1]; 
        let q4a = questions[3].Answer[2];
        let q5a = questions[4].Answer[1];

        let absoluteAns = questions[0].correctAnswer;
        let absoluteAns2 = questions[1].correctAnswer;
        let absoluteAns3 = questions[2].correctAnswer;
        let absoluteAns4 = questions[3].correctAnswer;
        let absoluteAns5 = questions[4].correctAnswer;

        q1a==absoluteAns;
        q2a==absoluteAns2;
        q3a==absoluteAns3;
        q4a==absoluteAns4;
        q5a==absoluteAns5;

        if(pick.textContent == absoluteAns || pick.textContent == absoluteAns2 || pick.textContent == absoluteAns3 || pick.textContent == absoluteAns4 || pick.textContent == absoluteAns5){
           //if user picks correctly it will increase score and show next question
           points = points + 2;
           scoreSheet.textContent= "Your score: " + points;
           questionAnswer();
           } else {
            //if user picks incorrectly time decreases by 2sec
            alert("Wrong Answer: Time will decrease by 2 seconds");
            time = time - 2;
            points;
            scoreSheet.textContent= "Your score: " + points;
            questionAnswer();
           }
    
        })}
        i++} else{
            endGame();  
        }};

//end game
let endGame = function() {
    clearInterval(timerInterval);
    //put in initials for leaderboard
    highScoreForm.setAttribute("style", "display:block;");
    qs.textContent=" ";
    as.textContent=" ";
    timer.textContent=" ";
    
}

submit.addEventListener("click", function(event) {
    window.location.href = "highscore.html";
    saveHighScore();
 }
 ); 

//view highscores
function saveHighScore() {
    // get value of input box
    var initials = initialsInput.value.trim();
  
    // make sure user input a value
    if (initials !== " ") {
      // get saved scores from localstorage, or is empty for first timer
      var highscoredata =
        JSON.parse(localStorage.getItem("highscoredata")) || [];
      var currentScore = {
        score: points,
        initials: initials,
      } 
      // save to localstorage
      highscoredata.push(currentScore);
      window.localStorage.setItem("highScore", JSON.stringify(highscoredata));

      scoreList.textContent = "Score: "+ currentScore.points+ " initials: " + currentScore.initials
    } else { 
        alert("Please add initials!!");
    }
    // either get scores from localstorage or set to empty array
    
      // create li tag for each high score
      
      
      var highScoreList = document.getElementById("high-score-list");
      highScoreList.textContent= "High Scores:"
      highScoreList.appendChild(scoreList);
    
  };
  
hs.addEventListener("click", function(){
    window.location.href = "highscore.html";
    saveHighScore();
})






