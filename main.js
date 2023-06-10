function capitalizeFirstLetter(str) { return str.charAt(0).toUpperCase() + str.slice(1) }

choice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() { return choice[~~(Math.random() * choice.length)] }
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if(playerSelection == computerSelection) {
  {
      return "Draw! " +  capitalizeFirstLetter(playerSelection) + " and " + capitalizeFirstLetter(computerSelection)
    }
  }
  else if((playerSelection == "scissors" && computerSelection == "paper") || 
          (playerSelection == "paper" && computerSelection == "rock") ||
          (playerSelection == "rock" && computerSelection == "scissors"))
          { 
    playerScore++
    return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) 
  }
  else { 
    compScore++
    return "You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) 
  }
}


function game() {
  while (true) {
    let playerChoice=prompt("Rock, Paper or Scissors?")
    console.log(playRound(playerChoice,getComputerChoice()))
    console.log("Score:\nYou - " + playerScore + " Computer - " + compScore)
    if(playerScore == drawTo) {
      console.log("You won the game. Congrats..")
      return
    }
    else if (compScore == drawTo) {
      console.log("Computer won. Humanity is doomed.")
      return
    }
  }
}

let playerScore = compScore = 0
let drawTo = 5
game()
