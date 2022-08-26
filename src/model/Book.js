function Book(title, author, numPages, bookRead) {
	this.title = title;
	this.author = author;
	this.coauthors = [];
	this.numVolumes = 1;
	this.publisher = 'Fantastic Bookshelf';
	this.bookType = 'hard corver';
	this.bookCategory = 'fiction';
	this.edition = 1;
	this.releaseYear = new Date();
	this.numPages = numPages;
	this.bookRead = bookRead;
	this.date = new Date()
	this.lastChange = new Date();
	
	this.bookDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor ac suscipit volutpat, urna odio suscipit tortor, ut condimentum metus nulla sodales nisl.`;
} 

Book.prototype.info = function() {
	const shortDesc = `The book "${this.title}" by ${this.author} has ${this.numPages} pages, in ${this.numVolumes} volume(s). It is a ${this.bookCategory.toUpperCase()} publication by ${this.publisher} Editors, released in "${this.bookType}" format, in ${this.releaseYear.getFullYear()} - "${this.bookRead.toUpperCase()}" ::: ${this.bookDesc}
	`;
			
	return shortDesc;
}

Book.prototype.description = function() {
	const bigDesc = `${this.author} 's ${this.title} is a book about: ${this.bookDesc}`;
	
	return bigDesc;
}

export default Book;
