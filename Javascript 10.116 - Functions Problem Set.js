
//Check if the input is even or false
// function isEven(x){
// 	var num = Number(x)
// 	if(num % 2 === 0){
// 		return true;
// 	}
// 	else {
// 	return false;
// 	}
// }

// function isEven(x){
// 	if(Number(x) % 2 === 0){
// 		return true;
// 	}
	
// 	else{
// 	return false;
// 	}
// }

// function isEven(x){
// 	return x % 2 === 0;
// }



//Factorial function
// function factorial(x){
// 	//define a result variable
// 	var result = 1;
// 	//calculate factorial and store value in result
// 	//factorial(4) = 4x3x2x1
// 	for (var i = 1; i <= x; i++){
// 		result = result * i;
// 	}
// 	//return a result variable
// 	return result;
// }


//Kebab to Snake
function kebabToSnake(str){
	//Replace all dashes with underscores
	var newStr = str.replace(/-/g, "_");


	//Return str
	return newStr;

}

