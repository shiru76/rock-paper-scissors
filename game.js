function transformInput(num, elementPick) {
    if(num == 0) {
        elementPick.innerHTML = "<img src=\".//img//rock.png\" width=\"100\">"
        return "rock";
    }
    else if(num == 1) {
        elementPick.innerHTML = "<img src=\".//img//paper.png\" width=\"100\">"
        return "paper";
    }
    else {
        elementPick.innerHTML = "<img src=\".//img//scissors.png\" width=\"100\">"
        return "scissors";
    }
}

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    // let cPick = transformInput(num);

    // console.log("Computer chooses " + cPick);

    return num;
}

function getHumanChoice() {
    const num = prompt("Pick 0 - rock, 1 - paper, or 2 - scissors: ");
    // let hPick = transformInput(num);

    // console.log("Human chooses " + hPick);
    
    return num;
}

function playGame() {
    const humanScoreID = document.querySelector("#humanScore");
    const computerScoreID = document.querySelector("#computerScore");
    const resultClass = document.querySelector(".result");
    const humanPickClass = document.querySelector(".humanPick");
    const computerPickClass = document.querySelector(".computerPick");

    const computerSelection = getComputerChoice();        

    const cPick = transformInput(computerSelection, computerPickClass);
    const hPick = transformInput(humanSelection, humanPickClass);

    console.log("Computer chooses " + cPick);
    console.log("Human chooses " + hPick);

    //Logs
    if(humanSelection == computerSelection) {
        console.log("It's a tie! You both choose " + hPick);
    }
    else {
        if(humanSelection == 0 && computerSelection == 2){
            console.log("You win! " + hPick + " beats " + cPick);
            humanScore++;
        }
        else if(computerSelection == 0 && humanSelection == 2){
            console.log("You lose! " + cPick + " beats " + hPick);
            computerScore++;
        }
        else if(humanSelection > computerSelection) {
            console.log("You win! " + hPick + " beats " + cPick);
            humanScore++;
        }
        else if(computerSelection > humanSelection) {
            console.log("You lose! " + cPick + " beats " + hPick);
            computerScore++;
        }
    }

    humanScoreID.textContent = humanScore;
    computerScoreID.textContent = computerScore;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            // alert("You win!");
            resultClass.innerHTML = "<h1>You win!</h1>";
        } 
        else if (computerScore > humanScore) {
            // alert("You lose!");
            resultClass.innerHTML = "<h1>You lose!</h1>";
        }
        else {
            // alert("It's a tie!")
            resultClass.innerHTML = "<h1>It's a tie!</h1>";
        }    
    }
}

let humanSelection = 0;
let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");


btnRock.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 0;
        playGame();    
    }
    else {
        alert("Thank you for playing.")
    }
});

btnPaper.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 1;
        playGame();    
    }
    else {
        alert("Thank you for playing.")
    }
});

btnScissors.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 2;
        playGame();    
    }
    else {
        alert("Thank you for playing.")
    }
});

