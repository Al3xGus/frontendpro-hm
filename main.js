var operation = prompt("Введите операцию: (add, sub, mult, div):");

var num1 = parseFloat(prompt("Введите первое число:"));

var num2 = parseFloat(prompt("Введите второе число:"));

switch (operation) {
    case "add":
        var result = num1 + num2;
        alert(num1 + " + " + num2 + " = " + result);
        break;
    case "sub":
        var result = num1 - num2;
        alert(num1 + " - " + num2 + " = " + result);
        break;
    case "mult":
        var result = num1 * num2;
        alert(num1 + " * " + num2 + " = " + result);
        break;
    case "div":
        if (num2 !== 0) {
            var result = num1 / num2;
            alert(num1 + " / " + num2 + " = " + result);
        } else {
            alert("Деление на ноль невозможно.");
        }
        break;
    default:
        alert("Пожалуйста, введите корректную операцию.");
}
