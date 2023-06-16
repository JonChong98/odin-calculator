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
        num1 = parseFloat(display.textContent);
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
        num2 = parseFloat(display.textContent);
        let result = truncate(operate(num1, num2, operator));
        reset();
        updateDisplay(result);
        state = "step";
    }
}

function truncate(num) {
    let result = num.toString();
    if (result.length <= 15) {
        return result;
    } else {
        return result.substring(0, 15);
    }
}