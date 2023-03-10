const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]; 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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
    return playerWin;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let roundResults = ``;

    for (round = 0; round < 5; round++) { // change to while loop later in course
        let playerSelection = prompt("Would you like to pick rock, paper, or scissors?");
        let roundResult = playRound(playerSelection, getComputerChoice());
        while (roundResult == 'tie') {
            playerSelection = prompt("Tie! Please pick again."); 
            roundResult = playRound(playerSelection, getComputerChoice());
        }
        roundResults += `Round ${round}: You ${(roundResult) ? "won!" : "lost!"}\n`;
        (roundResult) ? playerWins += 1 : computerWins += 1;
        console.log(`Your wins: ${playerWins}. Your losses ${computerWins}`);
    }

    console.log(roundResults);
    (playerWins > computerWins) ? console.log("Player wins!") : console.log("Player loses!");
}

game();