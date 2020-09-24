var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started= false;
var level = 0;

$('.btn').click(buttonPress);

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
  level+=1;
  $('#level-title').text('Level'+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor= buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

function buttonPress() {
  userChosenColor=$(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor)
}

function checkAnswer(currentLevel) {

}
//
// $('.btn').click(function () {
//
//   function anim(btn){
//     btn.addClass('pressed');
//   }
//
//   setTimeout(anim($(this)),2000);
//   $(this).removeClass('pressed');
//
// } );
