//sumArray
function sumArray(arr){

}






























//*** printReverse() ***
function printReverse(arr){
	for(var i = arr.length-1; i >= 0; i--){
	console.log(arr[i]);
	}
}

// printReverse([3,6,2,5])


//*** isUniform ***
function isUniform(arr){
	var firstChar = arr[0];

	for(var i = 1; i <= arr.length; i++){
		if(arr[i] !== firstChar){
			return false;
		}
	}
	return true;

}

// isUniform([1,2,3])


//*** sumArray() ***
function sumArray(arr){
	var total = 0;

	arr.forEach(function(element){
		total = total + element;
	})
	return total;	
}

function sumArray2(arr){
	var total = 0;
	for(var i=0; i<arr.length; i++){
		total = total + arr[i]
	}
	return total;
}


//*** max() ***
function max(arr){
	var maximum = arr[0];

	arr.forEach(function(test){
		if(test > maximum){
			maximum = test;
		}
	})
	return maximum;
}
