

//this function randomly returns rock paper or scissor
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let hand = "";
    switch (n){
        case 0:
            hand = "rock";
            break;
        case 1:
            hand = "paper";
            break;
        case 2:
            hand = "scissor";
            break
    }
    console.log("comp " + hand);
    return hand;
}

// This function take a human input and returns it as lowercase string
function getHumanChoice() {
    let hand = prompt("Type your hand! (Rock, Paper or Scissor)");
    hand = hand.toLowerCase();
    console.log("human " + hand);
    if ( hand === "rock" || hand === "scissor" || hand === "paper") {
        alert("Thank you");
        return hand;
    } else {
        alert("You probably mistyped your hand, I will pick randomly for you");
        hand = getComputerChoice();
        alert("I have picked: " + hand);
        return hand.toLowerCase();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    round = 0;

    function playRound(humanChoice, computerChoice) {
        let decide = humanChoice.concat(computerChoice);
        let winner = "";
        switch (decide){
            case "rockrock":
                winner = "Its a draw! Rock smashes against Rock hopelessly";
                console.log(winner);
                alert ("draw!");
                break;
            case "rockpaper":
                winner = "You lose! the paper envelops the rock in a never ending darkness";
                console.log(winner);
                computerScore++;
                alert ("computer wins this round!")
                break;
            case "rockscissor":
                winner = "You win! The rock smshes the scissor into pieces as it tries to slice through the hardneded mineral";
                console.log(winner);
                humanScore++;
                alert ("human wins this round!")
                break;
            case "scissorscissor":
                winner = "Its a draw! The scissors clash endlessly and eventually both fall to the ground";
                console.log(winner);
                alert ("draw!");
                break;
            case "scissorpaper":
                winner = "You win! the scissor easily slashes through the paper in one swift move";
                console.log(winner);
                humanScore++;
                alert ("human wins this round!")
                break;
            case "scissorrock":
                winner = "You lose! the scissor shatters to pieces as it tries to slash through the hard mineral";
                console.log(winner);
                computerScore++;
                alert ("computer wins this round!")
                break;
            case "paperpaper":
                winner = "It's a draw! the papers flap meaninglessly against each other achieving absolutely nothing";
                console.log(winner);
                alert ("draw!");
                break;
            case "paperrock":
                winner = "You win! the paper easily swallows the rock into a pit of endless darkness";
                console.log(winner);
                humanScore++;
                alert ("human wins this round!")
                break;
            case "paperscissor":
                winner = "You lose! the paper is slashed into a million pieces by the sharp scissor";
                console.log(winner);
                computerScore++;
                alert ("computer wins this round!")
                break;
        }
    }

    alert("are you ready to play? yes you are");

    while (round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        alert("Human Score: " + humanScore);
        alert("Computer Score: " + computerScore)
        round++;
    }

    if (humanScore > computerScore){
        alert("the human wins this competition")
    } else if (humanScore < computerScore){
        alert("the computer wins this competition")
    } else {
        alert("seems to be a draw this time")
    }
}

playGame();