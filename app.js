let test = 0;



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