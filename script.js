const CHOICES = ["rock", "paper", "scissors"];
const allButtons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score .score");
const CPUScore = document.querySelector("#cpu-score .score");


allButtons.forEach(button => button.addEventListener('click', playRound));

let playerWins = 0;
let CPUwins = 0;
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
        playerWins += 1 
        playerScore.textContent = playerWins;
        resultText.textContent = "You won! Please pick again."; 
    } else {
        CPUwins += 1;
        CPUScore.textContent = CPUwins;
        resultText.textContent = "You lost. Please pick again."; 
    }

    roundResults += `Round ${currentRound}: You ${(roundResult) ? "won!" : "lost!"}\n`;
    console.log(roundResults);

    (playerWins >= 5) ? console.log("Player wins!") : console.log("Player loses!");
}



