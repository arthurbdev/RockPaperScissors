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
    return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) 
  }
  else { 
    return "You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) 
  }
}
