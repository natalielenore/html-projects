
let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const compChoice = Math.floor(Math.random() * 3);
	return choices[compChoice];
}

function convertToWord(letter) {
	switch (letter) {
		case 'r':
			return 'Rock';
		case 'p':
			return 'Paper';
		case 's':
			return 'Scissors';
		}
}

function win(user, comp) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	user = convertToWord(user);
	comp = convertToWord(comp);
	result_p.innerHTML = `${user} beats ${comp}. You win!`;
	document.getElementById(user).classList.add('green-glow');

}

function lose(user, comp) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	user = convertToWord(user);
	comp = convertToWord(comp);
	result_p.innerHTML = comp + " beats " + user + ". You lose :(";

}


function draw(user, comp) {
	user = convertToWord(user);
	comp = convertToWord(comp);
	result_p.innerHTML = user + " is the same as " + comp + ". It's a draw!";

}




function game(userChoice) {
	const compChoice = getComputerChoice();
	
	
	switch (userChoice + compChoice){
		// console.log("we here?");
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "sr":
		case "ps":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
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





 