function createSumFunction() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    };
}

const sum = createSumFunction();

console.log(sum(3));   // 3
console.log(sum(5));   // 8
console.log(sum(20));  // 28
