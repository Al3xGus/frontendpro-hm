class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null); // Масив для відвідуваності
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Оцінка має бути в діапазоні від 0 до 100.");
        }
    }

    present() {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance[this.attendance.findIndex(value => value === null)] = true;
        } else {
            console.log("Максимальна кількість записів про відвідуваність вже досягнута.");
        }
    }

    absent() {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance[this.attendance.findIndex(value => value === null)] = false;
        } else {
            console.log("Максимальна кількість записів про відвідуваність вже досягнута.");
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendancePercentage = this.attendance.filter(Boolean).length / 25;

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Петров", 1999);
const student2 = new Student("Марія", "Іванова", 2001);
const student3 = new Student("Олексій", "Сидоров", 2000);

student1.addGrade(95);
student1.addGrade(85);
student1.present();
student1.present();
student1.present();
student1.absent();

student2.addGrade(90);
student2.addGrade(92);
student2.present();
student2.present();
student2.present();
student2.present();

student3.addGrade(80);
student3.addGrade(88);
student3.present();
student3.absent();
student3.present();

console.log(student1.summary()); // Добре, але можна краще
console.log(student2.summary()); // Молодець!
console.log(student3.summary()); // Добре, але можна краще
