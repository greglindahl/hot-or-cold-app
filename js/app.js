// Hot and Cold Game //

function newGame() {
	var randomNum = Math.floor(Math.random() * 100);
	console.log("The random number is " + randomNum);
}

function gameLogic(guess, randomNum) {
	if (guess < 0 || guess > 99) {
		alert("Please enter a valid number!");
	} else if (guess == randomNum){
		alert("Congrats! You guessed the number.")
		correctGuess = true;
	} else if (guess > randomNum ) {
		alert("Too High");
	} else if (guess < randomNum) {
		alert("Too Low");
	}
}

// var randomNum = Math.floor(Math.random() * 100);
var guesses = 0;
var correctGuess = false;

$(document).ready(function(){

// variable to generate random number.
	// var randomNum = Math.floor(Math.random() * 100);
	

	// console.log("The random number is " + randomNum)
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").click(function(e) {
  		e.preventDefault()
  		guesses = guesses + 1;
  		var input = $("#userGuess").val();
  		gameLogic(input, randomNum);
  		$("#count").text(guesses);
  		// $( "#userGuess" ).add( "<p>Enter your Guess</p>" )
  		// .addClass( "text" );
  	});

// variable to hold user's current guess
var guess;

});