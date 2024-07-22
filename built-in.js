console.log("Math.PI", Math.PI);
console.log("math.random()", Math.random()); // 객체에 소속 된 함수 method
console.log("Math.floor(3,9)", Math.floor(3.9));

var MyMath = {
    PI:Math.PI,
    random:function() {
        return Math.random();
    },
    floor:function(val) {
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());