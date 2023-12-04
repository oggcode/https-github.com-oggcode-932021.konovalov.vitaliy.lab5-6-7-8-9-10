class MagicScene {
  constructor() {
    this.nextLightOn = true;
    this.nextRabbit = true;
    this.sceneElement = document.querySelector("#scene");
    this.ropeElement = document.querySelector("#rope");
    this.headElement = document.querySelector("#top");
    this.birdElement = document.querySelector("#bird");
    this.rabbitElement = document.querySelector("#rabbit");
    this.containerElement = document.querySelector("#container");
    this.lightOffElement = document.querySelector("#lightOff");
    this.lightOnElement = document.querySelector("#lightOn");

    this.headElement.addEventListener("mousedown", () => {
      this.ropeElement.style.marginTop = "5vh";
    });

    this.headElement.addEventListener("mouseup", () => {
      this.ropeElement.style.marginTop = "2vh";
    });
  }

  sceneUp() {
    this.sceneElement.style.transition = "1s";
    this.sceneElement.style.bottom = "100%";
  }

  turnUpLight() {
    if (this.nextLightOn) {
      this.containerElement.style.opacity = "0.5";
      this.lightOffElement.style.opacity = "1";
      this.lightOnElement.style.display = "block";
      this.nextLightOn = false;
    } else {
      this.containerElement.style.opacity = "0";
      this.lightOffElement.style.opacity = "0";
      this.lightOnElement.style.display = "none";
      this.nextLightOn = true;
    }
  }

  changeAnimal() {
    this.rabbitElement.style.transition = "0.5s";
    this.birdElement.style.transition = "0.5s";

    if (this.nextRabbit) {
      this.rabbitElement.style.bottom = "10vh";
      setTimeout(() => (this.birdElement.style.bottom = "25vh"), 500);
      this.nextRabbit = false;
    } else {
      this.birdElement.style.bottom = "10vh";
      setTimeout(() => (this.rabbitElement.style.bottom = "25vh"), 500);
      this.nextRabbit = true;
    }

    setTimeout(() => {
      this.rabbitElement.style.transition = "0s";
      this.birdElement.style.transition = "0s";
    }, 1000);
  }
}

const magicScene = new MagicScene();
