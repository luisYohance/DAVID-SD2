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
    playerDivImage.src = `images/rockImg.jpg`;
    cpuDivImage.src = `images/rockImg.jpg`;
    const cpuChoice = Math.floor(Math.random() * 3) % 3;
    console.log(cpuChoice);
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
    console.log(cpuDivImage.src);
    cpuDivImage.src = `images/${choices[cpuChoice]}Img.jpg`;
    playerDivImage.src = `images/${choices[choice]}Img.jpg`;

    var evalAudio;
    if (cpuChoice != choice) {
      if ((cpuChoice - choice) % 3 == 1) {
        //lost
        evalAudio = new Audio("sfx/win.mp3");
        playerScore++;
      } else {
        //won
        evalAudio = new Audio("sfx/lose.mp3");
        cpuScore++;
      }
    } else {
      // tied
      evalAudio = new Audio("sfx/tie.mp3");
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
