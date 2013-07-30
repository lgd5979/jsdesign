////////////////////////////接口////////////////////////////////////
// 使用鸭式辨型模仿接口

// Interfaces
var Composite = new Interface('Composite',['add','remove','getChild']);
var FormItem = new Interface('FormItem',['save']);

var CompositeForm = function(id, method, action){ // implements Composite， FormItem
    this.implementsInterfaces = ['Composite', 'FormItem'];
}

function addForm(formInstance){
    ensureImplements(formInstance, Composite, FormItem);
    // 检测接口中的方法是否被实现，没有就抛出错误异常
}


