function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

let player = 0;
let computer = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice.length === 0 || computerChoice.length === 0) {
        return undefined;
    }
    const makeValid = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (
        makeValid !== "Rock" &&
        makeValid !== "Paper" &&
        makeValid !== "Scissors"
    ){
        throw new Error("Invalid Input.");
    }
    if (makeValid === "Rock" && computerChoice === "Paper"){
        computer++;
        return "You Lose! Paper beats Rock";
    } else if (makeValid == "Paper" && computerChoice === "Scissors") {
        computer++;
        return "You Lose! Scissors beats Paper";
    } else if (makeValid == "Scissors" && computerChoice === "Rock") {
        computer++;
        return "You Lose! Rock beats Scissors";
    } else if (makeValid == "Rock" && computerChoice === "Scissors") {
        player++;
        return "You Win! Rock beats Scissors";
    } else if (makeValid == "Paper" && computerChoice === "Rock") {
        player++
        return "You Win! Paper beats Rock";
    } else if (makeValid == "Scissors" && computerChoice === "Paper") {
        player++
        return "You Win! Scissors beats Paper";
    } else {
        return "It is a draw"
    }
}
/* function game() {
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++){
        playerChoice = prompt("Enter choice: ");
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if (playRound(playerChoice, computerChoice).charAt(4) === 'W') {
            player++;
        }
        if (playRound(playerChoice, computerChoice).charAt(4) === 'L') {
            computer++;
        }
    }
    if (player > computer) {
        return "Player Win!";
    } else if (computer > player) {
        return "Computer Win!";
    } else {
        return "It is a Draw.";
    }
}

console.log(game());
*/
const playerPoints = document.querySelector('#currPlayerScore');
const compPoints = document.querySelector('#currCompScore');
const winner = document.querySelector('#winner');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

const match_res = document.querySelector('.result');
function updateResult(result) {
    match_res.textContent = result;
} 

const choice = document.querySelectorAll('.choice')
choice.forEach(button => {
    button.addEventListener('click', (event) => {
        updateResult(playRound(event.target.textContent, getComputerChoice()));

        playerPoints.textContent = player;
        compPoints.textContent = computer;

        if (player === 5) {
            winner.textContent = "Player Won Against Computer!";
            endGame();
        }
        if (computer === 5) {
            winner.textContent = "Computer Won Against Player!";
            endGame();
        }
    });
});

const replay = document.querySelector('#replay');
function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    replay.disabled = false;
    replay.style.visibility = 'visible'
}


replay.disabled = true;
replay.style.visibility = 'hidden'
replay.addEventListener('click', () => {
    replay.disabled = true;
    match_res.textContent = 'Make a Choice';
    winner.textContent = '';
    player = 0;
    computer = 0;
    playerPoints.textContent = player;
    compPoints.textContent = computer;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    replay.style.visibility = 'hidden'
})