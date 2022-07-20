let showMeTheData = function() {
    var localStorageScore = JSON.parse(window.localStorage.getItem("highscoredata"));
   
    localStorageScore.forEach(function (newScore)  {
        var listedScore = document.createElement("li");
        listedScore.textContent= newScore.initials+ "->" +newScore.score

        var highScoreContent = document.getElementById("display");
        highScoreContent.appendChild(listedScore);
    });
    
}

showMeTheData();