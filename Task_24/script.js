const display = document.getElementById('display');
const previousOperandText = document.getElementById('previous-operand');

let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetScreen = false;

function updateDisplay() {
    display.value = currentInput.replace('.', ',');
    if (operator !== null) {
        const symbol = operator === '*' ? '×' : operator === '/' ? '÷' : operator === '-' ? '−' : '+';
        previousOperandText.textContent = `${previousInput.replace('.', ',')} ${symbol}`;
    } else {
        previousOperandText.textContent = '';
    }
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDot() {
    if (shouldResetScreen) {
        currentInput = '0.';
        shouldResetScreen = false;
        updateDisplay();
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendOperator(selectedOperator) {
    if (operator !== null && !shouldResetScreen) {
        calculate();
    }
    previousInput = currentInput;
    operator = selectedOperator;
    shouldResetScreen = true;
    updateDisplay();
}

function calculatePercent() {
    let current = parseFloat(currentInput);
    if (isNaN(current)) return;

    if (previousInput !== '' && (operator === '+' || operator === '-')) {
        current = (parseFloat(previousInput) * current) / 100;
    } else {
        current = current / 100;
    }

    currentInput = String(Number(current.toFixed(8)));
    updateDisplay();
}

function calculate() {
    if (operator === null || shouldResetScreen) return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('ნულზე გაყოფა არ შეიძლება!');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = String(Number(result.toFixed(8)));
    operator = null;
    previousInput = '';
    shouldResetScreen = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetScreen = false;
    updateDisplay();
}

function deleteLast() {
    if (shouldResetScreen) return;

    if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.' || e.key === ',') appendDot();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendOperator(e.key);
    if (e.key === '%') calculatePercent();
    if (e.key === 'Enter' || e.key === '=') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});