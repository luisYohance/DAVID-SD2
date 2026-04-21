const choiceTable = document.getElementById("choiceDropdown");
const arena = document.getElementById("arena");
const playerDiv = document.getElementById("player");
const cpuDiv = document.getElementById("cpu");
const playerDivImage = playerDiv.querySelector("img");
const cpuDivImage = cpuDiv.querySelector("img");
const enterButton = document.getElementById("enterButton");

var playerScore = 0;
var cpuScore = 0;

const choices = ["rock", "paper", "scissors"];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var choice = 0;
var evaluating = false;

function changedChoice(index) {
  choice = index;
  console.log(`You picked ${choices[index]}!`);
}

async function evaluateResult() {
  if (evaluating == false) {
    evaluating = true;
    playerDivImage.src = `images/rockImg.png`;
    cpuDivImage.src = `images/rockImg.png`;
    const cpuChoice = Math.floor(Math.random() * 3) % 3;

    for (let throws = 0; throws < 3; throws++) {
      playerDivImage.style.transform = `rotate(-${(Math.floor(Math.random() * 30) % 40) + 20}deg)`;
      cpuDivImage.style.transform = `rotate(${(Math.floor(Math.random() * 30) % 40) + 20}deg) scaleX(-1)`;
      const audio = new Audio("sfx/whoosh.mp3");
      audio.play();
      await sleep(150);
      playerDivImage.style.transform = `rotate(20deg)`;
      cpuDivImage.style.transform = `rotate(-20deg) scaleX(-1)`;
      await sleep(150);
      playerDivImage.style.transform = `rotate(0deg)`;
      cpuDivImage.style.transform = `rotate(0deg) scaleX(-1)`;
    }

    cpuDivImage.src = `images/${choices[cpuChoice]}Img.png`;
    playerDivImage.src = `images/${choices[choice]}Img.png`;

    var evalAudio;
    // ROCK : 0, PAPER : 1, SCISSORS : 2;
    console.log(`Player (${choices[choice]}) vs CPU (${choices[cpuChoice]})`);

    if ((cpuChoice + 1) % 3 == choice) {
      evalAudio = new Audio("sfx/win.mp3");
      console.log(`Player (${choices[choice]}) won!`);
      playerScore++;
      // Win condition : Player won because their choice is greater than 1
    } else if ((choice + 1) % 3 == cpuChoice) {
      evalAudio = new Audio("sfx/lose.mp3");
      console.log(`CPU (${choices[cpuChoice]}) won!`);
      cpuScore++;
      // Lose condition : Player lost because their choice is not greater than the CPU AND their choices are not equal
    } else {
      // Tied : Equal choices
      evalAudio = new Audio("sfx/tie.mp3");
      console.log("Tied!");
    }

    evalAudio.play();
    cpuDiv.querySelector(".nametag").innerText = `CPU: ${cpuScore}`;
    playerDiv.querySelector(".nametag").innerText = `PLAYER: ${playerScore}`;
    await sleep(200);
    evaluating = false;
  }
}

choiceTable.querySelectorAll("li").forEach((li, liIndex) => {
  const anchor = li.querySelector("a");
  const choiceName = liIndex;
  anchor.onclick = (ev) => {
    changedChoice(liIndex);
  };
});

document.onkeydown = function (ev) {
  ev ||= window.Event;
  switch (ev.key) {
    case "Enter":
      evaluateResult();
      break;
  }
};

enterButton.addEventListener("click", function (ev) {
  evaluateResult();
});
