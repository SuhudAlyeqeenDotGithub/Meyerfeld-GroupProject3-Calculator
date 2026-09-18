function inputOperator(newOperator) {
  if (hasError) {
    return;
  }

  // If there is no first number yet, store the current number
  if (firstNumber === null) {
    firstNumber = Number(displayValue);
    operator = newOperator;
    waitingForSecondNumber = true;

    displayExpression = displayValue + " " + newOperator;

    updateDisplay();
    return;
  }

  // If we are already waiting for a second number,
  // just replace the operator.
  if (waitingForSecondNumber) {
    operator = newOperator;

    displayExpression = String(firstNumber) + " " + newOperator;

    updateDisplay();
    return;
  }

  // We have both numbers, so calculate the previous operation
  const secondNumber = Number(displayValue);
  const result = operate(operator, firstNumber, secondNumber);

  if (typeof result === "string") {
    displayValue = result;
    hasError = true;
    resetOperation();
    updateDisplay();
    return;
  }

  firstNumber = roundResult(result);
  displayValue = String(firstNumber);

  operator = newOperator;
  waitingForSecondNumber = true;

  displayExpression = displayValue + " " + newOperator;

  updateDisplay();
}

function calculate() {
  if (
    firstNumber === null ||
    operator === null ||
    waitingForSecondNumber ||
    hasError
  ) {
    return;
  }

  const secondNumber = Number(displayValue);
  const result = operate(operator, firstNumber, secondNumber);

  if (typeof result === "string") {
    displayValue = result;
    hasError = true;
  } else {
    displayValue = String(roundResult(result));
  }

  displayExpression = displayValue;

  resetOperation();
  updateDisplay();
}

function resetOperation() {
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
}
