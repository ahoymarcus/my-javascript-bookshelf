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

/***/ "./src/components/FormDesc.js":
/*!************************************!*\
  !*** ./src/components/FormDesc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var currentBookNode = document.querySelector('.form-partition__selected');
var formAddBtn = document.querySelector('.form-partition__add');
var formEditBtn = document.querySelector('.form-partition__edit'); // Form nodes

var nodeTitle = document.getElementById('title');
var nodeAuthor = document.getElementById('author');
var nodePages = document.getElementById('num-pages');
var nodeBookNote = document.getElementById('is-read');
var defaultMsg = 'There is no selected book!';

function controlFormUI(book) {
  if (book) {
    currentBookNode.textContent = book.title.toUpperCase();
    nodeTitle.value = book.title;
    nodeAuthor.value = book.author;
    nodePages.value = book.numPages;
    nodeBookNote.checked = book.bookState;
    formAddBtn.disabled = true;
    formEditBtn.disabled = false;
  } else {
    currentBookNode.textContent = defaultMsg;
    formAddBtn.disabled = false;
    formEditBtn.disabled = true;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controlFormUI);

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
/* harmony import */ var _components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FormDesc.js */ "./src/components/FormDesc.js");
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
  var cashedLibraryLength = myBookshelf.library.length; // Validate fiels, turn into Book object and Add

  addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
  var bookBoardMsg;

  if (cashedLibraryLength < myBookshelf.library.length) {
    bookBoardMsg = "The book \"".concat(nodeTitle.value, "\" was edited!");
  } else {
    bookBoardMsg = "The book \"".concat(nodeTitle.value, "\" was NOT edited!"); // Validate fiels, turn into Book object and Add

    addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookState);
  }

  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedBook); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  console.log(myBookshelf); // Show bookshelfBoard

  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
});
formClearBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedBook);
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

      (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedBook); // Alternative book method details

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1EZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9tb2RlbC9MaWJyYXJ5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGJvb2tsaXN0UGFydGl0aW9uRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stZGVzYycpO1xyXG5cclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ215Qm9va3NoZWxmJztcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzLCBsaWIpIHtcclxuICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgbGliLnRpdGxlLnRvVXBwZXJDYXNlKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX29ybmFtZW50Jyk7XHJcbiAgICAgICAgLy9sZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnaHInKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU9ybmFtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUyO1xyXG4gICAgICAgIGlmIChsaWIubGlicmFyeVswXS50aXRsZSA9PT0gJ1lvdXIgQm9vayBoZXJlIScpIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6IDAgYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0xpYnJhcnlOb2RlMiA9IHByaW50TXNnKCdwJywgYFRvdGFsIG9mIGJvb2tzOiAke2xpYi5saWJyYXJ5Lmxlbmd0aH0gYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUyKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3Qm9va05vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XHJcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XHJcblx0XHRcclxuXHRcdGxldCBzcGFuO1xyXG5cdFx0aWYgKGJvb2suYm9va1N0YXRlID09PSAnYWxyZWFkeSByZWFkJykge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xyXG5cdFx0XHJcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXHJcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHRcdFx0XHJcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblx0XHRcclxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBsaTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBjdXJyZW50Qm9va05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX3NlbGVjdGVkJyk7XHJcbmNvbnN0IGZvcm1BZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2FkZCcpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuLy8gRm9ybSBub2Rlc1xyXG5jb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuY29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5jb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnVGhlcmUgaXMgbm8gc2VsZWN0ZWQgYm9vayEnO1xyXG5cclxuZnVuY3Rpb24gY29udHJvbEZvcm1VSShib29rKSB7XHJcblx0aWYgKGJvb2spIHtcclxuXHRcdGN1cnJlbnRCb29rTm9kZS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGUudG9VcHBlckNhc2UoKTtcclxuXHRcdG5vZGVUaXRsZS52YWx1ZSA9IGJvb2sudGl0bGU7XHJcblx0XHRub2RlQXV0aG9yLnZhbHVlID0gYm9vay5hdXRob3I7XHJcblx0XHRub2RlUGFnZXMudmFsdWUgPSBib29rLm51bVBhZ2VzO1xyXG5cdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBib29rLmJvb2tTdGF0ZTtcclxuXHRcdFxyXG5cdFx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjdXJyZW50Qm9va05vZGUudGV4dENvbnRlbnQgPSBkZWZhdWx0TXNnO1xyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJvbEZvcm1VSTtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xyXG5cclxubGV0IG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKSc7XHJcblxyXG5mdW5jdGlvbiBzaG93TWVzc2FnZUJvYXJkKG5vZGUsIG1lc3NhZ2UgPSBtc2csIGNzc0NsYXNzKSB7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHJcblx0Y29uc29sZS5sb2codGhpcmRXYWxsT3JuYW1lbnQpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xyXG5cdFxyXG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcclxuXHR9XHJcblx0LCA1MDAwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dNZXNzYWdlQm9hcmQ7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0cmV0dXJuIG5ld1VJTm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG5cdFx0cHJpbnRNc2csXHJcbn07XHJcblxyXG5cclxuIiwiLypcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMCwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsaWJyYXJ5RGF0YUFyciA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhvYmJpdFwiLFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIixcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDI5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJhbHJlYWR5IHJlYWRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR3byBUb3dlcnNcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJldHVybiBvZiB0aGUgS2luZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tTdGF0ZVwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xyXG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xyXG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XHJcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5lZGl0aW9uID0gMTtcclxuXHR0aGlzLnJlbGVhc2VZZWFyID0gbmV3IERhdGUoKTtcclxuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XHJcblx0dGhpcy5ib29rU3RhdGUgPSBib29rU3RhdGU7XHJcblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKVxyXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XHJcblx0XHJcblx0dGhpcy5ib29rRGVzYyA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcGVsbGVudGVzcXVlLCBkb2xvciBhYyBzdXNjaXBpdCB2b2x1dHBhdCwgdXJuYSBvZGlvIHN1c2NpcGl0IHRvcnRvciwgdXQgY29uZGltZW50dW0gbWV0dXMgbnVsbGEgc29kYWxlcyBuaXNsLiBOdWxsYW0gcG9ydHRpdG9yIGZpbmlidXMgbWV0dXMgdXQgZmF1Y2lidXMuYDtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBFZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tTdGF0ZS50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XHJcblx0YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy5hdXRob3J9ICdzICR7dGhpcy50aXRsZX0gaXMgYSBib29rIGFib3V0OiAke3RoaXMuYm9va0Rlc2N9YDtcclxuXHRcclxuXHRyZXR1cm4gYmlnRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vaztcclxuIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rLmpzJztcclxuXHJcbmZ1bmN0aW9uIExpYnJhcnkodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubGlicmFyeSA9IFtdO1xyXG59XHJcblxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9vayA9IGZ1bmN0aW9uKGJvb2spIHtcclxuICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2subnVtUGFnZXMsIGJvb2suYm9va1N0YXRlKTtcclxuICAgIFxyXG4gICAgdGhpcy5saWJyYXJ5LnB1c2gobmV3Qm9vayk7XHJcbn1cclxuXHJcbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2tMaXN0ID0gZnVuY3Rpb24oYm9va3MpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGJvb2tzKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYm9va3MpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9va3NbaV0udGl0bGUsIGJvb2tzW2ldLmF1dGhvciwgYm9va3NbaV0ubnVtUGFnZXMsIGJvb2tzW2ldLmJvb2tTdGF0ZSk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxyXG4qIFxyXG4qL1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XHJcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xyXG5pbXBvcnQgc2hvd0Jvb2tEZXNjcmlwdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQm9va0Rlc2MuanMnO1xyXG5pbXBvcnQgY29udHJvbEZvcm1VSSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybURlc2MuanMnO1xyXG5cclxuLy8gYm9vayBkYXRhXHJcbmltcG9ydCB7IGxpYnJhcnlEYXRhQXJyIH0gZnJvbSAnLi9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19jbGVhcicpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5jb25zdCBib29rc2hlbGZCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWRlc2MnKTtcclxuY29uc3QgY3VycmVudFNlbGVjdEJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fc2VsZWN0ZWQnKTtcclxuXHJcbmxldCBjdXJyZW50U2VsZWN0ZWRCb29rO1xyXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xyXG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XHJcblxyXG5jaGVja0xpYnJhcnkoKTtcclxuXHJcblxyXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ3Rlc3QgYWJvdXQgc2VjdGlvbicpO1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuZm9ybUFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG4gICAgbGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICAgIFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBib29rQm9hcmRNc2c7XHJcbiAgICBpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCAhPT0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSBgWW91ciBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSAnQm9vayB3YXMgbm90IGFkZGVkIHRvIHRoZSBseWJyYXJ5ISc7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XHJcblx0XHJcbiAgICBcclxuICAgIFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICBzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbn0pOyBcclxuXHJcblxyXG5mb3JtRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBFeHRyYWN0IHNlbGVjdGVkIGJvb2sgZnJvbSBsaWJyYXJ5XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSAhPT0gYm9vay50aXRsZSk7XHJcblx0XHJcblx0Ly8gRm9ybSBub2Rlc1xyXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcblx0Y29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XHJcblx0XHJcblx0bGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICBcclxuXHQvLyBWYWxpZGF0ZSBmaWVscywgdHVybiBpbnRvIEJvb2sgb2JqZWN0IGFuZCBBZGRcclxuXHRhZGRCb29rVG9MaWJyYXJ5KG5vZGVUaXRsZS52YWx1ZSwgbm9kZUF1dGhvci52YWx1ZSwgbm9kZVBhZ2VzLnZhbHVlLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblxyXG4gICAgXHJcbiAgICBsZXQgYm9va0JvYXJkTXNnO1xyXG4gICAgaWYgKGNhc2hlZExpYnJhcnlMZW5ndGggPCBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9IGBUaGUgYm9vayBcIiR7bm9kZVRpdGxlLnZhbHVlfVwiIHdhcyBlZGl0ZWQhYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIE5PVCBlZGl0ZWQhYDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBWYWxpZGF0ZSBmaWVscywgdHVybiBpbnRvIEJvb2sgb2JqZWN0IGFuZCBBZGRcclxuXHRcdFx0XHRhZGRCb29rVG9MaWJyYXJ5KGN1cnJlbnRTZWxlY3RlZEJvb2sudGl0bGUsIGN1cnJlbnRTZWxlY3RlZEJvb2suYXV0aG9yLCBjdXJyZW50U2VsZWN0ZWRCb29rLm51bVBhZ2VzLCBjdXJyZW50U2VsZWN0ZWRCb29rLmJvb2tTdGF0ZSk7XHJcbiAgICB9XHJcblx0XHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHRjb250cm9sRm9ybVVJKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgXHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG5cdFxyXG5cdC8vIFNob3cgYm9va3NoZWxmQm9hcmRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHRjb250cm9sRm9ybVVJKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRCb29rRGVzYygpIHtcclxuICAgIGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcbiAgICBkZXNjQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5JZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggPT09IGJ0bklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0XHRcdFx0Ly8gRGVlcCBjb3B5XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvb2tbMF0pKTtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcdFx0Y29udHJvbEZvcm1VSShjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgLy8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tTdGF0ZSk7XHJcblx0XHRpZiAoYm9va1N0YXRlKSB7XHJcblx0XHRcdGJvb2tTdGF0ZSA9ICdhbHJlYWR5IHJlYWQnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9va1N0YXRlID0gJ25vdCByZWFkIHlldCc7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjb25zdCBuZXdCb29rID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBudW1QYWdlcyxcclxuICAgICAgICAgICAgYm9va1N0YXRlXHJcbiAgICAgICAgfTtcclxuXHRcdFxyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhuZXdCb29rKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcclxuXHRcdFxyXG5cdFx0bGV0IG1lc3NhZ2UgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcclxuXHRcdFx0Ym9vay5ib29rU3RhdGUgPSBub3RlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xyXG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xyXG5cdGxldCBib29rQm9hcmRNc2cgPSAnQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhJztcclxuICAgIFxyXG4gICAgaWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCBcclxuICAgICAgICAgICAgbnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXHJcbiAgICAgICAgICAgIGJvb2tTdGF0ZTogJ25vdCByZWFkIHlldCcsXHJcbiAgICAgICAgfTtcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG4gICAgICAgIFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICAgICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJMaWJyYXJ5IiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibGliIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMaWJyYXJ5T3JuYW1lbnQiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwibGVuZ3RoIiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50Qm9va05vZGUiLCJmb3JtQWRkQnRuIiwiZm9ybUVkaXRCdG4iLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY29udHJvbEZvcm1VSSIsInRleHRDb250ZW50IiwiY2hlY2tlZCIsImRpc2FibGVkIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJzaG93Qm9va0Rlc2NyaXB0aW9uIiwiYWJvdXRTZWN0aW9uIiwiZm9ybUNsZWFyQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJjdXJyZW50U2VsZWN0Qm9va1RpdGxlIiwiY3VycmVudFNlbGVjdGVkQm9vayIsIm15Qm9va3NoZWxmIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZmlsdGVyIiwiY2xlYXJGb3JtU2hlZXQiLCJnZXRCb29rRGVzYyIsImNoYW5nZUJvb2tOb3RlcyIsInJlbW92ZUJvb2tzIiwiZGVzY0J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImUiLCJidG5JZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImJvb2tOb3RlcyIsIm5vdGUiLCJub3RlSWQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va0luZGV4IiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsImRlZmF1bHRCb29rIl0sInNvdXJjZVJvb3QiOiIifQ==