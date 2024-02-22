// 1

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// 2

const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

// 3

const N = 100;

for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        console.log(square);
    }
}

// 4

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const yourNumber = 13; // Змініть це число за потребою
if (isPrime(yourNumber)) {
    console.log(`${yourNumber} - простое число`);
} else {
    console.log(`${yourNumber} - не простое число`);
}

// 5

function isPowerOfThree(number) {
    while (number > 1) {
        if (number % 3 !== 0) {
            return false;
        }
        number /= 3;
    }
    return number === 1;
}

const yourNumber = 81; // Змініть це число за потребою
if (isPowerOfThree(yourNumber)) {
    console.log(`${yourNumber} можно получить сведением 3 в степень`);
} else {
    console.log(`${yourNumber} нельзя получить сведением 3 в степень`);
}
