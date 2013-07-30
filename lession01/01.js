// javascript 设计模式
/////////////////////////面向过程的程序设计//////////////////////////////////////
// 面向过程的程序设计
// 模拟动画过程，开始 - 停止
function startAnimation(){
    console.log("开始动画1");
}

function stopAnimation(){
    console.log("停止动画1");
}
startAnimation();
stopAnimation();

//////////////////////////面向对象的程序设计/////////////////////////////////////
// 面向对象的程序设计
// 还是模拟动画，我们可以把动画当做是一个对象，动画有两个功能 开始 - 停止

var Anim2 = function(){
    console.log("动画2");
};

Anim2.prototype.start = function(){
    console.log("开始动画2");
}

Anim2.prototype.stop = function(){
    console.log("停止动画2");
}

var myAnim2 = new Anim2();
myAnim2.start();
myAnim2.stop();

// 另一种风格写法
var Anim3 = function(){
    console.log("动画3");
};

Anim3.prototype = {
    start:function(){
        console.log("开始动画3");
    },
    stop:function(){
        console.log("停止动画3");
    }
};

var myAnim3 = new Anim3();
myAnim3.start();
myAnim3.stop();

///////////////////////////////////////////////////////////////
// 使用Function.prototype.method添加新方法

Function.prototype.method = function(name,fn){
    this.prototype[name] = fn;
};

var Anim4 = function(){
    console.log("动画4");
}
Anim4.method('start',function(){
    console.log("开始动画4");
});
Anim4.method('stop',function(){
    console.log("停止动画4");
});

var myAnim4 = new Anim4();
myAnim4.start();
myAnim4.stop();

// 采用链式的方法
Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
    return this;
}
var Anim5 = function(){
    console.log("动画5");
}
Anim5.method('start',function(){
        console.log("开始动画5");
    }).method('stop',function(){
        console.log("停止动画5");
    });
var myAnim5 = new Anim5();
myAnim5.start();
myAnim5.stop();
