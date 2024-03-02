const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


/**
 * function that randomly returns "Rock", "Paper", "Scissors" as the 
 * computer's choice.
 * @returns "Rocks"||"Paper"||"Scissors"
 */
function getComputerChoice(){

    let choices = ["rock","paper","scissors"];
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
    // check on conditions that leads to a win or a lose
    if(playerSelection==='rock'&& computerSelection==='scissors'|| 
    playerSelection==='scissors'&& computerSelection==='paper'||
    playerSelection==='paper'&& computerSelection==='rock'){
        console.log(`player choice ${playerSelection}`)
        console.log(`computer choice ${computerSelection}`);
        console.log(`This round, You win! ${playerSelection} beats ${computerSelection}`);
        //return 'win';
    } 
    else if(computerSelection==='rock'&& playerSelection==='scissors'|| 
    computerSelection==='scissors'&& playerSelection==='paper'||
    computerSelection==='paper'&& playerSelection==='rock') {
        console.log(`player choice ${playerSelection}`)
        console.log(`computer choice ${computerSelection}`);
        console.log(`This round, You Lose! ${computerSelection} beats ${playerSelection}`);
        //return 'lose';
    } else {
        console.log(`player choice ${playerSelection}`)
        console.log(`computer choice ${computerSelection}`);
       console.log(` A tie! ${playerSelection} and ${computerSelection} are equals`);
        //return 'draw';
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
}
);

scissors.addEventListener("click",()=>{
    computerSelection = getComputerChoice();
    playRound('scissors',computerSelection);
});