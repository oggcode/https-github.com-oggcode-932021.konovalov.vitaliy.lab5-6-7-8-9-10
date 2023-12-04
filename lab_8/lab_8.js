const textContainer = document.querySelector("text");

const createRow = () => {
  const row = document.createElement("div");
  row.innerHTML = `
    <input class="_first" type="text"><input class="_second" type="text">
    <button class="upButton">↑</button>
    <button class="downButton">↓</button>
    <button class="deleteButton">x</button>
  `;
  return row;
};

const addRow = () => {
  const container = document.querySelector("#_container");
  if (!container) {
    console.error("Container not found.");
    return;
  }

  const row = createRow();

  if (!row) {
    console.error("Failed to create row.");
    return;
  }

  container.appendChild(row);
  setupRowEvents(row);
};

const deleteRow = (row) => {
  if (!row || !row.parentElement) {
    console.error("Invalid row element.");
    return;
  }

  row.parentElement.remove();
};

const moveUp = (element) => {
  if (!element || !element.parentElement) {
    console.error("Invalid element for moveUp.");
    return;
  }

  const parentRow = element.parentElement;
  const previousRow = parentRow.previousElementSibling;
  if (previousRow) parentRow.after(previousRow);
};

const moveDown = (element) => {
  if (!element || !element.parentElement) {
    console.error("Invalid element for moveDown.");
    return;
  }

  const parentRow = element.parentElement;
  const nextRow = parentRow.nextElementSibling;
  if (nextRow) parentRow.before(nextRow);
};

const saveValues = () => {
  const firstInputs = document.querySelectorAll("._first");
  const secondInputs = document.querySelectorAll("._second");

  if (
    !firstInputs ||
    !secondInputs ||
    firstInputs.length !== secondInputs.length ||
    !textContainer
  ) {
    console.error("Invalid input elements.");
    return;
  }

  const keyValuePairs = Array.from(firstInputs)
    .map((input, index) => `"${input.value}":"${secondInputs[index].value}"`)
    .join(", ");

  textContainer.innerHTML = `{${keyValuePairs}}`;
};

const setupRowEvents = (row) => {
  const upButton = row.querySelector(".upButton");
  const downButton = row.querySelector(".downButton");
  const deleteButton = row.querySelector(".deleteButton");

  if (!upButton || !downButton || !deleteButton) {
    console.error("Invalid buttons in row.");
    return;
  }

  upButton.addEventListener("click", () => moveUp(upButton));
  downButton.addEventListener("click", () => moveDown(downButton));
  deleteButton.addEventListener("click", () => deleteRow(deleteButton));
};

addRow();
