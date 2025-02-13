//variables
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let round = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const resetButton = document.querySelector("#reset");
const resultDiv = document.querySelector("#results")

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorButton.addEventListener("click", () => playRound("scissor", getComputerChoice()));
resetButton.addEventListener("click", () => resetGame());

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    round = 0;
    drawScore = 0;

    rockButton.style.display = "inline-block";
    paperButton.style.display = "inline-block";
    scissorButton.style.display = "inline-block";
    resetButton.style.display = "none";

    resultDiv.textContent = "";
}

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


function playRound(humanChoice, computerChoice) {

        
    
    let decide = humanChoice.concat(computerChoice);
    let winner = "";
    switch (decide){
        case "rockrock":
            winner = "Its a draw! Rock smashes against Rock hopelessly";
            alert ("draw!");
            drawScore++;
            break;
        case "rockpaper":
            winner = "You lose! the paper envelops the rock in a never ending darkness";
            alert ("computer wins this round!");
            computerScore++;
            break;
        case "rockscissor":
            winner = "You win! The rock smshes the scissor into pieces as it tries to slice through the hardneded mineral";
            alert ("human wins this round!");
            humanScore++;
            break;
        case "scissorscissor":
            winner = "Its a draw! The scissors clash endlessly and eventually both fall to the ground";
            alert ("draw!");
            drawScore++;
            break;
        case "scissorpaper":
            winner = "You win! the scissor easily slashes through the paper in one swift move";
            alert ("human wins this round!");
            humanScore++;
            break;
        case "scissorrock":
            winner = "You lose! the scissor shatters to pieces as it tries to slash through the hard mineral";
            alert ("computer wins this round!");
            computerScore++;
            break;
        case "paperpaper":
            winner = "It's a draw! the papers flap meaninglessly against each other achieving absolutely nothing";
            alert ("draw!");
            drawScore++;
            break;
        case "paperrock":
            winner = "You win! the paper easily swallows the rock into a pit of endless darkness";
            alert ("human wins this round!");
            humanScore++;
            break;
        case "paperscissor":
            winner = "You lose! the paper is slashed into a million pieces by the sharp scissor";
            alert ("computer wins this round!");
            computerScore++;
            break;
    }
    round++;

    if (round === 5 || computerScore >= 3 || humanScore >= 3){
        if (humanScore > computerScore){
            resultDiv.textContent = "--- The human wins this competition " + "--- Final Score: " + " Human: " + humanScore + ", Computer: " + computerScore + ", Draws: " + drawScore;
        } else if (humanScore < computerScore){
            resultDiv.textContent = "--- The computer wins this competition " + "--- Final Score: " + " Human: " + humanScore + ", Computer: " + computerScore + ", Draws: " + drawScore;
        } else {
            resultDiv.textContent = "--- Seems to be a draw this time " + "--- Final Score: " + " Human: " + humanScore + ", Computer: " + computerScore + ", Draws: " + drawScore;
        }

        rockButton.style.display = "none";
        paperButton.style.display = "none";
        scissorButton.style.display = "none";
        resetButton.style.display = "block";
    } else{
        resultDiv.textContent = "Human: " + humanScore + ", Computer: " + computerScore + ", Draws: " + drawScore;
    }
}


