	//This is where the alphabet list is created to randomly pull a letter from
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	//This is the starting values for amount of attempts, wins, and losses
	var wins = 0;
	var losses = 0;
	var userTries = 15;
	var guess = "Guesses Used:";
	//This ties it into the html and updates upon the corresponding element
	var winsDOM = document.getElementById("wins");
	var lossesDOM = document.getElementById("losses");
	var triesDOM = document.getElementById("tries");
	var guessDOM = document.getElementById("guess");

	winsDOM.innerHTML = "Wins: " + wins;
	lossesDOM.innerHTML = "Losses: " + losses;
	triesDOM.innerHTML = "Attempts Left: " + userTries;

//this gathers a random value from the alphabet array
var random = Math.floor(Math.random() * alphabet.length);

	var computerChoice = alphabet[random];
	console.log(computerChoice);
//this creates the event whenever a key is detected.
document.onkeyup = function (event) {
  var userGuess = event.key
//lets store the key the user pressed to a var so we can use it other places
  console.log("userGuess", userGuess);
//calls up an html element to display what input was detected on event key
guessDOM.innerHTML +="  " + userGuess;
  userGuess

//this is used to detect if the correct key was pressed

 if ((userTries > 0)&&(computerChoice === userGuess)) {
    //still has guesses left, AND (&&) they chose the right key, run the code inside this if statement. if either of these to boolean expresions is false, dont run the code inside
    wins++
    winsDOM.innerHTML = "Wins: " + wins;
    reset()
    //since the user wasn't out of guesses and they chose the right key, add 1 to wins
}
//This else if checks for how many tries are left before sending to the loss count and resetting.
else if ((userTries >= 0) && (computerChoice !== userGuess)) {
		userTries--;
    	triesDOM.innerHTML = "Attempts Left: " + userTries;

  }

  //resets the game and chooses a new letter if the first two conditions are not met.
  else {
    losses++
    lossesDOM.innerHTML = "Losses: " + losses;

    reset()
  //this function tells reset which objects and elements to change, and what to change them to.  
  }
function reset(){
	random = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[random];
    userTries = 15;
    guessDOM.innerHTML = guess;
    triesDOM.innerHTML = "Attempts Left: "+userTries;
    console.log(computerChoice);
}

}
