/**
 * function that randomly returns "Rock", "Paper", "Scissors" as the 
 * computer's choice.
 * @returns "Rocks"||"Paper"||"Scissors"
 */
function getComputerChoice(){

    let choices = ["Rock","Paper","Scissors"];
    return choices[(Math.floor(Math.random()*choices.length))];
}

/**
 * function that plays a single round of Rock Paper Scissors. 
 * The function should take two parameters 
 * - the playerSelection and computerSelection - and then 
 * return a string that declares the winner or tie of the
 *  round like so: "You Lose! Paper beats Rock"
 */

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // check on conditions that leads to a win or a lose
    if(playerSelection==='rock'&& computerSelection==='scissors'|| 
    playerSelection==='scissors'&& computerSelection==='paper'||
    playerSelection==='paper'&& computerSelection==='rock'){
        console.log(`This round, You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';
    } 
    else if(computerSelection==='rock'&& playerSelection==='scissors'|| 
    computerSelection==='scissors'&& playerSelection==='paper'||
    computerSelection==='paper'&& playerSelection==='rock') {
        console.log(`This round, You Lose! ${computerSelection} beats ${playerSelection}`);
        return 'lose';
    } else {
        console.log(` A tie! ${playerSelection} and ${computerSelection} are equals`);
        return 'draw';
    }


}
/**
 * Function that lets you play 5 rounds of the game, keeps score and reports the 
 * winner or loser at the end.
 */
function playGame(){
    // variable to store player and random computer choice
    let playerSelection, computerSelection;

    //variable to store player and computer scores
    let playerScore=0, computerScore=0;

    // variable to store the results of each round
    let roundResult;


    for (let index = 0; index < 5; index++) {

        playerSelection = prompt("Which is your weapon ? [rock, paper, scissors]");
        computerSelection = getComputerChoice().toLowerCase();
        roundResult = playRound(playerSelection,computerSelection);

        if (roundResult === 'win'){
            playerScore=playerScore+1;
        } else if (roundResult === 'lose'){
            computerScore=computerScore+1;
        }else if(roundResult ==='draw'){
            playerScore = playerScore+0.5;
            computerScore=computerScore+0.5;
        }
    }

    if (playerScore > computerScore){
        console.log(`player score: ${playerScore} and computer score: ${computerScore}`)
        console.log("You win!")
    } else if (computerScore > playerScore){
        console.log(`player score: ${playerScore} and computer score: ${computerScore}`)
        console.log("You Lose!");
    } else{
        console.log(`player score: ${playerScore} and computer score: ${computerScore}`)
        console.log("It is a tie!");
    }
}