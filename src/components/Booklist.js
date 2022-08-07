import { createDOMNode } from './auxUIFunctions.js';


// UI nodes
const bookShelf = document.getElementById('booklist');

function showBooklist(list) {
	bookShelf.innerHTML = null;
	
	let newNode = list.map((book, idx) => {
		// Create elements and its properties
		const li = createDOMNode('li', '', 'booklist-partition__book');	
		const img = createDOMNode('img', '', 'booklist-partition__icon', '', [{ prop: 'src', value: './public/images/icons8-book-64.png' }, { prop: 'alt', value: 'books icon' }]);
		const div = createDOMNode('div', '', 'booklist-partition__book-content');
		const h3 = createDOMNode('h3', book.title, 'booklist-partition__title' );
		const spanDescBtn = createDOMNode('span', 'i', 'booklist-partition__bookdesc-btn');
		const h5 = createDOMNode('h5', book.author, 'booklist-partition__author');
		const para1 = createDOMNode('p', `${book.numPages} pages`, 'booklist-partition__pages');
		
		let span;
		if (book.bookState === 'already read') {
			span = createDOMNode('span', book.bookState, 'booklist-partition__book-read', 'book-note');	
		} else {
			span = createDOMNode('spam', book.bookState, 'booklist-partition__book-not-read', 'book-note');
		}
		
		
		const removeBtn = createDOMNode('button', 'X', 'booklist-partition__remove-btn', '');
		
		// Set global data attribute
		spanDescBtn.setAttribute('data-id', idx);
		removeBtn.setAttribute('data-id', idx);
		span.setAttribute('data-id', idx);
		
		// Assemble the component		
		h3.appendChild(spanDescBtn);
		
		div.appendChild(h3);
		div.appendChild(h5);
		div.appendChild(para1);
		div.appendChild(span);
			
		li.appendChild(img);
		li.appendChild(div);
		li.appendChild(removeBtn);
		
		bookShelf.appendChild(li);
		
		return li;
	});
}


export default showBooklist;

