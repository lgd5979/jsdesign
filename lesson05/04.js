/**
 * 单体模式
 */

/**
 * 单体惰性实例化
 */

Namespace.Singleton = (function(){
    var uniqueInstance;
    function constructor(){ // 1、使用constructor包裹
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
    }
    return {
        getInstance:function(){ // 2、return getInstance
            // 控制单体类实例化时机
            // 1.它必须知道该类是否已经被实例化过
            // 2.如果该类已经实例化过，那么它需要掌握其实例的情况，以便能返回这个实例。引入一个私用属性uniqueInstance
            if(!uniqueInstance){
                uniqueInstance = constructor();
            }
            return uniqueInstance;
        }
    }
})();
Namespace.PageName.getInstance().publicMethod1(); // 调用

