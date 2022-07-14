//declare variables
//score===time
//starting time 75 @ 5 for practice
let score = 5;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countDown = document.getElementById("timer");
let qs = document.getElementById("qs");
let as = document.getElementById("as");
let timer = document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
let list = document.querySelector(".list");
var i= 0;

// let ans1 = document.createElement("li");
// let ans2 = document.createElement("li");
// let ans3 = document.createElement("li");
// let ans4 = document.createElement("li");
//question:answer object
const questions = [
    {
        Question:"Commonly used daya types do not include:",
    
        Answer:["strings", "booleans","numbers", "alert"]
    },
    {
        Question:"is coding cool",
        Answer:["blah", "iasdf","terw", "icoding"]
},
{
    Question:"A variable named inside a function is in which scope:",
    Answer:["global", "local","main", "sub"]
},
{
    Question:"interesting question",
    Answer:["interesting answer", "wrong answer","bad answer", "funny answer"]
},
 {
    Question:"insert question",
    Answer:["insert here", "insert there","insert everywhere", "insert lols;"]
},
]

timer.textContent= "Time Left: " + score;
countDown.appendChild(timer);
quiz.setAttribute("style", "display:none;")
// hide start button start button will start time
start.addEventListener("click", function(){
    console.log("hello world");
    //clear page div .welcome cleared  -HTML DIV WELCOME and BUTTON ELEMENT 
    welcome.setAttribute("style", "display:none;")
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
    while (i<questions.length) {
        qs.textContent=questions[i].Question;
        for (let b = 0; b < questions[i].Answer.length; b++) { 
            document.getElementById(i).textContent=questions[i].Answer[b]
            console.log(questions[i].Answer[b])
        }
        console.log(questions[i].Question);
    //     list.addEventListener("click", function()
    //     )
        i++
     }
    


    // for (let index = 0; index < 4; index++) {
    // document.getElementById(index).textContent=questions.Answer1[index];
    //  // need to add event listener to each answer choice
    //  // if statements go here with booleans  
    // }

      // question
        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15sec
    
    
});
    
    

//if all questions are answered else timer reaches 0 

//end game
    //put in initials for leaderboard
    //go back button or Clear highscores
    // welcome.setAttribute("style", "visibility:visible;")
//view highscores





//logic for questions 
