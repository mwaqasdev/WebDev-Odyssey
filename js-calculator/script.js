
// array of symbols
const buttonValues = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["/", "*", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");

/* design based on iphone calculator
using plain html,css, js

we have 3 types of buttons
operators on the right side
modifiers +/-
all digits 0-9 and decimal */

// idea for the calculator
// we have 2 operands and an opeartor
// A+B, A*B, A-B, A/B
let A = 0; // 0 by default
let operator = null;
let B = null;

// reset variables
function clearAll() {
    A = 0;
    operator = null;
    B = 0;
}

// create buttons
for (let i = 0; i < buttonValues.length; i++) {
    // <button>AC</button>
    let value = buttonValues[i];
    let button = document.createElement('button');
    button.innerText = value; // takes symbols and place inside button

    // styling button colors
    if (value == "0") {
        button.style.width = "174px";
        button.style.gridColumn = "span 2"; // takes 2 columns
    }
    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#ff9500";
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#d4d4d2";
        button.style.color = "#1c1c1c";
    }

    // process button clicks
    button.addEventListener('click', function () {
        if (rightSymbols.includes(value)) {
            // right side buttons. equal symbol or operators
            if (value == "=") {
                // expect there's two values
                if (A != null) {
                    B = display.value;
                    // convert strings to number
                    let numA = Number(A);
                    let numB = Number(B);

                    // check which operator is pressed on 
                    if (operator == "/") {
                        display.value = numA / numB;
                    }
                    else if (operator == "*") {
                        display.value = numA * numB;
                    }
                    else if (operator == "-") {
                        display.value = numA - numB;
                    }
                    else if (operator == "+") {
                        display.value = numA + numB;
                    }
                    // reset values
                    clearAll();
                }
            }
            else {
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        // modifier top buttons 
        else if (topSymbols.includes(value)) {
            if (value == "AC") {
                clearAll();
                // update value
                display.value = ""
            }
            else if (value == "+/-") {
                /* Edge cases
                 1. if the screen is empty there's nth there, then we cant add a negative sign
                 2. if there is smth there, and that smth is Zero. u cant have a negative symbol in front of Zero */
                // check
                if (display.value != "" && display.value != '0') {
                    // check for negative negative
                    if (display.value[0] == "-") {//remove the negative symbol
                        display.value = display.value.slice(1);
                    }
                    else {// if positive value
                        display.value = "-" + display.value
                    }
                }
            }
            else if (value = "%") {
                display.value = Number(display.value) / 100;
            }
        }
        else { // numbers or . (decimal place)
            if (value == '.') {
                // check | prevent adding more dots
                if (display.value != "" && !display.value.includes(value)) { display.value += value; }
            }
            // check for zeros
            else if (display.value == '0') {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }
    });
    // add buttons to div/calculator
    document.getElementById("buttons").appendChild(button);
}