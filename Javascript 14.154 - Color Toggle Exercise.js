var button = document.querySelector("button");
var background = document.querySelector("body");
var isPink = false

button.addEventListener("click", colorChanger);

function colorChanger(){
	if(isPink){
		background.style.background = "white";
		isPink = false;
	}else{
		background.style.background = "pink";
		isPink = true;
	}
};