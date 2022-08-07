import { createDOMNode, printMsg } from './auxUIFunctions.js';


// UI nodes
const messageBoard = document.getElementById('hidden-message-board');
const thirdWallOrnament = document.querySelector('.book-stack__ornament3');

let msg = 'Welcome, fell free to post your books here! :-)';

function showMessageBoard(node, message = msg, cssClass) {
	
	let newUINode = printMsg(node, message, cssClass);
	
	messageBoard.style.display = 'block';
	
	console.log(thirdWallOrnament);
	
	messageBoard.appendChild(newUINode);
	
	const msgTimeout = setTimeout(() => {
		messageBoard.style.display = 'none'
		messageBoard.innerHTML = null;
	}
	, 5000);
}


export default showMessageBoard;

