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