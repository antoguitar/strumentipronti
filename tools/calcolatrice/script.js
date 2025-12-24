const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn[data-value]");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const equalBtn = document.getElementById("equal");
const percentBtn = document.getElementById("percent");
const invertBtn = document.getElementById("invert");

// Inserimento valori
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.getAttribute("data-value");
    });
});

// Clear totale
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

// Calcolo finale
equalBtn.addEventListener("click", () => {
    try {
        const result = Function("return " + display.value)();
        display.value = result;
    } catch {
        display.value = "Errore";
    }
});
