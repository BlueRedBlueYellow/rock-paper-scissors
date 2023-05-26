const CHOICES = ["rock", "paper", "scissors"];
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
        playerWins += 1 
        playerScore.querySelector(".wins").textContent = playerWins;
        resultText.textContent = `${capitalizeFirstLetter(playerSelection)} beats
                                  ${capitalizeFirstLetter(computerSelection)}, so you've won this round! Please pick again.`; 
    } else {
        CPUwins += 1;
        CPUScore.querySelector(".wins").textContent = CPUwins;
        resultText.textContent = `${capitalizeFirstLetter(computerSelection)} beats
                                  ${capitalizeFirstLetter(playerSelection)}, so you've lost this round... sorry! Please pick again!`; 
    }

    if (playerWins >= 5) {
        resultText.textContent = "You've reached 5 points, so you've won! Congratulations!"; 
        playerScore.classList.add("win");
    } else if (CPUwins >= 5) {
        resultText.textContent = "Looks like you've lost the game! The computer has hit 5 points!";
        CPUScore.classList.add("win");
    }
}
