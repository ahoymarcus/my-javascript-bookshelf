/*
* 
*/
const uiNodeMsg = document.getElementById('form-validate');
const thirdWallOrnament = document.getElementById('third-ornament');

const addBookBtn = document.getElementById('add-book');
const nodeTitle = document.getElementById('title');
const nodeAuthor = document.getElementById('author');
let nodePages = 0;
let nodeState = false;

let bookState = 'not read yet';


addBookBtn.addEventListener('click', () => {
	let title = nodeTitle.value;
	let author = nodeAuthor.value;
	let numPages = nodePages.value;
	let booksRead = nodeState.value;
	
	console.log(numPages);
	console.log(booksRead);
	
	addBookToLibrary(title, author, numPages, booksRead);
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
const theFellowship = new Book('The Fellowshiop of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');

myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
console.log(myLibrary);



/*
* https://www.tabnine.com/academy/javascript/get-value-of-input/
*/
function addBookToLibrary(title, author, numPages, booksRead) {
  if (title && author) {
		if (!numPages) {
			numPages = 0;
		}
		
		if (!booksRead) {
			booksRead = 'not read yet';
		}
		
		const book = new Book(title, author, numPages, booksRead);
		
		myLibrary.push(book);
		
		console.log(myLibrary);
	} else {
		console.log(`Please, fill all the required fields: TITLE and AUTHOR`);
		
		printMsg(`Please, fill all the required fields: TITLE and AUTHOR`);
	}  
}


function createDOMNode(node = 'p', msg) {
	const newNode = document.createElement(node);
	const textNode = document.createTextNode(msg);
	
	newNode.appendChild(textNode);
	
	return newNode;
}

function printMsg(msg = 'Okey dokey!') {
	let message = msg;
	
	let newUINode = createDOMNode(
	'p', message);
	
	thirdWallOrnament.style.marginBottom = '40px';
	uiNodeMsg.style.display = 'block';
	
	console.log(thirdWallOrnament);
	
	
	uiNodeMsg.appendChild(newUINode);
	
	const msgTimeout = setTimeout(() => uiNodeMsg.style.display = 'none', 5000);
}



