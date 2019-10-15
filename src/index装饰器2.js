//第一个例子
// @testDesc
// class Demo{

// }
// function testDesc(target){
//     console.log(target);
    
//     target.isDec = true;
// }

// console.log(Demo.isDec);


//第二个例子
// function testDec(isDec){
//     return function(target){
//         target.isDec = isDec;
//     }
// }

// @testDec(false)
// class Demo{

// }

// console.log(Demo.isDec);


//第三个例子：装饰类
// function mixins(...list){
//     console.log(...list);
//     return function(target){
//         console.log(target.prototype);
//         Object.assign(target.prototype,...list);
//     }
// }

// const Foo = {
 //   a:2,
//     foo(){
//         console.log('foo');
//     }
// }

// @mixins(Foo)
// class Myclass{

// }

// let obj = new Myclass();
// console.log(obj.foo());

//第四个例子：装饰方法
// function readOnly(target,name,descriptor){
//     console.log(name);
    
//     descriptor.writable = false;
//     return descriptor;
// }

// class Person{
//     constructor(){
//         this.first = 'A';
//         this.last = 'B';
//     }

//     @readOnly
//     getName(){
//         return `${this.first} ${this.last}`
//     }
// }

// let p = new Person();
// console.log(p.getName());
// p.getName = function(){

// }


//第五个例子
// function log(target,name,descriptor){
//     let oldValue = descriptor.value;
//     console.log(oldValue);
//     descriptor.value = function(){
//         console.log(arguments);
//         return oldValue.apply(this,arguments);
//     }
// }

// class Math{
//     @log
//     add(a,b){
//         return a+b;
//     }
// }

// let m = new Math();
// let result = m.add(1,6);
// console.log(result);


//第六个例子，直接引用第三方库
import {readonly,deprecate} from 'core-decorators';

class Person{
    // @readonly
    // name(){
    //     return 'happychen';
    // } 
    
    @deprecate
    name(){
        return 'happychen';
    }
}

let p = new Person();
console.log(p.name());
