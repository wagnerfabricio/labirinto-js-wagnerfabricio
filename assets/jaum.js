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
  jaum = document.getElementById("jaum");
}

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "ArrowUp") {
    positionY = positionY.previousElementSibling;
    positionYChilds = positionY.childNodes;
    positionYChilds[positionIndex].appendChild(jaum);
    positionX = positionYChilds[positionIndex];
  } else if (keyName === "ArrowDown") {
    positionY = positionY.nextElementSibling;
    positionYChilds = positionY.childNodes;
    positionYChilds[positionIndex].appendChild(jaum);
    positionX = positionYChilds[positionIndex];
  } else if (keyName === "ArrowLeft") {
    positionX = positionX.previousElementSibling;
    positionX.appendChild(jaum);
    positionIndex--;
  } else if (keyName === "ArrowRight") {
    positionX = positionX.nextElementSibling;
    console.log(positionX);
    positionX.appendChild(jaum);
    positionIndex++;
  } else if (keyName === " ") {
    if (jaum.lastChild.classList.value !== "mouth") {
      mouth();
      jaum.classList.add("rotate");
      setTimeout(() => {
        jaum.classList.remove("rotate");
      }, 1000);
    }
  }
});

function mouth() {
  const surprise = document.createElement("div");
  surprise.classList.add("mouth");
  jaum.appendChild(surprise);

  setTimeout(() => {
    jaum.removeChild(jaum.lastChild);
  }, 1000);
}
