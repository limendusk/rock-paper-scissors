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