function clearCalculator() {

    displayValue = "0";

    firstNumber = null;

    operator = null;

    waitingForSecondNumber = false;

    updateDisplay();
}


function deleteNumber() {

    if (
        displayValue ===
        "Cannot divide by zero 😏"
    ) {
        clearCalculator();
        return;
    }


    if (displayValue.length === 1) {

        displayValue = "0";

    } else {

        displayValue = displayValue.slice(0, -1);
    }


    updateDisplay();
}