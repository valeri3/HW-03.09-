function Student(name, age, studentID) {
    this.name = name;
    this.age = age;
    this.studentID = studentID;
    this.printInfo = function() {
        console.log(`ID: ${this.studentID}, Имя: ${this.name}, Возраст: ${this.age}`);
    };
}

function Group() {
    this.students = [];

    this.addStudent = function(student) {
        this.students.push(student);
    };

    this.removeStudent = function(studentID) {
        this.students = this.students.filter(student => student.studentID !== studentID);
    };

    this.editStudent = function(studentID, newName, newAge) {
        const student = this.students.find(student => student.studentID === studentID);
        if (student) {
            student.name = newName;
            student.age = newAge;
        }
    };

    this.printStudents = function() {
        this.students.forEach(student => student.printInfo());
    };
}

exports.Student = Student;
exports.Group = Group;
