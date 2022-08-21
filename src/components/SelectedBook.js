import { createDOMNode, printMsg } from './auxUIFunctions.js';

// UI nodes
const currentSelectBook = document.querySelector('.current-book__book');
const currentBookBtn = document.querySelector('.current-book__btn');

let defaultMsg = 'Would you like to update: ';

function showSelectedBook(node, message = defaultMsg, cssClass, book) {
	currentSelectBook.innerHTML = null;
	
	let currentSelBook = printMsg(node, book.title.toUpperCase(), cssClass);
  
	currentSelectBook.appendChild(currentSelBook);
	
	currentBookBtn.style.display = 'block';
}


export default showSelectedBook;

