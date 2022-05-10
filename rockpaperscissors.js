function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum == 0) {
        return "rock";
    }
    else if (randomNum == 1) {
        return "paper";
    }
    else if (randomNum == 2) {
        return "scissors";
    }
    
}



function playRound(playerSelection, computerSelection) {
    let playerChoice = null;
    computerSelection = computerPlay();
    if (typeof(playerSelection) != "string") {
        console.error("playerSelection needs to be a string");
    }
    else {
        playerChoice = playerSelection.toLowerCase();
    }

    //console.log(playerChoice, computerSelection);

    let result = 0; // 0 for tie, 1 for user win, -1 for computer win
    let resultMsg = ""; // empty text var for result message

    if (playerChoice == "rock") {
        //rock ties rock
        if (computerSelection == "rock") {
            result = 0; // 0 is for tie
        }
        //rock loses to paper
        else if (computerSelection == "paper") {
            result = -1; //-1 means computer wins
        }
        //rock beats scissors
        else if (computerSelection == "scissors") {
            result = 1; //1 means user win
        }
    }
    else if (playerChoice == "paper") {
        //paper ties paper
        if (computerSelection == "paper") {
            result = 0; // 0 is for tie
        }
        //paper loses to scissors
        else if (computerSelection == "scissors") {
            result = -1; //-1 means computer wins
        }
        //paper beats rock
        else if (computerSelection == "rock") {
            result = 1; //1 means user win
        }
    }
    else if (playerChoice == "scissors") {
        //scissors ties scissors
        if (computerSelection == "scissors") {
            result = 0; // 0 is for tie
        }
        //scissors loses to rock
        else if (computerSelection == "rock") {
            result = -1; //-1 means computer wins
        }
        //scissors beats paper
        else if (computerSelection == "paper") {
            result = 1; //1 means user win
        }
    }
    //Translates game result to message for user
    if (result == 0) {
        resultMsg = "Tie!";
    }
    else if (result == -1) {
        resultMsg = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    }
    else if (result == 1) {
        resultMsg = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
    console.log(resultMsg);
        return result;    

}

function gameResult(score) {
    if (score > 0) {
        console.log(`You won by ${score} game(s)!`);
    }
    else if (score < 0) {
        console.log(`You lost by ${score * -1} game(s)`);
    }
    else if (score == 0) {
        console.log("You tied");
    }
}

function game (playerSelection,computerSelection) {
    let score = 0;

    for (let i = 0; i <5; i++) {
        playerSelection = prompt("Choose rock, paper, or scissors");
        score += playRound(playerSelection,computerSelection);
        //console.log(score)
    }
    return gameResult(score);
}


let playerSelection = prompt("Input Rock, Paper, or Scissors");
let computerSelection = computerPlay();
game(playerSelection,computerSelection);
//console.log(computerSelection);