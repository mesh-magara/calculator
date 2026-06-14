//create functions  that perfom the mathematical operations
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

//create a function that takes in two numbers and an operator and performs the operation on the numbers
let operand1;
let Operator;
let operand2;

//operation function that takes in two numbers and an operator and performs the operation on the numbers
function operate(number1, operator, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
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
    operand1 = Number(cleaned_string[0]);
    operand2 = Number(cleaned_string[1]);
    Operator = "+";
  } else if (displayedNumbers.includes("-")) {
    cleaned_string = displayedNumbers.split("-");
    operand1 = Number(cleaned_string[0]);
    operand2 = Number(cleaned_string[1]);
    Operator = "-";
  } else if (displayedNumbers.includes("*")) {
    cleaned_string = displayedNumbers.split("*");
    operand1 = Number(cleaned_string[0]);
    operand2 = Number(cleaned_string[1]);
    Operator = "*";
  } else {
    cleaned_string = displayedNumbers.split("/");
    operand1 = Number(cleaned_string[0]);
    operand2 = Number(cleaned_string[1]);
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
  output.textContent = ` result: ${operate(operand1, Operator, operand2)}`;
  display.textContent = "";
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  display.textContent = "";
  output.textContent = "";
  displayedNumbers = "";
  resultOperation.textContent = "";
});
