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
}

function Author(name, books){
    Person.call(this, name);
    this.books = books;
}
extend(Author, Person);
Author.prototype.getBooks = function(){
    return this.books;
}
var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Patterns']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Patterns']);

console.log(author[1].getName());
console.log(author[1].getBooks());


