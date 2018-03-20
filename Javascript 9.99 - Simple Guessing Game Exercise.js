//Create secretNumber
var secretNumber = 4;

//Ask user for guess
var guess = Number(prompt("Guess a number!"));

//var stringGuess = prompt("Guess a number!");
//var guess = Number(StringGuess);


//Check if guess is right
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!!")
}

//Check if higher
else if (guess > secretNumber) {
	alert("Your guess is too high!")
}

//Check if lower

//else if (Number(guess) < secretNumber) {
	//alert("Your guess is too low!")

else {
	alert("Your guess is too low!")
}


