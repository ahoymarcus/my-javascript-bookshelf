import { createDOMNode, printMsg } from './auxUIFunctions.js';
import Library from '../model/Library.js';

// UI nodes
const booklistPartitionDesc = document.querySelector('.booklist-partition__book-desc');


let defaultMsg = 'myBookshelf';

function showBookBoard(node, message = defaultMsg, cssClass, lib) {
	booklistPartitionDesc.innerHTML = null;
	
	let newLibraryNode = printMsg('h2', lib.title.toUpperCase(), 'booklist-partition__board-title');
	booklistPartitionDesc.appendChild(newLibraryNode);
	
	let newLibraryOrnament = createDOMNode('div', '', 'booklist-partition__ornament');
	//let newLibraryOrnament = createDOMNode('hr');
	booklistPartitionDesc.appendChild(newLibraryOrnament);
	
	let newLibraryNode2;
	if (lib.library[0].title === 'Your Book here!') {
			newLibraryNode2 = printMsg('p', `Total of books: 0 books`, 'booklist-partition__board-text1');
	} else {
			newLibraryNode2 = printMsg('p', `Total of books: ${lib.library.length} books`, 'booklist-partition__board-text1');
	}
	booklistPartitionDesc.appendChild(newLibraryNode2);
	
	let newBookNode = printMsg(node, message, cssClass);
	booklistPartitionDesc.appendChild(newBookNode);
}


export default showBookBoard;

