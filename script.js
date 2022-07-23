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
  // Return an array [win/lose/tie message, player win counter, computer win counter]

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return ['It\'s a tie! Go again!', 0, 0]
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'Paper') {
      return ['You lose! Paper beats Rock!', 0, 1]
    } else {
      return ['You win! Rock beats Scissors', 1, 0]
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'Rock') {
      return ['You win! Paper beats Rock!', 1, 0]
    } else {
      return ['You lose! Scissors beats Paper!', 0, 1]
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'Rock') {
      return ['You lose! Rock beats Scissors!', 0, 1]
    } else {
      return ['You win! Scissors beats Paper', 1, 0]
    }
  } else {
    return ['Do you seriously not know how to play Rock Paper Scissors? Choose Rock, Paper, or Scissors (Dynamite is cheating btw). Computer gets a point by technicality.', 0, 1]
  } 

}

function game() {

  // Iterate five rounds, compile win records, report results

  let playerWinCount = 0
  let computerWinCount = 0
  let roundCount = 1

  for (let i = 0; i < 5; i++) {
    
    let playerSelection = prompt ('Rock, Paper, or Scissors? (Spelling matters, case does not.)')
    let computerSelection = getComputerChoice()

    let roundResult = playRound(playerSelection, computerSelection)

    playerWinCount = playerWinCount + roundResult[1]
    computerWinCount = computerWinCount + roundResult[2]

    console.log(`Round ${roundCount}: FIGHT!`)
    console.log(`The Computer chose ${computerSelection}.`)
    console.log(`You chose ${playerSelection.substring(0,1).toUpperCase()}${playerSelection.substring(1).toLowerCase()}.`)
    console.log(roundResult[0])
    console.log(`Computer: ${computerWinCount}  Player: ${playerWinCount}`)
    console.log('\n')

    roundCount++

  }

  console.log('Final Score:')
  console.log(`Computer: ${computerWinCount}  Player: ${playerWinCount}`)

  if (playerWinCount > computerWinCount) {
    console.log('You win! Congrats!')
  } else if (playerWinCount < computerWinCount) {
    console.log('You lose! Better luck next time!')
  } else {
    console.log('A tie! Your minds are evenly matched.')
  }

}

game()

