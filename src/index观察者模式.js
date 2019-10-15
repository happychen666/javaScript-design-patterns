
//主题，保存状态，状态变化后触发所有观察者对象
class Subject {
    constructor(){
        this.state = 0;
        this.observers = [];
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
        this.notifyAllObserver();
    }
    notifyAllObserver(){
        this.observers.forEach(observer => {
            observer.update();
        });
    }
    attach(observer){
        this.observers.push(observer);
    }
}

//观察者
class Observer{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update(){
        console.log(`${this.name} name, state: ${this.subject.getState()}`);
    }
}

let subject = new Subject();
let o1 = new Observer('o1',subject);
let o2 = new Observer('o2',subject);
subject.setState(66);