class Adaptee{
    constructor(name){
        this.name = name;
    }
    specificRequest(){
        return `English:${this.name}`;
    }
}

class Target{
    constructor(name){
        this.adaptee = new Adaptee(name);
    }
    request(){
        let info = this.adaptee.specificRequest();
        return `${info} - 中文 - 陈开心`;
    }
}

let target = new Target('happy chen');

let result = target.request();
console.log(result);
