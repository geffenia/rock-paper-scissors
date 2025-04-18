
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = "";
    do {
        const answer = prompt("rock, paper or scissors?: ");
        choice = answer.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

console.log(getHumanChoice());