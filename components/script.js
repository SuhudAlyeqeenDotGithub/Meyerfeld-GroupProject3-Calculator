createCalculatorPad();

updateDisplay();

const buttons = document.querySelectorAll(".num-btn__content");

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

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    inputNumber(key);
  } else if (key === ".") {
    inputDecimal();
  } else if (["+", "-", "*", "/"].includes(key)) {
    inputOperator(key === "/" ? "÷" : key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    deleteNumber();
  } else if (key === "Escape") {
    clearCalculator();
  }
});
