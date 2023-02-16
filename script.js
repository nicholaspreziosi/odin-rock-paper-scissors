function getPlayerChoice () {
    do {
        var choice = prompt("Rock Paper or Scissor?").toLowerCase(); 
    } while ((choice !== 'rock') && (choice !== 'paper') && (choice !== 'scissor'));
    return choice;
}

function getComputerChoice () {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return('rock');
    }
    else if (num === 2) {
        return('paper');
    }
    else {
        return('scissor');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return('Tie!');
    }
    else if (((playerSelection === 'rock') && (computerSelection === 'paper')) || ((playerSelection === 'paper') && (computerSelection === 'scissor')) || ((playerSelection === 'scissor') && (computerSelection === 'rock'))) {
        playerScore -= 1;
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        playerScore += 1;
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === 0) {
        console.log('Overall: Tie!');
    }
    else if (playerScore < 0) {
        console.log('Overall: You lose!');
    }
    else {
        console.log('Overall: You win!');
    }
}

let playerScore = 0;
game();