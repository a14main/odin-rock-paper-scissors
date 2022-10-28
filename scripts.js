const choices = ["ROCK", "PAPER", "SCISSORS"];

game();

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(getPlayerChoice(), getComputerChoice());
    }
    if (score < 0) {
        console.log("Sorry, you lost...");
    } else if (score > 0) {
        console.log("Hooray! You won!");
    } else {
        console.log("It's a tie...");
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?").toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    const winText = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseText = `You lose! ${computerSelection} beats ${playerSelection}`;
    const tieText = `It's a tie. You both chose ${playerSelection}`;
    const invalidText = `${playerSelection} is not a valid choice.`;

    const win = 1;
    const lose = -1;
    const tie = 0;
    const invalid = 0;

    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    console.log(tieText);
                    return tie;
                    break;
                case "PAPER":
                    console.log(loseText);
                    return lose;
                    break;
                case "SCISSORS":
                    console.log(winText);
                    return win;
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    console.log(winText);
                    return win;
                    break;
                case "PAPER":
                    console.log(tieText);
                    return tie;
                    break;
                case "SCISSORS":
                    console.log(loseText);
                    return lose;
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    console.log(loseText);
                    return lose;
                    break;
                case "PAPER":
                    console.log(winText);
                    return win;
                    break;
                case "SCISSORS":
                    console.log(tieText);
                    return tie;
            }
            break;
        default:
            console.log(invalidText);
            return invalid;
    }
}