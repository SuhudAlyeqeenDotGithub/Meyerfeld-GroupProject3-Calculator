function inputNumber(number) {

    if (waitingForSecondNumber) {
        displayValue = number;
        waitingForSecondNumber = false;

    } else if (displayValue === "0") {
        displayValue = number;

    } else {
        displayValue += number;
    }

    updateDisplay();
}


function inputDecimal() {

    if (displayValue.includes(".")) {
        return;
    }

    if (waitingForSecondNumber) {
        displayValue = "0.";
        waitingForSecondNumber = false;

    } else {
        displayValue += ".";
    }

    updateDisplay();
}