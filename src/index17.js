class Color{
    constructor(rgb){
        this.rgb = rgb;
    }
}

class Shape{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    draw(){
        console.log(`${this.name} color is ${this.color.rgb}`);
    }
}

let color = new Color('red');
let shape = new Shape('circle',color);

shape.draw();