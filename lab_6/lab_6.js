const setStyles = (element, styles) => {
  for (const [property, value] of Object.entries(styles)) {
    element.style[property] = value;
  }
};

const showOneColumn = (blockExpand, blockHide) => {
  const hideElement = document.querySelector(blockHide);
  const expandElement = document.querySelector(blockExpand);

  setStyles(hideElement, { width: "0%" });
  setStyles(hideElement.querySelector("img"), { display: "none" });

  setStyles(expandElement, { width: "100%" });

  const expandImg = expandElement.querySelector("img");
  setStyles(expandImg, { display: "block", width: "75%" });
};

const showBothColumn = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((element) => {
    const imgElement = element.querySelector("img");

    setStyles(element, { width: "50%" });
    setStyles(imgElement, { display: "block", width: "100%" });
  });
};

showOneColumn(".left", ".right");
