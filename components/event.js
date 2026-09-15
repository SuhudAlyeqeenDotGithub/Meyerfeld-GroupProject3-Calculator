document.addEventListener("click", function (event) {
  const button = event.target.closest(".num-pad__content");

  if (!button) {
    return;
  }

  const value = button.dataset.value;

  if (value >= "0" && value <= "9") {
    inputNumber(value);
    return;
  }

  if (value === ".") {
    inputDecimal();
    return;
  }

  if (value === "C") {
    clearCalculator();
    return;
  }

  if (value === "del") {
    deleteNumber();
    return;
  }

  if (value === "=") {
    calculate();
    return;
  }

  if (value === "+" || value === "-" || value === "*" || value === "÷") {
    inputOperator(value);
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    inputNumber(key);
    return;
  }

  if (key === ".") {
    inputDecimal();
    return;
  }

  if (key === "+" || key === "-" || key === "*" || key === "/") {
    inputOperator(key === "/" ? "÷" : key);

    return;
  }

  if (key === "=" || key === "Enter") {
    calculate();
    return;
  }

  if (key === "Backspace") {
    deleteNumber();
    return;
  }

  if (key === "Escape" || key === "Delete") {
    clearCalculator();
  }
});
