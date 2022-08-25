import { createDOMNode, printMsg } from './auxUIFunctions.js';

// UI nodes
const currentBookFormNode = document.querySelector('.form-partition__selected');
const formAddBtn = document.querySelector('.form-partition__add');
const formEditBtn = document.querySelector('.form-partition__edit');

// Form nodes
const nodeTitle = document.getElementById('title');
const nodeAuthor = document.getElementById('author');
const nodePages = document.getElementById('num-pages');
const nodeBookNote = document.getElementById('is-read');

let defaultMsg = 'There is no selected book!';

const formFields = {
	title: null,
	author: null,
	nPages: 0, 
	bRead: 'not read yet'
};


function getFormFields() {
	formFields.title = document.getElementById('title').value;
	formFields.author = document.getElementById('author').value;
	formFields.nPages = document.getElementById('num-pages').value;
	
	// insert validation here!!!!!
	formFields.bRead = document.getElementById('is-read').checked;

	return formFields;
}



function setFormFields(selectedBook) {
	if (selectedBook) {
		currentBookFormNode.textContent = selectedBook.title.toUpperCase();
		nodeTitle.value = selectedBook.title;
		nodeAuthor.value = selectedBook.author;
		nodePages.value = selectedBook.numPages;
		nodeBookNote.checked = selectedBook.bookState;
		
		formAddBtn.disabled = true;
		formEditBtn.disabled = false;
	} else {
		currentBookFormNode.textContent = defaultMsg;
		
		formAddBtn.disabled = false;
		formEditBtn.disabled = true;
	}
}


function clearFormSheet() {
	nodeTitle.value = '';
	nodeAuthor.value = '';
	nodePages.value = '';
	nodeBookNote.checked = false;
}



export {
	getFormFields,
	setFormFields,
	clearFormSheet
};


