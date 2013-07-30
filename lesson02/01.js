////////////////////////////接口////////////////////////////////////
// 使用注释模仿接口----最简单的方法，但效果最差
// 优点：易实现，不需要额外的类或函数，提高代码的可重用性
// 缺点：不能检查确保方法的实现，也不会抛出错误，对测试和调试不利

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

}
// implement the Composite interface
CompositeForm.prototype.add = function(child){

};

CompositeForm.prototype.remove = function(child){

};

CompositeForm.prototype.getChild = function(index){

};
// implement the FormItem interface
CompositeForm.prototype.save = function(){

}