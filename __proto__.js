const animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = {
    name: 'Rex',
    bark() {
        console.log(`${this.name} barks.`);
    }
};

// dog의 __proto__를 animal로 설정
dog.__proto__ = animal;

dog.speak(); // Rex makes a noise.
dog.bark(); // Rex barks.


// __proto__ 객체 간의 상속 가능 
// animal의 메소드(객체의 함수)를 변수 dog가 사용할 수 있다. 