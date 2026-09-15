function inputOperator(newOperator) {
  if (hasError) {
    return;
  }

  const currentNumber = Number(displayValue);

  if (firstNumber === null) {
    firstNumber = currentNumber;
    operator = newOperator;
    waitingForSecondNumber = true;
    return;
  }

  if (!waitingForSecondNumber) {
    const result = operate(operator, firstNumber, currentNumber);

    if (typeof result === "string") {
      displayValue = result;
      hasError = true;
      resetOperation();
      updateDisplay();
      return;
    }

    firstNumber = roundResult(result);
    displayValue = String(firstNumber);
    updateDisplay();
  }

  operator = newOperator;
  waitingForSecondNumber = true;
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

  resetOperation();
  updateDisplay();
}

function resetOperation() {
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
}
