// Задание первое

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let element of arr) {
        if (typeof element === 'number') {
            sum += element;
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

// Пример использования:
let array1 = [1, 'two', 3, 'four', 5];
let result1 = calculateAverage(array1);
console.log(result1);


// Задание второе

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Неверный знак';
    }
}

// Пример использования:
let x = parseFloat(prompt("Введите первое число:"));
let znak = prompt("Введите математический знак (+, -, *, /, %, ^):");
let y = parseFloat(prompt("Введите второе число:"));

let result2 = doMath(x, znak, y);
console.log(result2);


// Задание третье

function fillArray() {
    let outerLength = parseInt(prompt("Введите длину основного массива:"));
    let innerLength = parseInt(prompt("Введите длину внутренних массивов:"));

    let array3 = [];

    for (let i = 0; i < outerLength; i++) {
        let innerArray = [];
        for (let j = 0; j < innerLength; j++) {
            let value = prompt("Введите значение для элемента:");
            innerArray.push(value);
        }
        array3.push(innerArray);
    }

    return array3;
}

// Пример использования:
let result3 = fillArray();
console.log(result3);


// Задание четвёртое

function removeCharacters(inputString, charactersToRemove) {
    for (let char of charactersToRemove) {
        inputString = inputString.split(char).join('');
    }
    return inputString;
}

// Пример использования:
let inputString = prompt("Введите строку:");
let charactersToRemove = prompt("Введите символы для удаления (без пробелов):").split('');

let result4 = removeCharacters(inputString, charactersToRemove);
console.log(result4);
