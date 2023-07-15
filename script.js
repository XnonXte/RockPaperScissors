function onChangeSelect() {
  // Changes the content on submitButton.
  const submitButton = document.getElementById("submit-button");
  submitButton.disabled = false;
  submitButton.innerHTML = `Select ${document.getElementById("choices").value}`;
}

function processRPS() {
  event.preventDefault(); // Prevents the website to reload when submitting the choice.

  const lookupTableImages = {
    Rock: "images/rock.png",
    Paper: "images/paper.png",
    Scissors: "images/scissors.png",
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
  button.disabled = true; // Disables the button after clicking.

  if (userChoice === computerChoice) {
    output.innerHTML = "You tied!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    output.innerHTML = "You won!";
    scores.innerHTML = parseInt(scores.innerHTML) + 1;
  } else {
    output.innerHTML = "Computer won!";
    scores.innerHTML = parseInt(scores.innerHTML) - 1;
  }

  setTimeout(() => {
    button.disabled = false;
  }, 1000); // Turn on the button again after 1 second.
}
