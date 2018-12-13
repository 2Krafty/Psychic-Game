
//create array with all letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	//variables
	var win = 0;
	var loss = 0;
	var guessLeft = 9;
	var guessFar = [];
	

	//reset everything and start a new game!
	function reset (){
		guessLeft = 9;
		
		guessFar = [];
		computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log (computerGuess);

	}
	reset();

	//give a new letter when user userGuess is the same with computerGuess
	function newword (){
		guessFar = [];
		guessLeft = 9;
		computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log (computerGuess);
	}
	
	//when user press a key it records the 'letter' and save the 'letter' to the userGuess. 
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (!/[a-z]/.test(userGuess)){
		alert ("Letters only");
		guessLeft++;
		loss--;
	}
	

	// if user already type a letter then alert user choose another letter. 
	if (guessFar.indexOf(userGuess) === -1){
		guessFar.push(userGuess);
		}

	else {
		alert ("Same Letter Dummy");
		guessLeft++;
		loss--;
		}

		//if userGuess is the same with computerGuess, then record win (#)
		if (userGuess === computerGuess) {
			win++;
			alert ("Winner Winner Chicken Dinner");
			newword();
		}

		//if userGuess is not the same with computerGuess, then record loss (#)
		else {
			loss++;

		//if userGuess is not the same with computerGuess then guessLeft decrease 
			guessLeft -- ;
		}

		//if guestLeft is 0 then the game reset to the default and start a new game
		if (guessLeft === 0) {
			
			alert ("Try again Loser")
			reset();
		}
  	document.querySelector('#win').innerHTML = "Win: " + win;
    document.querySelector('#loss').innerHTML = "Loss: " +loss;
    document.querySelector('#guessleft').innerHTML = "Number of guess left: " + guessLeft;
    document.querySelector('#guessfar').innerHTML = " Your guess so far: " + guessFar;


};