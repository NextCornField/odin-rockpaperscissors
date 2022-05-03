function computerPlay() {
    let computerSelection = null;
    let num = Math.random() * 3;
    console.log(Math.ceil(num));

    if ((Math.ceil(num) == 1)) {
        return computerSelection = "rock";
    }
    else if ((Math.ceil(num) == 2)) {
        return computerSelection = "scissors";
    }
    else if ((Math.ceil(num) == 3)) {
        return computerSelection = "paper";
    }

}

function playRound(playerSelection, computerSelection) {
    if (typeof(playerSelection) != "string") {
        console.error("playerSelection needs to be a string");
    }
    else {
        playerSelection.toLowerCase();
        computerSelection.toLocaleLowerCase();
    }
    
    var computerSelection = computerPlay();
    var result = 0; // 0 for tie, 1 for user win, -1 for computer win
    var resultMsg = ""; // empty text var for result message

    if (playerSelection == "rock") {
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
    else if (playerSelection == "paper") {
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
    else if (playerSelection == "scissors") {
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
        resultMsg = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
    else if (result == 1) {
        resultMsg = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
    console.log(resultMsg)
;    return result;
}


var playerSelection = "paper";


console.log(playRound(playerSelection,"rock"))