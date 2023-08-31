let getComputerChoice =() =>{
    let possibleChoices = ['Paper', 'Scissors', 'Rock'];
    let compChoice =possibleChoices[Math.floor(Math.random() * 3)]
    return compChoice;
}
let oneRoundOfGame = (playerSelection, computerSelection) => {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "It's a tie. Rock ties with rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "It's a tie. Paper ties with paper.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock.";
    }  else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It's a tie. Scissors ties with scissors.";
    }  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors.";
    }  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats paper.";
    }
};

