
//Version 1
// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer!=="yeah"){
// 	var answer = prompt("Are we there yet?");
// }
// alert("YAY! we made it!!");

//Version 2 - works as long as string contains yes in it
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1){
	var answer = prompt("Are we there yet?");
}
alert("YAY! we made it!!");