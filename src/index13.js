function readOnly(target,name,descriptor){
    console.log(target,name,descriptor);
    
}

class Person{
    constructor(){
        this.first = 'A';
        this.last = 'B';
    }

    @readOnly
    name66(){
        return `${this.first}  ${this.last}`
    }
}

let p = new Person();
console.log(p.name66());
