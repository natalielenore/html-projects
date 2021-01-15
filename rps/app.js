
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
			return 'rock';
		case 'p':
			return 'paper';
		case 's':
			return 'scissors';
		}
}
// hiiii

function win(user, comp) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	userWord = convertToWord(user);
	compWord = convertToWord(comp);
	result_p.innerHTML = `${userWord} beats ${compWord}<br />YOU WIN!`;
	
	document.getElementById(user).classList.add('green-glow');
	setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300); 

}



function lose(user, comp) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	userWord = convertToWord(user);
	compWord = convertToWord(comp);
	result_p.innerHTML = compWord + " beats " + userWord + "<br />YOU LOSE";
	document.getElementById(user).classList.add('red-glow');
	setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 300); 

}


function draw(user, comp) {
	userWord = convertToWord(user);
	compWord = convertToWord(comp);
	result_p.innerHTML = userWord + " vs " + compWord + "<br />IT'S A DRAW";
	document.getElementById(user).classList.add('gray-glow');
	setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 300); 

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





 