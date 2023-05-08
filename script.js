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

    let playerWin = false;
    let result = "";

    if (playerSelection === computerSelection) {
        result = `You both drew ${capitalizeFirstLetter(playerSelection)}.`;
        playerWin = "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") 
    {
        result = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
        playerWin = true;
    } else {
        result = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    }

    console.log(result);
    calculateGameResults(playerWin);
}

function calculateGameResults(roundResult) {
    currentRound += 1;
    resultText.textContent = "Would you like to pick rock, paper, or scissors?";
    if (roundResult == 'tie') {
        resultText.textContent = "Tie! Please pick again."; 
    }
    roundResults += `Round ${currentRound}: You ${(roundResult) ? "won!" : "lost!"}\n`;
    (roundResult) ? playerWins += 1 : computerWins += 1;

    console.log(`Your wins: ${playerWins}. Your losses: ${computerWins}.`);

    console.log(roundResults);

    (playerWins > computerWins) ? console.log("Player wins!") : console.log("Player loses!");
}

game();