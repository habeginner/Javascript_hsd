const person = {
    init(name, age) {
        this.name = name;
        this.age = age;
    },
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
};

const student = Object.create(person);

student.initStudent = function(name, age, grade) {
    this.init(name, age);
    this.grade = grade;
};

student.describeStudent = function() {
    return `${this.describe()} They are in grade ${this.grade}.`;
};

// 새로운 학생 객체 생성
const alice = Object.create(student);
alice.initStudent('Alice', 20, 'Junior');

console.log(alice.describeStudent()); // Alice is 20 years old. They are in grade Junior.


//prototype 보다 좋음