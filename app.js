const game = () =>{
  let  pScore = 0;
  let cScore = 0 ;

// O'yinni Boshlash 
  const startGame = () =>{
    const playBtn = document.querySelector('.intro button');
    const introSreen = document.querySelector('.intro');
    const   match = document.querySelector('.match');

    playBtn.addEventListener('click', function(){
      introSreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    })
  };
// Play match
const playMatch = () =>{
  const options = document.querySelectorAll('.options button');
  const playerHand = document.querySelector('.player-hand');
  const comuterHand = document.querySelector('.computer-hand');
  const hands = document.querySelectorAll('.hands img')

  hands.forEach(hand => {
    hand.addEventListener('animationend', function(){
      this.style.animation = '';
    })
  });

  // Computer options
  const computerOption = ['rock', 'paper', 'scissors'];

// Optionsni ForEach Qilish 
options.forEach(option => {
  option.addEventListener('click', function(){
    // Computer choise
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOption[computerNumber]
 
    setTimeout(() => {
         //Here is there we call compare hands
compareHands(this.textContent, computerChoice)
// Surat Yangilagich
playerHand.src = `./assets/${this.textContent}.png`;
comuterHand.src = `./assets/${computerChoice}.png`;
    }, 2000);


    // Animation qoshish 
    playerHand.style.animation = "shakePlayer 2s ease";
    comuterHand.style.animation = "computerShake 2s ease";
  })
});

// Natija Yangilagich
const updateScore = () =>{
  const playerScore = document.querySelector('.player-score p');
  const computerScore = document.querySelector('.computer-score p');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}

const compareHands  = (playerChoice, computerChoice) =>{
  // Update text
  const winner = document.querySelector('.winner');
  // Natija teng bolganida 
if(playerChoice === computerChoice){
    winner.textContent = 'it is tie :)'
    pScore++;
    cScore++;
    updateScore()
    return;
}
// Rock Bosilanida 
if(playerChoice === 'rock'){
  if(computerChoice === 'scissors'){
    winner.textContent = 'Player Wins :)'
    pScore++;
    updateScore();
    return;
  }
  else{
    winner.textContent = `Computer Wins :( `
    cScore++;
    updateScore()
    return;
  }
}
// Paper Bosilganida
if(playerChoice === 'paper'){
  if(computerChoice === 'scissors'){
    winner.textContent =  `Computer Wins :( `
    cScore++;
    updateScore();
    return;
  }
  else{
    winner.textContent = 'Player Wins :)'
    pScore++;
    updateScore();
    return;
  }
}
// scissors Bosilanida 
if(playerChoice === 'scissors'){
  if(computerChoice === 'rock'){
    winner.textContent =  `Computer Wins :( `
    cScore++;
    updateScore()
    return;
  }
  else{
    winner.textContent = 'Player Wins :)'
    cScore++;
    updateScore() 
    return;
  }
}

}
  
}

  // Functionlani Chaqirish 
  startGame();
  playMatch()
};




// Start game Function
game()