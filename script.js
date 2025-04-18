

const orderedChoices = ["rock", "paper", "scissors", "rock"];

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

function playRound(humanChoice, computerChoice) {
    const humanIndex = orderedChoices.indexOf(humanChoice);
    const computerIndex = orderedChoices.indexOf(computerChoice);
    if (humanIndex === computerIndex) {
        return "It is a draw!";
    } else if (computerIndex - humanIndex === 1) {
        return `Computer wins! ${computerChoice} beats ${humanChoice}!`;
    } else {
        return `Human wins! ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    while (computerScore < 5 && humanScore < 5) {
        console.log(`Round start. Human: ${humanScore}. Computer: ${computerScore}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        if (result.startsWith("I")) {
            continue;
        } else if (result.startsWith("C")) {
            computerScore++;
        } else {
            humanScore++;
        }
    }
    if (humanScore === 5) {
        console.log("Human wins the whole game!");
    } else {
        console.log("Computer wins the whole game");
    }

}

playGame();