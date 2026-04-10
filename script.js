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

console.log(getComputerChoice());
console.log(getHumanChoice());