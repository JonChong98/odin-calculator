const display = document.querySelector(".display");
const allowedOperators = new Array("+", "-", "*", "/");

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
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "*":
            return multiply(n1, n2);
            break;
        case "/":
            return divide(n1, n2);
            break;
        default:
            console.log(`n1: ${n1}\nn2:${n2}\nop:${op}`);
            console.log("Error");
    }
}

function addSymbol(num) {
    if (resetDisplay) {
        clearDisplay();
        resetDisplay = false;
    }

    if (display.textContent.includes(".") && num === ".") {
        return;
    }
    
    if (display.textContent.length < 15) {
        display.textContent += num;
    } else {
        alert("No more space on display!");
    }
}

function removeSymbol() {
    let currText = display.textContent;
    display.textContent = currText.slice(0, currText.length - 1);
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
    if (num1 === "") {
        return;
    }

    if (operator === "/" &&  display.textContent === "0") {
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
    return Math.round(num * (10**8)) / (10**8);
}

document.onkeydown = e => {
    if (!isNaN(parseFloat(e.key))) {
        addSymbol(parseFloat(e.key));
    }

    if (allowedOperators.includes(e.key)) {
        setOperator(e.key);
    }

    if (e.key === "=" || e.key === "Enter") {
        calculate();
    }

    switch (e.key) {
        case ".":
            addSymbol(".");
            break;
        case "Backspace":
            removeSymbol();
            break;
        case "r":
            reset();
        default:
    }
}