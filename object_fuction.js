// 함수와 객체의 관계 

var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(){
    return this.first + this.second;
}

sum.call()