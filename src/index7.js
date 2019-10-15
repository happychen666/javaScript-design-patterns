class Product{
    constructor(name){
        this.name = name;
    }
    init(){
        console.log('init');
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
        return  new Product(name);
    }
}

let creator1 = new Creator();
let p = creator1.create('p1');
p.init();
p.fn1();

let creator2 = new Creator();
let p2 = creator2.create('p2');
p2.init();
p2.fn1(); 