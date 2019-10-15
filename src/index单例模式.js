class SingleObject {
    //这里的方法不是静态方法，每次初始化类时，实例都会有自己的login方法
    login(){
        console.log('login...');
    }
}

// 这里定义的方法是静态方法，静态方法直接挂在class上，类SingleObject无论被new多少个，getInstance也只有唯一的一个
SingleObject.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new SingleObject();
        }
        return instance;
    }
})()

// SingleObject.getInstance = function(){
//     let instance;
//     if(!instance){
//         instance = new SingleObject();
//     }
//     return instance;
// }

let obj1 = SingleObject.getInstance();
let obj2 = SingleObject.getInstance();

obj1.login();
console.log(obj1===obj2);
