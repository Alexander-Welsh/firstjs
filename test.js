
$(document).ready(function(){
	$('<p>',
	{id: 'first',
	}).appendTo('form');
	$('#first').append('Want to play a game?');

	$('<input>', {
    id: 'horse',
    name: 'new',
}).appendTo('form');
	if(horse.value === "yes"){
		$('first').append("Which game?");
	}
});



// function dynamo(){
// 		alert("something");
// }

// function startGame(){
// 	var play = prompt("Do you want to play futbol or football").toLowerCase();
	
// 	if(play==="soccer" || play==="futbol"){
// 		var run = prompt("Do you like running?");
// 		if(run ==="yes"){
// 			alert("You picked the right sport, good luck with the ACL injuries")
// 		}else{
// 			alert("Maybe try billiards")
// 		}
// 	}
// 	else if(play==="neither"||play==="no"||play==="none"){
// 		var sport = prompt("Do you like any sports?").toLowerCase();
// 		if(sport ==="yes"){
// 			var other = prompt("What sport is your Favorite?").toLowerCase();
// 			if(other ==="baseball"){
// 				alert("I too like to sleep 3 hours at a time")
// 			}else if(other==="cricket"){
// 				alert("Nobody understands cricket, don't lie")
// 			}else if(other==="hockey"){
// 				alert("Canada has the internet?")
// 			}else if(other==="basketball"){
// 				alert("I hope you are tall");
// 			}else{
// 				alert("You may think that is a sport, nobody else does.")
// 			}

// 		}else{
// 			alert("My grandma digs knitting, give it a shot")
// 		}


// 	}else{
// 		var injury =prompt("Do brain injuries sound like fun?").toLowerCase();
// 		if(injury === "yes"){
// 			alert("Good luck with that! *dies agonizing death at age 34*")
// 		}else{
// 			alert("Anything but rugby/fighting is probably a better option")
// 		}

// 	}

// }
