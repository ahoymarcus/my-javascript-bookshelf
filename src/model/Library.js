import Book from './Book.js';

function Library(title) {
    this.title = title;
    this.library = [];
}


Library.prototype.addBook = function(book) {
    let newBook = new Book(book.title, book.author, book.numPages, book.bookState);
    
    this.library.push(newBook);
}

Library.prototype.addBookList = function(books) {
    if (Array.isArray(books)) {
        for (let i in books) {
            
            let newBook = new Book(books[i].title, books[i].author, books[i].numPages, books[i].bookState);
            
//             console.log(newBook);
            
            this.library.push(newBook);
        }
    } 
}


export default Library;

