let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll('.btn');
console.log(choices);

const drawGame = ()=>{
    console.log(" Game Draw");
};

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randomIndex = Math.floor( Math.random(options) * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    console.log('User Choice is : ', userChoice);
    let compChoice = genCompChoice();
    console.log('Computer Choice is : ', compChoice);

    if (userChoice === compChoice) {
        resultDiv.innerHTML += '<br> It\'s a draw!';
      }
       else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'rock')
      ) 
      {
        resultDiv.innerHTML += '<br> You win!';
      } else {
        resultDiv.innerHTML += '<br> Computer wins!';
      }
    
};

choices.forEach((choice) => {

choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
    });
});