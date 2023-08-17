// Function of getComputerChoice that randomly selects between rock, paper, scissors.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getPlayerChoice(){
    let choice = prompt("Choose Your Fighter: Rock, Paper, Scissors")
    if (choice.toLowerCase() === 'rock') {
        return 'rock';
    } else if (choice.toLowerCase() === 'paper') {
        return 'paper';
    } else {
        return 'scissors'
    }
}

// Function of playRound that gets the parameters playerSelection and computerSelection.
// That plays a single round and declares and returns the winner.
// Also make it accept values of upper or lower case

function game() {
    let playerScore = 0;
    let computerScore = 0;

    do {
        const playerSelection = getPlayerChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        
        function playRound(playerSelection, computerSelection) {
            
            if(playerSelection === 'rock') {
                if(computerSelection === 'scissors') {
                    playerScore++;
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                } else if (computerSelection === 'paper') {
                    computerScore++
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                } else {
                    return `Its a Tie! Both Sides Chose ${playerSelection}`
                }
            } else if(playerSelection === 'paper') {
                if(computerSelection === 'rock') {
                    playerScore++;
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                } else if (computerSelection === 'scissors') {
                    computerScore++
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                } else {
                    return `Its a Tie! Both Sides Chose ${playerSelection}`
                }
            } else if (playerSelection === 'scissors') {
                if(computerSelection === 'paper') {
                    playerScore++;
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                } else if (computerSelection === 'rock') {
                    computerScore++
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                } else {
                    return `Its a Tie! Both Sides Chose ${playerSelection}`
                }
            }
        } 
        console.log(playRound(playerSelection, computerSelection));
        
    } while (playerScore < 5 && computerScore < 5);

    if(playerScore > computerScore) {
        console.log("You Win! You Beat The Computer 5 Times.")
    } else {
        console.log("You Lose! You Lost To The Computer 5 Times")
    }
}
game();