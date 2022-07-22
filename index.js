/*
* 
*/
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
const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');


const uiNodeMsg = document.getElementById('form-validate');
const thirdWallOrnament = document.getElementById('third-ornament');

const ulNode = document.getElementById('booklist');
const nodeTitle = document.getElementById('title');
const nodeAuthor = document.getElementById('author');
let nodePages = document.getElementById('num-pages');
let nodeBookNote = document.getElementById('is-read');
const addBookBtn = document.getElementById('add-book');


myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
showBooklist(myLibrary);



addBookBtn.addEventListener('click', () => {
	let title = nodeTitle.value;
	let author = nodeAuthor.value;
	let numPages = nodePages.value;
	let booksRead = nodeBookNote.checked;
	
	console.log('input checked value: ');
	console.log(booksRead);
	
	addBookToLibrary(title, author, numPages, booksRead);
	
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
	showBooklist(myLibrary);
});


const bookNotes = document.querySelectorAll('.book-note');
const removeBtns = document.querySelectorAll('.remove-btn');




  
removeBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		console.log(e.target.getAttribute('data-id'));
		let idx = Number(e.target.getAttribute('data-id'));
		
		let newLib;
		if (idx === 0) {
			newLib = [...myLibrary.slice(idx + 1)];
		} else {
			newLib = [...myLibrary.slice(0, idx), ...myLibrary.slice(idx + 1)];
		}	
		console.log(newLib);	
		
		//myLibrary = [];
		//myLibrary = [...newLib]
		
		//showBooklist(myLibrary);
	});
});



function showBooklist(list) {
	ulNode.innerHTML = null;
	
	let newNode = list.map((book, idx) => {
		// Create elements and its properties
		const li = createDOMNode('li', '', 'book');	
		const img = createDOMNode('img', '', 'div-color', '', [{ prop: 'src', value: './public/images/icons8-book-64.png' }, { prop: 'alt', value: 'books icon' }]);
		const div = createDOMNode('div');
		const h3 = createDOMNode('h3', book.title);
		const h5 = createDOMNode('h5', book.author);
		const para1 = createDOMNode('p', `${book.numPages} pages`);
		
		let span;
		if (book.bookState === 'already read') {
			span = createDOMNode('spam', book.bookState, 'book-read', 'book-note');	
		} else {
			span = createDOMNode('spam', book.bookState, 'book-not-read', 'book-note');
		}
		
		
		const removeBtn = createDOMNode('button', 'X', 'remove-btn', '');
		
		// Set global data attribute
		removeBtn.setAttribute('data-id', idx);
		
		// Assemble the component		
		div.appendChild(h3);
		div.appendChild(h5);
		div.appendChild(para1);
		div.appendChild(span);
			
		li.appendChild(img);
		li.appendChild(div);
		li.appendChild(removeBtn);
		
		ulNode.appendChild(li);
		
		return li;
	});

	//console.log(newNode);
}


function addBookToLibrary(title, author, numPages, booksRead) {
  if (title && author) {
		if (!numPages) {
			numPages = 0;
		}
		
		console.log('input checked value: ');
		console.log(booksRead);
		if (booksRead) {
			booksRead = 'already read';
		} else {
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


/* AUXILIARY FUNCTIONS */
function clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote) {
	nodeTitle.value = '';
	nodeAuthor.value = '';
	nodePages.value = '';
	nodeBookNote.checked = false;
}

function createDOMNode(node = 'p', htmlText, cssClass, cssId, cssProps) {
	let newNode = document.createElement(node);
	
	if (htmlText) {
		const textNode = document.createTextNode(htmlText);
		
		newNode.appendChild(textNode);
	}
	
	if (cssClass) {
		newNode.classList.add(cssClass);
	}
	
	if (cssId) {
		newNode.id = cssId;
	}
	
	//console.log(cssProps);
	//console.log(Array.isArray(cssProps));
	if (Array.isArray(cssProps)) {
		for (let i = 0; i < cssProps.length; i += 1) {
			newNode[cssProps[i].prop] = cssProps[i].value;
		}
	}
	
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



