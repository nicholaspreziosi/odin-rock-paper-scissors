let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
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
        computerScore += 1;
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        playerScore += 1;
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game() {
    window.onload = function(){
        const results = document.querySelector('#results');
        const score = document.querySelector('#score')
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerSelection = button.textContent.toLowerCase();
                const computerSelection = getComputerChoice();
                results.textContent = playRound(playerSelection, computerSelection);
                score.textContent = (`Player: ${playerScore} | Computer: ${computerScore}`);
                winner();
            });
        });
    };
}

function winner() {
    const results = document.querySelector('#results');
    const score = document.querySelector('#score')
    if (playerScore === 5) {
        results.textContent = ('Congrats! You Win!');
        playerScore = 0;
        computerScore = 0;

    }
    else if (computerScore === 5) {
        results.textContent = ('Game Over! Computer Wins!');
        playerScore = 0;
        computerScore = 0;
    }
}

game();