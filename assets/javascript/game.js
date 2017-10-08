	//This is where the alphabet list is used to randomly pull a letter from
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	//This is the starting values for amount of attempts, wins, and losses
	var wins = 0;
	var losses = 0;
	var userTries = 15;
	//This ties it into the html and updates upon winning
	var winsDOM = document.getElementById("wins");
	var lossesDOM = document.getElementById("losses");
	var triesDOM = document.getElementById("tries");
	winsDOM.innerHTML = "Wins: " + wins;
	lossesDOM.innerHTML = "Losses: "+losses;
	triesDOM.innerHTML = "Attempts Left: "+userTries;

var random = Math.floor(Math.random() * alphabet.length);

	var computerChoice = alphabet[random];
	console.log(computerChoice);

document.onkeyup = function (event) {
  var userGuess = event.key
//lets store the key the user pressed to a var so we can use it other places
  console.log("userguess", userGuess);
//make sure we actually have the correct key

 if ((userTries > 0)&&(computerChoice === userGuess)) {
    //still has guesses left, AND (&&) they chose the right key, run the code inside this if statement. if either of these to boolean expresions is false, dont run the code inside
    wins++
    winsDOM.innerHTML = "Wins: " + wins;
    reset()
    //since the user wasn't out of guesses and they chose the right key, add 1 to wins

  }
  else {
    losses++
    lossesDOM.innerHTML = "Losses: " + losses;

    reset()
    //resets the game and chooses a new letter if the first condition is not met.
  }
function reset(){
	random = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[random];
    userTries = 15;
    triesDOM.innerHTML = "Attempts Left: "+userTries;
    console.log(computerChoice);
}

}
