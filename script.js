const allButtons = Array.from(document.getElementsByTagName('button'));
const face = document.querySelector('.face');
const speech = document.querySelector('.speech');
const playerTotal = document.querySelector('.player-score');
const computerTotal = document.querySelector('.computer-score');
const log = document.querySelector('.log');

let playerScore = 0;
let computerScore = 0;


allButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(button.id);
    })
  );

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

function playRound (computerSelection, playerSelection) {

  // Accept two inputs (ignoring player case) and decide winner of the game
  // Default to incredulous query if 'rock', 'paper', or 'scissors isn't chosen
  // Return an array [win/lose/tie message, player win counter, computer win counter]

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return ['It\'s a tie! Throw again for the fate of (a) universe!', 0, 0];
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'Paper') {
      return ['You lose! Paper beats Rock!', 0, 1];
    } else {
      return ['You win! Rock beats Scissors!', 1, 0];
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'Rock') {
      return ['You win! Paper beats Rock!', 1, 0];
    } else {
      return ['You lose! Scissors beats Paper!', 0, 1];
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'Rock') {
      return ['You lose! Rock beats Scissors!', 0, 1];
    } else {
      return ['You win! Scissors beats Paper!', 1, 0];
    }
  } else {
    return;
  } 

}

function game(playerSelection) {

  let computerSelection = getComputerChoice();

  let result = playRound(computerSelection, playerSelection);

  playerScore += result[1];
  computerScore += result[2];
  scoreDifference = playerScore - computerScore;

  playerTotal.textContent = playerScore;
  computerTotal.textContent = computerScore;
  log.innerText += `\n${result[0]}`;

  if (playerScore >= 5) {
    log.innerText += `\nYou win! I think this makes you a god? Congrats!`;
  }

  if (computerScore >= 5) {
    log.innerText += `\nYou lose! You let an entire reality perish! Loser!`
  }

  if (result[1] !== 0 || result[2] !== 0) {
    if (playerScore === 5) { 
      speech.textContent = `THE LORD OF THE UNKNOWABLE ABOVE PREVAILS!\
      We would carve a statue of you if it were in any way possible for us to\
      comprehend your appearance. Will a donation in your name to\
      Doctors without 2D Borders suffice?`;
      face.textContent = 'ᵛᵉᵧₒᵤᶫᵒᵛᵉ(♡´౪`♡)ᵧₒᵤᶫᵒᵛᵉᵧₒᵤ';
    } else if (computerScore === 5) {
      speech.textContent = `The silence is deafening...`;
      face.textContent = '。。。';
    } else if (playerScore === 4 && computerScore === 4) {
      speech.textContent = `The next win decides the fate of trillions upon\
      trillions of two-dimensional souls... I just can\'t bear to watch!`;
      face.textContent = '(ᗒᗣᗕ)՞';
    } else if (scoreDifference === 0) {
      speech.textContent = `Neck and neck! You can do this! Just pull ahead, and\
      Don't give up, Lord of the Unknowable Above!`;
      face.textContent = '╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ'
    } else if (scoreDifference === 3 || scoreDifference === 4) {
      speech.textContent = `I knew we could count on you. You have this in the bag!`;
      face.textContent = 'ლ(´ڡ`ლ)';
    } else if  (scoreDifference === 1 || scoreDifference === 2) {
      speech.textContent = `You're ahead! ...But given that our reality itself\
      is at stake, this is far too close for comfort... Are you even trying?\
      Every two-dimensional soul is counting on you, Lord of the Unknowable Above!`;
      face.textContent = ': ◉ ∧ ◉ : ╏';
    } else if (scoreDifference === -4 || scoreDifference === -3) {
      speech.textContent = `All is lost... We never should have counted on you.\
      We believed that someone a whole other dimension \'above\' our own would\
      have an intelligence far superior to our own...`;
      face.textContent = '( ° ʖ̯ ཀ)ᕗ';
    } else if (scoreDifference === -2 || scoreDifference === -1) {
      speech.textContent = `You're trailing... Please Lord of the Unknowable\
      Above... We're begging you to use your superior three-dimensional\
      intelligence to save our universe. Try harder!`;
      face.textContent = '(ノಠ益ಠ)ノ彡┻━┻';
    } else {
      return;
    }
  }
}