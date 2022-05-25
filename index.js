// alert("Simon is a game of short-term memory skill. It creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user messes up sequence, the game is over. ENJOY!")


var buttonColors = ["green","red","yellow","blue"];
var gamePattern = []; 
var userPattern=[];
var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var fail = new Audio("sounds/wrong.mp3");
var level = 0;

function nextSequence(){
    userPattern = [];
    level++;
    $("h1").text("Level "+level);

    var ran = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[ran];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);    
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("button-animation");
    setTimeout(function(){
        $("#"+currentColor).removeClass("button-animation");
    },100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }


$(document).keypress(nextSequence);



$(".square").click(function(){
    var userSelectedColor = $(this).attr("id");
    animatePress(userSelectedColor);
    userPattern.push(userSelectedColor);
    playSound(userSelectedColor);
    if(gamePattern[userPattern.length-1]===userPattern[userPattern.length-1]){
        if(gamePattern.length===userPattern.length){
                    
            setTimeout(function(){
                nextSequence();
            },700);
                      
        }
    }
    else{
        fail.play();
        $("body").css("background-color","red");
        $("h1").css("color","azure");
        $("h1").text("GameOver, Your score: "+level+". Press any key to restart!");
       
            $(document).keypress(function(){
                location.reload();
            }); 
    }
});