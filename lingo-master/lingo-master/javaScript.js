function Check(){
	var woord = document.getElementById("woord").value;
	var guess = document.getElementById("input").value;
	var woordArray = woord.split('');
	var guessArray = guess.split('');
	
	for(var i = 0; i < guessArray.length; i++){
		if(guessArray[i] == woordArray[i]){
			document.getElementById("letter"+i).style.background = "green";
			document.getElementById("letter"+i).innerText = guessArray[i];
			woordArray[i] = null;
			guessArray[i] = null;
	}
}
	for(var i = 0; i < guessArray.length; i++){
		if (woordArray.indexOf(guessArray[i]) >= 0) {
			document.getElementById("letter"+i).style.background = "yellow"
			document.getElementById("letter"+i).innerText = guessArray[i]
			var pos = woordArray.indexOf(guessArray[i])
			woordArray[i] = null;
			guessArray[i] = null;
		}
	}
}

	
