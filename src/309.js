// 代码开始
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("除数不能为零");
    }
    return a / b;
}
// 代码结束
