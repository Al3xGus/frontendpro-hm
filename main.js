// 1

let input1 = prompt("Введите первую строчку:");
let input2 = prompt("Введите вторую строчку:");
let input3 = prompt("Введите третью строчку:");

let result = input1 + " " + input2 + " " + input3;
console.log(result);

// 2


let number = prompt("Введите пятизначное число:");

let digits = number.toString().split("").join(" ");
console.log(digits);
