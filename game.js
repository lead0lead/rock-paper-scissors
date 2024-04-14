
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
        result.push("tie", playerSelection, computerSelection);
        return result;
    }

    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        result.push("loss", playerSelection, computerSelection);
        return result;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){

        result.push("win", playerSelection, computerSelection);
        return result;
    }

    else if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors"){

        result.push("invalid", playerSelection, computerSelection);
        return result;
    }
}


function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i= 0; i <= 5; i++){
        let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
        let roundResult = playRound(playerSelection, getComputerChoice())[0];
        
        if (roundResult === "tie"){
         console.log("tie");
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (roundResult === "loss"){
         console.log("loss");
         computerScore++;
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (roundResult === "win"){
         console.log("win");
         playerScore++;
         console.log(`Score: ${playerScore}:${computerScore}`);
        }
        else if (roundResult === "invalid"){
         console.log("Invalid Input: Please enter 'Rock', 'Paper' or 'Scissors'.");
        }
        else{
            console.log(`Something went wrong: ${console.log(playRound(playerSelection, getComputerChoice())[0])}`);
        }
    }

    if (playerScore == computerScore){
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