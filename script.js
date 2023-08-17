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

// Function of playRound that gets the parameters playerSelection and computerSelection.
// That plays a single round and declares and returns the winner.
// Also make it accept values of upper or lower case
let playerSelection = "rock".toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();


function playRound(playerSelection, computerSelection) {
   if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
   } else if(computerSelection === 'paper' && playerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
   } else {
        return `You Tied Both Chose ${playerSelection}`
   }
}
console.log(playRound(playerSelection, computerSelection))

// Function of game where playRound is inside of game.
// This function would play 5 rounds, keeps score, reports a winner or loser.

