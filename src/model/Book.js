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
	this.publisher = 'Fantastic Bookshelf';
	this.bookType = 'hard corver';
	this.bookCategory = 'fiction';
	this.bookDesc = 'This is the greatest book of all time!!!';
	this.edition = 1;
	this.releaseYear = new Date();
	this.numPages = numPages;
	this.bookState = bookState;
	this.date = new Date()
	this.lastChange = new Date();
} 

Book.prototype.shortDesc = function() {
	const shortDesc = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.bookState}`;
			
	return shortDesc;
}

Book.prototype.bigDesc = function() {
	const bigDesc = `${this.title} by ${this.author} has ${this.numVolumes} volumes. It's about ${this.bookCategory} and was published in the format ${this.bookType} by ${this.publisher}, in the year ${this.releaseYear}, ${this.bookState}. ${this.bookDesc}`;
	
	return bigDesc;
}

export default Book;
