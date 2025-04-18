

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


const choiceButtons = document.querySelectorAll("button");

function handleChoiceClick() {
    for (const button of choiceButtons) {
        button.addEventListener("click", (e) => {
            const result = playRound(e.target.textContent, getComputerChoice());
            updateTextFeedback(result);
        })
    }
}

function updateTextFeedback(text) {
    const feedback = document.querySelector(".feedback");
    feedback.textContent = text;
}

handleChoiceClick();