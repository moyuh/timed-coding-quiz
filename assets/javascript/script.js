//declare variables
//score===time
//starting time 75 @ 5 for practice
let score = 20;
let start = document.querySelector(".start");
let welcome = document.querySelector(".welcome");
let countDown = document.getElementById("timer");
// let qs = document.getElementById("qs");
// let as = document.getElementById("as");
let timer = document.createElement("p");
let quiz = document.getElementById("quiz");
let question = document.createElement("p");
let testing = document.querySelector(".testing");
let i= 0;


// let ans1 = document.createElement("li");
// let ans2 = document.createElement("li");
// let ans3 = document.createElement("li");
// let ans4 = document.createElement("li");
//question:answer object
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

    },1000);


    quiz.setAttribute("style", "visibility:visible;");

    });

let questionAnswer = function() { 
    testing.textContent="";
    qs.textContent=questions[i].Question;
        for (let b = 0; b < questions[i].Answer.length; b++) { 
            let list = document.createElement("li");
            list.textContent=questions[i].Answer[b];
            testing.append(list);  
        
    //issues are arising here:
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
            console.log("aye");
           questionAnswer();
           } else {
            console.log(":(");
            alert("Wrong Answer:Decrease by 15 sec")
            score = score - 15
            questionAnswer();
           }

         })};
    //     )
    i++
};
    
questionAnswer();

// document.querySelector().addEventListener("click", function(userSelection) {
//     if(userSelection == true){
//      console.log("aye");
//     } else {
//      console.log(":(");
//     }
        
//      } 
        
//     )

    // for (let index = 0; index < 4; index++) {
    // document.getElementById(index).textContent=questions.Answer1[index];
    //  // need to add event listener to each answer choice
    //  // if statements go here with booleans  
    // }

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
