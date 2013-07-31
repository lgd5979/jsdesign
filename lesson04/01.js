function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

var reader = new Person("Jimmy");
console.log(reader.getName());

// 原型链

function Author(name, books){
    Person.call(this, name);  // 1.
    this.books = books;
}

Author.prototype = new Person();  // 2.
Author.prototype.constructor = Author;  // 3.
Author.prototype.getBooks = function(){
    return this.books;
}

var author = [];
author[0] = new Author('Dustin Diaz', ['JavaScript Design Patterns']);
author[1] = new Author('Ross Harmes', ['JavaScript Design Patterns']);

console.log(author[1].getName());
console.log(author[1].getBooks());



