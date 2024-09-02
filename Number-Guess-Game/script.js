let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("submit");
const userInput = document.getElementById("guessInput");
const guessSlot = document.getElementById("prevGuess");
const remGuess = document.getElementById("remGuess");
const displayMessege = document.getElementById("displayMsg");
const startOver = document.getElementById("results");
const p = document.createElement("p");

let numGuess =0;
let playGame = true;
const totalChance = 10;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    console.log(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayAlert(`Please enter numbers only!`);
  } else if (guess <= 0 || guess > 100) {
    displayAlert("Please enter a number between 1 - 100");
  } else {
    if (numGuess === totalChance) {
      endGame();
      displayAlert(`Game Over. Random number was ${randomNumber}`);
      
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayAlert(`You guessed it right.`);
    endGame();
  } else if (guess > randomNumber) {
    displayAlert(`Number is Too High.`);
  } else if (guess < randomNumber) {
    displayAlert(`Number is Too Low.`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remGuess.innerHTML = `${totalChance - numGuess}`;
}
function displayAlert(msg) {
  displayMessege.innerHTML = `${msg}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start Again</h2>`;
  p.style.cursor="pointer"
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameBtn = document.getElementById("newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 0;
    guessSlot.innerHTML = "";
    remGuess.innerHTML = `${totalChance - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    displayAlert(`New game started`)
    playGame = true;
  });
}
