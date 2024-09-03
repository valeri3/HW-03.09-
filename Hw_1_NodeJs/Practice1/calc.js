function sum(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль");
    }
    return a / b;
}

module.exports = function (operation, a, b) {
    switch (operation) {
        case 'sum':
            return sum(a, b);
        case 'min':
            return min(a, b);
        case 'mult':
            return mult(a, b);
        case 'div':
            return div(a, b);
        default:
            throw new Error("Некорректная операция");
    }
};