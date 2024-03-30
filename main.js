class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(human) {
        this.residents.push(human);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Cannot add more apartments. Maximum capacity reached.");
        }
    }
}

const person1 = new Human("John", "male");
const person2 = new Human("Alice", "female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
