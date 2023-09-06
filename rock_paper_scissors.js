function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}