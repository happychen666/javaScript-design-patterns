class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`my name is ${this.name},age ${this.age}`);
    }
}

let happy = new Person('happy',20);
console.log(happy.eat());

class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id = id;
    }

    study(){
        console.log(`my study id is ${this.id}`);
    }
}

let studentA = new Student('chen',18,'A');
console.log(studentA.study());
console.log(studentA.eat());
console.log(studentA.name);
console.log(studentA.speak());


