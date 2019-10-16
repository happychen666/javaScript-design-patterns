class Person {
    name
    age
    protected weight //受保护的属性，只有自己和子类可以访问
    constructor(name, age,weight) {
        this.name = name; 
        this.age = age;
        this.weight = weight
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`my name is ${this.name},age ${this.age}`);
    }
    getWeight(){
        console.log(`weight is ${this.weight}`);
    }
}

class Student extends Person{
    id
    private girlfriend
    constructor(name,age,weight,id,girlfriend){
        super(name,age,weight);
        this.id = id;
        this.girlfriend = girlfriend;
    }

    study(){
        console.log(`my study id is ${this.id}`);
    }

    getGirlfirnd(){
        console.log(`girlfriend ${this.girlfriend}`);
    }
}

let studentA = new Student('chen',18,96,'A','daxiang');
studentA.getWeight();//正常
studentA.getGirlfirnd();//正常
console.log(studentA.weight);//报错，只能类它自己以及它的子类可以访问，不能外部访问
console.log(studentA.girlfriend);//报错，只能类它自己访问，不能外部访问



