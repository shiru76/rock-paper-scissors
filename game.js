function transformInput(num, elementPick) {
    if(num == 0) {
        if (elementPick.classList.contains("computerPick")) {
            elementPick.innerHTML = "<img src=\".//img//rock_computer.png\" width=\"150\">"
        } 
        else {
            elementPick.innerHTML = "<img src=\".//img//rock_human.png\" width=\"150\">"
        }
        return "rock";
    }
    else if(num == 1) {
        if (elementPick.classList.contains("computerPick")) {
            elementPick.innerHTML = "<img src=\".//img//paper_computer.png\" width=\"150\">"
        } 
        else {
            elementPick.innerHTML = "<img src=\".//img//paper_human.png\" width=\"150\">"
        }
        return "paper";
    }
    else {
        if (elementPick.classList.contains("computerPick")) {
            elementPick.innerHTML = "<img src=\".//img//scissors_computer.png\" width=\"150\">"
        } 
        else {
            elementPick.innerHTML = "<img src=\".//img//scissors_human.png\" width=\"150\">"
        }
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
    const computerSelection = getComputerChoice();        

    const cPick = transformInput(computerSelection, computerPickClass);
    const hPick = transformInput(humanSelection, humanPickClass);

    console.log("Computer chooses " + cPick);
    console.log("Human chooses " + hPick);

    //Logs
    if(humanSelection == computerSelection) {
        console.log("It's a tie! You both choose " + hPick);
        resultClass.innerHTML = "<h1>It's a tie! You both choose " + hPick + "</h1>";
    }
    else {
        if(humanSelection == 0 && computerSelection == 2){
            console.log("You win! " + hPick + " beats " + cPick);
            resultClass.innerHTML = "<h1>You win! " + hPick + " beats " + cPick + "</h1>";
            humanScore++;
        }
        else if(computerSelection == 0 && humanSelection == 2){
            console.log("You lose! " + cPick + " beats " + hPick);
            resultClass.innerHTML = "<h1>You lose! " + cPick + " beats " + hPick + "</h1>";
            computerScore++;
        }
        else if(humanSelection > computerSelection) {
            console.log("You win! " + hPick + " beats " + cPick);
            resultClass.innerHTML = "<h1>You win! " + hPick + " beats " + cPick + "</h1>";
            humanScore++;
        }
        else if(computerSelection > humanSelection) {
            console.log("You lose! " + cPick + " beats " + hPick);
            resultClass.innerHTML = "<h1>You lose! " + cPick + " beats " + hPick + "</h1>";
            computerScore++;
        }
    }

    humanScoreClass.textContent = humanScore;
    computerScoreClass.textContent = computerScore;

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

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreClass.textContent = humanScore;
    computerScoreClass.textContent = computerScore;
    resultClass.textContent = "";
    humanPickClass.innerHTML = "";
    computerPickClass.innerHTML = "";
}

let humanSelection = 0;
let humanScore = 0;
let computerScore = 0;

const humanScoreClass = document.querySelector(".game__score--human");
const computerScoreClass = document.querySelector(".game__score--computer");
const resultClass = document.querySelector(".game__result");
const humanPickClass = document.querySelector(".humanPick");
const computerPickClass = document.querySelector(".computerPick");

const btnRock = document.querySelector(".game__button--rock");
const btnPaper = document.querySelector(".game__button--paper");
const btnScissors = document.querySelector(".game__button--scissors");

const btnReset = document.querySelector(".game__button--reset");
const btnPlay = document.querySelector(".modal__button--play");

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

btnRock.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 0;
        playGame();    
    }
    else {
        modal.style.display = 'flex';
    }
});

btnPaper.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 1;
        playGame();    
    }
    else {
        modal.style.display = 'flex';
    }
});

btnScissors.addEventListener('click', function(e) {
    if (humanScore < 5 && computerScore < 5) {
        humanSelection = 2;
        playGame();    
    }
    else {
        modal.style.display = 'flex';
    }
});

btnReset.addEventListener('click', function(e) {
    resetGame();
});

btnPlay.addEventListener('click', function(e) {
    resetGame();
    modal.style.display = 'none';
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});