const CHOICES = ["rock", "paper", "scissors"];

const allButtons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#results");
allButtons.forEach(button => button.addEventListener('click', playRound));

let playerWins = 0;
let computerWins = 0;
let roundResults = ``;
let currentRound = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]; 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound() {
    let playerSelection = this.dataset.choice;
    let computerSelection = getComputerChoice();
    let playerWin;

    if (playerSelection === computerSelection) {
        result = `You both drew ${capitalizeFirstLetter(playerSelection)}.`;
        playerWin = "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") 
    {
        playerWin = true;
    } else {
        playerWin = false;
    }

    calculateGameResults(playerWin);
}

function calculateGameResults(roundResult) {
    currentRound += 1;
    resultText.textContent = "Would you like to pick rock, paper, or scissors?";
    if (roundResult == 'tie') {
        resultText.textContent = "Tie! Please pick again."; 
    } else if (roundResult) {
        resultText.textContent = "You won! Please pick again."; 
    } else {
        resultText.textContent = "You lost. Please pick again."; 
    }

    roundResults += `Round ${currentRound}: You ${(roundResult) ? "won!" : "lost!"}\n`;
    (roundResult) ? playerWins += 1 : computerWins += 1;

    console.log(`Your wins: ${playerWins}. Your losses: ${computerWins}.`);

    console.log(roundResults);

    (playerWins >= 5) ? console.log("Player wins!") : console.log("Player loses!");
}



