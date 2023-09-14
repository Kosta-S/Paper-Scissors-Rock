let container = document.getElementById("buttons");

let resultDisplay = document.getElementById("result");

let comScoreDisplay = document.querySelector('#compScore .score');

let playerScoreDisplay = document.querySelector('#playerScore .score');

let compScore = 0;

let playerScore= 0;


function getPlayersSelection(e) {
    if (e.target.classList.contains('btn-click')) {
        return e.target.innerText;
    }
}
  
container.addEventListener("click", (e) => {
    let playerSelection = getPlayersSelection(e);
    if (playerSelection) {
        game(playerSelection);
    }
});
  

//function for computer selection
let getComputerChoice =() =>{
    let possibleChoices = ['Paper', 'Scissors', 'Rock'];
    let compChoice =possibleChoices[Math.floor(Math.random() * 3)]
    return compChoice;
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

let hideToReload = ()=>{
    let gameAttributes =document.querySelectorAll('.active');
    gameAttributes.forEach(attribute => {
        attribute.classList.add('passive');
        attribute.classList.remove('active');
})
}  

let game = (playerSelection) =>{
        let computerSelection = getComputerChoice();
        let roundResult = oneRoundOfGame(playerSelection, computerSelection);
        

        let playerWin = /win/i;
        let compWin = /lose/i;
        if (playerWin.test(roundResult)){
            playerScore +=1;
            playerScoreDisplay.innerText = playerScore;
        } else if(compWin.test(roundResult)){
            compScore +=1;
            comScoreDisplay.innerText = compScore;
        }
        if (compScore < 5 && playerScore < 5){
            resultDisplay.innerText =roundResult;
        } else{
            compScore === 5? resultDisplay.innerText = 'You\'ve  lost. Sorry!': resultDisplay.innerText = "You\'ve won! Congratulations!";
            hideToReload();


        }
     
    }

    
    // play again or reload  button that can be always clicked
    const playAgain = document.getElementById("reload");
    playAgain.addEventListener("click", function () {
        // Reload the document (refresh the page)
        location.reload();
      });

    





 //storing player selection
//  let playerSelection = () => {
//     let input = prompt("Type 's' for Scissors, 'r' for Rock, or 'p' for Paper");
//     if (input === 's' || input === 'p' || input === 'r') {
//       switch (input) {
//         case 's':
//           return 'Scissors';
//         case 'r':
//           return 'Rock';
//         case 'p':
//           return 'Paper';
//       }
//     } else {
//       alert('You pressed the wrong key!');
//     }
//   }
  
    


