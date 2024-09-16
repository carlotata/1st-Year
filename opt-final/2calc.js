function calculate(operator) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'ENTER NUMBER!';
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Cannot divide by zero';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operator';
        }
        document.getElementById('result').innerText = result;
    }
}

