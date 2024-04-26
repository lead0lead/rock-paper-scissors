let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const results = document.querySelector(".results");

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

    if (playerSelection === computerSelection){
        return "tie";
    }

    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        return "loss";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return "win";
    }

    else if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors"){
        console.log("ERROR");
        return "invalid";
    }
}

function updateScore(roundResult){
    const roundResultDisplay = document.createElement("p");
    if (roundResult === "tie"){
     roundResultDisplay.textContent = "Tie!"
     results.textContent = `Score: ${playerScore} : ${computerScore}`;
    }
    else if (roundResult === "loss"){
     roundResultDisplay.textContent = "Loss!"
     computerScore++;
     results.textContent = `Score: ${playerScore} : ${computerScore}`;
    }
    else if (roundResult === "win"){
     roundResultDisplay.textContent = "Win!"
     playerScore++;
     results.textContent = `Score: ${playerScore} : ${computerScore}`;
    }

    results.appendChild(roundResultDisplay);

    if (playerScore >= 5 || computerScore >= 5){
        const winnerDisplay = document.createElement("h2");
        winnerDisplay.textContent = displayWinner();
        results.appendChild(winnerDisplay);

        const scoreResetBtn = document.createElement("button");
        scoreResetBtn.textContent = "Reset Score";
        results.appendChild(scoreResetBtn);
        scoreResetBtn.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;

            results.removeChild(winnerDisplay);
            results.removeChild(roundResultDisplay);

            results.textContent = "Score: 0 : 0";
        })
 }
}

function displayWinner(){
    if (playerScore == computerScore){
        return `Tie! The game ended with a score of ${playerScore}:${computerScore}`;
    }

    else if (playerScore < computerScore){
       return `You lose! The game ended with a score of ${playerScore}:${computerScore}`;
    }

    else if (playerScore > computerScore){
        return `You win! The game ended with a score of ${playerScore}:${computerScore}`;
    }
}


rockBtn.addEventListener("click", () => {
    updateScore(playRound("rock", getComputerChoice()));
});

paperBtn.addEventListener("click", () => {
    updateScore(playRound("paper", getComputerChoice()));
});

scissorsBtn.addEventListener("click", () => {
    updateScore(playRound("scissors", getComputerChoice()));
});