const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector(".results");
const playerScoreBoard = document.querySelector(".player-score");
const computerScoreBoard = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

/**
 * function that randomly returns "Rock", "Paper", "Scissors" as the 
 * computer's choice.
 * @returns "Rocks"||"Paper"||"Scissors"
 */
function getComputerChoice(){

    let choices = ["rock","paper","scissors"];
    return choices[(Math.floor(Math.random()*choices.length))];}
/**
 * function that plays a single round of Rock Paper Scissors. 
 * The function should take two parameters 
 * - the playerSelection and computerSelection - and then 
 * return a string that declares the winner or tie of the
 *  round like so: "You Lose! Paper beats Rock"
 */

function playRound(playerSelection, computerSelection){
    // check on win or draw condition between playerSelection and computeSelection.
    if(playerSelection==='rock'&& computerSelection==='scissors'|| 
    playerSelection==='scissors'&& computerSelection==='paper'||
    playerSelection==='paper'&& computerSelection==='rock'){
        result.textContent =`This round, You win! ${playerSelection} beats ${computerSelection}`;
        playerScore+=1;
        playerScoreBoard.textContent = `Player score: ${playerScore}`;
        computerScoreBoard.textContent = `Computer score: ${computerScore}`;
    } 
    else if(computerSelection==='rock'&& playerSelection==='scissors'|| 
    computerSelection==='scissors'&& playerSelection==='paper'||
    computerSelection==='paper'&& playerSelection==='rock') {
        result.textContent = `This round, You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore+=1;
        playerScoreBoard.textContent = `Player score: ${playerScore}`;
        computerScoreBoard.textContent = `Computer score: ${computerScore}`;
    } else {
       result.textContent = ` A tie! ${playerSelection} and ${computerSelection} are equals`;
    }

    //Game winner check
    if (playerScore=== 5 || computerScore===5){
        if(playerScore == 5){
            result.textContent = ` You win, you beat the computer to it`;
            computerScore=0;
            playerScore=0;
        } else{
            result.textContent = `Computer won, You lost`;
            computerScore=0;
            playerScore=0;
        }
    }
}


rock.addEventListener('click',()=>{
    computerSelection = getComputerChoice();
    playRound('rock',computerSelection);
}
);

paper.addEventListener("click",()=>{
    computerSelection = getComputerChoice();
    playRound('paper',computerSelection);
});

scissors.addEventListener("click",()=>{
    computerSelection = getComputerChoice();
    playRound('scissors',computerSelection);
});