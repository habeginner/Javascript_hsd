class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 부모 클래스의 생성자 호출
        this.breed = breed;
    }

    speak() {
        super.speak(); // 부모 클래스의 speak 메서드 호출
        console.log(`${this.name} barks.`);
    }

    getBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex makes a noise.
             // Rex barks.
dog.getBreed(); // Rex is a German Shepherd.
