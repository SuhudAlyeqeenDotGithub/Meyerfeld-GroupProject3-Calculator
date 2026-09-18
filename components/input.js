function inputNumber(number) {
  if (hasError) {
    clearCalculator();
  }

  if (waitingForSecondNumber) {
    displayValue = number;
    displayExpression += " " + number;
    waitingForSecondNumber = false;
  } else if (displayValue === "0") {
    displayValue = number;
    displayExpression = number;
  } else {
    displayValue += number;
    displayExpression += number;
  }

  updateDisplay();
}

function inputDecimal() {
  if (hasError) {
    clearCalculator();
  }

  if (displayValue.includes(".")) {
    return;
  }

  if (waitingForSecondNumber) {
    displayValue = "0.";
    displayExpression += " 0.";
    waitingForSecondNumber = false;
  } else {
    displayValue += ".";
    displayExpression += ".";
  }

  updateDisplay();
}
