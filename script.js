
//function for computer selection
let getComputerChoice =() =>{
    let possibleChoices = ['Paper', 'Scissors', 'Rock'];
    let compChoice =possibleChoices[Math.floor(Math.random() * 3)]
    return compChoice;
}

 //storing player selection
 let playerSelection = () => {
    let input = prompt("Type 's' for Scissors, 'r' for Rock, or 'p' for Paper");
    if (input === 's' || input === 'p' || input === 'r') {
      switch (input) {
        case 's':
          return 'Scissors';
        case 'r':
          return 'Rock';
        case 'p':
          return 'Paper';
      }
    } else {
      alert('You pressed the wrong key!');
    }
  }
  

// function for playing one round
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

let game = () =>{
    let compScore = 0;
    let playerScore= 0;
    while (compScore <5 && playerScore <5){
        let a=playerSelection();
        let b =getComputerChoice();
        let roundResult = oneRoundOfGame(a, b);
        console.log(roundResult);

        let playerWin = /win/i;
        let compWin = /lose/i;
        if (playerWin.test(roundResult)){
            playerScore +=1;
        } else if(compWin.test(roundResult)){
            compScore +=1;
        }
        console.log(`Your score: ${playerScore}. Computer score: ${compScore}`);
    }

    compScore === 5? console.log('You\'ve  lost. Sorry!'): console.log("You\ve won! Congratulations!");

 }

    


