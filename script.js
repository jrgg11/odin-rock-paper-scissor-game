let humanScore = 0, computerScore = 0;
const status = document.querySelector("#status");

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

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();
    let message = "";
    if (humanChoice === computerChoice) {
        message = "It's a tie!";
    }
    else switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                message = "You win! Rock beats scissors.";
                humanScore++;
            } else {
                message = "You lose! Paper beats rock.";
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                message = "You win! Paper beats rock.";
                humanScore++;
            } else {
                message = "You lose! Scissors beats paper.";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                message = "You win! Scissors beats paper.";
                humanScore++;
            } else {
                message = "You lose! Rock beats scissors.";
                computerScore++;
            }
            break;
    }

    status.innerHTML = `${message}<br>YOU: ${humanScore} COMPUTER: ${computerScore}`;
}

const button_r = document.querySelector("#rock");
const button_p = document.querySelector("button#paper");
const button_s = document.querySelector("button#scissor");

function playGame (){
    button_r.addEventListener("click", () => {
        playRound("rock");
    });
    button_p.addEventListener("click", () => {
        playRound("paper");
    });
    button_s.addEventListener("click", () => {
        playRound("scissors");
    });

}

playGame();