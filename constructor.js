class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

person1.sayHello(); // Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Hello, my name is Bob and I am 25 years old.


//condtructor 객체 안에서 함수(메소드 = 객체 안의 함수)를 만드는 역할을 한다.