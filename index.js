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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');


// UI nodes
const uiNodeMsg = document.getElementById('form-validate');
const thirdWallOrnament = document.getElementById('third-ornament');
const aboutSection = document.getElementById('about-section');
const bookShelf = document.getElementById('booklist');
const addBookBtn = document.getElementById('add-book');
myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);

checkLibrary();



aboutSection.addEventListener('click', () => {
	let msg = 'Welcome, to this Library and fell free share your books here!';
	
	printMsg('h3', msg, 'message-board-text');
});


addBookBtn.addEventListener('click', () => {
	// Form nodes
	const nodeTitle = document.getElementById('title');
	const nodeAuthor = document.getElementById('author');
	const nodePages = document.getElementById('num-pages');
	const nodeBookNote = document.getElementById('is-read');
	
	console.log('input checked value: ', nodeBookNote.checked);
	
	addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
	
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
	showBooklist(myLibrary);
	changeBookNotes();
	removeBooks();
});



function changeBookNotes() {
	const bookNotes = document.querySelectorAll('#book-note');
	
	bookNotes.forEach(note => {
		note.addEventListener('click', e => {
			console.dir(e.target);
			let noteId = Number(e.target.getAttribute('data-id'));
			console.log(noteId);
			
			if (e.target.textContent === 'already read') {
				checkBookNote(e.target, noteId, 'not read yet', 'book-read', 'book-not-read');
			} else {
				checkBookNote(e.target, noteId, 'already read', 'book-not-read', 'book-read');
			}
		});
	});
}


function removeBooks() {
	const removeBtns = document.querySelectorAll('.remove-btn');
	
	removeBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			console.log(e.target.getAttribute('data-id'));
			let btnIndex = Number(e.target.getAttribute('data-id'));
			
			removeBookfromLibrary(btnIndex);
			
			showBooklist(myLibrary);
			changeBookNotes();
			removeBooks();
			checkLibrary();
		});
	});	
}  


function showBooklist(list) {
	bookShelf.innerHTML = null;
	
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
			span = createDOMNode('span', book.bookState, 'book-read', 'book-note');	
		} else {
			span = createDOMNode('spam', book.bookState, 'book-not-read', 'book-note');
		}
		
		
		const removeBtn = createDOMNode('button', 'X', 'remove-btn', '');
		
		// Set global data attribute
		removeBtn.setAttribute('data-id', idx);
		span.setAttribute('data-id', idx);
		
		// Assemble the component		
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


function addBookToLibrary(title, author, numPages, booksRead) {
  if (title && author) {
		if (!numPages) {
			numPages = 0;
		}
		
		console.log('input checked value: ', booksRead);
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
		
		let msg = 'Please, fill all the required fields: TITLE and AUTHOR';
		
		printMsg('h4', msg, 'form-validation-text');
	}  
}


function removeBookfromLibrary(bookIndex) {
	myLibrary = myLibrary.filter((book, idx) => {
		if (idx !== bookIndex) {
			return book;
		}
	});
		
	console.log(myLibrary);
}


function checkBookNote(node, noteId, note, cssToRemove, cssToAdd) {
	myLibrary.map((book, idx) => {
		if (idx === noteId) {
			book.bookState = note;
		}
	});
	
	node.textContent = note;
	node.classList.remove(cssToRemove);
	node.classList.add(cssToAdd);
}

function checkLibrary() {
	if (myLibrary.length > 0) {
		showBooklist(myLibrary);
		changeBookNotes();
		removeBooks();
	} else {
		const sideB = new Book('Your Book here!', 'This is also for you! :-)', 'All that you need: ', 'not read yet');
		myLibrary.push(sideB);
		
		showBooklist(myLibrary);
		changeBookNotes();
		removeBooks();
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

function printMsg(node, msg = 'Welcome, fell free to post your books here! :-)', cssClass) {
	let message = msg;
	
	let newUINode = createDOMNode(
	node, message, cssClass);
	
	thirdWallOrnament.style.marginBottom = '40px';
	uiNodeMsg.style.display = 'block';
	
	console.log(thirdWallOrnament);
	
	
	uiNodeMsg.appendChild(newUINode);
	
	const msgTimeout = setTimeout(() => {
		uiNodeMsg.style.display = 'none'
		uiNodeMsg.innerHTML = null;
	}
	, 5000);
}







