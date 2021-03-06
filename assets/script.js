const gameBoard = document.getElementById("game");
const startScreen = document.getElementsByClassName("initial")[0];
const wonScreen = document.getElementsByClassName("won")[0];
const startButton = document.getElementById("startButton");

let startPosition;
let endPosition;
let positionIndex;

const createMap = (mapInstruction) => {
  gameBoard.innerHTML = "";
  mapInstruction.forEach((element, i) => {
    const newLine = document.createElement("section");
    newLine.id = `line${i}`;

    element.split("").forEach((value, j) => {
      const newColumn = document.createElement("div");
      if (value === "W") {
        newColumn.classList.add("w");
      } else if (value === "S") {
        newColumn.classList.add("start");
        startPosition = newColumn;
        createJaum(newColumn);
        positionIndex = j;
      } else if (value === "F") {
        newColumn.classList.add("end");
        endPosition = newColumn;
      } else {
        newColumn.classList.add("empty");
      }
      newLine.appendChild(newColumn);
    });
    gameBoard.appendChild(newLine);
  });
};

function checkVictory() {
  if (nextMoviment.classList.contains("end")) {
    console.log(
      "Parabéns para você que gosta de olhar o console! você ganhou!!!"
    );
    mouth();
    endPosition.style.backgroundImage = "url('./assets/img/grass.png')";
    endPosition.style.border = "none";
    wonScreen.appendChild(startButton);
    wonScreen.classList.toggle("hidde");
    return true;
  }
  return false;
}

createMap(map);

startButton.addEventListener("click", () => {
  resetGame();
  gameBoard.style.display = "block";
  startScreen.classList.add("hidde");
  wonScreen.classList.toggle("hidde");
});

/* ---------------- Control char position --------------- */
let positionY = startPosition.parentElement;
let positionYChilds = positionY.childNodes;
let positionX = startPosition;
let nextMoviment;

function resetGame() {
  startPosition.appendChild(jaum);
  positionY = startPosition.parentElement;
  positionYChilds = positionY.childNodes;
  positionX = startPosition;
  positionIndex = 0;
  endPosition.style.backgroundImage = "url('./assets/img/door.png')";
  startPosition.style.backgroundImage = "url('./assets/img/grass.png')";
}
