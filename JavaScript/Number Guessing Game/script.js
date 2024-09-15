let myNumber = document.getElementById("myNumber");
let myBtn = document.getElementById("myBtn");
let message = document.getElementById("roll-message");
let guessInput = document.getElementById("guess");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let attempts = document.getElementById("attempts");
let random;

myBtn.onclick = function () {
  random = Math.floor(Math.random() * 100 + 1);
  message.textContent =
    "You have successfully rolled a number! Guess the number correctly to reveal it.";
  myNumber.textContent = "";
  attempts.textContent = "";
};

let attemptsCount = 0;

submit.onclick = function () {
  guess = Number(guessInput.value);
  if (guess === random) {
    myNumber.textContent = random;
    result.textContent = "Congratulations! You win:)";
  } else if (guess < random) {
    result.textContent = "Too Low!";
  } else if (guess > random) {
    result.textContent = "Too High!";
  } else {
    result.textContent = "Bawal yan tanga!";
  }
  guessInput.value = "";
  attemptsCount++;
  attempts.textContent = `Attempts: ${attemptsCount}`;
};
