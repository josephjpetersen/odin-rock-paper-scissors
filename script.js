function getComputerChoice () {

  // Generate random number between 0 and 2
  // Assign 'Rock', 'Paper' or 'Scissors' based on number

  let ranNum = Math.floor(Math.random() * 3)

  if (ranNum === 0) {
    return 'Rock'
  } else if (ranNum === 1) {
    return 'Paper'
  } else {
    return 'Scissors'
  }

}

function playRound (playerSelection, computerSelection) {

  // Accept two inputs (ignoring player case) and decide winner of the game
  // Default to incredulous query if 'rock', 'paper', or 'scissors isn't chosen

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return 'It\'s a tie! Go again!'
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'Paper') {
      return 'You lose! Paper beats Rock!'
    } else {
      return 'You win! Rock beats Scissors'
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'Rock') {
      return 'You win! Paper beats Rock!'
    } else {
      return 'You lose! Scissors beats Paper!'
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'Rock') {
      return 'You lose! Rock beats Scissors!'
    } else {
      return 'You win! Scissors beats Paper'
    }
  } else {
    return 'Do you seriously not know how to play Rock Paper Scissors? Choose Rock, Paper, or Scissors (Dynamite is cheating).'
  } 

}

const playerSelection = 'scisSors'
const computerSelection = getComputerChoice()

console.log(playerSelection)
console.log(playerSelection.toLowerCase())
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))