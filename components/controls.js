function clearCalculator() {
  displayValue = "0";
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
  hasError = false;
  displayExpression = "";

  updateDisplay();
}

function deleteNumber() {
  if (hasError) {
    clearCalculator();
    return;
  }

  if (waitingForSecondNumber) {
    return;
  }

  if (displayValue.length === 1) {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }

  updateDisplay();
}
