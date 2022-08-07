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
var msg = 'Click on the books to get their descriptions!';

function showBookBoard(node) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : msg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  booklistPartitionDesc.innerHTML = null;
  var newUINode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)(node, message, cssClass);
  booklistPartitionDesc.appendChild(newUINode);
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
/*
 * Other book's properties:
 * coAuthors
 * volumes
 * publisher
 * edition
 * releaseYear
 * area
 * publicationType
 * date
 * lastChange
 * 
 */
function Book(title, author, numPages, bookState) {
  this.title = title;
  this.author = author;
  this.coauthors = [];
  this.numVolumes = 1;
  this.publisher = 'Fantastic Bookshelf';
  this.bookType = 'hard corver';
  this.bookCategory = 'fiction';
  this.bookDesc = 'This is the greatest book of all time!!!';
  this.edition = 1;
  this.releaseYear = new Date();
  this.numPages = numPages;
  this.bookState = bookState;
  this.date = new Date();
  this.lastChange = new Date();
}

Book.prototype.shortDesc = function () {
  var shortDesc = "".concat(this.title, " by ").concat(this.author, ", ").concat(this.numPages, " pages, ").concat(this.bookState);
  return shortDesc;
};

Book.prototype.bigDesc = function () {
  var bigDesc = "".concat(this.title, " by ").concat(this.author, " has ").concat(this.numVolumes, " volumes. It's about ").concat(this.bookCategory, " and was published in the format ").concat(this.bookType, " by ").concat(this.publisher, ", in the year ").concat(this.releaseYear, ", ").concat(this.bookState, ". ").concat(this.bookDesc);
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
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
});

function getBookDesc() {
  var descBtns = document.querySelectorAll('.booklist-partition__bookdesc-btn');
  descBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      //console.dir(e.target);
      var btnId = Number(e.target.getAttribute('data-id'));
      console.log(btnId);
      var message = "Testing....".concat(btnId);
      (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h3', message, 'booklist-partition__desc-text');
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
  if (myLibrary.length > 0) {
    // Render library
    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

    getBookDesc();
    changeBookNotes();
    removeBooks();
  } else {
    var sideB = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Your Book here!', 'This is also for you! :-)', 'All that you need: ', 'not read yet');
    myLibrary.push(sideB); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary); // Pass Eventlisteners

    getBookDesc();
    changeBookNotes();
    removeBooks();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWxCO0VBQ0FnRSxZQUFZLENBQUNDLE9BQWIsR0FBdUIsS0FBdkI7QUFDQTs7QUFFRCxTQUFTbUIsYUFBVCxDQUF1QnJHLElBQXZCLEVBQTZCbUcsTUFBN0IsRUFBcUNELElBQXJDLEVBQTJDVSxXQUEzQyxFQUF3REMsUUFBeEQsRUFBa0U7RUFDakV2QyxTQUFTLENBQUMzRCxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7SUFDNUIsSUFBSUEsR0FBRyxLQUFLc0YsTUFBWixFQUFvQjtNQUNuQnZGLElBQUksQ0FBQ2UsU0FBTCxHQUFpQnVFLElBQWpCO0lBQ0E7RUFDRCxDQUpEO0VBTUFsRyxJQUFJLENBQUNvRyxXQUFMLEdBQW1CRixJQUFuQjtFQUNBbEcsSUFBSSxDQUFDNkMsU0FBTCxDQUFlaUUsTUFBZixDQUFzQkYsV0FBdEI7RUFDQTVHLElBQUksQ0FBQzZDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQitELFFBQW5CO0FBQ0E7O0FBRUQsU0FBU2pDLFlBQVQsR0FBd0I7RUFDdkIsSUFBSU4sU0FBUyxDQUFDbkIsTUFBVixHQUFtQixDQUF2QixFQUEwQjtJQUN6QjtJQUNBM0MsbUVBQVksQ0FBQzhELFNBQUQsQ0FBWixDQUZ5QixDQUl6Qjs7SUFDQWUsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLFdBQVc7RUFDWCxDQVJELE1BUU87SUFDTixJQUFNd0IsS0FBSyxHQUFHLElBQUkzRCxzREFBSixDQUFTLGlCQUFULEVBQTRCLDJCQUE1QixFQUF5RCxxQkFBekQsRUFBZ0YsY0FBaEYsQ0FBZDtJQUNBa0IsU0FBUyxDQUFDSyxJQUFWLENBQWVvQyxLQUFmLEVBRk0sQ0FJTjs7SUFDQXZHLG1FQUFZLENBQUM4RCxTQUFELENBQVosQ0FMTSxDQU9OOztJQUNBZSxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsV0FBVztFQUNYO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XHJcblxyXG5sZXQgbXNnID0gJ0NsaWNrIG9uIHRoZSBib29rcyB0byBnZXQgdGhlaXIgZGVzY3JpcHRpb25zISc7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va0JvYXJkKG5vZGUsIG1lc3NhZ2UgPSBtc2csIGNzc0NsYXNzKSB7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XHJcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XHJcblx0XHRcclxuXHRcdGxldCBzcGFuO1xyXG5cdFx0aWYgKGJvb2suYm9va1N0YXRlID09PSAnYWxyZWFkeSByZWFkJykge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xyXG5cdFx0XHJcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXHJcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHRcdFx0XHJcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblx0XHRcclxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBsaTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xyXG5cclxubGV0IG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKSc7XHJcblxyXG5mdW5jdGlvbiBzaG93TWVzc2FnZUJvYXJkKG5vZGUsIG1lc3NhZ2UgPSBtc2csIGNzc0NsYXNzKSB7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHJcblx0Y29uc29sZS5sb2codGhpcmRXYWxsT3JuYW1lbnQpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xyXG5cdFxyXG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcclxuXHR9XHJcblx0LCA1MDAwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dNZXNzYWdlQm9hcmQ7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0cmV0dXJuIG5ld1VJTm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG5cdFx0cHJpbnRNc2csXHJcbn07XHJcblxyXG5cclxuIiwiLypcclxuICogT3RoZXIgYm9vaydzIHByb3BlcnRpZXM6XHJcbiAqIGNvQXV0aG9yc1xyXG4gKiB2b2x1bWVzXHJcbiAqIHB1Ymxpc2hlclxyXG4gKiBlZGl0aW9uXHJcbiAqIHJlbGVhc2VZZWFyXHJcbiAqIGFyZWFcclxuICogcHVibGljYXRpb25UeXBlXHJcbiAqIGRhdGVcclxuICogbGFzdENoYW5nZVxyXG4gKiBcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XHJcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdHRoaXMuY29hdXRob3JzID0gW107XHJcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcclxuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcclxuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcclxuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcclxuXHR0aGlzLmJvb2tEZXNjID0gJ1RoaXMgaXMgdGhlIGdyZWF0ZXN0IGJvb2sgb2YgYWxsIHRpbWUhISEnO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG59IFxyXG5cclxuQm9vay5wcm90b3R5cGUuc2hvcnREZXNjID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2hvcnREZXNjID0gYCR7dGhpcy50aXRsZX0gYnkgJHt0aGlzLmF1dGhvcn0sICR7dGhpcy5udW1QYWdlc30gcGFnZXMsICR7dGhpcy5ib29rU3RhdGV9YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuYmlnRGVzYyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLnRpdGxlfSBieSAke3RoaXMuYXV0aG9yfSBoYXMgJHt0aGlzLm51bVZvbHVtZXN9IHZvbHVtZXMuIEl0J3MgYWJvdXQgJHt0aGlzLmJvb2tDYXRlZ29yeX0gYW5kIHdhcyBwdWJsaXNoZWQgaW4gdGhlIGZvcm1hdCAke3RoaXMuYm9va1R5cGV9IGJ5ICR7dGhpcy5wdWJsaXNoZXJ9LCBpbiB0aGUgeWVhciAke3RoaXMucmVsZWFzZVllYXJ9LCAke3RoaXMuYm9va1N0YXRlfS4gJHt0aGlzLmJvb2tEZXNjfWA7XHJcblx0XHJcblx0cmV0dXJuIGJpZ0Rlc2M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi9cclxuaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcclxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xyXG5pbXBvcnQgc2hvd01lc3NhZ2VCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzJztcclxuaW1wb3J0IHNob3dCb29rQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tEZXNjLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xyXG5jb25zdCBhZGRCb29rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XHJcbmNvbnN0IGJvb2tzaGVsZkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZGVzYycpO1xyXG5cclxuXHJcbmxldCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XHJcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcclxuY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcblxyXG5teUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xyXG5cdGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHJcblx0ZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhidG5JZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgVGVzdGluZy4uLi4ke2J0bklkfWA7XHJcblx0XHJcblx0XHRcdHNob3dCb29rQm9hcmQoJ2gzJywgbWVzc2FnZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fZGVzYy10ZXh0Jyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0XHRyZW1vdmVCb29rcygpO1xyXG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1x0XHJcbn0gIFxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCkge1xyXG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcclxuXHRcdGlmICghbnVtUGFnZXMpIHtcclxuXHRcdFx0bnVtUGFnZXMgPSAwO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va3NSZWFkKTtcclxuXHRcdGlmIChib29rc1JlYWQpIHtcclxuXHRcdFx0Ym9va3NSZWFkID0gJ2FscmVhZHkgcmVhZCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0JztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xyXG5cdFx0XHJcblx0XHRteUxpYnJhcnkucHVzaChib29rKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cobXlMaWJyYXJ5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xyXG5cdFx0XHJcblx0XHRsZXQgbWVzc2FnZSA9ICdQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1InO1xyXG5cdFx0XHJcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcclxuXHR9ICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcclxuXHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XHJcbn1cclxuXHJcblxyXG4vKiBBVVhJTElBUlkgRlVOQ1RJT05TICovXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcclxuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcclxuXHRub2RlQXV0aG9yLnZhbHVlID0gJyc7XHJcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XHJcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15TGlicmFyeS5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XHJcblx0XHRcdGJvb2suYm9va1N0YXRlID0gbm90ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcclxuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xyXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcclxuXHRpZiAobXlMaWJyYXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3Qgc2lkZUIgPSBuZXcgQm9vaygnWW91ciBCb29rIGhlcmUhJywgJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsICdub3QgcmVhZCB5ZXQnKTtcclxuXHRcdG15TGlicmFyeS5wdXNoKHNpZGVCKTtcclxuXHRcdFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xyXG5cdFx0XHJcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJib29rbGlzdFBhcnRpdGlvbkRlc2MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtc2ciLCJzaG93Qm9va0JvYXJkIiwibm9kZSIsIm1lc3NhZ2UiLCJjc3NDbGFzcyIsImlubmVySFRNTCIsIm5ld1VJTm9kZSIsImFwcGVuZENoaWxkIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwidGl0bGUiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsInNob3dNZXNzYWdlQm9hcmQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJodG1sVGV4dCIsImNzc0lkIiwiY3NzUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJib29rRGVzYyIsImVkaXRpb24iLCJyZWxlYXNlWWVhciIsIkRhdGUiLCJkYXRlIiwibGFzdENoYW5nZSIsInByb3RvdHlwZSIsInNob3J0RGVzYyIsImJpZ0Rlc2MiLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJteUxpYnJhcnkiLCJ0aGVIb2JiaXQiLCJ0aGVGZWxsb3dzaGlwIiwidGhlVHdvVG93ZXJzIiwidGhlUmV0dXJuT2ZUaGVLaW5nIiwicHVzaCIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY2hlY2tlZCIsImFkZEJvb2tUb0xpYnJhcnkiLCJjbGVhckZvcm1TaGVldCIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZSIsImJ0bklkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYm9va05vdGVzIiwibm90ZSIsIm5vdGVJZCIsInRleHRDb250ZW50IiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tzUmVhZCIsImJvb2tJbmRleCIsImZpbHRlciIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJzaWRlQiJdLCJzb3VyY2VSb290IjoiIn0=