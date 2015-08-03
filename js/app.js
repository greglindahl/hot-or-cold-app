// Hot and Cold Game //



$(document).ready(function(){

	var guesses = 0;
	var correctGuess = false;
	var randomNum = Math.floor(Math.random() * 100);

	//function newGame() {
	$('.new').on('click', function() {
		randomNum = Math.floor(Math.random() * 100);
		console.log("The random number is " + randomNum);
		$("#count").text("0");
		$('#userGuess').val('');
		guesses = 0;
	});//

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
  		guesses++;
  		var input = $("#userGuess").val();
  		gameLogic(input, randomNum);
  		$("#count").text(guesses);
  		$('#userGuess').val('');
  	});

// variable to hold user's current guess
var guess;

});