//12.139

var comments = {};

comments.data = ["wow", "cool", "amazing"]

comments.print = function(arr){
	this.data.forEach(function(el){
		console.log(el);
	});
}

comments.print()