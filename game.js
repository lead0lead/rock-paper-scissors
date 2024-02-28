
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

function playRound(playerSelection, computerSelection){
    let result = [];

    if (playerSelection === computerSelection){
        //return `Tie! ${playerSelection} is the same as ${computerSelection}`;
        result.push("tie", playerSelection, computerSelection);
        return result;
    }

    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        //return `You lose! ${computerSelection} beats ${playerSelection}`;
        result.push("loss", playerSelection, computerSelection);
        return result;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        //return `You win! ${playerSelection} beats ${computerSelection}`;
        result.push("win", playerSelection, computerSelection);
        return result;
    }

    else if(playerSelection != "rock" || "paper" || "scissors"){
        //return `Invalid Input. Please enter "Rock", "Paper" or "Scissors".`
        result.push("invalid", playerSelection, computerSelection);
        return result;
    }
}

/*console.log(playRound(prompt("Enter rock, paper or scissors").toLowerCase(), getComputerChoice()));*/

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i= 0; i <= 5; i++){
        let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
        if (playRound(playerSelection, getComputerChoice())[0] === "tie"){
         console.log("tie");
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (playRound(playerSelection, getComputerChoice())[0] === "loss"){
         console.log("loss");
         playerScore++;
         computerScore++;
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (playRound(playerSelection, getComputerChoice())[0] === "win"){
         console.log("win");
         playerScore++;
         computerScore++;
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (playRound(playerSelection, getComputerChoice())[0] === "invalid"){
         console.log("Invalid Input: Please enter 'Rock', 'Paper' or 'Scissors'.");
        }
    }

    if (playerScore = computerScore){
        console.log(`Tie! The game ended with a score of ${playerScore}:${computerScore}`)
    }

    else if (playerScore < computerScore){
        console.log(`You lose! The game ended with a score of ${playerScore}:${computerScore}`)
    }

    else if (playerScore > computerScore){
        console.log(`You win! The game ended with a score of ${playerScore}:${computerScore}`)
    }
}
playGame();