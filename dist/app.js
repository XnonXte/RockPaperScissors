"use strict";
function onChangeSelect() {
  const submitButton = document.getElementById("submit-button");
  submitButton.disabled = false;
  submitButton.innerHTML = `Select ${document.getElementById("choices").value}`;
}
function processRPS() {
  event.preventDefault();
  const lookupTableImages = {
    Rock: "../images/rock.png",
    Paper: "../images/paper.png",
    Scissors: "../images/scissors.png",
  };
  const validChoices = ["Rock", "Paper", "Scissors"];
  const userChoice = document.getElementById("choices").value;
  const computerChoice =
    validChoices[Math.floor(Math.random() * validChoices.length)];
  let output = document.getElementById("output");
  let scores = document.getElementById("scores");
  let userImg = document.getElementById("user");
  let computerImg = document.getElementById("computer");
  let button = document.getElementById("submit-button");
  let outerScores = document.getElementById("outer-scores");
  userImg.src = lookupTableImages[userChoice];
  computerImg.src = lookupTableImages[computerChoice];
  userImg.hidden = false;
  computerImg.hidden = false;
  scores.hidden = false;
  outerScores.hidden = false;
  output.hidden = false;
  button.disabled = true;
  if (userChoice === computerChoice) {
    output.innerHTML = "You tied!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    output.innerHTML = "You won!";
    scores.innerHTML = (parseInt(scores.innerHTML) + 1).toString();
  } else {
    output.innerHTML = "Computer won!";
    scores.innerHTML = (parseInt(scores.innerHTML) - 1).toString();
  }
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
}
