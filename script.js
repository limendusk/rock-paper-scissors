let human_score = 0;
let computer_score = 0;
let rounds_played = 0;

const result_container = document.querySelector(".result-container");

const [choice_text, round_outcome, running_score, game_outcome] = Array.from({ length: 4 }, () => document.createElement("p"));
result_container.append(choice_text, round_outcome, running_score, game_outcome);

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

    rounds_played++;
    choice_text.textContent = `Your choice: ${human_choice}, Computer choice: ${computer_choice}`;
    round_outcome.textContent = "Round outcome: ";
    game_outcome.textContent = "";

    let result;

    if (human_choice === "rock") {
        if (computer_choice === "rock") {
            result = "It's a draw!";
        } else if (computer_choice === "paper") {
            result = "You lose! Paper beats Rock";
            computer_score++;
        } else {    // computer_choice === "scissors"
            result = "You win! Rock beats Scissors";
            human_score++;
        }
    } else if (human_choice === "paper") {
        if (computer_choice === "rock") {
            result = "You win! Paper beats Rock";
            human_score++;
        } else if (computer_choice === "paper") {
            result = "It's a draw!";
        } else {
            result = "You lose! Scissors beats Paper";
            computer_score++;
        }
    } else if (human_choice === "scissors") {
        if (computer_choice === "rock") {
            result = "You lose! Rock beats Scissors";
            computer_score++;
        } else if (computer_choice === "paper") {
            result = "You win! Scissors beats Paper";
            human_score++;
        } else {
            result = "It's a draw!";
        }
    }

    round_outcome.append(result);
    running_score.textContent = `Your score: ${human_score}, Computer score: ${computer_score} — ${rounds_played} out of 5 rounds`;
    
    // Announce the results of the game after 5 rounds
    // and reset the running score.
    if (rounds_played === 5) {
        game_outcome.textContent = "Game outcome: ";
        if (human_score > computer_score) {
            game_outcome.append("You won!");
        } else if (human_choice < computer_score) {
            game_outcome.append("You lost!");
        } else {
            game_outcome.append("It's a draw!");
        }
        rounds_played = 0;
        human_score = 0;
        computer_score = 0;
    }
}