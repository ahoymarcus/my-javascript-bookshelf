/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model/Book.js":
/*!***************************!*\
  !*** ./src/model/Book.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/my-jsLibrary.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Book.js */ "./src/model/Book.js");
/*
* 
*/



// UI nodes
const messageBoard = document.getElementById('hidden-message-board');
const thirdWallOrnament = document.querySelector('.book-stack__ornament3');
const aboutSection = document.getElementById('description-partition__about');
const bookShelf = document.getElementById('booklist');
const addBookBtn = document.getElementById('add-book');


let myLibrary = [];

const theHobbit = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
const theFellowship = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
const theTwoTowers = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
const theReturnOfTheKing = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');

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
		
		const book = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, author, numPages, booksRead);
		
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
		const sideB = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Your Book here!', 'This is also for you! :-)', 'All that you need: ', 'not read yet');
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








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xuXHR0aGlzLmJvb2tTdGF0ZSA9IGJvb2tTdGF0ZTtcbn0gXG5cbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgaW5mbyA9IGAke3RoaXMudGl0bGV9IGJ5ICR7dGhpcy5hdXRob3J9LCAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCAke3RoaXMuYm9va1N0YXRlfWA7XG5cdFx0XHRcblx0cmV0dXJuIGluZm87XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiogXG4qL1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wYXJ0aXRpb25fX2Fib3V0Jyk7XG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2snKTtcblxuXG5sZXQgbXlMaWJyYXJ5ID0gW107XG5cbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XG5jb25zdCB0aGVGZWxsb3dzaGlwID0gbmV3IEJvb2soJ1RoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG5jb25zdCB0aGVUd29Ub3dlcnMgPSBuZXcgQm9vaygnVGhlIFR3byBUb3dlcnMnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG5cbm15TGlicmFyeS5wdXNoKHRoZUhvYmJpdCwgdGhlRmVsbG93c2hpcCwgdGhlVHdvVG93ZXJzLCB0aGVSZXR1cm5PZlRoZUtpbmcpO1xuY2hlY2tMaWJyYXJ5KCk7XG5cblxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygndGVzdCBhYm91dCBzZWMnKTtcblx0bGV0IG1zZyA9ICdXZWxjb21lLCB0byB0aGlzIExpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcblx0XG5cdHByaW50TXNnKCdoMycsIG1zZywgJ21lc3NhZ2UtYm9hcmQtbXNnJyk7XG59KTtcblxuXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHQvLyBGb3JtIG5vZGVzXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XG5cdFxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XG5cdFxuXHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdHJlbW92ZUJvb2tzKCk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xuXHRcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5kaXIoZS50YXJnZXQpO1xuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhub3RlSWQpO1xuXHRcdFx0XG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ25vdCByZWFkIHlldCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQm9va3MoKSB7XG5cdGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJyk7XG5cdFxuXHRyZW1vdmVCdG5zLmZvckVhY2goYnRuID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGxldCBidG5JbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdFx0XHRcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XG5cdFx0XHRcblx0XHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRcdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0XHRyZW1vdmVCb29rcygpO1xuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XG5cdFx0fSk7XG5cdH0pO1x0XG59ICBcblxuXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xuXHRib29rU2hlbGYuaW5uZXJIVE1MID0gbnVsbDtcblx0XG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xuXHRcdC8vIENyZWF0ZSBlbGVtZW50cyBhbmQgaXRzIHByb3BlcnRpZXNcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xuXHRcdGNvbnN0IGRpdiA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWNvbnRlbnQnKTtcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XG5cdFx0XG5cdFx0bGV0IHNwYW47XG5cdFx0aWYgKGJvb2suYm9va1N0YXRlID09PSAnYWxyZWFkeSByZWFkJykge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZURPTU5vZGUoJ2J1dHRvbicsICdYJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicsICcnKTtcblx0XHRcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0c3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdFxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChwYXJhMSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0XG5cdFx0bGkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cdFx0XG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcblx0XHRcblx0XHRyZXR1cm4gbGk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCkge1xuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XG5cdFx0aWYgKCFudW1QYWdlcykge1xuXHRcdFx0bnVtUGFnZXMgPSAwO1xuXHRcdH1cblx0XHRcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va3NSZWFkKTtcblx0XHRpZiAoYm9va3NSZWFkKSB7XG5cdFx0XHRib29rc1JlYWQgPSAnYWxyZWFkeSByZWFkJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9va3NSZWFkID0gJ25vdCByZWFkIHlldCc7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKTtcblx0XHRcblx0XHRteUxpYnJhcnkucHVzaChib29rKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcblx0XHRcblx0XHRsZXQgbXNnID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XG5cdFx0XG5cdFx0cHJpbnRNc2coJ2g0JywgbXNnLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XG5cdH0gIFxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XG5cdFx0XHRyZXR1cm4gYm9vaztcblx0XHR9XG5cdH0pO1xuXHRcdFxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcblx0bXlMaWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XG5cdFx0fVxuXHR9KTtcblx0XG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XG5cdGlmIChteUxpYnJhcnkubGVuZ3RoID4gMCkge1xuXHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdHJlbW92ZUJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3Qgc2lkZUIgPSBuZXcgQm9vaygnWW91ciBCb29rIGhlcmUhJywgJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsICdub3QgcmVhZCB5ZXQnKTtcblx0XHRteUxpYnJhcnkucHVzaChzaWRlQik7XG5cdFx0XG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcblx0fVxufVxuXG5cbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xuXHRcblx0aWYgKGh0bWxUZXh0KSB7XG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XG5cdFx0XG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cdH1cblx0XG5cdGlmIChjc3NDbGFzcykge1xuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG5cdH1cblx0XG5cdGlmIChjc3NJZCkge1xuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcblx0fVxuXHRcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XG5cdFx0fVxuXHR9XG5cdFxuXHRyZXR1cm4gbmV3Tm9kZTtcbn1cblxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJywgY3NzQ2xhc3MpIHtcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XG5cdFxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xuXHRcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcblx0Y29uc29sZS5sb2codGhpcmRXYWxsT3JuYW1lbnQpO1xuXHRcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XG5cdFxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcblx0fVxuXHQsIDUwMDApO1xufVxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=