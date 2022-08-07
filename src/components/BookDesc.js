import { createDOMNode, printMsg } from './auxUIFunctions.js';


// UI nodes
const booklistPartitionDesc = document.querySelector('.booklist-partition__book-desc');

let msg = 'Click on the books to get their descriptions!';

function showBookBoard(node, message = msg, cssClass) {
	booklistPartitionDesc.innerHTML = null;
	
	let newUINode = printMsg(node, message, cssClass);
	
	booklistPartitionDesc.appendChild(newUINode);
}


export default showBookBoard;

