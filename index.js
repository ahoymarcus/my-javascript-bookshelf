/*
* 
*/
const addBookBtn = document.getElementById('add-book');


addBookBtn.addEventListener('click', () => {
	alert('add book');
});


let myLibrary = [];
            
function Book(title, author, numPages, bookState) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.bookState = bookState;
} 

Book.prototype.info = function() {
    const info = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.bookState}`;
        
    return info;
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');



function addBookToLibrary() {
    
    
}




