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

//객체의 __proto__ 속성은 객체가 실제로 참조하는 프로토타입 객체
//prototype 속성은 해당 생성자 함수로 생성된 모든 객체가 공유하는 프로토타입 객체