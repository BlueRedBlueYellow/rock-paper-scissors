const CHOICES = ["rock", "paper", "scissors"];
const REQUIRED_POINTS_TO_WIN = 5;
const allButtons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score");
const CPUScore = document.querySelector("#cpu-score");
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
    const playerWinScenarios = (playerSelection === "rock" && computerSelection === "scissors" ||
                                playerSelection === "scissors" && computerSelection === "paper" ||
                                playerSelection === "paper" && computerSelection === "rock");
    currentRound += 1;

    if (playerSelection === computerSelection) {
        resultText.textContent = `You both drew ${capitalizeFirstLetter(playerSelection)}, oops! No one wins this round. Please pick again.`;
    } else if (playerWinScenarios) {
        playerPoints += 1
        playerScore.querySelector(".points").textContent = playerPoints;
        resultText.textContent = `Your ${capitalizeFirstLetter(playerSelection)} beats
                                  the CPU's ${capitalizeFirstLetter(computerSelection)}, so you've won this round! Please pick again.`; 
    } else {
        cpuPoints += 1;
        cpuScore.querySelector(".points").textContent = cpuPoints;
        resultText.textContent = `The CPU's ${capitalizeFirstLetter(computerSelection)} beats
                                  your ${capitalizeFirstLetter(playerSelection)}, so you've lost this round... sorry! Please pick again!`; 
    }

    if (playerPoints >= REQUIRED_POINTS_TO_WIN) {
        resultText.textContent = `You've reached ${REQUIRED_POINTS_TO_WIN} points, so you've won! Congratulations!`; 
        playerScore.classList.add("game-win");
    } else if (cpuPoints >= REQUIRED_POINTS_TO_WIN) {
        resultText.textContent = `Looks like you've lost the game! The computer has hit ${REQUIRED_POINTS_TO_WIN} points!`;
        cpuScore.classList.add("game-win");
    }
}
