// 掺元类式继承
function augment(receivingClass, givingClass){
//    for(methodName in givingClass.prototype){
//        if(!receivingClass.prototype[methodName]){
//            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
//        }
//    }
    // 改进
    if(arguments[2]){
        for(var i = 2, len = arguments.length; i < len; i++){
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }else{
        for(methodName in givingClass.prototype){
            if(!receivingClass.prototype[methodName]){
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

var Mixin = function(){};
Mixin.prototype = {
    serialize:function(){
        var output = [];
        for(key in this){
            output.push(key + ': ' + this[key]);
        }
        return output.join(', ');
    }
}

function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

function extend(subClass, superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    // 改进之前的extend,提供了superclass属性，用来弱化Author与Person之间的耦合
    subClass.superclass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}

function Author(name, books){
    Author.superclass.constructor.call(this, name); // 不需要知道父类的名称 降低了耦合度
    this.books = books;
}
extend(Author, Person);
Author.prototype.getBooks = function(){
    return this.books;
}
augment(Author, Mixin);

var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Patterns']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Patterns']);

console.log(author[1].getName());
console.log(author[1].getBooks());
console.log(author[1].serialize());


