var superObj = {superVal:'super'} 
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal => ',subObj.subVal);
console.log('subObj.superVal => ',subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal);

kim  = {
    name: 'kim',
    first:10, second:20,
    sum:function(){return this.first+ this.second}
}

lee = {
    name:'lee',
    first:10,second:10,
    avg:function(){
        return (this.first+this.second)/2;
    }
}

lee.__proto__ = kim;   // 이 프로토에서  김의  sum:function(){return this.first+ this.second}
//를 가져오는 것이다.
console.log('lee.sum() : ',lee.sum());