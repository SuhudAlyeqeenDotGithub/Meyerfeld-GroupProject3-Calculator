const display = document.querySelector(".calculator__display-content");

function updateDisplay() {
  display.textContent = displayExpression || displayValue;
}

function roundResult(number) {
  return Math.round((number + Number.EPSILON) * 100000000) / 100000000;
}
