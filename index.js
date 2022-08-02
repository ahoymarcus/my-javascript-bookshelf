/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/my-jsLibrary.js ***!
  \*****************************/
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
const messageBoard = document.getElementById('hidden-message-board');
const thirdWallOrnament = document.querySelector('.book-stack__ornament3');
const aboutSection = document.getElementById('description-partition__about');
const bookShelf = document.getElementById('booklist');
const addBookBtn = document.getElementById('add-book');

myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
checkLibrary();



aboutSection.addEventListener('click', () => {
	console.log('test about sec');
	let msg = 'Welcome, to this Library and fell free share your books here!';
	
	printMsg('h3', msg, 'message-board-msg');
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
				checkBookNote(e.target, noteId, 'not read yet', 'booklist-partition__book-read', 'booklist-partition__book-not-read');
			} else {
				checkBookNote(e.target, noteId, 'already read', 'booklist-partition__book-not-read', 'booklist-partition__book-read');
			}
		});
	});
}


function removeBooks() {
	const removeBtns = document.querySelectorAll('.booklist-partition__remove-btn');
	
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
		const li = createDOMNode('li', '', 'booklist-partition__book');	
		const img = createDOMNode('img', '', 'booklist-partition__icon', '', [{ prop: 'src', value: './public/images/icons8-book-64.png' }, { prop: 'alt', value: 'books icon' }]);
		const div = createDOMNode('div', '', 'booklist-partition__book-content');
		const h3 = createDOMNode('h3', book.title, 'booklist-partition__title' );
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
		
		printMsg('h4', msg, 'message-board-validation');
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
	
	messageBoard.style.display = 'block';
	
	console.log(thirdWallOrnament);
	
	messageBoard.appendChild(newUINode);
	
	const msgTimeout = setTimeout(() => {
		messageBoard.style.display = 'none'
		messageBoard.innerHTML = null;
	}
	, 5000);
}








/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWSxLQUFLLFlBQVksSUFBSSxlQUFlLFNBQVMsZUFBZTtBQUN6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsMERBQTBELElBQUksa0NBQWtDO0FBQzFLO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9teS1qc0xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiogXG4qL1xubGV0IG15TGlicmFyeSA9IFtdO1xuXG5mdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xuXHR0aGlzLmJvb2tTdGF0ZSA9IGJvb2tTdGF0ZTtcbn0gXG5cbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgaW5mbyA9IGAke3RoaXMudGl0bGV9IGJ5ICR7dGhpcy5hdXRob3J9LCAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCAke3RoaXMuYm9va1N0YXRlfWA7XG5cdFx0XHRcblx0cmV0dXJuIGluZm87XG59XG5cbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XG5jb25zdCB0aGVGZWxsb3dzaGlwID0gbmV3IEJvb2soJ1RoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG5jb25zdCB0aGVUd29Ub3dlcnMgPSBuZXcgQm9vaygnVGhlIFR3byBUb3dlcnMnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XG5jb25zdCBhZGRCb29rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XG5cbm15TGlicmFyeS5wdXNoKHRoZUhvYmJpdCwgdGhlRmVsbG93c2hpcCwgdGhlVHdvVG93ZXJzLCB0aGVSZXR1cm5PZlRoZUtpbmcpO1xuY2hlY2tMaWJyYXJ5KCk7XG5cblxuXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xuXHRsZXQgbXNnID0gJ1dlbGNvbWUsIHRvIHRoaXMgTGlicmFyeSBhbmQgZmVsbCBmcmVlIHNoYXJlIHlvdXIgYm9va3MgaGVyZSEnO1xuXHRcblx0cHJpbnRNc2coJ2gzJywgbXNnLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcbn0pO1xuXG5cbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdC8vIEZvcm0gbm9kZXNcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRhZGRCb29rVG9MaWJyYXJ5KG5vZGVUaXRsZS52YWx1ZSwgbm9kZUF1dGhvci52YWx1ZSwgbm9kZVBhZ2VzLnZhbHVlLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcblx0XG5cdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0cmVtb3ZlQm9va3MoKTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gY2hhbmdlQm9va05vdGVzKCkge1xuXHRjb25zdCBib29rTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9vay1ub3RlJyk7XG5cdFxuXHRib29rTm90ZXMuZm9yRWFjaChub3RlID0+IHtcblx0XHRub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRjb25zb2xlLmRpcihlLnRhcmdldCk7XG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XG5cdFx0XHRcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcblx0XG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdFxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcblx0XHRcdFxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRcdHJlbW92ZUJvb2tzKCk7XG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcblx0XHR9KTtcblx0fSk7XHRcbn0gIFxuXG5cbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xuXHRcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xuXHRcdGNvbnN0IGxpID0gY3JlYXRlRE9NTm9kZSgnbGknLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vaycpO1x0XG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xuXHRcdGNvbnN0IGgzID0gY3JlYXRlRE9NTm9kZSgnaDMnLCBib29rLnRpdGxlLCAnYm9va2xpc3QtcGFydGl0aW9uX190aXRsZScgKTtcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcblx0XHRcblx0XHRsZXQgc3Bhbjtcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xuXHRcdFxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0XG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblx0XHRcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFxuXHRcdHJldHVybiBsaTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcblx0XHRpZiAoIW51bVBhZ2VzKSB7XG5cdFx0XHRudW1QYWdlcyA9IDA7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xuXHRcdGlmIChib29rc1JlYWQpIHtcblx0XHRcdGJvb2tzUmVhZCA9ICdhbHJlYWR5IHJlYWQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0Jztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xuXHRcdFxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xuXHRcdFxuXHRcdGxldCBtc2cgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcblx0XHRcblx0XHRwcmludE1zZygnaDQnLCBtc2csICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcblx0fSAgXG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xuXHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcblx0XHRcdHJldHVybiBib29rO1xuXHRcdH1cblx0fSk7XG5cdFx0XG5cdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG59XG5cblxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xuXHRteUxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcblx0XHRcdGJvb2suYm9va1N0YXRlID0gbm90ZTtcblx0XHR9XG5cdH0pO1xuXHRcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcblx0aWYgKG15TGlicmFyeS5sZW5ndGggPiAwKSB7XG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBzaWRlQiA9IG5ldyBCb29rKCdZb3VyIEJvb2sgaGVyZSEnLCAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsICdBbGwgdGhhdCB5b3UgbmVlZDogJywgJ25vdCByZWFkIHlldCcpO1xuXHRcdG15TGlicmFyeS5wdXNoKHNpZGVCKTtcblx0XHRcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRyZW1vdmVCb29rcygpO1xuXHR9XG59XG5cblxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSkge1xuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XG5cdFxuXHRpZiAoaHRtbFRleHQpIHtcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcblx0XHRcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcblx0fVxuXHRcblx0aWYgKGNzc0NsYXNzKSB7XG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcblx0fVxuXHRcblx0aWYgKGNzc0lkKSB7XG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xuXHR9XG5cdFxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2cgPSAnV2VsY29tZSwgZmVsbCBmcmVlIHRvIHBvc3QgeW91ciBib29rcyBoZXJlISA6LSknLCBjc3NDbGFzcykge1xuXHRsZXQgbWVzc2FnZSA9IG1zZztcblx0XG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XG5cdFxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XG5cdFxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcblx0XG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xuXHR9XG5cdCwgNTAwMCk7XG59XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==