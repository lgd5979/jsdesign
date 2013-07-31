function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

// 使用extend封装继承

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


// 这样做还有一个好处就是它既可以重定义超类的某个方法有可以访问其在超类中的实现
// 为Author重定义一个getName方法

Author.prototype.getName = function(){
    var name = Author.superclass.getName.call(this);
    return name + ', Author of ' + this.getBooks().join('');
};

var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Patterns']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Patterns']);

console.log(author[1].getName()); // Ross Harmes, Author of JavaScript Design Patterns
console.log(author[1].getBooks());




