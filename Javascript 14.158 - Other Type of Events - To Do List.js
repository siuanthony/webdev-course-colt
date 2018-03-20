var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", mouseover);
	lis[i].addEventListener("mouseout", mouseout);
	lis[i].addEventListener("click", mouseclick);
}

function mouseover(){
	this.classList.add("selected");
}

function mouseout(){
	this.classList.remove("selected");
}

//Creates a new class done
function mouseclick(){
	this.classList.toggle("done");
}