////////////////////
////DOCUMENT REFERENCE VARIABLES
var bankroll = 100;  //initial starting player bankroll
var gameNum; //initialize game random number. will be int between 0-10 
var guess;  //initialize player guess, not equal to gameNum. will be int between 0-10
var bet;    //intialize bet. should be an int or a float (rounded by 2 decimals) between 5-10;
//////////////////// 
var betValue = $("#bet-value");    // the value from the bet input form player submits
var guessValue = $("#guess-value");   // value from the drop down selection menu player submits
var betBtn = $("#place-bet");   // the actual submit button
var restartBtn = $("#restart-btn");

////////////////////
////GAMEPLAY VARIABLES

function assignValues() {
  gameNum = getRandomInt(0,11);
  bet = Number(betValue.val());
  guess = Number(guessValue.val()); 
}

function gameLogic() {
  if (guess === gameNum) {
    bankroll += bet;
    $(".feedback-text").text("Well dang! Good guess! Your remaining bankroll is " + bankroll + " dollars.");
  } else if (guess === (gameNum + 1) || guess === (gameNum -1) ) {
    $(".feedback-text").text("Close call. No harm no foul. Your remaining bankroll is " + bankroll + " dollars.");
  } else {
    bankroll -= bet;
    $(".feedback-text").text("Boohoo sucker. I mean, good luck next time! Your remaining bankroll is " + bankroll + " dollars.");
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function restartBtnFunction(){
    restartBtn.fadeOut(0);
    restartBtn.click(function(event){
      document.location.reload(true);
    });
}

$(function(){
    //TODO: 
    // Add a data value to the img items, with corresponding values of 20
    // Have jQuery check whether item is already hidden
    // If not, if the value is less than the bankroll, fade it
    // If hidden, if the value is greater than the bankroll, fade in

    restartBtnFunction();
    betBtn.click(function(event){
      // TODO: after adding a few <img> icons, can listen to click, check for bankroll, 
      // and loop over img icon class/data names and and fadeOut() depending on bankroll 
      // increments. 
      if (bankroll > 0) {
        event.preventDefault();
        assignValues();
        gameLogic();
      } else {
        $(".feedback-text").text("Thanks for playing! You've lost all your money :D");
        // TODO: 
        // this restartBtn.fadeIn could be triggers on a different event, should respond to 
        // a zero bankroll rather than ANOTHER click after zero bankroll
        restartBtn.fadeIn(0); 
        return false;
      }
      $(".bankroll-text").text("You have $" + bankroll + " remaining");
    });
});




