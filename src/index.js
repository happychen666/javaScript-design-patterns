class jquery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        //document.querySelectorAll(selector)获取的是类数组
        let dom = slice.call(document.querySelectorAll(selector));//返回数组
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    append(node) {
        //...
    }
    addClass(name) {
        //...
    }
    html(data) {
        //...
    }
    //此处省略 N 个 API
}

window.$ = function(selector){
    //通过 工厂模式 初始化一个实例
    return new jquery(selector);
}

//测试代码
let $p = $('p');
console.log($p);
console.log($p.addClass);

