createCalculatorPad();

updateDisplay();

const buttons = document.querySelectorAll(".num-pad__content");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.dataset.value;

    if (!isNaN(value)) {
      inputNumber(value);
    } else if (value === ".") {
      inputDecimal();
    } else if (["+", "-", "*", "÷"].includes(value)) {
      inputOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearCalculator();
    } else if (value === "del") {
      deleteNumber();
    }
  });
});
