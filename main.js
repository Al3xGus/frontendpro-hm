let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Найти сумму и количество положительных элементов.
let sumPositive = 0;
let countPositive = 0;

// 2. Найти минимальный элемент массива и его порядковый номер.
let minElement = array[0];
let minIndex = 0;

// 3. Найти максимальный элемент массива и его порядковый номер.
let maxElement = array[0];
let maxIndex = 0;

// 4. Определить количество отрицательных элементов.
let countNegative = 0;

// 5. Найти количество нечетных положительных элементов.
let countOddPositive = 0;

// 6. Найти количество четных положительных элементов.
let countEvenPositive = 0;

// 7. Найти сумму четных положительных элементов.
let sumEvenPositive = 0;

// 8. Найти сумму нечетных положительных элементов.
let sumOddPositive = 0;

// 9. Найти произведение положительных элементов.
let productPositive = 1;

// 10. Найти максимальный среди элементов массива, остальные обнулить.
let maxElementIndex = 0;

for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    // 1. Найти сумму и количество положительных элементов.
    if (currentElement > 0) {
        sumPositive += currentElement;
        countPositive++;
    }

    // 2. Найти минимальный элемент массива и его порядковый номер.
    if (currentElement < minElement) {
        minElement = currentElement;
        minIndex = i;
    }

    // 3. Найти максимальный элемент массива и его порядковый номер.
    if (currentElement > maxElement) {
        maxElement = currentElement;
        maxIndex = i;
    }

    // 4. Определить количество отрицательных элементов.
    if (currentElement < 0) {
        countNegative++;
    }

    // 5. Найти количество нечетных положительных элементов.
    if (currentElement > 0 && currentElement % 2 !== 0) {
        countOddPositive++;
    }

    // 6. Найти количество четных положительных элементов.
    if (currentElement > 0 && currentElement % 2 === 0) {
        countEvenPositive++;
    }

    // 7. Найти сумму четных положительных элементов.
    if (currentElement > 0 && currentElement % 2 === 0) {
        sumEvenPositive += currentElement;
    }

    // 8. Найти сумму нечетных положительных элементов.
    if (currentElement > 0 && currentElement % 2 !== 0) {
        sumOddPositive += currentElement;
    }

    // 9. Найти произведение положительных элементов.
    if (currentElement > 0) {
        productPositive *= currentElement;
    }

    // 10. Найти максимальный среди элементов массива, остальные обнулить.
    if (currentElement > array[maxElementIndex]) {
        maxElementIndex = i;
    }
}

// Обнулить последний максимальный элемент.
array[maxElementIndex] = 0;

console.log("1. Сумма положительных элементов:", sumPositive);
console.log("   Количество положительных элементов:", countPositive);
console.log("2. Минимальный элемент:", minElement, "на позиции:", minIndex);
console.log("3. Максимальный элемент:", maxElement, "на позиции:", maxIndex);
console.log("4. Количество отрицательных элементов:", countNegative);
console.log("5. Количество нечетных положительных элементов:", countOddPositive);
console.log("6. Количество четных положительных элементов:", countEvenPositive);
console.log("7. Сумма четных положительных элементов:", sumEvenPositive);
console.log("8. Сумма нечетных положительных элементов:", sumOddPositive);
console.log("9. Произведение положительных элементов:", productPositive);
console.log("10. Максимальный среди элементов массива (остальные обнулены):", array);
