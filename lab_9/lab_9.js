let currentOperand = "";
let expressionBuffer = "";
let isNewResult = 1;
let isOperatorSet = 1;
let inputElement = document.querySelector("#input");
let bufferElement = document.querySelector("#buffer");

const onClickHandler = (event) => {
  const content = event.target.textContent;

  switch (content) {
    case "/":
    case "*":
    case "+":
    case "-":
      if (isOperatorSet) {
        currentOperand = performOperation(currentOperand, content);
        inputElement.value = expressionBuffer;
        bufferElement.value = currentOperand;
        currentOperand = "";
        expressionBuffer += " ";
      } else break;
      break;
    case "C":
      currentOperand = clearOperand();
      bufferElement.value = currentOperand;
      inputElement.value = currentOperand;
      currentOperand = "";
      break;
    case "←":
      currentOperand = removeLastElement(currentOperand);
      bufferElement.value = currentOperand;
      inputElement.value = expressionBuffer + currentOperand;
      break;
    case "=":
      currentOperand = calculateResult(currentOperand);
      bufferElement.value = currentOperand;
      inputElement.value = "";
      expressionBuffer = currentOperand;
      currentOperand = "";
      break;
    case ".":
      currentOperand = addDecimalPoint(currentOperand);
      bufferElement.value = currentOperand;
      inputElement.value = expressionBuffer + currentOperand;
      break;
    default:
      isOperatorSet = 1;
      currentOperand += content;
      if (currentOperand[0] === "0") {
        currentOperand = currentOperand.slice(1, currentOperand.length);
        inputElement.value = "0";
        bufferElement.value = "0";
      } else {
        inputElement.value = expressionBuffer + currentOperand;
        bufferElement.value = currentOperand;
      }
  }
};

const calculateResult = (operand) => {
  operand = eval(expressionBuffer + operand);
  isNewResult = 1;
  isOperatorSet = 1;
  return operand;
};

const clearOperand = () => {
  currentOperand = "0";
  expressionBuffer = "";
  isNewResult = 1;
  isOperatorSet = 1;
  return currentOperand;
};

const removeLastElement = (operand) => {
  if (!operand == "") {
    operand = operand.slice(0, -1);
    expressionBuffer += operand;
    expressionBuffer = expressionBuffer.slice(0, -operand.length);
  } else {
    expressionBuffer = "";
    return 0;
  }

  return operand;
};

const addDecimalPoint = (operand) => {
  if (isNewResult) {
    operand += ".";
    isNewResult = 0;
    return operand;
  } else return operand;
};

const performOperation = (operand, operator) => {
  if (isOperatorSet) {
    expressionBuffer += operand + ` ${operator}`;
    operand = `${operator} `;
    isNewResult = 1;
    isOperatorSet = 0;
    return operand;
  } else return operand;
};

document.querySelectorAll("td").forEach((element) => {
  element.addEventListener("click", onClickHandler);
});
