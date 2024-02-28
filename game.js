
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else if (choice === 2){
        return "scissors";
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return `Tie! ${playerSelection} is the same as ${computerSelection}`;
    }

    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    else if(playerSelection != "rock" || "paper" || "scissors"){
        return `Invalid Input. Please enter "Rock", "Paper" or "Scissors".`
    }
}

console.log(playRound(prompt("Enter rock, paper or scissors").toLowerCase(), getComputerChoice()));