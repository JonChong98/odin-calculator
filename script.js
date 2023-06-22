const display = document.querySelector(".display");
let num1 = "";
let num2 = "";
let operator = "";
let resetDisplay = false;

display.textContent = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(n1, n2, op) {
    switch (op) {
        case "add":
            return add(n1, n2);
            break;
        case "subtract":
            return subtract(n1, n2);
            break;
        case "multiply":
            return multiply(n1, n2);
            break;
        case "divide":
            return divide(n1, n2);
            break;
        default:
            console.log("Error");
    }
}

function addSymbol(num) {
    if (resetDisplay) {
        clearDisplay();
        resetDisplay = false;
    }
    if (display.textContent.length < 15) {
        display.textContent += num;
    } else {
        alert("No more space on display!");
    }
}

function clearDisplay() {
    display.textContent = "";
}

function reset() {
    clearDisplay();
    num1 = "";
    num2 = "";
    operator = "";
    resetDisplay = false;
}

function setOperator(op) {
    if (operator === "") {
        operator = op;
        if (display.textContent === "") {
            num1 = 0;
        } else {
            num1 = parseFloat(display.textContent);
        }
        resetDisplay = true;
    } else {
        calculate();
        operator = "";
        setOperator(op);
    }
}

function calculate() {
    if (operator === "divide" &&  display.textContent === "0") {
        alert("How about no");
    } else {
        if (display.textContent === "") {
            num2 = num1;
        } else {
            num2 = parseFloat(display.textContent);
        }
        let result = round(operate(num1, num2, operator));
        reset();
        clearDisplay();
        addSymbol(result);
        resetDisplay = true;
    }
}

function round(num) {
    return Math.round(num * (10**10)) / (10**10);
}