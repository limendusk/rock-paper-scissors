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

function getHumanChoice() {
    let human_input = prompt("Enter rock, paper, or scissors: ");
    human_input = human_input.toLowerCase();
    
    if (
        human_input === "rock"
        || human_input === "paper"
        || human_input === "scissors"
    ) {
        return human_input;
    } else {
        return null;
    }
}

let human_score = 0;
let computer_score = 0;

function playRound(human_choice, computer_choice) {
    
    console.log(`Your choice: ${human_choice}, Computer choice: ${computer_choice}`);

    if (human_choice === "rock") {
        if (computer_choice === "rock") {
            console.log("It's a draw!");
        } else if (computer_choice === "paper") {
            console.log("You lose! Paper beats Rock");
            computer_score++;
        } else {    // computer_choice === "scissors"
            console.log("You win! Rock beats Scissors");
            human_score++;
        }
    } else if (human_choice === "paper") {
        if (computer_choice === "rock") {
            console.log("You win! Paper beats Rock");
            human_score++;
        } else if (computer_choice === "paper") {
            console.log("It's a draw!");
        } else {
            console.log("You lose! Scissors beats Paper")
            computer_score++;
        }
    } else if (human_choice === "scissors") {
        if (computer_choice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computer_score++;
        } else if (computer_choice === "paper") {
            console.log("You win! Scissors beats Paper");
            human_score++;
        } else {
            console.log("It's a draw!")
        }
    } else {
        console.log("Invalid choice");
    }

    console.log(`Your score: ${human_score}, Computer score: ${computer_score}`);
}

playRound(getHumanChoice(), getComputerChoice());