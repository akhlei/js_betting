var bankroll = 100;  //initial starting player bankroll
var gameNum; //initialize game random number. will be int between 0-10 
var guess;  //initialize player guess, not equal to gameNum. will be int between 0-10
var bet;      //intialize bet. will be an int or a float (rounded by 2 decimals) between 5-10;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function validateGuess() {
//   do {
//     alert("That is not a proper guess. Please pick a number between 0 and 10.");
//     var guess = prompt("What is your guess between 0-10?");
//   } while (Number(guess) < 0 && Number(guess) > 10);
// }

alert("Welcome to jsBets!\nYou'll be guessing a number between 0-10,\
  betting between $5-$10 for each guess.\nYour bankroll starts at $100. Good luck!");
do {
  gameNum = getRandomInt(0,11);  
  bet = prompt("How much would you like to bet? From $5 - $10");     //TODO: Validate bet is between 5-10
  guess = prompt("What is your guess between 0-10?");  //TODO: Validate guess is between 0-10

  if (Number(guess) === gameNum){
    bankroll += Number(bet);
    alert("Nice guess! Your bankroll is now " + bankroll + " dollars.");
  } else if (Number(guess) === (gameNum + 1) || Number(guess) === (gameNum -1) ) {
    bankroll = bankroll;
    alert("Close! Your bankroll is now " + bankroll + " dollars.");
  } else {
    console.log(Number(guess));
    console.log(gameNum);
    bankroll -= Number(bet);
    alert("Thanks, sucker! Your bankroll is now " + bankroll + " dollars.");
  }
} while (confirm("Wanna bet again? ;D") && bankroll > 0);

alert("Thanks for playing, your final bankroll is " + bankroll + " dollars! Have a nice day.");

