var Book = (function(){
    // Private static attributes
    var numOfBooks = 0;

    // Private static method
    function checkIsbn(isbn){

    }
    return function(newIsbn, newTitle, newAuthor){
        // Private attributes
        var isbn, title, author;

        // Private method
        this.getIsbn = function(){
            return isbn;
        };
        this.setIsbn = function(newIsbn){
            if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
            isbn = newIsbn;
        };
        this.getTitle = function(){
            return newTitle;
        };
        this.setTitle = function(newTitle){
            title = newTitle || 'No title specified';
        };
        this.getAuthor = function(){
            return newAuthor;
        };
        this.setAuthor = function(newAuthor){
            author = newAuthor || 'No author specified';
        };

        numOfBooks++;
        if(numOfBooks > 50) throw new Error('Book:Only 50 instances of Book can be create.');

        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
    }
})();

// Public static method
Book.convertToTitleCase = function(inputString){

};

// Public, non-privileged methods.
Book.prototype = {
    display: function(){

    }
};