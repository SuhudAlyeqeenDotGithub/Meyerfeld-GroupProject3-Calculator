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

  // Delete the operator
  if (waitingForSecondNumber) {
    displayExpression = String(firstNumber);
    displayValue = String(firstNumber);

    operator = null;
    waitingForSecondNumber = false;

    updateDisplay();
    return;
  }
  // Delete a number
  if (displayValue.length === 1) {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }

  displayExpression = displayExpression.slice(0, displayExpression.length - 1);

  updateDisplay();
}
