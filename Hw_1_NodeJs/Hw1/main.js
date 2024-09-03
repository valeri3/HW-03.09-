// Задача 1:
// Создайте тип, описывающий точку в двумерной системе координат (x, y).
// С помощью этой структуры задайте две точки.
// Будет ли прямая, проходящая через эти точки, параллельна оси ординат или оси абсцисс?
const task1 = require('./task1');

console.log("Задача 1:");
var point1 = new task1.Point(1, 2);
var point2 = new task1.Point(1, 5);

console.log(task1.isLineParallel(point1, point2));

point1.print();
point2.print();

// Задача 2:
// Создать тип, описывающий человека.
// Создать функции для работы с этой структурой
// (например, заполнение объекта и распечатка данных объекта).
const task2 = require('./task2');

console.log("\nЗадача 2:");

var person1 = new task2.Person("Иван", 30, "мужской");
person1.printInfo();

// Задача 3:
// Создать тип, описывающий обычную дробь.
// Написать функции, реализующие операции сложения, вычитания, умножения и деления дробей.
const task3 = require('./task3');

console.log("\nЗадача 3:");
var fraction1 = new task3.Fraction(1, 2);
var fraction2 = new task3.Fraction(3, 4);

var resultAdd = fraction1.add(fraction2);
resultAdd.print(); //10/8

var resultSubtract = fraction1.subtract(fraction2);
resultSubtract.print(); //-2/8

var resultMultiply = fraction1.multiply(fraction2);
resultMultiply.print(); //3/8

var resultDivide = fraction1.divide(fraction2);
resultDivide.print(); //4/6

// Задача 4:
// Написать программу, реализующую журнал академической группы с произвольным количеством студентов.
// Программа должна предоставлять возможность добавления студента в группу, удаления студента из группы,
// редактирования данных о студенте, вывода информации о студентах на экран.
const task4 = require('./task4');

console.log("\nЗадача 4:");
var group = new task4.Group();

var student1 = new task4.Student("Иван", 20, 1);
var student2 = new task4.Student("Мария", 22, 2);
var student3 = new task4.Student("Анна", 19, 3);

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log("Все студенты:");
group.printStudents();

group.editStudent(2, "Мария Иванова", 23);
console.log("После редактирования студента с ID 2:");
group.printStudents();

group.removeStudent(1);
console.log("После удаления студента с ID 1:");
group.printStudents();
