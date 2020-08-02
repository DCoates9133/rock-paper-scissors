
const playerScore = document.querySelector('.playerscore');
const computerScore = document.querySelector('.computerscore');
const roundMessage = document.querySelector('#scoremessage');
const selectButtons = document.querySelectorAll('button');

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
//  determines if player or computer is winner
 const winner = (player,computer) => {
     let playerWin = false;
     let computerWin = false;
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
       return `YOU WIN! ${player} beats ${computer}`;
    } else if(computerWin) {
       return `YOU LOSE! ${computer} beats ${player}`;
    } else {
        return "It's a DRAW";
    }  
 }

 selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        winner(playerSelection(button), computerSelection());
    })
})



