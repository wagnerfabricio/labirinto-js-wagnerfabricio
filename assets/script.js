const gameBoard = document.getElementById("game");
let startPosition;
let positionIndex;

const createMap = (mapInstruction) => {
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
      } else {
        newColumn.classList.add("empty");
      }
      newLine.appendChild(newColumn);
    });
    gameBoard.appendChild(newLine);
  });
};

createMap(map);
jaum = document.getElementById("jaum");
let positionY = startPosition.parentElement;
let positionYChilds = positionY.childNodes;
let positionX = startPosition;
