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
    if (humanChoice === computerChoice) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = "It's a tie!";
        container.appendChild(content);
    }
    else switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You win! Rock beats scissors.";
                container.appendChild(content);
                humanScore++;
            } else {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You lose! Paper beats rock.";
                container.appendChild(content);
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You win! Paper beats rock.";
                container.appendChild(content);
                humanScore++;
            } else {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You lose! Scissors beats paper.";
                container.appendChild(content);
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You win! Scissors beats paper.";
                container.appendChild(content);
                humanScore++;
            } else {
                const content = document.createElement("div");
                content.classList.add("content");
                content.textContent = "You lose! Rock beats scissors.";
                container.appendChild(content);
                computerScore++;
            }
            break;
    }
    
}
const button_r = document.querySelector("#rock");
const button_p = document.querySelector("button#paper");
const button_s = document.querySelector("button#scissor");

button_r.addEventListener("click", () => {
    playRound("rock");
});

button_p.addEventListener("click", () => {
    playRound("paper");
});

button_s.addEventListener("click", () => {
    playRound("scissors");
});

