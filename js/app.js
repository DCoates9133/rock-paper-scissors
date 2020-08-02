
const playerScore = document.querySelector('.playerscore');
const computerScore = document.querySelector('.computerscore');
const roundMessage = document.querySelector('.message');
const selectButtons = document.querySelectorAll('button');

const scores = {
    player: 0,
    computer: 0
}
playerScore.textContent = scores.player;
computerScore.textContent = scores.computer;
// update player score
const updatePlayerScore = (score) => {
    playerScore.textContent = ++score.player;
}
// update computer score
const updateComputerScore = (score) => {
    computerScore.textContent = ++score.computer;
}
// reset scores 
const reset = () => {
    scores.player = 0
    scores.computer = 0
    playerScore.textContent = scores.player
    computerScore.textContent = scores.computer
    roundMessage.textContent = ''

}
// randomly selects rock, paper, or scissors
const computerSelection= () => {
    const computerOptions = ['rock','paper','scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)]
 };
//  player selection based on button clicked
 const playerSelection = (e) => {
    const selection = e.id;
    return selection;
 }
//  Render message on page if player win or lose round
 const winnerMessage = (message) => {
     roundMessage.textContent = message
 }

//  determines if player or computer is winner and update score 
 const winner = (player,computer,score) => {
     let playerWin = false,
        computerWin = false;

    switch (true) {
        case player == 'rock' && computer == 'paper':
            computerWin = true;
            break;
        case player == 'rock' && computer == 'scissors':
            playerWin = true;
            break;
        case player == 'paper' && computer == 'scissors':
            computerWin = true;
            break;
        case player == 'paper' && computer == 'rock':
            playerWin = true;
            break;
        case player == 'scissors' && computer == 'rock':
            computerWin = true;
            break;
        case player == 'scissors' && computer == 'paper':
            playerWin = true;
            break;
        default:
            break;
    }
    if(playerWin) {
        updatePlayerScore(score)
       message = `YOU WIN! ${player} beats ${computer}`;
    } else if(computerWin) {
        updateComputerScore(score)
       message = `YOU LOSE! ${computer} beats ${player}`;
    } else {
        message = "It's a DRAW";
    } 
    winnerMessage(message);
 }

 selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.id == 'reset' ? reset() :
        winner(playerSelection(button), computerSelection(),scores);
    })
})



