function createCalculatorPad() {

    const topPad = document.querySelector(".calculator__top-pad-content");
    const leftPad = document.querySelector(".calculator__bottom-pad-left-content");
    const rightPad = document.querySelector(".calculator__bottom-pad-right-content");


    topPad.innerHTML = `
        ${NumButton("C")}
        ${NumButton("del")}
        ${NumButton("÷")}
    `;


    leftPad.innerHTML = `
        <div class="num-pad__row">
            ${NumButton("1")}
            ${NumButton("2")}
            ${NumButton("3")}
        </div>

        <div class="num-pad__row">
            ${NumButton("4")}
            ${NumButton("5")}
            ${NumButton("6")}
        </div>

        <div class="num-pad__row">
            ${NumButton("7")}
            ${NumButton("8")}
            ${NumButton("9")}
        </div>

        <div class="num-pad__row">
            ${NumButton(".")}
            ${NumButton("0")}
        </div>
    `;


    rightPad.innerHTML = `
        ${NumButton("*")}
        ${NumButton("+")}
        ${NumButton("-")}
        ${NumButton("=")}
    `;
}