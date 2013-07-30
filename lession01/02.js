// 函数是一等对象

// 使用匿名函数 结尾的()代表立即执行
(function(){
    var foo = 10;
    var bar = 2;
    console.log(foo * bar);
})();

// 向匿名函数传值
(function(foo,bar){
    console.log(foo * bar);
})(10,5);

// 匿名函数也可以返回值
var baz = (function(foo, bar){
    return foo * bar;
})(10,8);
console.log(baz);

// 匿名函数的用途就是用来创建闭包，而闭包是一个受到保护的变量空间，我们通过它来创建私有变量

var baz2;
(function(){
    var foo = 20;
    var bar = 2;
    baz2 = function(){
        return foo * bar;
    };
})();

console.log(baz2());