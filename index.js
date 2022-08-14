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

/***/ "./src/data/library-data-array.js":
/*!****************************************!*\
  !*** ./src/data/library-data-array.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "libraryDataArr": () => (/* binding */ libraryDataArr)
/* harmony export */ });
/*
    {
        "title": "", 
        "author": "", 
        "coauthors": [],
        "numVolumes": 1,
        "publisher": "Fantastic Bookshelf",
        "bookType": "hard cover",
        "bookCategory": "fiction",
        "edition": 1,
        "releaseYear": "",
        "numPages": 0, 
        "bookState": "",
        "date": "",
        "lastChange": ""
    },
*/
var libraryDataArr = [{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "coauthors": [],
  "numVolumes": 1,
  "publisher": "Fantastic Bookshelf",
  "bookType": "hard cover",
  "bookCategory": "fiction",
  "edition": 1,
  "releaseYear": "",
  "numPages": 295,
  "bookState": "already read",
  "date": "",
  "lastChange": ""
}, {
  "title": "The Fellowship of the Ring",
  "author": "J.R.R. Tolkien",
  "coauthors": [],
  "numVolumes": 1,
  "publisher": "Fantastic Bookshelf",
  "bookType": "hard cover",
  "bookCategory": "fiction",
  "edition": 1,
  "releaseYear": "",
  "numPages": 395,
  "bookState": "not read yet",
  "date": "",
  "lastChange": ""
}, {
  "title": "The Two Towers",
  "author": "J.R.R. Tolkien",
  "coauthors": [],
  "numVolumes": 1,
  "publisher": "Fantastic Bookshelf",
  "bookType": "hard cover",
  "bookCategory": "fiction",
  "edition": 1,
  "releaseYear": "",
  "numPages": 395,
  "bookState": "not read yet",
  "date": "",
  "lastChange": ""
}, {
  "title": "The Return of the King",
  "author": "J.R.R. Tolkien",
  "coauthors": [],
  "numVolumes": 1,
  "publisher": "Fantastic Bookshelf",
  "bookType": "hard cover",
  "bookCategory": "fiction",
  "edition": 1,
  "releaseYear": "",
  "numPages": 395,
  "bookState": "not read yet",
  "date": "",
  "lastChange": ""
}];

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

/***/ }),

/***/ "./src/model/Library.js":
/*!******************************!*\
  !*** ./src/model/Library.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ "./src/model/Book.js");


function Library(title) {
  this.title = title;
  this.library = [];
}

Library.prototype.addBook = function (book) {
  this.library.push(book);
};

Library.prototype.addBookList = function (books) {
  if (Array.isArray(books)) {
    for (var i in books) {
      var newBook = new _Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](books[i].title, books[i].author, books[i].numPages, books[i].bookState); //             console.log(newBook);

      this.library.push(newBook);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);

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
/* harmony import */ var _model_Library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Library.js */ "./src/model/Library.js");
/* harmony import */ var _components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Booklist.js */ "./src/components/Booklist.js");
/* harmony import */ var _components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageBoard.js */ "./src/components/MessageBoard.js");
/* harmony import */ var _components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BookDesc.js */ "./src/components/BookDesc.js");
/* harmony import */ var _data_library_data_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/library-data-array.js */ "./src/data/library-data-array.js");
/*
* 
*/
 // import Book from './model/Book.js';



 // book data

 // import { libraryDataJson } from './data/library-data-json.js';
// UI nodes

var aboutSection = document.getElementById('description-partition__about');
var addBookBtn = document.getElementById('add-book');
var bookshelfBoard = document.getElementById('book-desc'); // let myLibrary = [];
// 
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
// const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
// const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
// const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');
// 
// myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);

var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_4__.libraryDataArr);
console.log(myBookshelf.title);
console.log(myBookshelf.library.length);
console.log(myBookshelf.library);
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
      var book = myBookshelf.library.filter(function (book, idx) {
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

    var book = new Book(title, author, numPages, booksRead);
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
  myBookshelf.library.map(function (book, idx) {
    if (idx === noteId) {
      book.bookState = note;
    }
  });
  node.textContent = note;
  node.classList.remove(cssToRemove);
  node.classList.add(cssToAdd);
}

function checkLibrary() {
  var bookBoardMsg = "".concat(myBookshelf.libSize, " book(s) :::  Click on the books to get their descriptions!");

  if (myBookshelf.library.length > 0) {
    myBookshelf.library = myBookshelf.library.filter(function (book) {
      return book.title !== 'Your Book here!';
    }); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    getBookDesc();
    changeBookNotes();
    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__desc-text2');
  } else {
    var defaultBook = {
      title: 'Your Book here!',
      author: 'This is also for you! :-)',
      numPages: 'All that you need: ',
      bookState: 'not read yet'
    };
    myBookshelf.addBook(defaultBook); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__desc-text2');
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBbEIsZ0VBQWhCOztFQUVHLElBQUl0QyxXQUFXLENBQUNULE9BQVosQ0FBb0J0QixNQUFwQixHQUE2QixDQUFqQyxFQUFvQztJQUN0QytCLFdBQVcsQ0FBQ1QsT0FBWixHQUFzQlMsV0FBVyxDQUFDVCxPQUFaLENBQW9CcUIsTUFBcEIsQ0FBMkIsVUFBQXBGLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNRLEtBQUwsS0FBZSxpQkFBbkI7SUFBQSxDQUEvQixDQUF0QixDQURzQyxDQUdoQzs7SUFDTlosbUVBQVksQ0FBQzRFLFdBQVcsQ0FBQ1QsT0FBYixDQUFaLENBSnNDLENBTXRDOztJQUNBc0IsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLFdBQVcsR0FUMkIsQ0FXaEM7O0lBQ0F0RyxtRUFBYSxDQUFDLElBQUQsRUFBT2dHLFlBQVAsRUFBcUIsZ0NBQXJCLENBQWI7RUFDTixDQWJFLE1BYUk7SUFDTixJQUFNOEIsV0FBVyxHQUFHO01BQ1Z2RyxLQUFLLEVBQUUsaUJBREc7TUFFVkcsTUFBTSxFQUFFLDJCQUZFO01BR1ZFLFFBQVEsRUFBRSxxQkFIQTtNQUlWRSxTQUFTLEVBQUU7SUFKRCxDQUFwQjtJQU1BeUQsV0FBVyxDQUFDUixPQUFaLENBQW9CK0MsV0FBcEIsRUFQTSxDQVNOOztJQUNBbkgsbUVBQVksQ0FBQzRFLFdBQVcsQ0FBQ1QsT0FBYixDQUFaLENBVk0sQ0FZTjs7SUFDQXdCLFdBQVcsR0FiTCxDQWVBOztJQUNBdEcsbUVBQWEsQ0FBQyxJQUFELEVBQU9nRyxZQUFQLEVBQXFCLGdDQUFyQixDQUFiO0VBQ047QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va0Rlc2MuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va2xpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL2F1eFVJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IGJvb2tsaXN0UGFydGl0aW9uRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stZGVzYycpO1xuXG5sZXQgZGVmYXVsdE1zZyA9ICdKQVZBU0NSSVBUIEJPT0tTSEVMRic7XG5cbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzKSB7XG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XG4gICAgXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZSA9IHByaW50TXNnKCdoMicsIGRlZmF1bHRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2Rlc2MtdGV4dDEnKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcbiAgICAgICAgLy9sZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnaHInKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlPcm5hbWVudCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va0JvYXJkO1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IGJvb2tTaGVsZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rbGlzdCcpO1xuXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xuXHRib29rU2hlbGYuaW5uZXJIVE1MID0gbnVsbDtcblx0XG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xuXHRcdC8vIENyZWF0ZSBlbGVtZW50cyBhbmQgaXRzIHByb3BlcnRpZXNcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xuXHRcdGNvbnN0IGRpdiA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWNvbnRlbnQnKTtcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcblx0XHRcblx0XHRsZXQgc3Bhbjtcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xuXHRcdFxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRcblx0XHQvLyBBc3NlbWJsZSB0aGUgY29tcG9uZW50XHRcdFxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcblx0XHRcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblx0XHRcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFxuXHRcdHJldHVybiBsaTtcblx0fSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xuXG5cbi8vIFVJIG5vZGVzXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xuXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcblxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlID0gbXNnLCBjc3NDbGFzcykge1xuXHRcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xuXHRcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XG5cdH1cblx0LCA1MDAwKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xuXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcblx0XG5cdGlmIChodG1sVGV4dCkge1xuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xuXHRcdFxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXHR9XG5cdFxuXHRpZiAoY3NzQ2xhc3MpIHtcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuXHR9XG5cdFxuXHRpZiAoY3NzSWQpIHtcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XG5cdH1cblx0XG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIG5ld05vZGU7XG59XG5cblxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnLCBjc3NDbGFzcykge1xuXHRsZXQgbWVzc2FnZSA9IG1zZztcblx0XG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XG5cdFxuXHRyZXR1cm4gbmV3VUlOb2RlO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NTm9kZSxcblx0XHRwcmludE1zZyxcbn07XG5cblxuIiwiLypcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJcIiwgXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiXCIsIFxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcbiAgICAgICAgXCJudW1QYWdlc1wiOiAwLCBcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXG4gICAgfSxcbiovXG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5RGF0YUFyciA9IFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSG9iYml0XCIsXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIixcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXG4gICAgICAgIFwibnVtUGFnZXNcIjogMjk1LCBcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJhbHJlYWR5IHJlYWRcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZ1wiLCBcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHdvIFRvd2Vyc1wiLCBcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmV0dXJuIG9mIHRoZSBLaW5nXCIsIFxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxuICAgICAgICBcImRhdGVcIjogXCJcIixcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcbiAgICB9XG5dO1xuXG5cblxuIiwiZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdHRoaXMuY29hdXRob3JzID0gW107XG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XG5cdHRoaXMucHVibGlzaGVyID0gJ0ZhbnRhc3RpYyBCb29rc2hlbGYnO1xuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XG5cdHRoaXMuZWRpdGlvbiA9IDE7XG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XG5cdFxuXHR0aGlzLmJvb2tEZXNjID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBwZWxsZW50ZXNxdWUsIGRvbG9yIGFjIHN1c2NpcGl0IHZvbHV0cGF0LCB1cm5hIG9kaW8gc3VzY2lwaXQgdG9ydG9yLCB1dCBjb25kaW1lbnR1bSBtZXR1cyBudWxsYSBzb2RhbGVzIG5pc2wuIE51bGxhbSBwb3J0dGl0b3IgZmluaWJ1cyBtZXR1cyB1dCBmYXVjaWJ1cy5gO1xufSBcblxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBlZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tTdGF0ZS50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XG5cdGA7XG5cdFx0XHRcblx0cmV0dXJuIHNob3J0RGVzYztcbn1cblxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgYmlnRGVzYyA9IGAke3RoaXMuYXV0aG9yfSAncyAke3RoaXMudGl0bGV9IGlzIGEgYm9vayBhYm91dDogJHt0aGlzLmJvb2tEZXNjfWA7XG5cdFxuXHRyZXR1cm4gYmlnRGVzYztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcbiIsImltcG9ydCBCb29rIGZyb20gJy4vQm9vay5qcyc7XG5cbmZ1bmN0aW9uIExpYnJhcnkodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5saWJyYXJ5ID0gW107XG59XG5cblxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9vayA9IGZ1bmN0aW9uKGJvb2spIHtcbiAgICB0aGlzLmxpYnJhcnkucHVzaChib29rKTtcbn1cblxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9va0xpc3QgPSBmdW5jdGlvbihib29rcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJvb2tzKSkge1xuICAgICAgICBmb3IgKGxldCBpIGluIGJvb2tzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9va3NbaV0udGl0bGUsIGJvb2tzW2ldLmF1dGhvciwgYm9va3NbaV0ubnVtUGFnZXMsIGJvb2tzW2ldLmJvb2tTdGF0ZSk7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0Jvb2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuKiBcbiovXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZGVsL0xpYnJhcnkuanMnO1xuLy8gaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcblxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XG5pbXBvcnQgc2hvd0Jvb2tCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQm9va0Rlc2MuanMnO1xuXG4vLyBib29rIGRhdGFcbmltcG9ydCB7IGxpYnJhcnlEYXRhQXJyIH0gZnJvbSAnLi9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyc7XG4vLyBpbXBvcnQgeyBsaWJyYXJ5RGF0YUpzb24gfSBmcm9tICcuL2RhdGEvbGlicmFyeS1kYXRhLWpzb24uanMnO1xuXG4vLyBVSSBub2Rlc1xuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2snKTtcbmNvbnN0IGJvb2tzaGVsZkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZGVzYycpO1xuXG5cbi8vIGxldCBteUxpYnJhcnkgPSBbXTtcbi8vIFxuLy8gY29uc3QgdGhlSG9iYml0ID0gbmV3IEJvb2soJ1RoZSBIb2JiaXQnLCAnSi5SLlIuIFRvbGtpZW4nLCAyOTUsICdhbHJlYWR5IHJlYWQnKTtcbi8vIGNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbi8vIGNvbnN0IHRoZVR3b1Rvd2VycyA9IG5ldyBCb29rKCdUaGUgVHdvIFRvd2VycycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuLy8gY29uc3QgdGhlUmV0dXJuT2ZUaGVLaW5nID0gbmV3IEJvb2soJ1RoZSBSZXR1cm4gb2YgdGhlIEtpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbi8vIFxuLy8gbXlMaWJyYXJ5LnB1c2godGhlSG9iYml0LCB0aGVGZWxsb3dzaGlwLCB0aGVUd29Ub3dlcnMsIHRoZVJldHVybk9mVGhlS2luZyk7XG5cblxuY29uc3QgbXlCb29rc2hlbGYgPSBuZXcgTGlicmFyeSgnSmF2YVNjcmlwdCBCb29rc2hlbGYnKTtcbm15Qm9va3NoZWxmLmFkZEJvb2tMaXN0KGxpYnJhcnlEYXRhQXJyKTtcblxuY29uc29sZS5sb2cobXlCb29rc2hlbGYudGl0bGUpO1xuY29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpO1xuY29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XG5cbmNoZWNrTGlicmFyeSgpO1xuXG5cblxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygndGVzdCBhYm91dCBzZWMnKTtcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcblx0XG5cdHNob3dNZXNzYWdlQm9hcmQoJ2gzJywgbWVzc2FnZSwgJ21lc3NhZ2UtYm9hcmQtbXNnJyk7XG59KTtcblxuXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHQvLyBGb3JtIG5vZGVzXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XG5cdFxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcbiAgICBsZXQgYm9va0JvYXJkTXNnID0gYFlvdXIgYm9vayBcIiR7bm9kZVRpdGxlLnZhbHVlfVwiIHdhcyBhZGRlZCB0byB0aGUgSlMtTElCUkFSWSFgO1xuICAgIFxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcblx0XG4gICAgbXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcihib29rID0+IGJvb2sudGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKTtcbiAgICBcblx0Ly8gUmVuZGVyIGxpYnJhcnlcblx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXG5cdGdldEJvb2tEZXNjKCk7XG5cdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRyZW1vdmVCb29rcygpO1xuICAgIFxuICAgIC8vIFNob3cgYm9va3NoZWxmQm9hcmRcbiAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fZGVzYy10ZXh0MicpO1xufSk7IFxuXG5cbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xuICAgIGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XG5cbiAgICBkZXNjQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihlLnRhcmdldCk7XG4gICAgICAgICAgICBsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuSWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSBidG5JZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBib29rWzBdLmRlc2NyaXB0aW9uKCk7XG5cbiAgICAgICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2Rlc2MtdGV4dDInKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gY2hhbmdlQm9va05vdGVzKCkge1xuXHRjb25zdCBib29rTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9vay1ub3RlJyk7XG5cdFxuXHRib29rTm90ZXMuZm9yRWFjaChub3RlID0+IHtcblx0XHRub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcblx0XHRcdGxldCBub3RlSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0Y29uc29sZS5sb2cobm90ZUlkKTtcblx0XHRcdFxuXHRcdFx0aWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnYWxyZWFkeSByZWFkJykge1xuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdub3QgcmVhZCB5ZXQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdhbHJlYWR5IHJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tzKCkge1xuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xuXHRcblx0cmVtb3ZlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdFx0XHRsZXQgYnRuSW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0XG5cdFx0XHRyZW1vdmVCb29rZnJvbUxpYnJhcnkoYnRuSW5kZXgpO1xuXHRcdFx0XG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3Rcblx0XHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRcdFx0XG5cdFx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXG5cdFx0XHRnZXRCb29rRGVzYygpO1xuXHRcdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0XHRyZW1vdmVCb29rcygpO1xuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XG5cdFx0fSk7XG5cdH0pO1x0XG59ICBcblxuXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpIHtcbiAgaWYgKHRpdGxlICYmIGF1dGhvcikge1xuXHRcdGlmICghbnVtUGFnZXMpIHtcblx0XHRcdG51bVBhZ2VzID0gMDtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tzUmVhZCk7XG5cdFx0aWYgKGJvb2tzUmVhZCkge1xuXHRcdFx0Ym9va3NSZWFkID0gJ2FscmVhZHkgcmVhZCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJvb2tzUmVhZCA9ICdub3QgcmVhZCB5ZXQnO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCk7XG5cdFx0XG5cdFx0bXlMaWJyYXJ5LnB1c2goYm9vayk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2cobXlMaWJyYXJ5KTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XG5cdFx0XG5cdFx0bGV0IG1lc3NhZ2UgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcblx0XHRcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcblx0fSAgXG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xuXHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcblx0XHRcdHJldHVybiBib29rO1xuXHRcdH1cblx0fSk7XG5cdFx0XG5cdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG59XG5cblxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSkge1xuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xuXHRteUJvb2tzaGVsZi5saWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XG5cdFx0fVxuXHR9KTtcblx0XG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XG5cdGxldCBib29rQm9hcmRNc2cgPSBgJHtteUJvb2tzaGVsZi5saWJTaXplfSBib29rKHMpIDo6OiAgQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhYDtcbiAgICBcbiAgICBpZiAobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGggPiAwKSB7XG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIGxpYnJhcnlcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdFx0XG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdGdldEJvb2tEZXNjKCk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNob3cgYm9va3NoZWxmQm9hcmRcbiAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2Rlc2MtdGV4dDInKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkZWZhdWx0Qm9vayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXG4gICAgICAgICAgICBhdXRob3I6ICdUaGlzIGlzIGFsc28gZm9yIHlvdSEgOi0pJywgXG4gICAgICAgICAgICBudW1QYWdlczogJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCBcbiAgICAgICAgICAgIGJvb2tTdGF0ZTogJ25vdCByZWFkIHlldCcsXG4gICAgICAgIH07XG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhkZWZhdWx0Qm9vayk7XG5cdFx0XG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdFx0XG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdHJlbW92ZUJvb2tzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG5cdH1cbn1cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJhcHBlbmRDaGlsZCIsIm5ld0xpYnJhcnlPcm5hbWVudCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwidGl0bGUiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJuZXdVSU5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJodG1sVGV4dCIsImNzc0lkIiwiY3NzUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsImxpYnJhcnlEYXRhQXJyIiwiQm9vayIsImNvYXV0aG9ycyIsIm51bVZvbHVtZXMiLCJwdWJsaXNoZXIiLCJib29rVHlwZSIsImJvb2tDYXRlZ29yeSIsImVkaXRpb24iLCJyZWxlYXNlWWVhciIsIkRhdGUiLCJkYXRlIiwibGFzdENoYW5nZSIsImJvb2tEZXNjIiwicHJvdG90eXBlIiwiaW5mbyIsInNob3J0RGVzYyIsInRvVXBwZXJDYXNlIiwiZ2V0RnVsbFllYXIiLCJkZXNjcmlwdGlvbiIsImJpZ0Rlc2MiLCJMaWJyYXJ5IiwibGlicmFyeSIsImFkZEJvb2siLCJwdXNoIiwiYWRkQm9va0xpc3QiLCJib29rcyIsIm5ld0Jvb2siLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY2hlY2tlZCIsImFkZEJvb2tUb0xpYnJhcnkiLCJib29rQm9hcmRNc2ciLCJjbGVhckZvcm1TaGVldCIsIm15TGlicmFyeSIsImZpbHRlciIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZSIsImJ0bklkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYm9va05vdGVzIiwibm90ZSIsIm5vdGVJZCIsInRleHRDb250ZW50IiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tzUmVhZCIsImJvb2tJbmRleCIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJsaWJTaXplIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9