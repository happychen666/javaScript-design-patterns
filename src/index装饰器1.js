class Circle{
    constructor(name){
        this.name = name;
    }
    draw(){
        console.log('画个圆');
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle;
    }
    draw(){
        this.circle.draw();
        this.setRedBorder(this.circle);
    }
    setRedBorder(circle){
        console.log(`${circle.name} 设置成红色边框`);
    }
}
let testcircle = new Circle('o1');
let dec = new Decorator(testcircle);
dec.draw();