let humanScore = 0, computerScore = 0;
const container = document.querySelector("#container");

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
    const content = document.createElement("div");
    content.classList.add("content");
    if (humanChoice === computerChoice) {
        content.textContent = "It's a tie!";
    }
    else switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                content.textContent = "You win! Rock beats scissors.";
                
                humanScore++;
            } else {
                content.textContent = "You lose! Paper beats rock.";
                
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                content.textContent = "You win! Paper beats rock.";
                
                humanScore++;
            } else {
                content.textContent = "You lose! Scissors beats paper.";
                
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                content.textContent = "You win! Scissors beats paper.";
                
                humanScore++;
            } else {
                content.textContent = "You lose! Rock beats scissors.";
                
                computerScore++;
            }
            break;
    }

    container.appendChild(content);
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