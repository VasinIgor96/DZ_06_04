
// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента,
// таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.calculateAverageGrade = function() {
    const totalGrades = this.grades.reduce((total, grade) => total + grade, 0);
    return totalGrades / this.grades.length;
};

const student1 = new Student('John', 'Doe', [85, 90, 75, 95]);

const averageGrade = student1.calculateAverageGrade();
console.log(`Середній бал студента ${student1.firstName} ${student1.lastName}: ${averageGrade}`);
