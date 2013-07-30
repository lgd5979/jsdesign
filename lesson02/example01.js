var Person = new Interface("Person", ["setAge","getName","setAge","getAge"]);

var Man = function(name, age){
    this.setName(name);
    this.setAge(age);
}
Man.prototype = {
    setName:function(name){
        this._name = name;
    },
    getName:function(){
        return this._name;
    },
    setAge:function(age){
        this._age = age;
    },
    getAge:function(){
        return this._age;
    }
}
var test = function(instance){
    Interface.ensureImplements(instance, Person);
    var name = instance.getName();
    console.log(name);
}
test(new Man("Jimmy", 24));