var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?")


while(input !== "quit"){
	//handle input
	if(input === "list"){
		listToDos();

	} else if (input === "new") {
		addToDo();	

	} else if(input === "delete"){
		deleteToDo();
	
	}
	//ask again for new input
	input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");

function listToDos(){
	console.log("*********");
	todos.forEach(function(listAll, index){
		console.log(index + ": " + listAll);
		});
	console.log("*********");
}

function addToDo(){
	//ask for new todo
	var newToDo = prompt("Enter new to-do");

	//add to todos array
	todos.push(newToDo);
	console.log("Added a to-do");
}

function deleteToDo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete")

	//delete that todo by splicing
	todos.splice(index,1);
	console.log("Deleted to-do");
}