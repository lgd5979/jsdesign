/**
 * 单体模式
 */

/**
 * 在单体对象内创建私有成员
 */

// 1、使用下划线提醒其他程序员这个方法或属性是私用的

Namespace.Singleton = {
    _method1:function(){
        // private
    },
    method2:function(){
        // public
    }
}

// 2、使用闭包来创建私有成员

Namespace.Singleton = {};

Namespace.Singleton = function(){
    return {};
}();

Namespace.Singleton = (function(){
    var privateAttribute1 = false;
    var privateAttribute2 = [1, 2, 3];

    function privateMethod1(){

    }
    function privateMethod2(){

    }
    return {
        publicAttribute1:true,
        publicAttribute2:10,

        publicMethod1:function(){},
        publicMethod2:function(args){}
    }
})();

