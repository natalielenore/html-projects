
const userScore = 0;
const compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const compChoice = Math.floor(Math.random() * 3);
	return choices[compChoice];
}

function game(userChoice) {
	const compChoice = getComputerChoice();
	
	
	switch (userChoice + compChoice){
		// console.log("we here?");
		case "rs":
		case "pr":
		case "sp":
			console.log("User WINS!");
			break;
		case "rp":
		case "sr":
		case "ps":
			console.log("User loses :(");
			break;
		case "rr":
		case "pp":
		case "ss":
			console.log("A tie is kind of like kissing your sister");
			break;

	}


}


function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}




main();





 