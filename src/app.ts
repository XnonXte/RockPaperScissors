function onChangeSelect(): void {
  const submitButton = document.getElementById(
    "submit-button"
  ) as HTMLButtonElement;
  submitButton.disabled = false;
  submitButton.innerHTML = `Select ${
    (<HTMLSelectElement>document.getElementById("choices")).value
  }`;
}

function processRPS(): void {
  event.preventDefault();

  const lookupTableImages: Record<string, string> = {
    Rock: "images/rock.png",
    Paper: "images/paper.png",
    Scissors: "images/scissors.png",
  };

  const validChoices: string[] = ["Rock", "Paper", "Scissors"];
  const userChoice: string = (<HTMLSelectElement>(
    document.getElementById("choices")
  )).value;
  const computerChoice: string =
    validChoices[Math.floor(Math.random() * validChoices.length)];

  let output = document.getElementById("output") as HTMLElement;
  let scores = document.getElementById("scores") as HTMLElement;
  let userImg = document.getElementById("user") as HTMLImageElement;
  let computerImg = document.getElementById("computer") as HTMLImageElement;
  let button = document.getElementById("submit-button") as HTMLButtonElement;
  let outerScores = document.getElementById("outer-scores") as HTMLElement;

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
