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
/* harmony import */ var _model_Library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Library.js */ "./src/model/Library.js");

 // UI nodes

var booklistPartitionDesc = document.querySelector('.booklist-partition__book-desc');
var defaultMsg = 'myBookshelf';

function showBookBoard(node) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMsg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  var lib = arguments.length > 3 ? arguments[3] : undefined;
  booklistPartitionDesc.innerHTML = null;
  var newLibraryNode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('h2', lib.title.toUpperCase(), 'booklist-partition__board-title');
  booklistPartitionDesc.appendChild(newLibraryNode);
  var newLibraryOrnament = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('div', '', 'booklist-partition__ornament'); //let newLibraryOrnament = createDOMNode('hr');

  booklistPartitionDesc.appendChild(newLibraryOrnament);
  var newLibraryNode2;

  if (lib.library[0].title === 'Your Book here!') {
    newLibraryNode2 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('p', "Total of books: 0 books", 'booklist-partition__board-text1');
  } else {
    newLibraryNode2 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('p', "Total of books: ".concat(lib.library.length, " books"), 'booklist-partition__board-text1');
  }

  booklistPartitionDesc.appendChild(newLibraryNode2);
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

/***/ "./src/components/SelectedBook.js":
/*!****************************************!*\
  !*** ./src/components/SelectedBook.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var currentSelectBook = document.querySelector('.form-partition__selected');
var formAddBtn = document.querySelector('.form-partition__add');
var formEditBtn = document.querySelector('.form-partition__edit'); // Form nodes

var nodeTitle = document.getElementById('title');
var nodeAuthor = document.getElementById('author');
var nodePages = document.getElementById('num-pages');
var nodeBookNote = document.getElementById('is-read');
var defaultMsg = 'Would you like to update: ';

function showSelectedBook(book) {
  currentSelectBook.textContent = book.title.toUpperCase();
  nodeTitle.value = book.title;
  nodeAuthor.value = book.author;
  nodePages.value = book.numPages;
  nodeBookNote.checked = book.bookState;
  formAddBtn.disabled = true;
  formEditBtn.disabled = false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSelectedBook);

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
  var shortDesc = "The book \"".concat(this.title, "\" by ").concat(this.author, " has ").concat(this.numPages, " pages, in ").concat(this.numVolumes, " volume(s). It is a ").concat(this.bookCategory.toUpperCase(), " publication by ").concat(this.publisher, " Editors, released in \"").concat(this.bookType, "\" format, in ").concat(this.releaseYear.getFullYear(), " - \"").concat(this.bookState.toUpperCase(), "\" ::: ").concat(this.bookDesc, "\n\t");
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
  var newBook = new _Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](book.title, book.author, book.numPages, book.bookState);
  this.library.push(newBook);
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
/* harmony import */ var _components_SelectedBook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SelectedBook.js */ "./src/components/SelectedBook.js");
/* harmony import */ var _data_library_data_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/library-data-array.js */ "./src/data/library-data-array.js");
/*
* 
*/
 // Components




 // book data

 // UI nodes

var aboutSection = document.getElementById('description-partition__about');
var formAddBtn = document.querySelector('.form-partition__add');
var formClearBtn = document.querySelector('.form-partition__clear');
var formEditBtn = document.querySelector('.form-partition__edit');
var bookshelfBoard = document.getElementById('book-desc');
var currentSelectBook = document.querySelector('.form-partition__selected');
var currentSelectedBook;
var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_5__.libraryDataArr);
checkLibrary();
aboutSection.addEventListener('click', function () {
  console.log('test about section');
  var message = 'Welcome, to the JS-Library and fell free share your books here!';
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', message, 'message-board-msg');
});
formClearBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  var msg = 'There is no selected book!';
  currentSelectBook.textContent = msg;
  currentSelectedBook = null;
  formAddBtn.disabled = false;
  formEditBtn.disabled = true;
});
formAddBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  console.log('input checked value: ', nodeBookNote.checked);
  var cashedLibraryLength = myBookshelf.library.length;
  addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
  var bookBoardMsg;

  if (cashedLibraryLength !== myBookshelf.library.length) {
    bookBoardMsg = "Your book \"".concat(nodeTitle.value, "\" was added to the JS-LIBRARY!");
    myBookshelf.library = myBookshelf.library.filter(function (book) {
      return book.title !== 'Your Book here!';
    });
  } else {
    bookBoardMsg = 'Click on the books to get their descriptions!';
  }

  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  console.log(myBookshelf); // Show bookshelfBoard

  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
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
      }); // Deep copy

      currentSelectedBook = JSON.parse(JSON.stringify(book[0]));
      console.log(currentSelectedBook);
      (0,_components_SelectedBook_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedBook); // Alternative book method details

      var message = book[0].description();
      (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', book[0].info(), 'booklist-partition__board-text2', myBookshelf);
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

      (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

      getBookDesc();
      changeBookNotes();
      removeBooks();
      checkLibrary();
    });
  });
}

function addBookToLibrary(title, author, numPages, bookState) {
  if (title && author) {
    if (!numPages) {
      numPages = 0;
    }

    console.log('input checked value: ', bookState);

    if (bookState) {
      bookState = 'already read';
    } else {
      bookState = 'not read yet';
    }

    var newBook = {
      title: title,
      author: author,
      numPages: numPages,
      bookState: bookState
    };
    myBookshelf.addBook(newBook);
    console.log(myBookshelf.library);
  } else {
    console.log("Please, fill all the required fields: TITLE and AUTHOR");
    var message = 'Please, fill all the required fields: TITLE and AUTHOR';
    (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h4', message, 'message-board-validation');
  }
}

function removeBookfromLibrary(bookIndex) {
  myBookshelf.library = myBookshelf.library.filter(function (book, idx) {
    if (idx !== bookIndex) {
      return book;
    }
  });
  console.log(myBookshelf.library);
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
  var bookBoardMsg = 'Click on the books to get their descriptions!';

  if (myBookshelf.library.length > 0) {
    myBookshelf.library = myBookshelf.library.filter(function (book) {
      return book.title !== 'Your Book here!';
    }); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    getBookDesc();
    changeBookNotes();
    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf, myBookshelf);
  } else {
    var defaultBook = {
      title: 'Your Book here!',
      author: 'This is also for you! :-)',
      numPages: 'All that you need: ',
      bookState: 'not read yet'
    };
    myBookshelf.addBook(defaultBook);
    console.log(myBookshelf); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    removeBooks(); // Show bookshelfBoard

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDeEYsT0FBYixDQUFaLENBSnNDLENBTXRDOztJQUNBZ0csV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLFdBQVcsR0FUMkIsQ0FXaEM7O0lBQ0E5RyxtRUFBYSxDQUFDLElBQUQsRUFBTzBHLFlBQVAsRUFBcUIsaUNBQXJCLEVBQXdETixXQUF4RCxFQUFxRUEsV0FBckUsQ0FBYjtFQUNOLENBYkUsTUFhSTtJQUNOLElBQU1rQyxXQUFXLEdBQUc7TUFDVi9ILEtBQUssRUFBRSxpQkFERztNQUVWd0IsTUFBTSxFQUFFLDJCQUZFO01BR1ZFLFFBQVEsRUFBRSxxQkFIQTtNQUlWRSxTQUFTLEVBQUU7SUFKRCxDQUFwQjtJQU1BaUUsV0FBVyxDQUFDVCxPQUFaLENBQW9CMkMsV0FBcEI7SUFFTXpGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0QsV0FBWixFQVRBLENBV047O0lBQ0FuRixtRUFBWSxDQUFDbUYsV0FBVyxDQUFDeEYsT0FBYixDQUFaLENBWk0sQ0FjTjs7SUFDQWtHLFdBQVcsR0FmTCxDQWlCQTs7SUFDQTlHLG1FQUFhLENBQUMsSUFBRCxFQUFPMEcsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0ROLFdBQXhELENBQWI7RUFDTjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0ZWRCb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL2F1eFVJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XHJcblxyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnbXlCb29rc2hlbGYnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Jvb2tCb2FyZChub2RlLCBtZXNzYWdlID0gZGVmYXVsdE1zZywgY3NzQ2xhc3MsIGxpYikge1xyXG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUgPSBwcmludE1zZygnaDInLCBsaWIudGl0bGUudG9VcHBlckNhc2UoKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcclxuICAgICAgICAvL2xldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdocicpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZTI7XHJcbiAgICAgICAgaWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xyXG4gICAgICAgICAgICBuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygncCcsIGBUb3RhbCBvZiBib29rczogMCBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rLW5vdGUnKTtcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdFxyXG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcclxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcclxuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XHJcblxyXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcclxuXHJcbmZ1bmN0aW9uIHNob3dNZXNzYWdlQm9hcmQobm9kZSwgbWVzc2FnZSA9IG1zZywgY3NzQ2xhc3MpIHtcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcclxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XHJcblx0XHJcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdH1cclxuXHQsIDUwMDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lc3NhZ2VCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBjdXJyZW50U2VsZWN0Qm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fc2VsZWN0ZWQnKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1FZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19lZGl0Jyk7XHJcblxyXG4vLyBGb3JtIG5vZGVzXHJcbmNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5jb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5jb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcbmNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XHJcblxyXG5sZXQgZGVmYXVsdE1zZyA9ICdXb3VsZCB5b3UgbGlrZSB0byB1cGRhdGU6ICc7XHJcblxyXG5mdW5jdGlvbiBzaG93U2VsZWN0ZWRCb29rKGJvb2spIHtcclxuXHRjdXJyZW50U2VsZWN0Qm9vay50ZXh0Q29udGVudCA9IGJvb2sudGl0bGUudG9VcHBlckNhc2UoKTtcclxuXHRcclxuXHRub2RlVGl0bGUudmFsdWUgPSBib29rLnRpdGxlO1xyXG5cdG5vZGVBdXRob3IudmFsdWUgPSBib29rLmF1dGhvcjtcclxuXHRub2RlUGFnZXMudmFsdWUgPSBib29rLm51bVBhZ2VzO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gYm9vay5ib29rU3RhdGU7XHJcblx0XHJcblx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0Zm9ybUVkaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dTZWxlY3RlZEJvb2s7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0cmV0dXJuIG5ld1VJTm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG5cdFx0cHJpbnRNc2csXHJcbn07XHJcblxyXG5cclxuIiwiLypcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMCwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsaWJyYXJ5RGF0YUFyciA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhvYmJpdFwiLFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIixcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDI5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJhbHJlYWR5IHJlYWRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR3byBUb3dlcnNcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJldHVybiBvZiB0aGUgS2luZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xyXG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xyXG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XHJcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5lZGl0aW9uID0gMTtcclxuXHR0aGlzLnJlbGVhc2VZZWFyID0gbmV3IERhdGUoKTtcclxuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XHJcblx0dGhpcy5ib29rU3RhdGUgPSBib29rU3RhdGU7XHJcblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKVxyXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XHJcblx0XHJcblx0dGhpcy5ib29rRGVzYyA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcGVsbGVudGVzcXVlLCBkb2xvciBhYyBzdXNjaXBpdCB2b2x1dHBhdCwgdXJuYSBvZGlvIHN1c2NpcGl0IHRvcnRvciwgdXQgY29uZGltZW50dW0gbWV0dXMgbnVsbGEgc29kYWxlcyBuaXNsLiBOdWxsYW0gcG9ydHRpdG9yIGZpbmlidXMgbWV0dXMgdXQgZmF1Y2lidXMuYDtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBFZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tTdGF0ZS50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XHJcblx0YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy5hdXRob3J9ICdzICR7dGhpcy50aXRsZX0gaXMgYSBib29rIGFib3V0OiAke3RoaXMuYm9va0Rlc2N9YDtcclxuXHRcclxuXHRyZXR1cm4gYmlnRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vaztcclxuIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rLmpzJztcclxuXHJcbmZ1bmN0aW9uIExpYnJhcnkodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubGlicmFyeSA9IFtdO1xyXG59XHJcblxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9vayA9IGZ1bmN0aW9uKGJvb2spIHtcclxuICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2subnVtUGFnZXMsIGJvb2suYm9va1N0YXRlKTtcclxuICAgIFxyXG4gICAgdGhpcy5saWJyYXJ5LnB1c2gobmV3Qm9vayk7XHJcbn1cclxuXHJcbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2tMaXN0ID0gZnVuY3Rpb24oYm9va3MpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGJvb2tzKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYm9va3MpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9va3NbaV0udGl0bGUsIGJvb2tzW2ldLmF1dGhvciwgYm9va3NbaV0ubnVtUGFnZXMsIGJvb2tzW2ldLmJvb2tTdGF0ZSk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxyXG4qIFxyXG4qL1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XHJcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xyXG5pbXBvcnQgc2hvd0Jvb2tCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQm9va0Rlc2MuanMnO1xyXG5pbXBvcnQgc2hvd1NlbGVjdGVkQm9vayBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0ZWRCb29rLmpzJztcclxuXHJcbi8vIGJvb2sgZGF0YVxyXG5pbXBvcnQgeyBsaWJyYXJ5RGF0YUFyciB9IGZyb20gJy4vZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1DbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fY2xlYXInKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuY29uc3QgYm9va3NoZWxmQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kZXNjJyk7XHJcbmNvbnN0IGN1cnJlbnRTZWxlY3RCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19zZWxlY3RlZCcpO1xyXG5cclxubGV0IGN1cnJlbnRTZWxlY3RlZEJvb2s7XHJcbmNvbnN0IG15Qm9va3NoZWxmID0gbmV3IExpYnJhcnkoJ0phdmFTY3JpcHQgQm9va3NoZWxmJyk7XHJcbm15Qm9va3NoZWxmLmFkZEJvb2tMaXN0KGxpYnJhcnlEYXRhQXJyKTtcclxuXHJcbmNoZWNrTGlicmFyeSgpO1xyXG5cclxuXHJcbmFib3V0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygndGVzdCBhYm91dCBzZWN0aW9uJyk7XHJcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5mb3JtQ2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Ly8gRm9ybSBub2Rlc1xyXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcblx0Y29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XHJcblx0XHJcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XHJcblx0XHJcblx0bGV0IG1zZyA9ICdUaGVyZSBpcyBubyBzZWxlY3RlZCBib29rISc7XHJcblx0Y3VycmVudFNlbGVjdEJvb2sudGV4dENvbnRlbnQgPSBtc2c7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxufSk7XHJcblxyXG5mb3JtQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEZvcm0gbm9kZXNcclxuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblx0XHJcbiAgICBsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gICAgXHJcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGJvb2tCb2FyZE1zZztcclxuICAgIGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoICE9PSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9IGBZb3VyIGJvb2sgXCIke25vZGVUaXRsZS52YWx1ZX1cIiB3YXMgYWRkZWQgdG8gdGhlIEpTLUxJQlJBUlkhYDtcclxuICAgICAgICBcclxuICAgICAgICBteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9ICdDbGljayBvbiB0aGUgYm9va3MgdG8gZ2V0IHRoZWlyIGRlc2NyaXB0aW9ucyEnO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xyXG5cdFxyXG4gICAgXHJcbiAgICBcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuICAgIFxyXG4gICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG59KTsgXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XHJcbiAgICBjb25zdCBkZXNjQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG4gICAgZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGJ0bklkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuSWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGJvb2sgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSBidG5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdC8vIERlZXAgY29weVxyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWRCb29rID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib29rWzBdKSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFx0XHRzaG93U2VsZWN0ZWRCb29rKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgLy8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tTdGF0ZSk7XHJcblx0XHRpZiAoYm9va1N0YXRlKSB7XHJcblx0XHRcdGJvb2tTdGF0ZSA9ICdhbHJlYWR5IHJlYWQnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9va1N0YXRlID0gJ25vdCByZWFkIHlldCc7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjb25zdCBuZXdCb29rID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBudW1QYWdlcyxcclxuICAgICAgICAgICAgYm9va1N0YXRlXHJcbiAgICAgICAgfTtcclxuXHRcdFxyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhuZXdCb29rKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcclxuXHRcdFxyXG5cdFx0bGV0IG1lc3NhZ2UgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcclxuXHRcdFx0Ym9vay5ib29rU3RhdGUgPSBub3RlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xyXG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xyXG5cdGxldCBib29rQm9hcmRNc2cgPSAnQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhJztcclxuICAgIFxyXG4gICAgaWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmLCBteUJvb2tzaGVsZik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRCb29rID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1lvdXIgQm9vayBoZXJlIScsIFxyXG4gICAgICAgICAgICBhdXRob3I6ICdUaGlzIGlzIGFsc28gZm9yIHlvdSEgOi0pJywgXHJcbiAgICAgICAgICAgIG51bVBhZ2VzOiAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsIFxyXG4gICAgICAgICAgICBib29rU3RhdGU6ICdub3QgcmVhZCB5ZXQnLFxyXG4gICAgICAgIH07XHJcblx0XHRteUJvb2tzaGVsZi5hZGRCb29rKGRlZmF1bHRCb29rKTtcclxuXHRcdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuICAgICAgICBcclxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiTGlicmFyeSIsImJvb2tsaXN0UGFydGl0aW9uRGVzYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRNc2ciLCJzaG93Qm9va0JvYXJkIiwibm9kZSIsIm1lc3NhZ2UiLCJjc3NDbGFzcyIsImxpYiIsImlubmVySFRNTCIsIm5ld0xpYnJhcnlOb2RlIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZENoaWxkIiwibmV3TGlicmFyeU9ybmFtZW50IiwibmV3TGlicmFyeU5vZGUyIiwibGlicmFyeSIsImxlbmd0aCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwic3BhbkRlc2NCdG4iLCJoNSIsImF1dGhvciIsInBhcmExIiwibnVtUGFnZXMiLCJzcGFuIiwiYm9va1N0YXRlIiwicmVtb3ZlQnRuIiwic2V0QXR0cmlidXRlIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY3VycmVudFNlbGVjdEJvb2siLCJmb3JtQWRkQnRuIiwiZm9ybUVkaXRCdG4iLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwic2hvd1NlbGVjdGVkQm9vayIsInRleHRDb250ZW50IiwiY2hlY2tlZCIsImRpc2FibGVkIiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJhYm91dFNlY3Rpb24iLCJmb3JtQ2xlYXJCdG4iLCJib29rc2hlbGZCb2FyZCIsImN1cnJlbnRTZWxlY3RlZEJvb2siLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhckZvcm1TaGVldCIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZmlsdGVyIiwiZ2V0Qm9va0Rlc2MiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImRlc2NCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwiYnRuSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJib29rTm90ZXMiLCJub3RlIiwibm90ZUlkIiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tJbmRleCIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJkZWZhdWx0Qm9vayJdLCJzb3VyY2VSb290IjoiIn0=