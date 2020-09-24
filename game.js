var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started= false;
var level = 0;


$(document).keypress(function(){
  if(!started){
    $('#level.title').text('Level'+level);
    nextSequence();
    started=true;
  }
});

function playSound(color){
  var aud = new Audio("sounds/"+color+'.mp3');
  aud.play();
}

function animatePress(color) {
  $('#'+color).addClass('pressed');
  setTimeout(function(){$('#'+color).removeClass('pressed');},100);
}

function nextSequence() {
  userClickedPattern.length=0;
  level+=1;
  $('#level-title').text('Level '+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor= buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#'+randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

$('.btn').click(buttonPress);
function buttonPress() {
  userChosenColor=$(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1)
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log('success');
    if (userClickedPattern.length===gamePattern.length) {
      setTimeout(nextSequence,1000);
    }
  } else{
    console.log('wrong');
  }
}
