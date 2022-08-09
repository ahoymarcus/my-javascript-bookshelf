import { createDOMNode, printMsg } from './auxUIFunctions.js';


// UI nodes
const booklistPartitionDesc = document.querySelector('.booklist-partition__book-desc');

let defaultMsg = 'JAVASCRIPT BOOKSHELF';

function showBookBoard(node, message = defaultMsg, cssClass) {
    booklistPartitionDesc.innerHTML = null;
    
        let newLibraryNode = printMsg('h2', defaultMsg, 'booklist-partition__desc-text1');
        booklistPartitionDesc.appendChild(newLibraryNode);
        
        let newLibraryOrnament = createDOMNode('div', '', 'booklist-partition__ornament');
        //let newLibraryOrnament = createDOMNode('hr');
        booklistPartitionDesc.appendChild(newLibraryOrnament);
        
        
        
        let newBookNode = printMsg(node, message, cssClass);
        booklistPartitionDesc.appendChild(newBookNode);
}


export default showBookBoard;

