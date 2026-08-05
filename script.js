let human_score = 0;
let computer_score = 0;

const result_container = document.querySelector(".result-container");

const [choice_text, round_outcome, running_score] = Array.from({ length: 3 }, () => document.createElement("p"));
result_container.append(choice_text, round_outcome, running_score);

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
    button.addEventListener("click", 
        () => playRound(button.textContent.toLowerCase(), getComputerChoice()));
});

function getComputerChoice() {
    let computer_choice;

    let random_number = Math.random()*3;

    // Set the value of computer_choice based on the value of random_number.
    if (random_number < 1.0) {
        computer_choice = "rock";
    } else if (random_number < 2.0) {
        computer_choice = "paper";
    } else {
        computer_choice = "scissors";
    }

    return computer_choice;
}

function playRound(human_choice, computer_choice) {
    
    choice_text.textContent = `Your choice: ${human_choice}, Computer choice: ${computer_choice}`;

    if (human_choice === "rock") {
        if (computer_choice === "rock") {
            round_outcome.textContent = "It's a draw!";
        } else if (computer_choice === "paper") {
            round_outcome.textContent = "You lose! Paper beats Rock";
            computer_score++;
        } else {    // computer_choice === "scissors"
            round_outcome.textContent = "You win! Rock beats Scissors";
            human_score++;
        }
    } else if (human_choice === "paper") {
        if (computer_choice === "rock") {
            round_outcome.textContent = "You win! Paper beats Rock";
            human_score++;
        } else if (computer_choice === "paper") {
            round_outcome.textContent = "It's a draw!";
        } else {
            round_outcome.textContent = "You lose! Scissors beats Paper";
            computer_score++;
        }
    } else if (human_choice === "scissors") {
        if (computer_choice === "rock") {
            round_outcome.textContent = "You lose! Rock beats Scissors";
            computer_score++;
        } else if (computer_choice === "paper") {
            round_outcome.textContent = "You win! Scissors beats Paper";
            human_score++;
        } else {
            round_outcome.textContent = "It's a draw!"
        }
    }

    running_score.textContent = `Your score: ${human_score}, Computer score: ${computer_score}`;
}