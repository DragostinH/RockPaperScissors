// Set both hands to empty string which we will later use 
let playerHand = "";
let compHand = "";
let numRounds = 0;


// Set both scores
let playerScoreP = document.querySelector('.user-score');

let playerSpanScore = document.createElement('span');
playerSpanScore.classList.add('player-score');
playerSpanScore.textContent = parseInt("0");

playerScoreP.appendChild(playerSpanScore);


let computerScoreP = document.querySelector('.computer-score');
let computerSpanScore = document.createElement('span');
computerSpanScore.classList.add('pc-score');
computerSpanScore.textContent = parseInt("0");

computerScoreP.appendChild(computerSpanScore);

let compScore = 0;
let userScore = 0;

console.log(compScore);
console.log(userScore);
console.log(playerSpanScore.textContent);

// Add an event listener to every click to all 3 buttons
// Also play 1 round of the game.
document.querySelectorAll("button").forEach(e => {
    e.addEventListener('click', (e) => {
        playerHand = e.target.id;
        compHand = getComputerHand();
        playRoundOfRockPapyerScissors(playerHand, compHand);
        numRounds++;
    })
});




// Getting the computer's hand. Decided to use Switch with numbers. Can also use 
// let options = ["rock", "paper", "scissors"];
//   return options[Math.floor(Math.random() * options.length)];
// if you'd like
function getComputerHand() {
    let randNumber = Math.ceil(Math.random() * 3);
    let hand = "";
    switch (randNumber) {
        case 1:
            hand = "rock";
            break;
        case 2:
            hand = "paper";
            break;
        case 3:
            hand = "scissors";
            break;
    }
    return hand;
}

function playRoundOfRockPapyerScissors(playerHand, computerHand) {
    let userHand = playerHand;
    let pcHand = computerHand;

    if (pcHand === "rock" && userHand === "scissors") {
        compScore++;
        computerSpanScore.textContent++;
        console.log("Point for the Computer for choosing ROCK");
    } else if (pcHand === "rock" && userHand === "paper") {
        userScore++;
        playerSpanScore.textContent++;

    } else if (pcHand === "rock" && userHand === "rock") {
        console.log(`Both parties chose ${pcHand}`);
    } else if (pcHand === "paper" && userHand === "paper") {

    } else if (pcHand === "paper" && userHand === "rock") {
        compScore++;
        computerSpanScore.textContent++;

    } else if (pcHand === "paper" && userHand === "scissors") {
        userScore++;
        playerSpanScore.textContent++;

    } else if (pcHand === "scissors" && userHand === "scissors") {
        console.log(`Both parties chose ${pcHand}`);
    } else if (pcHand === "scissors" && userHand === "rock") {
        userScore++;
        playerSpanScore.textContent++;
    } else if (pcHand === "scissors" && userHand === "paper") {
        compScore++;
        computerSpanScore.textContent++;

    }
    console.log(`Current score:\n
        Computer: ${compScore}\n
        User: ${userScore}\n`);

}




/*

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    For now, remove the logic that plays exactly five rounds.
    Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    Add a div for displaying results and change all of your console.logs into DOM methods.
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
    Once you’re all done with your UI and make sure everything’s satisfactory, it’s time to merge our current branch rps-ui to our main branch.

    */