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

console.log(getComputerChoice());