function getComputerChoice () {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return('rock');
    }
    else if (num === 2) {
        return('paper');
    }
    else {
        return('scissors');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return('Tie!');
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return('You lose! Paper beats Rock');
    }
    else {
        return('You win! Rock beats Scissors');
    }
}


const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));