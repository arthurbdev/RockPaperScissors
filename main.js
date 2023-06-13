const rock = document.querySelector('#rock-btn')
const paper = document.querySelector('#paper-btn')
const scissors = document.querySelector('#scissors-btn')

const results = document.querySelector('#results')
const score = document.querySelector('#score')

const playerScoreElement = document.querySelector('#player-score')
const computerScoreElement = document.querySelector('#computer-score')

const winnerElement = document.querySelector('#win')
const playagainButton = document.querySelector('#play-again')
playagainButton.addEventListener('click', playAgain)

rock.addEventListener('click', () => playRound('rock'))
paper.addEventListener('click', () => playRound('paper'))
scissors.addEventListener('click', () => playRound('scissors'))

let choice = ['rock', 'paper', 'scissors']
let playerScore = compScore = 0
const rounds = 3

function getComputerChoice() { return choice[~~(Math.random() * choice.length)] }

function playRound(playerSelection) {
  winnerElement.textContent = ""
  computerSelection = getComputerChoice()

  if(playerSelection == computerSelection) { 
    setResults(`Draw! ${playerSelection} and ${computerSelection}`)
  }
  else if((playerSelection == "scissors" && computerSelection == "paper") || 
          (playerSelection == "paper" && computerSelection == "rock") ||
          (playerSelection == "rock" && computerSelection == "scissors"))
          { 
    playerScore++
    setScore()
    setResults(`You win! ${playerSelection} beats ${computerSelection}`)
  }
  else { 
    compScore++
    setScore()
    setResults(`You lose!  ${computerSelection} beats ${playerSelection}`)
  }
  if(playerScore === rounds) {
    winnerElement.textContent = "You won. Humanity is saved."
    toggleButtons()
  }
  else if (compScore === rounds) {
    winnerElement.textContent = "AI won. Humanity is doomed."
    toggleButtons()
  }
}

function playAgain() {
  playerScore = compScore = 0
  setScore()
  toggleButtons()
  winnerElement.textContent=""
  results.textContent="Do you have what it takes to stop AI from surpassing humanity?"
}

function toggleButtons() {
  rock.toggleAttribute('disabled')
  paper.toggleAttribute('disabled')
  scissors.toggleAttribute('disabled')
  playagainButton.toggleAttribute('hidden')
}

function setScore() {
  playerScoreElement.textContent = playerScore
  computerScoreElement.textContent = compScore
}

function setResults(text) { results.textContent = text }
