// Вывести на страницу в одну строку через запятую числа от 10 до 20:
for (let i = 10; i <= 20; i++) {
    console.log(i + ', ');
}

// Вывести квадраты чисел от 10 до 20:
for (let i = 10; i <= 20; i++) {
    console.log(i * i + ', ');
}

// Вывести таблицу умножения на 7:
for (let i = 1; i <= 10; i++) {
    console.log(7 * i + ', ');
}

// Найти сумму всех целых чисел от 1 до 15:
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Сумма: ' + sum);

// Найти произведение всех целых чисел от 15 до 35:
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log('Произведение: ' + product);

// Найти среднее арифметическое всех целых чисел от 1 до 500:
let sum500 = 0;
for (let i = 1; i <= 500; i++) {
    sum500 += i;
}
let average500 = sum500 / 500;
console.log('Среднее арифметическое: ' + average500);

// Вывести сумму только четных чисел в диапазоне от 30 до 80:
let sumEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log('Сумма четных чисел: ' + sumEven);

// Вывести все числа в диапазоне от 100 до 200 кратные 3:
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i + ', ');
    }
}

// Дано натуральное число. Найти и вывести на страницу все его делители:
let number36 = 36;
console.log('Делители числа ' + number36 + ': ');
for (let i = 1; i <= number36; i++) {
    if (number36 % i === 0) {
        console.log(i + ' ');
    }
}

// Определить количество его четных делителей:
let number36Count = 36;
let count36 = 0;
for (let i = 1; i <= number36Count; i++) {
    if (number36Count % i === 0 && i % 2 === 0) {
        count36++;
    }
}
console.log('Количество четных делителей: ' + count36);

// Найти сумму его четных делителей:
let number36Sum = 36;
let sum36 = 0;
for (let i = 1; i <= number36Sum; i++) {
    if (number36Sum % i === 0 && i % 2 === 0) {
        sum36 += i;
    }
}
console.log('Сумма четных делителей: ' + sum36);

// Вывести полную таблицу умножения от 1 до 10:
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i * j + ' ');
    }
    console.log('');
}
