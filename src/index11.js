
class Circle{
    constructor(name){
        this.name = name;
    }
    draw(){
        console.log('画一个圆形');
    }
}

class Decorator {
    constructor(circle){
        this.circle = circle;
    }
    draw() {
        this.circle.draw();
        this.setRedBorder(this.circle);
    }
    setRedBorder(circle){
        console.log(`设置 ${circle.name} 的边框为红色`);
    }
}

let circle = new Circle('小花园');
circle.draw();
let dec = new Decorator(circle);
dec.draw();