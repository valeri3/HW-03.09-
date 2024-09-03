function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.printInfo = function() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Пол: ${this.gender}`);
    };
}

exports.Person = Person;
