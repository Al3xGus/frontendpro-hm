var length = prompt("Введите длину массива:");
var array = [];
for (var i = 0; i < length; i++) {
    var element = prompt("Введите элемент массива на позицию " + (i + 1) + ":");
    array.push(element);
}
document.write("Начальный массив: " + array.join(", ") + "<br>");
array.sort();
document.write("Отсортированный массив: " + array.join(", ") + "<br>");
array.splice(1, 3);
document.write("Обновленный массив после удаления элементов со 2 по 4: " + array.join(", "));
