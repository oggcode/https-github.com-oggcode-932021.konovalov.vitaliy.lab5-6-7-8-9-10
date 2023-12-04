const input = document.getElementById("amount");
const itemsContainer = document.querySelector("._items");

const showElement = (type) => {
  if (!input || !itemsContainer) {
    alert("no containers found");
    console.error("no containers found");
    return;
  }

  const count = parseInt(input.value, 10) || 0;

  for (let i = 0; i < count; i++) {
    const div = createElement(type);
    setupEvents(div, type);
    appendToSelector(div);
  }
};

const createElement = (type) => {
  const div = document.createElement("div");
  div.classList.add(type);
  setRandomPosition(div);

  if (type === "square" || type === "circle") {
    setRandomSize(div);
  }

  return div;
};

const setRandomPosition = (element) => {
  element.style.top = `${getRandom(window.innerHeight - 250)}px`;
  element.style.left = `${getRandom(window.innerWidth - 250)}px`;
};

const setRandomSize = (element) => {
  const size = `${Math.random() * 150}px`;
  element.style.width = element.style.height = size;
};

const setupEvents = (element, type) => {
  element.addEventListener("click", () => changeColor(element, type));
  element.addEventListener("dblclick", () => removeElement(element));
};

const changeColor = (element, type) => {
  const color = generateRandomColor();

  if (type === "triangle") {
    element.style.borderBottomColor = color;
  } else {
    element.style.background = color;
  }
};

const generateRandomColor = () => {
  const r = getRandom();
  const g = getRandom();
  const b = getRandom();
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const getRandom = (d = 256) => {
  return Math.floor(Math.random() * d);
};

const removeElement = (element) => {
  element.remove();
};

const appendToSelector = (element) => itemsContainer.appendChild(element);

function validateInput(inputElement) {
  const min = parseInt(inputElement.min);
  const max = parseInt(inputElement.max);
  let value = parseInt(inputElement.value);

  if (isNaN(value)) {
    value = min;
  }

  if (value < min) {
    value = min;
  } else if (value > max) {
    value = max;
  }

  inputElement.value = value;
}
