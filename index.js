/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BookDesc.js":
/*!************************************!*\
  !*** ./src/components/BookDesc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var booklistPartitionDesc = document.querySelector('.booklist-partition__book-desc');
var defaultMsg = 'JAVASCRIPT BOOKSHELF';

function showBookBoard(node) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMsg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  booklistPartitionDesc.innerHTML = null;
  var newLibraryNode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('h2', defaultMsg, 'booklist-partition__desc-text1');
  booklistPartitionDesc.appendChild(newLibraryNode);
  var newLibraryOrnament = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('div', '', 'booklist-partition__ornament'); //let newLibraryOrnament = createDOMNode('hr');

  booklistPartitionDesc.appendChild(newLibraryOrnament);
  var newBookNode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)(node, message, cssClass);
  booklistPartitionDesc.appendChild(newBookNode);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showBookBoard);

/***/ }),

/***/ "./src/components/Booklist.js":
/*!************************************!*\
  !*** ./src/components/Booklist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var bookShelf = document.getElementById('booklist');

function showBooklist(list) {
  bookShelf.innerHTML = null;
  var newNode = list.map(function (book, idx) {
    // Create elements and its properties
    var li = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('li', '', 'booklist-partition__book');
    var img = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('img', '', 'booklist-partition__icon', '', [{
      prop: 'src',
      value: './public/images/icons8-book-64.png'
    }, {
      prop: 'alt',
      value: 'books icon'
    }]);
    var div = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('div', '', 'booklist-partition__book-content');
    var h3 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('h3', book.title, 'booklist-partition__title');
    var spanDescBtn = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('span', 'i', 'booklist-partition__bookdesc-btn');
    var h5 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('h5', book.author, 'booklist-partition__author');
    var para1 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('p', "".concat(book.numPages, " pages"), 'booklist-partition__pages');
    var span;

    if (book.bookState === 'already read') {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('span', book.bookState, 'booklist-partition__book-read', 'book-note');
    } else {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('spam', book.bookState, 'booklist-partition__book-not-read', 'book-note');
    }

    var removeBtn = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('button', 'X', 'booklist-partition__remove-btn', ''); // Set global data attribute

    spanDescBtn.setAttribute('data-id', idx);
    removeBtn.setAttribute('data-id', idx);
    span.setAttribute('data-id', idx); // Assemble the component		

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showBooklist);

/***/ }),

/***/ "./src/components/MessageBoard.js":
/*!****************************************!*\
  !*** ./src/components/MessageBoard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var messageBoard = document.getElementById('hidden-message-board');
var thirdWallOrnament = document.querySelector('.book-stack__ornament3');
var msg = 'Welcome, fell free to post your books here! :-)';

function showMessageBoard(node) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : msg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  var newUINode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)(node, message, cssClass);
  messageBoard.style.display = 'block';
  console.log(thirdWallOrnament);
  messageBoard.appendChild(newUINode);
  var msgTimeout = setTimeout(function () {
    messageBoard.style.display = 'none';
    messageBoard.innerHTML = null;
  }, 5000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMessageBoard);

/***/ }),

/***/ "./src/components/auxUIFunctions.js":
/*!******************************************!*\
  !*** ./src/components/auxUIFunctions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMNode": () => (/* binding */ createDOMNode),
/* harmony export */   "printMsg": () => (/* binding */ printMsg)
/* harmony export */ });
function createDOMNode() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p';
  var htmlText = arguments.length > 1 ? arguments[1] : undefined;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  var cssId = arguments.length > 3 ? arguments[3] : undefined;
  var cssProps = arguments.length > 4 ? arguments[4] : undefined;
  var newNode = document.createElement(node);

  if (htmlText) {
    var textNode = document.createTextNode(htmlText);
    newNode.appendChild(textNode);
  }

  if (cssClass) {
    newNode.classList.add(cssClass);
  }

  if (cssId) {
    newNode.id = cssId;
  } //console.log(cssProps);
  //console.log(Array.isArray(cssProps));


  if (Array.isArray(cssProps)) {
    for (var i = 0; i < cssProps.length; i += 1) {
      newNode[cssProps[i].prop] = cssProps[i].value;
    }
  }

  return newNode;
}

function printMsg(node, msg, cssClass) {
  var message = msg;
  var newUINode = createDOMNode(node, message, cssClass);
  return newUINode;
}



/***/ }),

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
  this.coauthors = [];
  this.numVolumes = 1;
  this.publisher = 'Fantastic Bookshelf';
  this.bookType = 'hard corver';
  this.bookCategory = 'fiction';
  this.edition = 1;
  this.releaseYear = new Date();
  this.numPages = numPages;
  this.bookState = bookState;
  this.date = new Date();
  this.lastChange = new Date();
  this.bookDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor ac suscipit volutpat, urna odio suscipit tortor, ut condimentum metus nulla sodales nisl. Nullam porttitor finibus metus ut faucibus.";
}

Book.prototype.info = function () {
  var shortDesc = "The book \"".concat(this.title, "\" by ").concat(this.author, " has ").concat(this.numPages, " pages, in ").concat(this.numVolumes, " volume(s). It is a ").concat(this.bookCategory.toUpperCase(), " publication by ").concat(this.publisher, " editors, released in \"").concat(this.bookType, "\" format, in ").concat(this.releaseYear.getFullYear(), " - \"").concat(this.bookState.toUpperCase(), "\" ::: ").concat(this.bookDesc, "\n\t");
  return shortDesc;
};

Book.prototype.description = function () {
  var bigDesc = "".concat(this.author, " 's ").concat(this.title, " is a book about: ").concat(this.bookDesc);
  return bigDesc;
};

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
/* harmony import */ var _components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Booklist.js */ "./src/components/Booklist.js");
/* harmony import */ var _components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageBoard.js */ "./src/components/MessageBoard.js");
/* harmony import */ var _components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BookDesc.js */ "./src/components/BookDesc.js");
/*
* 
*/



 // UI nodes

var aboutSection = document.getElementById('description-partition__about');
var addBookBtn = document.getElementById('add-book');
var bookshelfBoard = document.getElementById('book-desc');
var myLibrary = [];
var theHobbit = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
var theFellowship = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
var theTwoTowers = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
var theReturnOfTheKing = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');
myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
checkLibrary();
aboutSection.addEventListener('click', function () {
  console.log('test about sec');
  var message = 'Welcome, to the JS-Library and fell free share your books here!';
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', message, 'message-board-msg');
});
addBookBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  console.log('input checked value: ', nodeBookNote.checked);
  addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
  var bookBoardMsg = "Your book \"".concat(nodeTitle.value, "\" was added to the JS-LIBRARY!");
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  myLibrary = myLibrary.filter(function (book) {
    return book.title !== 'Your Book here!';
  }); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks(); // Show bookshelfBoard

  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__desc-text2');
});

function getBookDesc() {
  var descBtns = document.querySelectorAll('.booklist-partition__bookdesc-btn');
  descBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      //console.dir(e.target);
      var btnId = Number(e.target.getAttribute('data-id'));
      console.log(btnId);
      var book = myLibrary.filter(function (book, idx) {
        if (idx === btnId) {
          return book;
        }
      });
      var message = book[0].description();
      (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', book[0].info(), 'booklist-partition__desc-text2');
    });
  });
}

function changeBookNotes() {
  var bookNotes = document.querySelectorAll('#book-note');
  bookNotes.forEach(function (note) {
    note.addEventListener('click', function (e) {
      //console.dir(e.target);
      var noteId = Number(e.target.getAttribute('data-id'));
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
  var removeBtns = document.querySelectorAll('.booklist-partition__remove-btn');
  removeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      console.log(e.target.getAttribute('data-id'));
      var btnIndex = Number(e.target.getAttribute('data-id'));
      removeBookfromLibrary(btnIndex); // Render Booklist

      (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

      getBookDesc();
      changeBookNotes();
      removeBooks();
      checkLibrary();
    });
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

    var book = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, author, numPages, booksRead);
    myLibrary.push(book);
    console.log(myLibrary);
  } else {
    console.log("Please, fill all the required fields: TITLE and AUTHOR");
    var message = 'Please, fill all the required fields: TITLE and AUTHOR';
    (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h4', message, 'message-board-validation');
  }
}

function removeBookfromLibrary(bookIndex) {
  myLibrary = myLibrary.filter(function (book, idx) {
    if (idx !== bookIndex) {
      return book;
    }
  });
  console.log(myLibrary);
}
/* AUXILIARY FUNCTIONS */


function clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote) {
  nodeTitle.value = '';
  nodeAuthor.value = '';
  nodePages.value = '';
  nodeBookNote.checked = false;
}

function checkBookNote(node, noteId, note, cssToRemove, cssToAdd) {
  myLibrary.map(function (book, idx) {
    if (idx === noteId) {
      book.bookState = note;
    }
  });
  node.textContent = note;
  node.classList.remove(cssToRemove);
  node.classList.add(cssToAdd);
}

function checkLibrary() {
  var bookBoardMsg = "".concat(myLibrary.length, " book(s) :::  Click on the books to get their descriptions!");

  if (myLibrary.length > 0) {
    myLibrary = myLibrary.filter(function (book) {
      return book.title !== 'Your Book here!';
    }); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

    getBookDesc();
    changeBookNotes();
    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__desc-text2');
  } else {
    var sideB = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Your Book here!', 'This is also for you! :-)', 'All that you need: ', 'not read yet');
    myLibrary.push(sideB); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__desc-text2');
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IGJvb2tsaXN0UGFydGl0aW9uRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stZGVzYycpO1xuXG5sZXQgZGVmYXVsdE1zZyA9ICdKQVZBU0NSSVBUIEJPT0tTSEVMRic7XG5cbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzKSB7XG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XG4gICAgXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZSA9IHByaW50TXNnKCdoMicsIGRlZmF1bHRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2Rlc2MtdGV4dDEnKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcbiAgICAgICAgLy9sZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnaHInKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlPcm5hbWVudCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va0JvYXJkO1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IGJvb2tTaGVsZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rbGlzdCcpO1xuXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xuXHRib29rU2hlbGYuaW5uZXJIVE1MID0gbnVsbDtcblx0XG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xuXHRcdC8vIENyZWF0ZSBlbGVtZW50cyBhbmQgaXRzIHByb3BlcnRpZXNcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xuXHRcdGNvbnN0IGRpdiA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWNvbnRlbnQnKTtcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcblx0XHRcblx0XHRsZXQgc3Bhbjtcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xuXHRcdFxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRcblx0XHQvLyBBc3NlbWJsZSB0aGUgY29tcG9uZW50XHRcdFxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcblx0XHRcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblx0XHRcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFxuXHRcdHJldHVybiBsaTtcblx0fSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xuXG5cbi8vIFVJIG5vZGVzXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xuXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcblxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlID0gbXNnLCBjc3NDbGFzcykge1xuXHRcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xuXHRcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XG5cdH1cblx0LCA1MDAwKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xuXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcblx0XG5cdGlmIChodG1sVGV4dCkge1xuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xuXHRcdFxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXHR9XG5cdFxuXHRpZiAoY3NzQ2xhc3MpIHtcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuXHR9XG5cdFxuXHRpZiAoY3NzSWQpIHtcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XG5cdH1cblx0XG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIG5ld05vZGU7XG59XG5cblxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnLCBjc3NDbGFzcykge1xuXHRsZXQgbWVzc2FnZSA9IG1zZztcblx0XG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XG5cdFxuXHRyZXR1cm4gbmV3VUlOb2RlO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NTm9kZSxcblx0XHRwcmludE1zZyxcbn07XG5cblxuIiwiZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdHRoaXMuY29hdXRob3JzID0gW107XG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XG5cdHRoaXMucHVibGlzaGVyID0gJ0ZhbnRhc3RpYyBCb29rc2hlbGYnO1xuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XG5cdHRoaXMuZWRpdGlvbiA9IDE7XG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XG5cdFxuXHR0aGlzLmJvb2tEZXNjID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBwZWxsZW50ZXNxdWUsIGRvbG9yIGFjIHN1c2NpcGl0IHZvbHV0cGF0LCB1cm5hIG9kaW8gc3VzY2lwaXQgdG9ydG9yLCB1dCBjb25kaW1lbnR1bSBtZXR1cyBudWxsYSBzb2RhbGVzIG5pc2wuIE51bGxhbSBwb3J0dGl0b3IgZmluaWJ1cyBtZXR1cyB1dCBmYXVjaWJ1cy5gO1xufSBcblxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBlZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tTdGF0ZS50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XG5cdGA7XG5cdFx0XHRcblx0cmV0dXJuIHNob3J0RGVzYztcbn1cblxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgYmlnRGVzYyA9IGAke3RoaXMuYXV0aG9yfSAncyAke3RoaXMudGl0bGV9IGlzIGEgYm9vayBhYm91dDogJHt0aGlzLmJvb2tEZXNjfWA7XG5cdFxuXHRyZXR1cm4gYmlnRGVzYztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiogXG4qL1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xuaW1wb3J0IHNob3dCb29rQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tEZXNjLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2snKTtcbmNvbnN0IGJvb2tzaGVsZkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZGVzYycpO1xuXG5cbmxldCBteUxpYnJhcnkgPSBbXTtcblxuY29uc3QgdGhlSG9iYml0ID0gbmV3IEJvb2soJ1RoZSBIb2JiaXQnLCAnSi5SLlIuIFRvbGtpZW4nLCAyOTUsICdhbHJlYWR5IHJlYWQnKTtcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbmNvbnN0IHRoZVR3b1Rvd2VycyA9IG5ldyBCb29rKCdUaGUgVHdvIFRvd2VycycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuY29uc3QgdGhlUmV0dXJuT2ZUaGVLaW5nID0gbmV3IEJvb2soJ1RoZSBSZXR1cm4gb2YgdGhlIEtpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcblxubXlMaWJyYXJ5LnB1c2godGhlSG9iYml0LCB0aGVGZWxsb3dzaGlwLCB0aGVUd29Ub3dlcnMsIHRoZVJldHVybk9mVGhlS2luZyk7XG5jaGVja0xpYnJhcnkoKTtcblxuXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xuXHRsZXQgbWVzc2FnZSA9ICdXZWxjb21lLCB0byB0aGUgSlMtTGlicmFyeSBhbmQgZmVsbCBmcmVlIHNoYXJlIHlvdXIgYm9va3MgaGVyZSEnO1xuXHRcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcbn0pO1xuXG5cbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdC8vIEZvcm0gbm9kZXNcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRhZGRCb29rVG9MaWJyYXJ5KG5vZGVUaXRsZS52YWx1ZSwgbm9kZUF1dGhvci52YWx1ZSwgbm9kZVBhZ2VzLnZhbHVlLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuICAgIGxldCBib29rQm9hcmRNc2cgPSBgWW91ciBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XG4gICAgXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xuXHRcbiAgICBteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgIFxuXHQvLyBSZW5kZXIgbGlicmFyeVxuXHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0Z2V0Qm9va0Rlc2MoKTtcblx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdHJlbW92ZUJvb2tzKCk7XG4gICAgXG4gICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxuICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG59KTsgXG5cblxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XG4gICAgY29uc3QgZGVzY0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcblxuICAgIGRlc2NCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBidG5JZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5JZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBib29rID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gYnRuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYm9va1swXS5kZXNjcmlwdGlvbigpO1xuXG4gICAgICAgICAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tbMF0uaW5mbygpLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xuXHRcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XG5cdFx0XHRcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcblx0XG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdFxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVuZGVyIEJvb2tsaXN0XG5cdFx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRcdFxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdFx0Z2V0Qm9va0Rlc2MoKTtcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdFx0cmVtb3ZlQm9va3MoKTtcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xuXHRcdH0pO1xuXHR9KTtcdFxufSAgXG5cblxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcblx0XHRpZiAoIW51bVBhZ2VzKSB7XG5cdFx0XHRudW1QYWdlcyA9IDA7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xuXHRcdGlmIChib29rc1JlYWQpIHtcblx0XHRcdGJvb2tzUmVhZCA9ICdhbHJlYWR5IHJlYWQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0Jztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xuXHRcdFxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xuXHRcdFxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XG5cdFx0XG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XG5cdH0gIFxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XG5cdFx0XHRyZXR1cm4gYm9vaztcblx0XHR9XG5cdH0pO1xuXHRcdFxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xufVxuXG5cbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcblx0bXlMaWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XG5cdFx0fVxuXHR9KTtcblx0XG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XG5cdGxldCBib29rQm9hcmRNc2cgPSBgJHtteUxpYnJhcnkubGVuZ3RofSBib29rKHMpIDo6OiAgQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhYDtcbiAgICBcbiAgICBpZiAobXlMaWJyYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIGxpYnJhcnlcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXG5cdFx0Z2V0Qm9va0Rlc2MoKTtcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRyZW1vdmVCb29rcygpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxuICAgICAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fZGVzYy10ZXh0MicpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHNpZGVCID0gbmV3IEJvb2soJ1lvdXIgQm9vayBoZXJlIScsICdUaGlzIGlzIGFsc28gZm9yIHlvdSEgOi0pJywgJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCAnbm90IHJlYWQgeWV0Jyk7XG5cdFx0bXlMaWJyYXJ5LnB1c2goc2lkZUIpO1xuXHRcdFxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0XG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdHJlbW92ZUJvb2tzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG5cdH1cbn1cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJhcHBlbmRDaGlsZCIsIm5ld0xpYnJhcnlPcm5hbWVudCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwidGl0bGUiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJuZXdVSU5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJodG1sVGV4dCIsImNzc0lkIiwiY3NzUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJ0b1VwcGVyQ2FzZSIsImdldEZ1bGxZZWFyIiwiZGVzY3JpcHRpb24iLCJiaWdEZXNjIiwiYWJvdXRTZWN0aW9uIiwiYWRkQm9va0J0biIsImJvb2tzaGVsZkJvYXJkIiwibXlMaWJyYXJ5IiwidGhlSG9iYml0IiwidGhlRmVsbG93c2hpcCIsInRoZVR3b1Rvd2VycyIsInRoZVJldHVybk9mVGhlS2luZyIsInB1c2giLCJjaGVja0xpYnJhcnkiLCJhZGRFdmVudExpc3RlbmVyIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImNoZWNrZWQiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiY2xlYXJGb3JtU2hlZXQiLCJmaWx0ZXIiLCJnZXRCb29rRGVzYyIsImNoYW5nZUJvb2tOb3RlcyIsInJlbW92ZUJvb2tzIiwiZGVzY0J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImUiLCJidG5JZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImJvb2tOb3RlcyIsIm5vdGUiLCJub3RlSWQiLCJ0ZXh0Q29udGVudCIsImNoZWNrQm9va05vdGUiLCJyZW1vdmVCdG5zIiwiYnRuSW5kZXgiLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rc1JlYWQiLCJib29rSW5kZXgiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwic2lkZUIiXSwic291cmNlUm9vdCI6IiJ9