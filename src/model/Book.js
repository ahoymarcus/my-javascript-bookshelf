function Book(title, author, numPages, bookState) {
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
	this.bookState = bookState;
	this.date = new Date()
	this.lastChange = new Date();
	
	this.bookDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor ac suscipit volutpat, urna odio suscipit tortor, ut condimentum metus nulla sodales nisl. Nullam porttitor finibus metus ut faucibus.`;
} 

Book.prototype.info = function() {
	const shortDesc = `The book "${this.title}" by ${this.author} has ${this.numPages} pages in ${this.numVolumes} volume(s). It is about ${this.bookCategory.toUpperCase()} and was published in the format "${this.bookType}" by ${this.publisher} editors, in the year ${this.releaseYear.getFullYear()}/${this.releaseYear.getMonth() + 1}/${this.releaseYear.getDate()} - "${this.bookState.toUpperCase()}" ::: ${this.bookDesc}
	`;
			
	return shortDesc;
}

Book.prototype.description = function() {
	const bigDesc = `${this.author} 's ${this.title} is a book about: ${this.bookDesc}`;
	
	return bigDesc;
}

export default Book;
