let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll('.btn');
console.log(choices);

const userScoreElem = document.getElementById('user-score');
const compScoreElem = document.getElementById('comp-score');
const msg = document.getElementById('msg');

const drawGame = (userChoice, compChoice) => {
    msg.innerText = `It's a draw! You both chose ${userChoice}.`;
    msg.style.backgroundColor = "gray";
};

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        UserScore++;
        userScoreElem.innerText = UserScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        CompScore++;
        compScoreElem.innerText = CompScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log('User Choice is : ', userChoice);
    let compChoice = genCompChoice();
    console.log('Computer Choice is : ', compChoice);

    if (userChoice === compChoice) {
        // Handle draw
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Rock beats scissors, loses to paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Paper beats rock, loses to scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // Scissors beats paper, loses to rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
