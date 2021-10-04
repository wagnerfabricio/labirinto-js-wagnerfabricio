let jaum;

function createJaum(place) {
  const createJaum = document.createElement("div");
  createJaum.id = "jaum";
  const jaumEyes = document.createElement("div");
  jaumEyes.classList = "eyes";
  const jaumEye = document.createElement("div");
  jaumEye.classList = "eye";
  const pupil = document.createElement("div");
  pupil.classList = "pupil";

  jaumEye.appendChild(pupil);
  jaumEyes.appendChild(jaumEye);
  jaumEyes.appendChild(jaumEye.cloneNode(true));
  createJaum.appendChild(jaumEyes);
  place.appendChild(createJaum);
  jaum = createJaum;
}

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "ArrowUp") {
    nextMoviment = positionY.previousElementSibling.childNodes[positionIndex];
    if (nextMoviment.classList.contains("empty") || checkVictory()) {
      positionY = positionY.previousElementSibling;
      positionYChilds = positionY.childNodes;
      positionYChilds[positionIndex].appendChild(jaum);
      positionX = positionYChilds[positionIndex];
    }
  } else if (keyName === "ArrowDown") {
    nextMoviment = positionY.nextElementSibling.childNodes[positionIndex];
    if (nextMoviment.classList.contains("empty") || checkVictory()) {
      positionY = positionY.nextElementSibling;
      positionYChilds = positionY.childNodes;
      positionYChilds[positionIndex].appendChild(jaum);
      positionX = positionYChilds[positionIndex];
    }
  } else if (keyName === "ArrowLeft") {
    nextMoviment = positionX.previousElementSibling;
    if (nextMoviment.classList.contains("empty") || checkVictory()) {
      positionX = positionX.previousElementSibling;
      positionX.appendChild(jaum);
      positionIndex--;
    }
  } else if (keyName === "ArrowRight") {
    nextMoviment = positionX.nextElementSibling;
    if (nextMoviment.classList.contains("empty") || checkVictory()) {
      positionX = positionX.nextElementSibling;
      positionX.appendChild(jaum);
      positionIndex++;
    }
  } else if (keyName === " ") {
    if (jaum.lastChild.classList.value !== "mouth") {
      mouth();
      jaum.classList.add("rotate");
      setTimeout(() => {
        jaum.classList.remove("rotate");
      }, 1000);
    }
  }
  if (startPosition.childNodes.length === 0) {
    startPosition.style.backgroundImage = "url('./assets/img/door.png')";
  }
});

/* ------- Litle surprise when press the right key ------ */
function mouth() {
  const surprise = document.createElement("div");
  surprise.classList.add("mouth");
  jaum.appendChild(surprise);

  setTimeout(() => {
    jaum.removeChild(jaum.lastChild);
  }, 1000);
}
