function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

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
        return "You Lose! Paper beats Rock";
    } else if (makeValid == "Paper" && computerChoice === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (makeValid == "Scissors" && computerChoice === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (makeValid == "Rock" && computerChoice === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (makeValid == "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (makeValid == "Scissors" && computerChoice === "Paper") {
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

const match_res = document.querySelector('.result');
function createResult(result) {
    let res = document.createElement('p');
    res.textContent = result;
    return res;
} 

const choice = document.querySelectorAll('.choice')
choice.forEach(button => {
    button.addEventListener('click', (event) => {
        match_res.appendChild(
            createResult(playRound(event.target.textContent, getComputerChoice()))
        );
    });
});


