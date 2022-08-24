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

    if (book.bookRead === 'already read') {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('span', book.bookRead, 'booklist-partition__book-read', 'book-note');
    } else {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('spam', book.bookRead, 'booklist-partition__book-not-read', 'book-note');
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
var formFields = {
  currentBook: null,
  bookTitle: null,
  bookAuthor: null,
  numPages: 0,
  bookState: 'not read yet'
};

function getFormFields() {
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  formFields.bookTitle = nodeTitle.value;
  formFields.bookAuthor = nodeAuthor.value;
  formFields.numPages = nodePages.value;
  formFields.bookState = nodeBookNote.checked;
}

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
        "bookRead": "",
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
  "bookRead": "already read",
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
  "bookRead": "not read yet",
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
  "bookRead": "not read yet",
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
  "bookRead": "not read yet",
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
function Book(title, author, numPages, bookRead) {
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
  this.bookRead = bookRead;
  this.date = new Date();
  this.lastChange = new Date();
  this.bookDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor ac suscipit volutpat, urna odio suscipit tortor, ut condimentum metus nulla sodales nisl. Nullam porttitor finibus metus ut faucibus.";
}

Book.prototype.info = function () {
  var shortDesc = "The book \"".concat(this.title, "\" by ").concat(this.author, " has ").concat(this.numPages, " pages, in ").concat(this.numVolumes, " volume(s). It is a ").concat(this.bookCategory.toUpperCase(), " publication by ").concat(this.publisher, " Editors, released in \"").concat(this.bookType, "\" format, in ").concat(this.releaseYear.getFullYear(), " - \"").concat(this.bookRead.toUpperCase(), "\" ::: ").concat(this.bookDesc, "\n\t");
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
  var newBook = new _Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](book.title, book.author, book.numPages, book.bookRead);
  this.library.push(newBook);
};

Library.prototype.addBookList = function (books) {
  if (Array.isArray(books)) {
    for (var i in books) {
      var newBook = new _Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](books[i].title, books[i].author, books[i].numPages, books[i].bookRead); //             console.log(newBook);

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
var currentSelectedBook;
var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_5__.libraryDataArr);
checkLibrary();
aboutSection.addEventListener('click', function () {
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

    addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookRead);
  }

  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentSelectedBook); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  console.log(myBookshelf);
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
    var bookRead = '';

    if (bookState) {
      bookRead = 'already read';
    } else {
      bookRead = 'not read yet';
    }

    var newBook = {
      title: title,
      author: author,
      numPages: numPages,
      bookRead: bookRead
    };
    console.log(bookRead);
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
      book.bookRead = note;
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
    removeBooks();
    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  } else {
    var defaultBook = {
      title: 'Your Book here!',
      author: 'This is also for you! :-)',
      numPages: 'All that you need: ',
      bookRead: 'not read yet'
    };
    myBookshelf.addBook(defaultBook);
    console.log(myBookshelf); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    removeBooks();
    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxXQUFXO0lBRUxkLG1FQUFtQixDQUFDLElBQUQsRUFBT1MsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RMLFdBQXhELENBQW5CO0VBQ04sQ0FaRSxNQVlJO0lBQ04sSUFBTWtDLFdBQVcsR0FBRztNQUNWckksS0FBSyxFQUFFLGlCQURHO01BRVZ3QixNQUFNLEVBQUUsMkJBRkU7TUFHVkUsUUFBUSxFQUFFLHFCQUhBO01BSVZFLFFBQVEsRUFBRTtJQUpBLENBQXBCO0lBTUF1RSxXQUFXLENBQUNULE9BQVosQ0FBb0IyQyxXQUFwQjtJQUVNOUUsT0FBTyxDQUFDQyxHQUFSLENBQVkyQyxXQUFaLEVBVEEsQ0FXTjs7SUFDQXpGLG1FQUFZLENBQUN5RixXQUFXLENBQUM5RixPQUFiLENBQVosQ0FaTSxDQWNOOztJQUNBd0csV0FBVztJQUVMZCxtRUFBbUIsQ0FBQyxJQUFELEVBQU9TLFlBQVAsRUFBcUIsaUNBQXJCLEVBQXdETCxXQUF4RCxDQUFuQjtFQUNOO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1EZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9tb2RlbC9MaWJyYXJ5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGJvb2tsaXN0UGFydGl0aW9uRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stZGVzYycpO1xyXG5cclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ215Qm9va3NoZWxmJztcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzLCBsaWIpIHtcclxuICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgbGliLnRpdGxlLnRvVXBwZXJDYXNlKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX29ybmFtZW50Jyk7XHJcbiAgICAgICAgLy9sZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnaHInKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU9ybmFtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUyO1xyXG4gICAgICAgIGlmIChsaWIubGlicmFyeVswXS50aXRsZSA9PT0gJ1lvdXIgQm9vayBoZXJlIScpIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6IDAgYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0xpYnJhcnlOb2RlMiA9IHByaW50TXNnKCdwJywgYFRvdGFsIG9mIGJvb2tzOiAke2xpYi5saWJyYXJ5Lmxlbmd0aH0gYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUyKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV3Qm9va05vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XHJcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XHJcblx0XHRcclxuXHRcdGxldCBzcGFuO1xyXG5cdFx0aWYgKGJvb2suYm9va1JlYWQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1JlYWQsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xyXG5cdFx0XHJcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXHJcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHRcdFx0XHJcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblx0XHRcclxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBsaTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBjdXJyZW50Qm9va05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX3NlbGVjdGVkJyk7XHJcbmNvbnN0IGZvcm1BZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2FkZCcpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuLy8gRm9ybSBub2Rlc1xyXG5jb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuY29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5jb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnVGhlcmUgaXMgbm8gc2VsZWN0ZWQgYm9vayEnO1xyXG5cclxuY29uc3QgZm9ybUZpZWxkcyA9IHtcclxuXHRjdXJyZW50Qm9vazogbnVsbCxcclxuXHRib29rVGl0bGU6IG51bGwsXHJcblx0Ym9va0F1dGhvcjogbnVsbCxcclxuXHRudW1QYWdlczogMCwgXHJcblx0Ym9va1N0YXRlOiAnbm90IHJlYWQgeWV0J1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1GaWVsZHMoKSB7XHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRmb3JtRmllbGRzLmJvb2tUaXRsZSA9IG5vZGVUaXRsZS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLmJvb2tBdXRob3IgPSBub2RlQXV0aG9yLnZhbHVlO1xyXG5cdGZvcm1GaWVsZHMubnVtUGFnZXMgPSBub2RlUGFnZXMudmFsdWU7XHJcblx0Zm9ybUZpZWxkcy5ib29rU3RhdGUgPSBub2RlQm9va05vdGUuY2hlY2tlZDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb250cm9sRm9ybVVJKGJvb2spIHtcclxuXHRpZiAoYm9vaykge1xyXG5cdFx0Y3VycmVudEJvb2tOb2RlLnRleHRDb250ZW50ID0gYm9vay50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0bm9kZVRpdGxlLnZhbHVlID0gYm9vay50aXRsZTtcclxuXHRcdG5vZGVBdXRob3IudmFsdWUgPSBib29rLmF1dGhvcjtcclxuXHRcdG5vZGVQYWdlcy52YWx1ZSA9IGJvb2subnVtUGFnZXM7XHJcblx0XHRub2RlQm9va05vdGUuY2hlY2tlZCA9IGJvb2suYm9va1N0YXRlO1xyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdGN1cnJlbnRCb29rTm9kZS50ZXh0Q29udGVudCA9IGRlZmF1bHRNc2c7XHJcblx0XHRcclxuXHRcdGZvcm1BZGRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sRm9ybVVJO1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcclxuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XHJcblxyXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcclxuXHJcbmZ1bmN0aW9uIHNob3dNZXNzYWdlQm9hcmQobm9kZSwgbWVzc2FnZSA9IG1zZywgY3NzQ2xhc3MpIHtcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcclxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XHJcblx0XHJcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdH1cclxuXHQsIDUwMDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lc3NhZ2VCb2FyZDtcclxuXHJcbiIsImZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcclxuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcblx0XHJcblx0aWYgKGh0bWxUZXh0KSB7XHJcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcclxuXHRcdFxyXG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NDbGFzcykge1xyXG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0lkKSB7XHJcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xyXG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXdOb2RlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnLCBjc3NDbGFzcykge1xyXG5cdGxldCBtZXNzYWdlID0gbXNnO1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxyXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRyZXR1cm4gbmV3VUlOb2RlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZURPTU5vZGUsXHJcblx0XHRwcmludE1zZyxcclxufTtcclxuXHJcblxyXG4iLCIvKlxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJcIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAwLCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgbGlicmFyeURhdGFBcnIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIb2JiaXRcIixcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAyOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJhbHJlYWR5IHJlYWRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHdvIFRvd2Vyc1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSZXR1cm4gb2YgdGhlIEtpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tSZWFkKSB7XHJcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdHRoaXMuY29hdXRob3JzID0gW107XHJcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcclxuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcclxuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcclxuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcclxuXHR0aGlzLmVkaXRpb24gPSAxO1xyXG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xyXG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcclxuXHR0aGlzLmJvb2tSZWFkID0gYm9va1JlYWQ7XHJcblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKVxyXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XHJcblx0XHJcblx0dGhpcy5ib29rRGVzYyA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcGVsbGVudGVzcXVlLCBkb2xvciBhYyBzdXNjaXBpdCB2b2x1dHBhdCwgdXJuYSBvZGlvIHN1c2NpcGl0IHRvcnRvciwgdXQgY29uZGltZW50dW0gbWV0dXMgbnVsbGEgc29kYWxlcyBuaXNsLiBOdWxsYW0gcG9ydHRpdG9yIGZpbmlidXMgbWV0dXMgdXQgZmF1Y2lidXMuYDtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBFZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tSZWFkLnRvVXBwZXJDYXNlKCl9XCIgOjo6ICR7dGhpcy5ib29rRGVzY31cclxuXHRgO1xyXG5cdFx0XHRcclxuXHRyZXR1cm4gc2hvcnREZXNjO1xyXG59XHJcblxyXG5Cb29rLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLmF1dGhvcn0gJ3MgJHt0aGlzLnRpdGxlfSBpcyBhIGJvb2sgYWJvdXQ6ICR7dGhpcy5ib29rRGVzY31gO1xyXG5cdFxyXG5cdHJldHVybiBiaWdEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2suanMnO1xyXG5cclxuZnVuY3Rpb24gTGlicmFyeSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5saWJyYXJ5ID0gW107XHJcbn1cclxuXHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rID0gZnVuY3Rpb24oYm9vaykge1xyXG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5ib29rUmVhZCk7XHJcbiAgICBcclxuICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG59XHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShib29rcykpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGJvb2tzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2tzW2ldLnRpdGxlLCBib29rc1tpXS5hdXRob3IsIGJvb2tzW2ldLm51bVBhZ2VzLCBib29rc1tpXS5ib29rUmVhZCk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxyXG4qIFxyXG4qL1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XHJcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xyXG5pbXBvcnQgc2hvd0Jvb2tEZXNjcmlwdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQm9va0Rlc2MuanMnO1xyXG5pbXBvcnQgY29udHJvbEZvcm1VSSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybURlc2MuanMnO1xyXG5cclxuLy8gYm9vayBkYXRhXHJcbmltcG9ydCB7IGxpYnJhcnlEYXRhQXJyIH0gZnJvbSAnLi9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19jbGVhcicpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuXHJcbmxldCBjdXJyZW50U2VsZWN0ZWRCb29rO1xyXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xyXG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XHJcblxyXG5jaGVja0xpYnJhcnkoKTtcclxuXHJcblxyXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5mb3JtQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEZvcm0gbm9kZXNcclxuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblx0XHJcbiAgICBsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gICAgXHJcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGJvb2tCb2FyZE1zZztcclxuICAgIGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoICE9PSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9IGBZb3VyIGJvb2sgXCIke25vZGVUaXRsZS52YWx1ZX1cIiB3YXMgYWRkZWQgdG8gdGhlIEpTLUxJQlJBUlkhYDtcclxuICAgICAgICBcclxuICAgICAgICBteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9ICdCb29rIHdhcyBub3QgYWRkZWQgdG8gdGhlIGx5YnJhcnkhJztcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuICAgIFxyXG4gICAgXHJcblx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHJcblx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdGdldEJvb2tEZXNjKCk7XHJcblx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0cmVtb3ZlQm9va3MoKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhteUJvb2tzaGVsZik7XHJcbiAgICBcclxuICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxufSk7IFxyXG5cclxuXHJcbmZvcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEV4dHJhY3Qgc2VsZWN0ZWQgYm9vayBmcm9tIGxpYnJhcnlcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBjdXJyZW50U2VsZWN0ZWRCb29rLnRpdGxlICE9PSBib29rLnRpdGxlKTtcclxuXHRcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gIFxyXG5cdC8vIFZhbGlkYXRlIGZpZWxzLCB0dXJuIGludG8gQm9vayBvYmplY3QgYW5kIEFkZFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBib29rQm9hcmRNc2c7XHJcbiAgICBpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCA8IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgYm9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtub2RlVGl0bGUudmFsdWV9XCIgd2FzIGVkaXRlZCFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBib29rQm9hcmRNc2cgPSBgVGhlIGJvb2sgXCIke25vZGVUaXRsZS52YWx1ZX1cIiB3YXMgTk9UIGVkaXRlZCFgO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFZhbGlkYXRlIGZpZWxzLCB0dXJuIGludG8gQm9vayBvYmplY3QgYW5kIEFkZFxyXG5cdFx0XHRcdGFkZEJvb2tUb0xpYnJhcnkoY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSwgY3VycmVudFNlbGVjdGVkQm9vay5hdXRob3IsIGN1cnJlbnRTZWxlY3RlZEJvb2subnVtUGFnZXMsIGN1cnJlbnRTZWxlY3RlZEJvb2suYm9va1JlYWQpO1xyXG4gICAgfVxyXG5cdFx0XHJcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XHJcblx0XHJcblx0Y29udHJvbEZvcm1VSShjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgIFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHRjb250cm9sRm9ybVVJKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRCb29rRGVzYygpIHtcclxuICAgIGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcbiAgICBkZXNjQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5JZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggPT09IGJ0bklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0XHRcdFx0Ly8gRGVlcCBjb3B5XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvb2tbMF0pKTtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcdFx0Y29udHJvbEZvcm1VSShjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgLy8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tTdGF0ZSk7XHJcblx0XHRsZXQgYm9va1JlYWQgPSAnJztcclxuXHRcdGlmIChib29rU3RhdGUpIHtcclxuXHRcdFx0Ym9va1JlYWQgPSAnYWxyZWFkeSByZWFkJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvb2tSZWFkID0gJ25vdCByZWFkIHlldCc7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjb25zdCBuZXdCb29rID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBudW1QYWdlcyxcclxuICAgICAgICAgICAgYm9va1JlYWRcclxuICAgICAgICB9O1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhib29rUmVhZCk7XHJcblx0XHRcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2sobmV3Qm9vayk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XHJcblx0XHRcclxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XHJcblx0XHRcclxuXHRcdHNob3dNZXNzYWdlQm9hcmQoJ2g0JywgbWVzc2FnZSwgJ21lc3NhZ2UtYm9hcmQtdmFsaWRhdGlvbicpO1xyXG5cdH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufVxyXG5cclxuXHJcbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cclxuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSkge1xyXG5cdG5vZGVUaXRsZS52YWx1ZSA9ICcnO1xyXG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcclxuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcclxuXHRub2RlQm9va05vdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFxyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Jvb2tOb3RlKG5vZGUsIG5vdGVJZCwgbm90ZSwgY3NzVG9SZW1vdmUsIGNzc1RvQWRkKSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeS5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XHJcblx0XHRcdGJvb2suYm9va1JlYWQgPSBub3RlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xyXG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xyXG5cdGxldCBib29rQm9hcmRNc2cgPSAnQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhJztcclxuICAgIFxyXG4gICAgaWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBkZWZhdWx0Qm9vayA9IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdZb3VyIEJvb2sgaGVyZSEnLCBcclxuICAgICAgICAgICAgYXV0aG9yOiAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsIFxyXG4gICAgICAgICAgICBudW1QYWdlczogJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCBcclxuICAgICAgICAgICAgYm9va1JlYWQ6ICdub3QgcmVhZCB5ZXQnLFxyXG4gICAgICAgIH07XHJcblx0XHRteUJvb2tzaGVsZi5hZGRCb29rKGRlZmF1bHRCb29rKTtcclxuXHRcdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuICAgICAgICBcclxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICBcclxuICAgICAgICBzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTU5vZGUiLCJwcmludE1zZyIsIkxpYnJhcnkiLCJib29rbGlzdFBhcnRpdGlvbkRlc2MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZWZhdWx0TXNnIiwic2hvd0Jvb2tCb2FyZCIsIm5vZGUiLCJtZXNzYWdlIiwiY3NzQ2xhc3MiLCJsaWIiLCJpbm5lckhUTUwiLCJuZXdMaWJyYXJ5Tm9kZSIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJhcHBlbmRDaGlsZCIsIm5ld0xpYnJhcnlPcm5hbWVudCIsIm5ld0xpYnJhcnlOb2RlMiIsImxpYnJhcnkiLCJsZW5ndGgiLCJuZXdCb29rTm9kZSIsImJvb2tTaGVsZiIsImdldEVsZW1lbnRCeUlkIiwic2hvd0Jvb2tsaXN0IiwibGlzdCIsIm5ld05vZGUiLCJtYXAiLCJib29rIiwiaWR4IiwibGkiLCJpbWciLCJwcm9wIiwidmFsdWUiLCJkaXYiLCJoMyIsInNwYW5EZXNjQnRuIiwiaDUiLCJhdXRob3IiLCJwYXJhMSIsIm51bVBhZ2VzIiwic3BhbiIsImJvb2tSZWFkIiwicmVtb3ZlQnRuIiwic2V0QXR0cmlidXRlIiwiY3VycmVudEJvb2tOb2RlIiwiZm9ybUFkZEJ0biIsImZvcm1FZGl0QnRuIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImZvcm1GaWVsZHMiLCJjdXJyZW50Qm9vayIsImJvb2tUaXRsZSIsImJvb2tBdXRob3IiLCJib29rU3RhdGUiLCJnZXRGb3JtRmllbGRzIiwiY2hlY2tlZCIsImNvbnRyb2xGb3JtVUkiLCJ0ZXh0Q29udGVudCIsImRpc2FibGVkIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJzaG93Qm9va0Rlc2NyaXB0aW9uIiwiYWJvdXRTZWN0aW9uIiwiZm9ybUNsZWFyQnRuIiwiY3VycmVudFNlbGVjdGVkQm9vayIsIm15Qm9va3NoZWxmIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZmlsdGVyIiwiY2xlYXJGb3JtU2hlZXQiLCJnZXRCb29rRGVzYyIsImNoYW5nZUJvb2tOb3RlcyIsInJlbW92ZUJvb2tzIiwiZGVzY0J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImUiLCJidG5JZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImJvb2tOb3RlcyIsIm5vdGUiLCJub3RlSWQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va0luZGV4IiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsImRlZmF1bHRCb29rIl0sInNvdXJjZVJvb3QiOiIifQ==