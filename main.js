let users = [
    // ваш массив объектов
];

// Фильтрация пользователей с балансом более 2000 долларов
let usersWithHighBalance = users.filter(user => parseFloat(user.balance.replace('$', '').replace(',', '')) > 2000);

// Вывод массива телефонных номеров пользователей с высоким балансом
let phoneNumbers = usersWithHighBalance.map(user => user.phone);
console.log("Телефонные номера пользователей с балансом более 2000 долларов:", phoneNumbers);

// Вычисление суммы всех балансов пользователей
let totalBalance = users.reduce((sum, user) => sum + parseFloat(user.balance.replace('$', '').replace(',', '')), 0);
console.log("Общий баланс всех пользователей:", totalBalance.toFixed(2));
