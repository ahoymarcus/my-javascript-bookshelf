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
var currentSelectBookTitle = document.querySelector('.form-partition__selected');
var currentSelectedBook;
var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_5__.libraryDataArr);
checkLibrary();
aboutSection.addEventListener('click', function () {
  console.log('test about section');
  var message = 'Welcome, to the JS-Library and fell free share your books here!';
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', message, 'message-board-msg');
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
    bookBoardMsg = 'Book was not added to the lybrary!';
  }

  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks(); // console.log(myBookshelf);
  // Show bookshelfBoard

  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
});
formEditBtn.addEventListener('click', function () {
  // Extract selected book from library
  myBookshelf.library = myBookshelf.library.filter(function (book) {
    return currentSelectedBook.title !== book.title;
  }); // Form nodes

  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  var cashedLibraryLength = myBookshelf.library.length;
  addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
  var bookBoardMsg;

  if (cashedLibraryLength < myBookshelf.library.length) {
    bookBoardMsg = "The book \"".concat(nodeTitle.value, "\" was edited!");
  } else {
    bookBoardMsg = "The book \"".concat(nodeTitle.value, "\" was NOT edited!");
    addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookState);
  } // Render library


  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  console.log(myBookshelf); // Show bookshelfBoard

  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
});
formClearBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  var msg = 'There is no selected book!';
  currentSelectBookTitle.textContent = msg;
  currentSelectedBook = null;
  formAddBtn.disabled = false;
  formEditBtn.disabled = true;
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

      currentSelectedBook = JSON.parse(JSON.stringify(book[0])); //console.log(currentSelectedBook);

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
  currentSelectedBook = null;
  formAddBtn.disabled = false;
  formEditBtn.disabled = true;
  console.log(myBookshelf);
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

    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVAsRUFBcUIsaUNBQXJCLEVBQXdETCxXQUF4RCxDQUFuQjtFQUNOO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9TZWxlY3RlZEJvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvYXV4VUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9Cb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9MaWJyYXJ5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9teS1qc0xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rbGlzdFBhcnRpdGlvbkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWRlc2MnKTtcclxuXHJcblxyXG5sZXQgZGVmYXVsdE1zZyA9ICdteUJvb2tzaGVsZic7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va0JvYXJkKG5vZGUsIG1lc3NhZ2UgPSBkZWZhdWx0TXNnLCBjc3NDbGFzcywgbGliKSB7XHJcbiAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZSA9IHByaW50TXNnKCdoMicsIGxpYi50aXRsZS50b1VwcGVyQ2FzZSgpLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10aXRsZScpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlPcm5hbWVudCA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19vcm5hbWVudCcpO1xyXG4gICAgICAgIC8vbGV0IG5ld0xpYnJhcnlPcm5hbWVudCA9IGNyZWF0ZURPTU5vZGUoJ2hyJyk7XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlPcm5hbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlMjtcclxuICAgICAgICBpZiAobGliLmxpYnJhcnlbMF0udGl0bGUgPT09ICdZb3VyIEJvb2sgaGVyZSEnKSB7XHJcbiAgICAgICAgICAgIG5ld0xpYnJhcnlOb2RlMiA9IHByaW50TXNnKCdwJywgYFRvdGFsIG9mIGJvb2tzOiAwIGJvb2tzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygncCcsIGBUb3RhbCBvZiBib29rczogJHtsaWIubGlicmFyeS5sZW5ndGh9IGJvb2tzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5ld0Jvb2tOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdCb29rTm9kZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va0JvYXJkO1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGJvb2tTaGVsZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rbGlzdCcpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Jvb2tsaXN0KGxpc3QpIHtcclxuXHRib29rU2hlbGYuaW5uZXJIVE1MID0gbnVsbDtcclxuXHRcclxuXHRsZXQgbmV3Tm9kZSA9IGxpc3QubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdC8vIENyZWF0ZSBlbGVtZW50cyBhbmQgaXRzIHByb3BlcnRpZXNcclxuXHRcdGNvbnN0IGxpID0gY3JlYXRlRE9NTm9kZSgnbGknLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vaycpO1x0XHJcblx0XHRjb25zdCBpbWcgPSBjcmVhdGVET01Ob2RlKCdpbWcnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9faWNvbicsICcnLCBbeyBwcm9wOiAnc3JjJywgdmFsdWU6ICcuL3B1YmxpYy9pbWFnZXMvaWNvbnM4LWJvb2stNjQucG5nJyB9LCB7IHByb3A6ICdhbHQnLCB2YWx1ZTogJ2Jvb2tzIGljb24nIH1dKTtcclxuXHRcdGNvbnN0IGRpdiA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWNvbnRlbnQnKTtcclxuXHRcdGNvbnN0IGgzID0gY3JlYXRlRE9NTm9kZSgnaDMnLCBib29rLnRpdGxlLCAnYm9va2xpc3QtcGFydGl0aW9uX190aXRsZScgKTtcclxuXHRcdGNvbnN0IHNwYW5EZXNjQnRuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsICdpJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xyXG5cdFx0Y29uc3QgcGFyYTEgPSBjcmVhdGVET01Ob2RlKCdwJywgYCR7Ym9vay5udW1QYWdlc30gcGFnZXNgLCAnYm9va2xpc3QtcGFydGl0aW9uX19wYWdlcycpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3BhbjtcclxuXHRcdGlmIChib29rLmJvb2tTdGF0ZSA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2stbm90ZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZURPTU5vZGUoJ2J1dHRvbicsICdYJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicsICcnKTtcclxuXHRcdFxyXG5cdFx0Ly8gU2V0IGdsb2JhbCBkYXRhIGF0dHJpYnV0ZVxyXG5cdFx0c3BhbkRlc2NCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0c3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0XHJcblx0XHQvLyBBc3NlbWJsZSB0aGUgY29tcG9uZW50XHRcdFxyXG5cdFx0aDMuYXBwZW5kQ2hpbGQoc3BhbkRlc2NCdG4pO1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGg1KTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChwYXJhMSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdFxyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xyXG5cdFx0XHJcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbGk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va2xpc3Q7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xyXG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcclxuXHJcbmxldCBtc2cgPSAnV2VsY29tZSwgZmVsbCBmcmVlIHRvIHBvc3QgeW91ciBib29rcyBoZXJlISA6LSknO1xyXG5cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlID0gbXNnLCBjc3NDbGFzcykge1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxuXHRcclxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0fVxyXG5cdCwgNTAwMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGN1cnJlbnRTZWxlY3RCb29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19zZWxlY3RlZCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuXHJcbi8vIEZvcm0gbm9kZXNcclxuY29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbmNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcbmNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuY29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ1dvdWxkIHlvdSBsaWtlIHRvIHVwZGF0ZTogJztcclxuXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEJvb2soYm9vaykge1xyXG5cdGN1cnJlbnRTZWxlY3RCb29rLnRleHRDb250ZW50ID0gYm9vay50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG5cdFxyXG5cdG5vZGVUaXRsZS52YWx1ZSA9IGJvb2sudGl0bGU7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9IGJvb2suYXV0aG9yO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9IGJvb2subnVtUGFnZXM7XHJcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBib29rLmJvb2tTdGF0ZTtcclxuXHRcclxuXHRmb3JtQWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1NlbGVjdGVkQm9vaztcclxuXHJcbiIsImZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcclxuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcblx0XHJcblx0aWYgKGh0bWxUZXh0KSB7XHJcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcclxuXHRcdFxyXG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NDbGFzcykge1xyXG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0lkKSB7XHJcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xyXG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXdOb2RlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnLCBjc3NDbGFzcykge1xyXG5cdGxldCBtZXNzYWdlID0gbXNnO1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxyXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRyZXR1cm4gbmV3VUlOb2RlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZURPTU5vZGUsXHJcblx0XHRwcmludE1zZyxcclxufTtcclxuXHJcblxyXG4iLCIvKlxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJcIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAwLCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpYnJhcnlEYXRhQXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSG9iYml0XCIsXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMjk1LCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcImFscmVhZHkgcmVhZFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHdvIFRvd2Vyc1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmV0dXJuIG9mIHRoZSBLaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XHJcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdHRoaXMuY29hdXRob3JzID0gW107XHJcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcclxuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcclxuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcclxuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcclxuXHR0aGlzLmVkaXRpb24gPSAxO1xyXG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xyXG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcclxuXHR0aGlzLmJvb2tTdGF0ZSA9IGJvb2tTdGF0ZTtcclxuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0dGhpcy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcclxuXHRcclxuXHR0aGlzLmJvb2tEZXNjID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBwZWxsZW50ZXNxdWUsIGRvbG9yIGFjIHN1c2NpcGl0IHZvbHV0cGF0LCB1cm5hIG9kaW8gc3VzY2lwaXQgdG9ydG9yLCB1dCBjb25kaW1lbnR1bSBtZXR1cyBudWxsYSBzb2RhbGVzIG5pc2wuIE51bGxhbSBwb3J0dGl0b3IgZmluaWJ1cyBtZXR1cyB1dCBmYXVjaWJ1cy5gO1xyXG59IFxyXG5cclxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IHNob3J0RGVzYyA9IGBUaGUgYm9vayBcIiR7dGhpcy50aXRsZX1cIiBieSAke3RoaXMuYXV0aG9yfSBoYXMgJHt0aGlzLm51bVBhZ2VzfSBwYWdlcywgaW4gJHt0aGlzLm51bVZvbHVtZXN9IHZvbHVtZShzKS4gSXQgaXMgYSAke3RoaXMuYm9va0NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9IHB1YmxpY2F0aW9uIGJ5ICR7dGhpcy5wdWJsaXNoZXJ9IEVkaXRvcnMsIHJlbGVhc2VkIGluIFwiJHt0aGlzLmJvb2tUeXBlfVwiIGZvcm1hdCwgaW4gJHt0aGlzLnJlbGVhc2VZZWFyLmdldEZ1bGxZZWFyKCl9IC0gXCIke3RoaXMuYm9va1N0YXRlLnRvVXBwZXJDYXNlKCl9XCIgOjo6ICR7dGhpcy5ib29rRGVzY31cclxuXHRgO1xyXG5cdFx0XHRcclxuXHRyZXR1cm4gc2hvcnREZXNjO1xyXG59XHJcblxyXG5Cb29rLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLmF1dGhvcn0gJ3MgJHt0aGlzLnRpdGxlfSBpcyBhIGJvb2sgYWJvdXQ6ICR7dGhpcy5ib29rRGVzY31gO1xyXG5cdFxyXG5cdHJldHVybiBiaWdEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2suanMnO1xyXG5cclxuZnVuY3Rpb24gTGlicmFyeSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5saWJyYXJ5ID0gW107XHJcbn1cclxuXHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rID0gZnVuY3Rpb24oYm9vaykge1xyXG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5ib29rU3RhdGUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxufVxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9va0xpc3QgPSBmdW5jdGlvbihib29rcykge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9va3MpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBib29rcykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rc1tpXS50aXRsZSwgYm9va3NbaV0uYXV0aG9yLCBib29rc1tpXS5udW1QYWdlcywgYm9va3NbaV0uYm9va1N0YXRlKTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0Jvb2spO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5saWJyYXJ5LnB1c2gobmV3Qm9vayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXHJcbiogXHJcbiovXHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcclxuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcbmltcG9ydCBzaG93Qm9va0Rlc2NyaXB0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Cb29rRGVzYy5qcyc7XHJcbmltcG9ydCBzaG93U2VsZWN0ZWRCb29rIGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RlZEJvb2suanMnO1xyXG5cclxuLy8gYm9vayBkYXRhXHJcbmltcG9ydCB7IGxpYnJhcnlEYXRhQXJyIH0gZnJvbSAnLi9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19jbGVhcicpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5jb25zdCBib29rc2hlbGZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWRlc2MnKTtcclxuY29uc3QgY3VycmVudFNlbGVjdEJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fc2VsZWN0ZWQnKTtcclxuXHJcbmxldCBjdXJyZW50U2VsZWN0ZWRCb29rO1xyXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xyXG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XHJcblxyXG5jaGVja0xpYnJhcnkoKTtcclxuXHJcblxyXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ3Rlc3QgYWJvdXQgc2VjdGlvbicpO1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuZm9ybUFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG4gICAgbGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICAgIFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBib29rQm9hcmRNc2c7XHJcbiAgICBpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCAhPT0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSBgWW91ciBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSAnQm9vayB3YXMgbm90IGFkZGVkIHRvIHRoZSBseWJyYXJ5ISc7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XHJcblx0XHJcbiAgICBcclxuICAgIFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICBzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbn0pOyBcclxuXHJcblxyXG5mb3JtRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBFeHRyYWN0IHNlbGVjdGVkIGJvb2sgZnJvbSBsaWJyYXJ5XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSAhPT0gYm9vay50aXRsZSk7XHJcblx0XHJcblx0Ly8gRm9ybSBub2Rlc1xyXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcblx0Y29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XHJcblx0XHJcblx0bGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICAgIFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBib29rQm9hcmRNc2c7XHJcbiAgICBpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCA8IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgYm9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGVkaXRlZCFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSBgVGhlIGJvb2sgXCIke25vZGVUaXRsZS52YWx1ZX1cIiB3YXMgTk9UIGVkaXRlZCFgO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFkZEJvb2tUb0xpYnJhcnkoY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSwgY3VycmVudFNlbGVjdGVkQm9vay5hdXRob3IsIGN1cnJlbnRTZWxlY3RlZEJvb2subnVtUGFnZXMsIGN1cnJlbnRTZWxlY3RlZEJvb2suYm9va1N0YXRlKTtcclxuICAgIH1cclxuXHRcdFxyXG5cdFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgXHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG5cdFxyXG5cdC8vIFNob3cgYm9va3NoZWxmQm9hcmRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHJcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHRsZXQgbXNnID0gJ1RoZXJlIGlzIG5vIHNlbGVjdGVkIGJvb2shJztcclxuXHRjdXJyZW50U2VsZWN0Qm9va1RpdGxlLnRleHRDb250ZW50ID0gbXNnO1xyXG5cdFxyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG5cdGZvcm1BZGRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xyXG4gICAgY29uc3QgZGVzY0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuICAgIGRlc2NCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBidG5JZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bklkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBib29rID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gYnRuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHQvLyBEZWVwIGNvcHlcclxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkQm9vayA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9va1swXSkpO1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFx0XHRzaG93U2VsZWN0ZWRCb29rKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgLy8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tTdGF0ZSk7XHJcblx0XHRpZiAoYm9va1N0YXRlKSB7XHJcblx0XHRcdGJvb2tTdGF0ZSA9ICdhbHJlYWR5IHJlYWQnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9va1N0YXRlID0gJ25vdCByZWFkIHlldCc7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjb25zdCBuZXdCb29rID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBudW1QYWdlcyxcclxuICAgICAgICAgICAgYm9va1N0YXRlXHJcbiAgICAgICAgfTtcclxuXHRcdFxyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhuZXdCb29rKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcclxuXHRcdFxyXG5cdFx0bGV0IG1lc3NhZ2UgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcclxuXHRcdFx0Ym9vay5ib29rU3RhdGUgPSBub3RlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xyXG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xyXG5cdGxldCBib29rQm9hcmRNc2cgPSAnQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhJztcclxuICAgIFxyXG4gICAgaWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCBcclxuICAgICAgICAgICAgbnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXHJcbiAgICAgICAgICAgIGJvb2tTdGF0ZTogJ25vdCByZWFkIHlldCcsXHJcbiAgICAgICAgfTtcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG4gICAgICAgIFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICAgICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJMaWJyYXJ5IiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibGliIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMaWJyYXJ5T3JuYW1lbnQiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwibGVuZ3RoIiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJuZXdVSU5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJjdXJyZW50U2VsZWN0Qm9vayIsImZvcm1BZGRCdG4iLCJmb3JtRWRpdEJ0biIsIm5vZGVUaXRsZSIsIm5vZGVBdXRob3IiLCJub2RlUGFnZXMiLCJub2RlQm9va05vdGUiLCJzaG93U2VsZWN0ZWRCb29rIiwidGV4dENvbnRlbnQiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJodG1sVGV4dCIsImNzc0lkIiwiY3NzUHJvcHMiLCJjcmVhdGVFbGVtZW50IiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxpYnJhcnlEYXRhQXJyIiwiQm9vayIsImNvYXV0aG9ycyIsIm51bVZvbHVtZXMiLCJwdWJsaXNoZXIiLCJib29rVHlwZSIsImJvb2tDYXRlZ29yeSIsImVkaXRpb24iLCJyZWxlYXNlWWVhciIsIkRhdGUiLCJkYXRlIiwibGFzdENoYW5nZSIsImJvb2tEZXNjIiwicHJvdG90eXBlIiwiaW5mbyIsInNob3J0RGVzYyIsImdldEZ1bGxZZWFyIiwiZGVzY3JpcHRpb24iLCJiaWdEZXNjIiwiYWRkQm9vayIsIm5ld0Jvb2siLCJwdXNoIiwiYWRkQm9va0xpc3QiLCJib29rcyIsInNob3dCb29rRGVzY3JpcHRpb24iLCJhYm91dFNlY3Rpb24iLCJmb3JtQ2xlYXJCdG4iLCJib29rc2hlbGZCb2FyZCIsImN1cnJlbnRTZWxlY3RCb29rVGl0bGUiLCJjdXJyZW50U2VsZWN0ZWRCb29rIiwibXlCb29rc2hlbGYiLCJjaGVja0xpYnJhcnkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FzaGVkTGlicmFyeUxlbmd0aCIsImFkZEJvb2tUb0xpYnJhcnkiLCJib29rQm9hcmRNc2ciLCJmaWx0ZXIiLCJjbGVhckZvcm1TaGVldCIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZSIsImJ0bklkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYm9va05vdGVzIiwibm90ZSIsIm5vdGVJZCIsImNoZWNrQm9va05vdGUiLCJyZW1vdmVCdG5zIiwiYnRuSW5kZXgiLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rSW5kZXgiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9