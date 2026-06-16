//create functions  that perfom the mathematical operations
function add(arr) {
  const sum = arr.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sum;
}
function subtract(arr) {
  const difference = arr.reduce((acc, item) => {
    return acc - item;
  });

  return difference;
}
function multiply(arr) {
  const product = arr.reduce((acc, item) => {
    return acc * item;
  }, 1);

  return product;
}
function divide(arr) {
  const quotient = arr.reduce((acc, item) => {
    return acc / item;
  });

  return quotient;
}

//create a function that takes in two numbers and an operator and performs the operation on the numbers
let operands;
let Operator;

//operation function that takes in two numbers and an operator and performs the operation on the numbers
function operate(arr, operator) {
  if (operator === "+") {
    return add(arr);
  } else if (operator === "-") {
    return subtract(arr);
  } else if (operator === "*") {
    return multiply(arr);
  } else if (operator === "/") {
    return divide(arr);
  }
  return undefined;
}

const display = document.querySelector(".result");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const output = document.querySelector("#output");

let displayedNumbers = display.textContent;

//append the numbers and operators to the display when the buttons are clicked
number.forEach((button) => {
  button.addEventListener("click", () => {
    displayedNumbers += button.textContent;
    display.textContent = displayedNumbers;
  });
});

operator.forEach((button) => {
  button.addEventListener("click", () => {
    displayedNumbers += button.textContent;
    display.textContent = displayedNumbers;
  });
});

//function that takes in the displayed numbers and operators and cleans them to be used in the operate function
function cleanedOutput(displayedNumbers) {
  displayedNumbers = displayedNumbers.replace(/\s/g, ""); //remove any whitespace from the string
  let cleaned_string;

  if (displayedNumbers.includes("+")) {
    cleaned_string = displayedNumbers.split("+");
    operands = cleaned_string.map((number) => {
      return Number(number);
    });
    Operator = "+";
  } else if (displayedNumbers.includes("-")) {
    cleaned_string = displayedNumbers.split("-");
    operands = cleaned_string.map((number) => {
      return Number(number);
    });
    Operator = "-";
  } else if (displayedNumbers.includes("*")) {
    cleaned_string = displayedNumbers.split("*");
    operands = cleaned_string.map((number) => {
      return Number(number);
    });
    Operator = "*";
  } else {
    cleaned_string = displayedNumbers.split("/");
    operands = cleaned_string.map((number) => {
      return Number(number);
    });
    Operator = "/";
  }
}

//when the output button is clicked, clean the displayed numbers and operators and use them in the operate function to get the result and display it in the output div
const resultBtn = document.querySelector(".output");
const resultBox = document.querySelector(".result-box");
const resultOperation = document.createElement("div");
resultOperation.classList.add("result-operation");

//add an event listener to the output button that displays the operation being performed and the result of the operation
resultBtn.addEventListener("click", () => {
  resultOperation.textContent = displayedNumbers;
  resultBox.appendChild(resultOperation);

  cleanedOutput(displayedNumbers);
  output.textContent = ` result: ${operate(operands, Operator)}`;
  display.textContent = "";
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  display.textContent = "";
  output.textContent = "";
  displayedNumbers = "";
  resultOperation.textContent = "";
});
