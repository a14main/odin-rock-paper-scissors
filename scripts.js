const choices = ["ROCK", "PAPER", "SCISSORS"];

for (let i = 0; i < 5; i++) {
    console.log(playRound("rock", getComputerChoice()));
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?").toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    const win = `You win! ${playerSelection} beats ${computerSelection}`;
    const lose = `You lose! ${computerSelection} beats ${playerSelection}`;
    const tie = `It's a tie. You both chose ${playerSelection}`;
    const invalid = `${playerSelection} is not a valid choice.`;

    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    return tie;
                    break;
                case "PAPER":
                    return lose;
                    break;
                case "SCISSORS":
                    return win;
                    break;
                default:
                    return invalid;
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    return win;
                    break;
                case "PAPER":
                    return tie;
                    break;
                case "SCISSORS":
                    return lose;
                    break;
                default:
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return lose;
                    break;
                case "PAPER":
                    return win;
                    break;
                case "SCISSORS":
                    return tie;
                    break;
                default:
            }
            break;
        default:
            return invalid;
    }
}