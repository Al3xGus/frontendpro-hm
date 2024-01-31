function powerRecursive(num, degree) {

    if (degree === 0) {
        return 1;
    }

    else {
        return num * powerRecursive(num, degree - 1);
    }
}

const number = 2;
const exponent = 3;
const result = powerRecursive(number, exponent);
console.log(`${number}^${exponent} = ${result}`);
