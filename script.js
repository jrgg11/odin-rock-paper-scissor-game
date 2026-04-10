let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    if (choice < 0.34) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    const choice = prompt("Please enter rock, paper, or scissors:");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            } else {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            } else {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
            } else {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
            break;
    }
    
}

function playGame(){
    for (let i = 0; i < 5; i++) {
         let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    humanScore > computerScore ? console.log("Congratulations! You win the game!") : console.log("Sorry! Computer wins the game!");
}

playGame();