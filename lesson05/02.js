/**
 * 单体模式
 */

/**
 * 划分命名空间
 */

var MyNamespace = {
    findById:function(id){

    }
}

MyNamespace.findById(1);

// 命名空间还可以进一步分割
var GiantCorp = {};

GiantCorp.Common = {

};
GiantCorp.ErrorCodes = {

};
GiantCorp.PageHandler = {

}

// 包装特定网页专用代码的单体骨架
// 如果Namespace没有被创建就会报错
var Namespace = window.Namespace || {};

Namespace.PageName = {
    // Page constants
    CONSTANT_1:true,
    CONSTANT_2:10,

    // Page methods
    method1:function(){},
    method2:function(){},
    init:function(){}
}
addLoadEvent(Namespace.PageName.init);


