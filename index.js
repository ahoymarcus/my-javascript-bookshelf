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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsQ0FBQ1QsT0FBWixDQUFvQnRCLE1BQXBCLEdBQTZCLENBQWpDLEVBQW9DO0lBQ3RDK0IsV0FBVyxDQUFDVCxPQUFaLEdBQXNCUyxXQUFXLENBQUNULE9BQVosQ0FBb0JxQixNQUFwQixDQUEyQixVQUFBcEYsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ1EsS0FBTCxLQUFlLGlCQUFuQjtJQUFBLENBQS9CLENBQXRCLENBRHNDLENBR2hDOztJQUNOWixtRUFBWSxDQUFDNEUsV0FBVyxDQUFDVCxPQUFiLENBQVosQ0FKc0MsQ0FNdEM7O0lBQ0FzQixXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsV0FBVyxHQVQyQixDQVdoQzs7SUFDQXRHLG1FQUFhLENBQUMsSUFBRCxFQUFPZ0csWUFBUCxFQUFxQixnQ0FBckIsQ0FBYjtFQUNOLENBYkUsTUFhSTtJQUNOLElBQU04QixXQUFXLEdBQUc7TUFDVnZHLEtBQUssRUFBRSxpQkFERztNQUVWRyxNQUFNLEVBQUUsMkJBRkU7TUFHVkUsUUFBUSxFQUFFLHFCQUhBO01BSVZFLFNBQVMsRUFBRTtJQUpELENBQXBCO0lBTUF5RCxXQUFXLENBQUNSLE9BQVosQ0FBb0IrQyxXQUFwQixFQVBNLENBU047O0lBQ0FuSCxtRUFBWSxDQUFDNEUsV0FBVyxDQUFDVCxPQUFiLENBQVosQ0FWTSxDQVlOOztJQUNBd0IsV0FBVyxHQWJMLENBZUE7O0lBQ0F0RyxtRUFBYSxDQUFDLElBQUQsRUFBT2dHLFlBQVAsRUFBcUIsZ0NBQXJCLENBQWI7RUFDTjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvYXV4VUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9Cb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9MaWJyYXJ5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9teS1qc0xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XG5cbmxldCBkZWZhdWx0TXNnID0gJ0pBVkFTQ1JJUFQgQk9PS1NIRUxGJztcblxuZnVuY3Rpb24gc2hvd0Jvb2tCb2FyZChub2RlLCBtZXNzYWdlID0gZGVmYXVsdE1zZywgY3NzQ2xhc3MpIHtcbiAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuaW5uZXJIVE1MID0gbnVsbDtcbiAgICBcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgZGVmYXVsdE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fZGVzYy10ZXh0MScpO1xuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlPcm5hbWVudCA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19vcm5hbWVudCcpO1xuICAgICAgICAvL2xldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdocicpO1xuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU9ybmFtZW50KTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgbGV0IG5ld0Jvb2tOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XG5cbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xuXHRcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xuXHRcdGNvbnN0IGxpID0gY3JlYXRlRE9NTm9kZSgnbGknLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vaycpO1x0XG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xuXHRcdGNvbnN0IGgzID0gY3JlYXRlRE9NTm9kZSgnaDMnLCBib29rLnRpdGxlLCAnYm9va2xpc3QtcGFydGl0aW9uX190aXRsZScgKTtcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XG5cdFx0Y29uc3QgcGFyYTEgPSBjcmVhdGVET01Ob2RlKCdwJywgYCR7Ym9vay5udW1QYWdlc30gcGFnZXNgLCAnYm9va2xpc3QtcGFydGl0aW9uX19wYWdlcycpO1xuXHRcdFxuXHRcdGxldCBzcGFuO1xuXHRcdGlmIChib29rLmJvb2tTdGF0ZSA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rLW5vdGUnKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2stbm90ZScpO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XG5cdFx0XG5cdFx0Ly8gU2V0IGdsb2JhbCBkYXRhIGF0dHJpYnV0ZVxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0c3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xuXHRcdFxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XG5cdFx0aDMuYXBwZW5kQ2hpbGQoc3BhbkRlc2NCdG4pO1xuXHRcdFxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGg1KTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdFxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRsaS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXHRcdFxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XG5cdFx0XG5cdFx0cmV0dXJuIGxpO1xuXHR9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va2xpc3Q7XG5cbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XG5cbmxldCBtc2cgPSAnV2VsY29tZSwgZmVsbCBmcmVlIHRvIHBvc3QgeW91ciBib29rcyBoZXJlISA6LSknO1xuXG5mdW5jdGlvbiBzaG93TWVzc2FnZUJvYXJkKG5vZGUsIG1lc3NhZ2UgPSBtc2csIGNzc0NsYXNzKSB7XG5cdFxuXHRsZXQgbmV3VUlOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xuXHRcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcblx0Y29uc29sZS5sb2codGhpcmRXYWxsT3JuYW1lbnQpO1xuXHRcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XG5cdFxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcblx0fVxuXHQsIDUwMDApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNZXNzYWdlQm9hcmQ7XG5cbiIsImZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xuXHRcblx0aWYgKGh0bWxUZXh0KSB7XG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XG5cdFx0XG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cdH1cblx0XG5cdGlmIChjc3NDbGFzcykge1xuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG5cdH1cblx0XG5cdGlmIChjc3NJZCkge1xuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcblx0fVxuXHRcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XG5cdFx0fVxuXHR9XG5cdFxuXHRyZXR1cm4gbmV3Tm9kZTtcbn1cblxuXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2csIGNzc0NsYXNzKSB7XG5cdGxldCBtZXNzYWdlID0gbXNnO1xuXHRcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcblx0XG5cdHJldHVybiBuZXdVSU5vZGU7XG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVET01Ob2RlLFxuXHRcdHByaW50TXNnLFxufTtcblxuXG4iLCIvKlxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcbiAgICAgICAgXCJhdXRob3JcIjogXCJcIiwgXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxuICAgICAgICBcImVkaXRpb25cIjogMSxcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxuICAgICAgICBcIm51bVBhZ2VzXCI6IDAsIFxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImRhdGVcIjogXCJcIixcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcbiAgICB9LFxuKi9cblxuZXhwb3J0IGNvbnN0IGxpYnJhcnlEYXRhQXJyID0gW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIb2JiaXRcIixcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLFxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcbiAgICAgICAgXCJudW1QYWdlc1wiOiAyOTUsIFxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcImFscmVhZHkgcmVhZFwiLFxuICAgICAgICBcImRhdGVcIjogXCJcIixcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nXCIsIFxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxuICAgICAgICBcImRhdGVcIjogXCJcIixcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUd28gVG93ZXJzXCIsIFxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxuICAgICAgICBcImRhdGVcIjogXCJcIixcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSZXR1cm4gb2YgdGhlIEtpbmdcIiwgXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxuICAgICAgICBcImVkaXRpb25cIjogMSxcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxuICAgIH1cbl07XG5cblxuXG4iLCJmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0dGhpcy5jb2F1dGhvcnMgPSBbXTtcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XG5cdHRoaXMuYm9va1R5cGUgPSAnaGFyZCBjb3J2ZXInO1xuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcblx0dGhpcy5lZGl0aW9uID0gMTtcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcblx0dGhpcy5ib29rU3RhdGUgPSBib29rU3RhdGU7XG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcblx0dGhpcy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcblx0XG5cdHRoaXMuYm9va0Rlc2MgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHBlbGxlbnRlc3F1ZSwgZG9sb3IgYWMgc3VzY2lwaXQgdm9sdXRwYXQsIHVybmEgb2RpbyBzdXNjaXBpdCB0b3J0b3IsIHV0IGNvbmRpbWVudHVtIG1ldHVzIG51bGxhIHNvZGFsZXMgbmlzbC4gTnVsbGFtIHBvcnR0aXRvciBmaW5pYnVzIG1ldHVzIHV0IGZhdWNpYnVzLmA7XG59IFxuXG5Cb29rLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHNob3J0RGVzYyA9IGBUaGUgYm9vayBcIiR7dGhpcy50aXRsZX1cIiBieSAke3RoaXMuYXV0aG9yfSBoYXMgJHt0aGlzLm51bVBhZ2VzfSBwYWdlcywgaW4gJHt0aGlzLm51bVZvbHVtZXN9IHZvbHVtZShzKS4gSXQgaXMgYSAke3RoaXMuYm9va0NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9IHB1YmxpY2F0aW9uIGJ5ICR7dGhpcy5wdWJsaXNoZXJ9IGVkaXRvcnMsIHJlbGVhc2VkIGluIFwiJHt0aGlzLmJvb2tUeXBlfVwiIGZvcm1hdCwgaW4gJHt0aGlzLnJlbGVhc2VZZWFyLmdldEZ1bGxZZWFyKCl9IC0gXCIke3RoaXMuYm9va1N0YXRlLnRvVXBwZXJDYXNlKCl9XCIgOjo6ICR7dGhpcy5ib29rRGVzY31cblx0YDtcblx0XHRcdFxuXHRyZXR1cm4gc2hvcnREZXNjO1xufVxuXG5Cb29rLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy5hdXRob3J9ICdzICR7dGhpcy50aXRsZX0gaXMgYSBib29rIGFib3V0OiAke3RoaXMuYm9va0Rlc2N9YDtcblx0XG5cdHJldHVybiBiaWdEZXNjO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rO1xuIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rLmpzJztcblxuZnVuY3Rpb24gTGlicmFyeSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmxpYnJhcnkgPSBbXTtcbn1cblxuXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rID0gZnVuY3Rpb24oYm9vaykge1xuICAgIHRoaXMubGlicmFyeS5wdXNoKGJvb2spO1xufVxuXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9va3MpKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYm9va3MpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rc1tpXS50aXRsZSwgYm9va3NbaV0uYXV0aG9yLCBib29rc1tpXS5udW1QYWdlcywgYm9va3NbaV0uYm9va1N0YXRlKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9vayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4qIFxuKi9cbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XG4vLyBpbXBvcnQgQm9vayBmcm9tICcuL21vZGVsL0Jvb2suanMnO1xuXG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XG5pbXBvcnQgc2hvd01lc3NhZ2VCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzJztcbmltcG9ydCBzaG93Qm9va0JvYXJkIGZyb20gJy4vY29tcG9uZW50cy9Cb29rRGVzYy5qcyc7XG5cbi8vIGJvb2sgZGF0YVxuaW1wb3J0IHsgbGlicmFyeURhdGFBcnIgfSBmcm9tICcuL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzJztcbi8vIGltcG9ydCB7IGxpYnJhcnlEYXRhSnNvbiB9IGZyb20gJy4vZGF0YS9saWJyYXJ5LWRhdGEtanNvbi5qcyc7XG5cbi8vIFVJIG5vZGVzXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vaycpO1xuY29uc3QgYm9va3NoZWxmQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kZXNjJyk7XG5cblxuLy8gbGV0IG15TGlicmFyeSA9IFtdO1xuLy8gXG4vLyBjb25zdCB0aGVIb2JiaXQgPSBuZXcgQm9vaygnVGhlIEhvYmJpdCcsICdKLlIuUi4gVG9sa2llbicsIDI5NSwgJ2FscmVhZHkgcmVhZCcpO1xuLy8gY29uc3QgdGhlRmVsbG93c2hpcCA9IG5ldyBCb29rKCdUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuLy8gY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG4vLyBjb25zdCB0aGVSZXR1cm5PZlRoZUtpbmcgPSBuZXcgQm9vaygnVGhlIFJldHVybiBvZiB0aGUgS2luZycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuLy8gXG4vLyBteUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcblxuXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xubXlCb29rc2hlbGYuYWRkQm9va0xpc3QobGlicmFyeURhdGFBcnIpO1xuXG5jb25zb2xlLmxvZyhteUJvb2tzaGVsZi50aXRsZSk7XG5jb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCk7XG5jb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcblxuY2hlY2tMaWJyYXJ5KCk7XG5cblxuXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xuXHRsZXQgbWVzc2FnZSA9ICdXZWxjb21lLCB0byB0aGUgSlMtTGlicmFyeSBhbmQgZmVsbCBmcmVlIHNoYXJlIHlvdXIgYm9va3MgaGVyZSEnO1xuXHRcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcbn0pO1xuXG5cbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdC8vIEZvcm0gbm9kZXNcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRhZGRCb29rVG9MaWJyYXJ5KG5vZGVUaXRsZS52YWx1ZSwgbm9kZUF1dGhvci52YWx1ZSwgbm9kZVBhZ2VzLnZhbHVlLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuICAgIGxldCBib29rQm9hcmRNc2cgPSBgWW91ciBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XG4gICAgXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xuXHRcbiAgICBteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgIFxuXHQvLyBSZW5kZXIgbGlicmFyeVxuXHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0Z2V0Qm9va0Rlc2MoKTtcblx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdHJlbW92ZUJvb2tzKCk7XG4gICAgXG4gICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxuICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG59KTsgXG5cblxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XG4gICAgY29uc3QgZGVzY0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcblxuICAgIGRlc2NCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBidG5JZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5JZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBib29rID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gYnRuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYm9va1swXS5kZXNjcmlwdGlvbigpO1xuXG4gICAgICAgICAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tbMF0uaW5mbygpLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xuXHRcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XG5cdFx0XHRcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcblx0XG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdFxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVuZGVyIEJvb2tsaXN0XG5cdFx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRcdFxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdFx0Z2V0Qm9va0Rlc2MoKTtcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdFx0cmVtb3ZlQm9va3MoKTtcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xuXHRcdH0pO1xuXHR9KTtcdFxufSAgXG5cblxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcblx0XHRpZiAoIW51bVBhZ2VzKSB7XG5cdFx0XHRudW1QYWdlcyA9IDA7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xuXHRcdGlmIChib29rc1JlYWQpIHtcblx0XHRcdGJvb2tzUmVhZCA9ICdhbHJlYWR5IHJlYWQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0Jztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xuXHRcdFxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xuXHRcdFxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XG5cdFx0XG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XG5cdH0gIFxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XG5cdFx0XHRyZXR1cm4gYm9vaztcblx0XHR9XG5cdH0pO1xuXHRcdFxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xufVxuXG5cbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcblx0bXlMaWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XG5cdFx0fVxuXHR9KTtcblx0XG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XG5cdGxldCBib29rQm9hcmRNc2cgPSBgJHtteUJvb2tzaGVsZi5saWJTaXplfSBib29rKHMpIDo6OiAgQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhYDtcbiAgICBcbiAgICBpZiAobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGggPiAwKSB7XG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVuZGVyIGxpYnJhcnlcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdFx0XG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdGdldEJvb2tEZXNjKCk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNob3cgYm9va3NoZWxmQm9hcmRcbiAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2Rlc2MtdGV4dDInKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkZWZhdWx0Qm9vayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXG4gICAgICAgICAgICBhdXRob3I6ICdUaGlzIGlzIGFsc28gZm9yIHlvdSEgOi0pJywgXG4gICAgICAgICAgICBudW1QYWdlczogJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCBcbiAgICAgICAgICAgIGJvb2tTdGF0ZTogJ25vdCByZWFkIHlldCcsXG4gICAgICAgIH07XG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhkZWZhdWx0Qm9vayk7XG5cdFx0XG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdFx0XG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xuXHRcdHJlbW92ZUJvb2tzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19kZXNjLXRleHQyJyk7XG5cdH1cbn1cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJhcHBlbmRDaGlsZCIsIm5ld0xpYnJhcnlPcm5hbWVudCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwidGl0bGUiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJuZXdVSU5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJodG1sVGV4dCIsImNzc0lkIiwiY3NzUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsImxpYnJhcnlEYXRhQXJyIiwiQm9vayIsImNvYXV0aG9ycyIsIm51bVZvbHVtZXMiLCJwdWJsaXNoZXIiLCJib29rVHlwZSIsImJvb2tDYXRlZ29yeSIsImVkaXRpb24iLCJyZWxlYXNlWWVhciIsIkRhdGUiLCJkYXRlIiwibGFzdENoYW5nZSIsImJvb2tEZXNjIiwicHJvdG90eXBlIiwiaW5mbyIsInNob3J0RGVzYyIsInRvVXBwZXJDYXNlIiwiZ2V0RnVsbFllYXIiLCJkZXNjcmlwdGlvbiIsImJpZ0Rlc2MiLCJMaWJyYXJ5IiwibGlicmFyeSIsImFkZEJvb2siLCJwdXNoIiwiYWRkQm9va0xpc3QiLCJib29rcyIsIm5ld0Jvb2siLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY2hlY2tlZCIsImFkZEJvb2tUb0xpYnJhcnkiLCJib29rQm9hcmRNc2ciLCJjbGVhckZvcm1TaGVldCIsIm15TGlicmFyeSIsImZpbHRlciIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZSIsImJ0bklkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYm9va05vdGVzIiwibm90ZSIsIm5vdGVJZCIsInRleHRDb250ZW50IiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tzUmVhZCIsImJvb2tJbmRleCIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJsaWJTaXplIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9