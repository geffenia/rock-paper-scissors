

const orderedChoices = ["rock", "paper", "scissors", "rock"];
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    const humanIndex = orderedChoices.indexOf(humanChoice);
    if (computerChoice === humanChoice) {
        return "It is a draw!";
    } else if (orderedChoices[humanIndex + 1] === computerChoice) {
        return `Computer wins! ${computerChoice} beats ${humanChoice}!`;
    } else {
        return `Human wins! ${humanChoice} beats ${computerChoice}`;
    }
}


const choiceButtons = document.querySelectorAll("button");
const feedback = document.querySelector(".feedback");

function handleChoiceClick() {
    for (const button of choiceButtons) {
        button.addEventListener("click", (e) => {
            const result = playRound(e.target.textContent.toLowerCase(), getComputerChoice());
            updateTextFeedback(result);
        })
    }
}

function updateTextFeedback(text) {
    feedback.textContent = text;
}

handleChoiceClick();