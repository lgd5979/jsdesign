// 原型式继承
function clone(object){
    function F(){};
    F.prototype = object;
    return new F;
}
var Person = {
    name:'Default Name',
    getName : function(){
        return this.name;
    }
}
var reader = clone(Person);
console.log(reader.getName());

var Author = clone(Person);
Author.books = [];
Author.getBooks = function(){
    return this.books;
}

var author = [];

author[0] = clone(Author);
author[0].name = 'Dustin Diaz';
author[0].books = ['JavaScript Design Patterns'];

author[1] = clone(Author);
author[1].name = 'Ross Harmes';
author[1].books = ['JavaScript Design Patterns'];

console.log(author[1].getName()); // Ross Harmes, Author of JavaScript Design Patterns
console.log(author[1].getBooks());
