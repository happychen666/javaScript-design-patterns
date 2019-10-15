//一个原型对象
let pro = {
  getName:function(){
      return this.first + ' ' + this.last;
  },
  say:function(){
      console.log('hello');
  }
}

//基于原型对象创建新的对象 (clone)
let x = Object.create(pro);
x.first = 'happy';
x.last = 'chen';
let result = x.getName();
console.log(result);
