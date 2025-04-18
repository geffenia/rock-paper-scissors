
let computerScore = 0;
let humanScore = 0;
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
        console.log("It is a draw!");
    } else if (humanIndex < computerIndex) {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    } else {
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
