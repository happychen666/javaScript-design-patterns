class Product{
    constructor(name){
        this.name = name;
    }
    init(){
        this.fn1();
        this.fn2();
    }
    fn1(){
        console.log('fn1');
    }
    fn2(){
        console.log('fn2');
    }
}

class Creator{
    create(name){
        return new Product(name);
    }
}

let creator = new Creator();

let happy = creator.create('happy');
happy.init();