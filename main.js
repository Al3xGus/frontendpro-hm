// Часть 1
function showInfo() {
    var birthYear = prompt("Введіть ваш рік народження:");
    if (birthYear === null) {
        alert("Шкода, що Ви не захотіли ввести свій рік народження.");
        return;
    }

    var city = prompt("Введіть ваше місто проживання:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
        return;
    }

    var favoriteSport = prompt("Введіть ваш улюблений вид спорту:");
    if (favoriteSport === null) {
        alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        return;
    }

    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    var message = "Ваш вік: " + age + "\n";

    if (city.toLowerCase() === "київ" || city.toLowerCase() === "вашингтон" || city.toLowerCase() === "лондон") {
        message += "Ти живеш у столиці " + getCountry(city) + "...\n";
    } else {
        message += "Ти живеш у місті " + city + "...\n";
    }

    // Часть 2
    var sportsAndChampions = {
        "футбол": "Ліонель Мессі",
        "баскетбол": "Леброн Джеймс",
        "теніс": "Рафаель Надаль"
    };

    if (sportsAndChampions.hasOwnProperty(favoriteSport.toLowerCase())) {
        message += "Круто! Хочеш стати " + sportsAndChampions[favoriteSport.toLowerCase()] + "?";
    }

    alert(message);
}

function getCountry(city) {
    switch (city.toLowerCase()) {
        case "київ":
            return "України";
        case "вашингтон":
            return "США";
        case "лондон":
            return "Великої Британії";
        default:
            return "";
    }
}

showInfo();
