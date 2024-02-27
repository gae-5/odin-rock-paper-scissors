/**
 * function that randomly returns "Rock", "Paper", "Scissors" as the 
 * computer's choice.
 * @returns "Rocks"||"Paper"||"Scissors"
 */
function getComputerChoice(){

    let choices = ["Rock","Paper","Scissors"];
    return choices[(Math.floor(Math.random()*choices.length))]
}

/**
 * function that plays a single round of Rock Paper Scissors. 
 * The function should take two parameters 
 * - the playerSelection and computerSelection - and then 
 * return a string that declares the winner or tie of the
 *  round like so: "You Lose! Paper beats Rock"
 */

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // check on conditions that leads to a win or a lose
    if(playerSelection==='rock'&& computerSelection==='scissors'|| 
    playerSelection==='scissors'&& computerSelection==='paper'||
    playerSelection==='paper'&& computerSelection==='rock'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if(computerSelection==='rock'&& playerSelection==='scissors'|| 
    computerSelection==='scissors'&& playerSelection==='paper'||
    computerSelection==='paper'&& playerSelection==='rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return ` A tie! ${playerSelection} and ${computerSelection} are equals`;
    }


}