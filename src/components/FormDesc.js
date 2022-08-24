import { createDOMNode, printMsg } from './auxUIFunctions.js';

// UI nodes
const currentBookNode = document.querySelector('.form-partition__selected');
const formAddBtn = document.querySelector('.form-partition__add');
const formEditBtn = document.querySelector('.form-partition__edit');

// Form nodes
const nodeTitle = document.getElementById('title');
const nodeAuthor = document.getElementById('author');
const nodePages = document.getElementById('num-pages');
const nodeBookNote = document.getElementById('is-read');

let defaultMsg = 'There is no selected book!';

const formFields = {
	currentBook: null,
	bookTitle: null,
	bookAuthor: null,
	numPages: 0, 
	bookState: 'not read yet'
};


function getFormFields() {
	const nodeTitle = document.getElementById('title');
	const nodeAuthor = document.getElementById('author');
	const nodePages = document.getElementById('num-pages');
	const nodeBookNote = document.getElementById('is-read');
	
	formFields.bookTitle = nodeTitle.value;
	formFields.bookAuthor = nodeAuthor.value;
	formFields.numPages = nodePages.value;
	formFields.bookState = nodeBookNote.checked;
}



function controlFormUI(book) {
	if (book) {
		currentBookNode.textContent = book.title.toUpperCase();
		nodeTitle.value = book.title;
		nodeAuthor.value = book.author;
		nodePages.value = book.numPages;
		nodeBookNote.checked = book.bookState;
		
		formAddBtn.disabled = true;
		formEditBtn.disabled = false;
	} else {
		currentBookNode.textContent = defaultMsg;
		
		formAddBtn.disabled = false;
		formEditBtn.disabled = true;
	}
}


export default controlFormUI;

