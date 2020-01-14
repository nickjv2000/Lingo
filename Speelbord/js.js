var word = document.getElementById("word");
var letter = document.getElementById("letter");
var button = document.getElementById("buttonCheck");

button.setAttribute("onclick", "checkWord(word)")

function checkWord(event){
	var letters = event.value.split("");
	console.log(letters);
	for (var i = 0; i < letters.length; i++) {
		if(letter.value == letters[i]){
			document.getElementById("letter_" + (i+1)).innerHTML = letters[i]
			document.getElementById("letter_" + (i+1)).style.backgroundColor = "lightgreen"
	}else {
		document.getElementById("letter_" + (i+1)).innerHTML = letters
	}
}
}

