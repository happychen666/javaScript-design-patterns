import { log } from "util";

//应用 ：购物车  登录框  
//jQuery 只有一个 $，及时引用了很多个 jQuery 那也只有一个 $
// class SingleObject{
//     login(){
//         console.log('login');
//     }
// }

// SingleObject.getInstance = (function(){
//     let instance;
//     return function(){
//         if(!instance){
//             instance = new SingleObject();
//         }
//         return instance; 
//     }
// })();

// let obj1 = SingleObject.getInstance();
// let obj2 = SingleObject.getInstance();

// obj1.login();
// obj2.login();

// console.log(obj1===obj2);


//登录框演示
class LoginForm{
    constructor(){
        this.show = 'hide';
    }
    showF(){
        if(this.show == 'show'){
            console.log('已经显示');
            return;
        }
        this.show = 'show';
        console.log('显示完毕');
    }
    hide(){
        if(this.show == 'hide'){
            console.log('已经隐藏');
            return;
        }
        this.show == 'hide';
        console.log('隐藏成功');
    }
}

LoginForm.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new LoginForm();
        }
        return instance;
    }
})();

let f1 = LoginForm.getInstance();
let f2 = LoginForm.getInstance();

f1.showF();
f2.showF();
console.log(f1===f2);
