var movies = [
	{
		title: "Movie 1",
		rating: 5,
		hasWatched: true,
	},	
	{
		title: "Movie 2",
		rating: 4.5,
		hasWatched: false,
	},	
	{
		title: "Movie 3",
		rating: 3,
		hasWatched: true,
	},	
	{
		title: "Movie 4",
		rating: 1,
		hasWatched: false,
	},

]


function buildString(loop){
		var result = "You have ";
		if(loop.hasWatched){
			result += "watched ";
		}else {
			result += "not seen ";
		}
		result +=  "\"" + loop.title + "\" - ";
		result += loop.rating + " stars";
		return result;
}

movies.forEach(function(abc){
	buildString(abc);
	console.log(buildString(abc));
});


//Older version
// movies.forEach(function(loop){
// 	var result = "You have ";
// 		if(loop.hasWatched){
// 			result += "watched ";
// 		}else {
// 			result += "not seen ";
// 		}
// 		result +=  "\"" + loop.title + "\" - ";
// 		result += loop.rating + " stars";
// 	console.log(result)
// })

