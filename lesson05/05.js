/**
 * 单体模式
 */

/**
 * 单体 - 分支
 */

Namespace.Singleton = (function(){
    var ObjectA = {
        method1:function(){},
        method2:function(){}
    };
    var ObjectB = {
        method1:function(){},
        method2:function(){}
    };

    return (someCondition) ? ObjectA : ObjectB;
})();
//91

