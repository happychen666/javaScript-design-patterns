function loadImg(src){
    let promise = new Promise((resolve,reject) => {
        let img = document.createElement('img');
        img.onload = function(){
            resolve(img);
        };
        img.onerror = function(){
            reject('图片加载失败');
        }
        img.src = src;
    });
    return promise;
}

let src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567141586897&di=61c49ae4eeaf8b0e383924e3a2ab0058&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb151f8198618367aa7f3cc7424738bd4b31ce525.jpg";

let result = loadImg(src); // result 的值是一个 promise

result.then((img) => {
    console.log(`width: ${img.width}`);
    return img;
}).then(img => {
    console.log(`height: ${img.height}`);
}).catch(ex => {
    console.log(ex);
})
