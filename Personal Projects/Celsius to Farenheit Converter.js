//User inputs a value in degrees celsius
var input = prompt("Please insert a value in degrees celsius:");

//Declare a function to convert celsius to farenheit, then return farenheit
function convertToF(celsius){
	var farenheit = celsius * 9/5 + 32;
	return farenheit;
}


//Insert user's input into the function, and collect returning farenheit value
var result = convertToF(input);

//Alert farenheit value to the user
alert(input + " degrees celsius equals " + result + " degrees farenheit.");


// //User inputs a value in degrees celsius
// var userInput = prompt("Please enter a temperature value in degrees celsius:");

// //Declare the function - Takes celsius and converts it into farenheit
// function convertToF(celsiusInput){
// 	var farenheit = celsiusInput * 9/5 + 32;
// 	return farenheit;
// }

// //Insert user's input into the function, collect the returning value
// var result = convertToF(userInput);

// //Output value to user
// alert(userInput + " degrees celsius is equal to " + result + " degrees farenheit.");