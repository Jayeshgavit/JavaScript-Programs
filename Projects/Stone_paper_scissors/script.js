let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll('.btn');
console.log(choices);

const userScoreElem = document.getElementById('user-score');
const compScoreElem = document.getElementById('comp-score');
const msg = document.getElementById('msg');

const drawGame = ()=>{
    console.log(" Game Draw..!");
};

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randomIndex = Math.floor( Math.random(options) * 3);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    UserScore++;
    userScoreElem.innerText = UserScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    CompScore++;
    compScoreElem.innerText = CompScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};


const playGame = (userChoice) => {
    console.log('User Choice is : ', userChoice);
    let compChoice = genCompChoice();
    console.log('Computer Choice is : ', drawGame(compChoice));

    if (userChoice === compChoice) {
      //Draw Game
      console.log(" Computer Choice is : ", drawGame());
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

choices.forEach((choice) => {

choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
    });
});