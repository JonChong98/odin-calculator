const display = document.querySelector(".display");

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

let num1 = "";
let num2 = "";
let operator = "";
let state = "";

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

function updateDisplay(num) {
    if (state === "step") {
        clearDisplay();
        state = "";
    }

    if (display.textContent.length < 15) {
        if (display.textContent === null) {
            display.textContent = "";
        }
        display.textContent += num;
    } else {
        alert("No more space on display!");
    }
}

function clearDisplay() {
    display.textContent = "";
}

function reset() {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function setOperator(op) {
    if (operator === "") {
        operator = op;
        num1 = parseInt(display.textContent, 10);
        state = "step";
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
        num2 = parseInt(display.textContent, 10);
        let result = operate(num1, num2, operator);
        reset();
        updateDisplay(result);
        state = "step";
    }
}