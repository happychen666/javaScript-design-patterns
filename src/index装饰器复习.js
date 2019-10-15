class Circle{
    constructor(name){
        this.name = name;
    }
    draw(){
        console.log(`画的圆叫：${this.name}`);
    }
}

class Decorator{
    constructor(color,circle){
        this.color = color;
        this.circle = circle;
    }
    draw(){
        console.log(`画的圆叫：${this.circle.name}`);
        this.setBorder();
    }
    setBorder(){
        console.log(`设置圆${this.color}边框`);
    }
}

let circle1 = new Circle('小花圆');
let dec = new Decorator('红色',circle1);
circle1.draw();
dec.draw();