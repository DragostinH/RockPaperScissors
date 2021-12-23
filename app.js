const test = "adawdasd";


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

function getUserHand() {
    let input = prompt("Please choose your hand.");

    while (input.toLowerCase() !== "rock" &&
        input.toLowerCase() !== "paper" &&
        input.toLowerCase() !== "scissors") {
        input = prompt("Invalid hand. Please choose either 'rock', 'paper' or 'scissors");
    }

    console.log(`User has chosen ${input}`);
    return input.toLowerCase();
}

function rockPaperScissorsGame() {
    let n = parseInt(prompt("Please enter the amount of rounds you would like to play"));
    let pcHand = "";
    let userHand = "";
    let compScore = 0;
    let userScore = 0;

    while (isNaN(n)) {
        n = parseInt(prompt("You've not entered a valid number. Please try again"));
    }

    for (let i = 0; i < n; i++) {
        pcHand = getComputerHand();
        userHand = getUserHand();

        if (pcHand === "rock" && userHand === "scissors") {

            compScore++;
            console.log("Point for the Computer for choosing ROCK");

        } else if (pcHand === "rock" && userHand === "paper") {
            userScore++;
        } else if (pcHand === "rock" && userHand === "rock") {
            console.log(`Both parties chose ${pcHand}`)

        } else if (pcHand === "paper" && userHand === "paper") {
            console.log(`Both parties chose ${pcHand}`)


        } else if (pcHand === "paper" && userHand === "rock") {
            compScore++;

        } else if (pcHand === "paper" && userHand === "scissors") {
            userScore++;

        } else if (pcHand === "scissors" && userHand === "scissors") {
            console.log(`Both parties chose ${pcHand}`)


        } else if (pcHand === "scissors" && userHand === "rock") {
            userScore++;

        }else if (pcHand === "scissors" && userHand === "paper"){
            compScore++;

        }

        console.log(`Current score:\n
        Computer: ${compScore}\n
        User: ${userScore}`);

    }

    if(userScore > compScore){
        console.log("Congratulations! You have bested the Computer at Rock, Paper, Scissors!")
    }else if(userScore < compScore){
        console.log("The Computer has beaten you at Rock, Paper, Scissors. Better luck next time.")
    }else{
        console.log("Stalemate!")
    }

    console.log(`The score for the computer is ${compScore} \n
    The score for the User is ${userScore}`);
}

console.log(rockPaperScissorsGame());

/*

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    For now, remove the logic that plays exactly five rounds.
    Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    Add a div for displaying results and change all of your console.logs into DOM methods.
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
    Once you’re all done with your UI and make sure everything’s satisfactory, it’s time to merge our current branch rps-ui to our main branch.

    */