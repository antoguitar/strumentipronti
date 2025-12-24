const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn[data-value]");
const sciButtons = document.querySelectorAll(".btn.sci");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const equalBtn = document.getElementById("equal");
const percentBtn = document.getElementById("percent");
const invertBtn = document.getElementById("invert");
const degRadBtn = document.getElementById("degRad");

let isDeg = true;

// Inserimento valori normali
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.getAttribute("data-value");
    });
});

// Funzioni scientifiche
sciButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const func = btn.getAttribute("data-func");

        switch (func) {
            case "sin":
                display.value += "sin(";
                break;
            case "cos":
                display.value += "cos(";
                break;
            case "tan":
                display.value += "tan(";
                break;
            case "sqrt":
                display.value += "sqrt(";
                break;
            case "square":
                display.value += "**2";
                break;
            case "cube":
                display.value += "**3";
                break;
            case "log":
                display.value += "log10(";
                break;
            case "ln":
                display.value += "log(";
                break;
            case "pi":
                display.value += Math.PI;
                break;
            case "e":
                display.value += Math.E;
                break;
        }
    });
});

// Clear
clearBtn.addEventListener("click", () => {
    display.value = "";
});

// Backspace
backspaceBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Percentuale
percentBtn.addEventListener("click", () => {
    if (display.value) {
        display.value = String(parseFloat(display.value) / 100);
    }
});

// Inverti segno
invertBtn.addEventListener("click", () => {
    if (display.value) {
        display.value = String(parseFloat(display.value) * -1);
    }
});

// DEG/RAD
degRadBtn.addEventListener("click", () => {
    isDeg = !isDeg;
    degRadBtn.textContent = isDeg ? "DEG" : "RAD";
});

// Calcolo finale
equalBtn.addEventListener("click", () => {
    try {
        let expr = display.value;

        // Sostituzioni funzioni matematiche
        expr = expr.replace(/sin\(/g, isDeg ? "Math.sin((Math.PI/180)*" : "Math.sin(");
        expr = expr.replace(/cos\(/g, isDeg ? "Math.cos((Math.PI/180)*" : "Math.cos(");
        expr = expr.replace(/tan\(/g, isDeg ? "Math.tan((Math.PI/180)*" : "Math.tan(");
        expr = expr.replace(/sqrt\(/g, "Math.sqrt(");
        expr = expr.replace(/log10\(/g, "Math.log10(");
        expr = expr.replace(/log\(/g, "Math.log(");

        const result = Function("return " + expr)();
        display.value = result;
    } catch {
        display.value = "Errore";
    }
});
