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

//1.super의 두 가지 용법에 대해서 말해보세요.
//2.super이 없다면 우리는 어떤 불편함이 있고 super가 있을 때는 어떤 편리함이 있는지 말해보세요.
//3.상속으로 인해서 생기는 단점을 super을 이용해서 어떻게 보완할 수 있나요?

//
//1. 부모 클래스의 생성자를 호출하고, 부모 클래스의 메소드를 먼저 실행할 수 있음



//2. super가 없을 경우 자식 클래스에서 인자가 변경되면 새로운 생성자를 매번 생성해줘야하지만 super를 통해 부모클래스의 생성자 호출이 가능



//3. 자식 클래스에서 super를 통해 변경된 인자를 추가하여 부모 클래스의 메소드를 수행할 수 있음