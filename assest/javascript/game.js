//declare variables
var ruby;
var diamond;
var gold;
var jade;
var matchScore;
var clicks;
var userScore = 0;
var wins = 0;
var losses = 0;
$(document).ready(function(){
    //btn for when ruby is clicked
    $("#ruby").on("click", function(){
        userScore += ruby;
        $("#gameNumber").text(userScore);
        victory();
    });
    //btn for when diamond is clicked update the current score update text and check if game is over
    $("#diamond").on("click",function(){
        userScore += diamond;
        $("#gameNumber").text(userScore);
        victory();  
    });
    //btn whengold is clicked
    $("#gold").on("click", function(){
        userScore += gold;
        $("#gameNumber").text(userScore);
        victory();   
    });
    //btn when jade is clicked
    $("#jade").on("click", function(){
        userScore += jade;
        $("#gameNumber").text(userScore);
        victory();
    })
    //function for start of game
    function startGame(){
        userScore = 0;
        $("gameNumber").text(userScore);
        matchScore = Math.floor((Math.random() * 101));
        $("#numberWins").text(wins);
        $("#numberLost").text(losses);
        $("#matchScore").text(matchScore);
        ruby = Math.floor((Math.random()*(6 - 1)) + 1);
        diamond = Math.floor((Math.random()*(11 - 6)) + 6);
        gold = Math.floor((Math.random()*(16 - 11)) + 11);
        jade = Math.floor((Math.random()*(21 - 16)) + 16);
    }
    // function for end of game
    function victory(){
        console.log("in victory");
        
        if(matchScore === userScore){
            wins++;
            startGame();
        
            
        }else if(matchScore < userScore){
            losses++;
            startGame();
        }
        else{
            clicks++
        }
        
    }

    startGame();
});
