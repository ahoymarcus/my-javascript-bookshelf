/*
 * Other book's properties:
 * coAuthors
 * volumes
 * publisher
 * edition
 * releaseYear
 * area
 * publicationType
 * date
 * lastChange
 * 
 */


function Book(title, author, numPages, bookState) {
	this.title = title;
	this.author = author;
	this.coauthors = [];
	this.numVolumes = 1;
	this.publisher = '';
	this.bookType = 'hard corver';
	this.bookCategory = 'fiction';
	this.bookDesc = '';
	this.edition = 1;
	this.releaseYear = new Date();
	this.numPages = numPages;
	this.bookState = bookState;
	this.date = new Date()
	this.lastChange = new Date();
} 

Book.prototype.info = function() {
	const info = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.bookState}`;
			
	return info;
}


export default Book;
