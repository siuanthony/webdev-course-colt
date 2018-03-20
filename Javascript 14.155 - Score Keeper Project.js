var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input");
var playingTo = document.querySelector("#playingTo");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", p1ButtonClicked);
p2Button.addEventListener("click", p2ButtonClicked);
resetButton.addEventListener("click", reset);

numInput.addEventListener("change", numInputClicked);


function p1ButtonClicked(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		console.log(p1Score);
		p1Display.textContent = p1Score;
	}
};

function p2ButtonClicked(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	console.log(p2Score);
	p2Display.textContent = p2Score;
	}
};

function reset(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
};

function numInputClicked(){
	playingTo.textContent = this.value; //this.value = numInput.value
	winningScore = Number(this.value);
	reset();
};

