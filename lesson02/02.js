////////////////////////////接口////////////////////////////////////
// 使用属性检查模仿接口

/**

 interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
 }

 interface FormItem {
    function save();
 }

 */

var CompositeForm = function(id, method, action){ // implements Composite， FormItem
    this.implementsInterfaces = ['Composite', 'FormItem'];
}

function addForm(formInstance){
    if(!implements(formInstance,'Composite', 'FormItem')){
        throw new Error("Object does not implement a required interface.");
    }
}

function implements(object){
    for(var i = 1; i < arguments.length; i++){
        var interfaceName = arguments[i];
        var interfaceFound = false;
        for(var j = 1; j < object.implementsInterfaces.length; j++){
            if(object.implementsInterfaces[j] == interfaceName){
                interfaceFound = true;
                break;
            }
        }
        if(!interfaceFound){
            return false;
        }
    }
    return true;
}

