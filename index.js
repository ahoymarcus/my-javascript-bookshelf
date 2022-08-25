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
/* harmony export */   "clearFormSheet": () => (/* binding */ clearFormSheet),
/* harmony export */   "getFormFields": () => (/* binding */ getFormFields),
/* harmony export */   "setFormFields": () => (/* binding */ setFormFields)
/* harmony export */ });
/* harmony import */ var _auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxUIFunctions.js */ "./src/components/auxUIFunctions.js");
 // UI nodes

var currentBookFormNode = document.querySelector('.form-partition__selected');
var formAddBtn = document.querySelector('.form-partition__add');
var formEditBtn = document.querySelector('.form-partition__edit'); // Form nodes

var nodeTitle = document.getElementById('title');
var nodeAuthor = document.getElementById('author');
var nodePages = document.getElementById('num-pages');
var nodeBookNote = document.getElementById('is-read');
var defaultMsg = 'There is no selected book!';
var formFields = {
  title: null,
  author: null,
  nPages: 0,
  bRead: 'not read yet'
};

function getFormFields() {
  formFields.title = document.getElementById('title').value;
  formFields.author = document.getElementById('author').value;
  formFields.nPages = document.getElementById('num-pages').value;

  if (document.getElementById('is-read').checked) {
    formFields.bRead = 'already read';
  } else {
    formFields.bRead = 'not read yet';
  }

  return formFields;
}

function setFormFields(selectedBook) {
  if (selectedBook) {
    currentBookFormNode.textContent = selectedBook.title.toUpperCase();
    nodeTitle.value = selectedBook.title;
    nodeAuthor.value = selectedBook.author;
    nodePages.value = selectedBook.numPages;

    if (selectedBook.bookRead === 'already read') {
      nodeBookNote.checked = true;
    } else {
      nodeBookNote.checked = false;
    }

    formAddBtn.disabled = true;
    formEditBtn.disabled = false;
  } else {
    currentBookFormNode.textContent = defaultMsg;
    formAddBtn.disabled = false;
    formEditBtn.disabled = true;
  }
}

function clearFormSheet() {
  nodeTitle.value = '';
  nodeAuthor.value = '';
  nodePages.value = '';
  nodeBookNote.checked = false;
}



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
  var formFields = (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.getFormFields)();
  var cashedLibraryLength = myBookshelf.library.length;
  addBookToLibrary(formFields.title, formFields.author, formFields.nPages, formFields.bRead);
  var bookBoardMsg;

  if (cashedLibraryLength !== myBookshelf.library.length) {
    bookBoardMsg = "Your book \"".concat(formFields.title, "\" was added to the JS-LIBRARY!");
    myBookshelf.library = myBookshelf.library.filter(function (book) {
      return book.title !== 'Your Book here!';
    });
  } else {
    bookBoardMsg = 'Book was not added to the lybrary!';
  }

  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.clearFormSheet)();
  currentSelectedBook = null; // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  console.log(myBookshelf.library);
});
formEditBtn.addEventListener('click', function () {
  // Extract selected book from library
  myBookshelf.library = myBookshelf.library.filter(function (book) {
    return currentSelectedBook.title !== book.title;
  });
  var formFields = (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.getFormFields)();
  var cashedLibraryLength = myBookshelf.library.length; // Turn into Book object and Add to library

  addBookToLibrary(formFields.title, formFields.author, formFields.nPages, formFields.bRead);
  var bookBoardMsg;

  if (cashedLibraryLength < myBookshelf.library.length) {
    bookBoardMsg = "The book \"".concat(formFields.title, "\" was edited!");
  } else {
    bookBoardMsg = "The book \"".concat(formFields.title, "\" was NOT edited!"); // Turn into Book object and Add to library

    addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookRead);
  }

  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.clearFormSheet)();
  currentSelectedBook = null;
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.setFormFields)(currentSelectedBook); // Render library

  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

  getBookDesc();
  changeBookNotes();
  removeBooks();
  console.log(myBookshelf);
  (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  console.log(myBookshelf.library);
});
formClearBtn.addEventListener('click', function () {
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.clearFormSheet)();
  currentSelectedBook = null;
  (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.setFormFields)(currentSelectedBook);
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
      (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.setFormFields)(currentSelectedBook); // Alternative book method details

      var message = book[0].description();
      (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', book[0].info(), 'booklist-partition__board-text2', myBookshelf);
    });
  });
  console.log(myBookshelf.library);
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
  console.log(myBookshelf.library);
}

function addBookToLibrary(title, author, numPages, bookRead) {
  if (title && author) {
    if (!numPages) {
      numPages = 0;
    }

    var newBook = {
      title: title,
      author: author,
      numPages: numPages,
      bookRead: bookRead
    };
    myBookshelf.addBook(newBook);
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
}
/* AUXILIARY FUNCTIONS */


function checkBookNote(node, noteId, note, cssToRemove, cssToAdd) {
  myBookshelf.library.map(function (book, idx) {
    if (idx === noteId) {
      book.bookRead = note;
    }
  });
  node.textContent = note;
  node.classList.remove(cssToRemove);
  node.classList.add(cssToAdd);
  console.log(myBookshelf.library);
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
    myBookshelf.addBook(defaultBook); // Render library

    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

    removeBooks();
    (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDQXFHLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxXQUFXO0lBRVhiLG1FQUFtQixDQUFDLElBQUQsRUFBT1MsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RMLFdBQXhELENBQW5CO0VBQ0EsQ0FaRCxNQVlPO0lBQ04sSUFBTWlDLFdBQVcsR0FBRztNQUNuQnBJLEtBQUssRUFBRSxpQkFEWTtNQUVuQndCLE1BQU0sRUFBRSwyQkFGVztNQUduQkUsUUFBUSxFQUFFLHFCQUhTO01BSW5CRSxRQUFRLEVBQUU7SUFKUyxDQUFwQjtJQU1BdUUsV0FBVyxDQUFDVCxPQUFaLENBQW9CMEMsV0FBcEIsRUFQTSxDQVNOOztJQUNBMUgsbUVBQVksQ0FBQ3lGLFdBQVcsQ0FBQzlGLE9BQWIsQ0FBWixDQVZNLENBWU47O0lBQ0F1RyxXQUFXO0lBRVRiLG1FQUFtQixDQUFDLElBQUQsRUFBT1MsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RMLFdBQXhELENBQW5CO0VBQ0Y7QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va0Rlc2MuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va2xpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvRm9ybURlc2MuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL2F1eFVJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XHJcblxyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnbXlCb29rc2hlbGYnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Jvb2tCb2FyZChub2RlLCBtZXNzYWdlID0gZGVmYXVsdE1zZywgY3NzQ2xhc3MsIGxpYikge1xyXG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUgPSBwcmludE1zZygnaDInLCBsaWIudGl0bGUudG9VcHBlckNhc2UoKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcclxuICAgICAgICAvL2xldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdocicpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZTI7XHJcbiAgICAgICAgaWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xyXG4gICAgICAgICAgICBuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygncCcsIGBUb3RhbCBvZiBib29rczogMCBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rUmVhZCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tSZWFkLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdFxyXG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcclxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGN1cnJlbnRCb29rRm9ybU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX3NlbGVjdGVkJyk7XHJcbmNvbnN0IGZvcm1BZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2FkZCcpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuLy8gRm9ybSBub2Rlc1xyXG5jb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuY29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5jb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnVGhlcmUgaXMgbm8gc2VsZWN0ZWQgYm9vayEnO1xyXG5cclxuY29uc3QgZm9ybUZpZWxkcyA9IHtcclxuXHR0aXRsZTogbnVsbCxcclxuXHRhdXRob3I6IG51bGwsXHJcblx0blBhZ2VzOiAwLCBcclxuXHRiUmVhZDogJ25vdCByZWFkIHlldCdcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtRmllbGRzKCkge1xyXG5cdGZvcm1GaWVsZHMudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLmF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLm5QYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKS52YWx1ZTtcclxuXHRcclxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKS5jaGVja2VkKSB7XHJcblx0XHRmb3JtRmllbGRzLmJSZWFkID0gJ2FscmVhZHkgcmVhZCc7XHJcblx0fSBlbHNlIHtcclxuXHRcdGZvcm1GaWVsZHMuYlJlYWQgPSAnbm90IHJlYWQgeWV0JztcclxuXHR9XHJcblxyXG5cdHJldHVybiBmb3JtRmllbGRzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybUZpZWxkcyhzZWxlY3RlZEJvb2spIHtcclxuXHRpZiAoc2VsZWN0ZWRCb29rKSB7XHJcblx0XHRjdXJyZW50Qm9va0Zvcm1Ob2RlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRCb29rLnRpdGxlLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRub2RlVGl0bGUudmFsdWUgPSBzZWxlY3RlZEJvb2sudGl0bGU7XHJcblx0XHRub2RlQXV0aG9yLnZhbHVlID0gc2VsZWN0ZWRCb29rLmF1dGhvcjtcclxuXHRcdG5vZGVQYWdlcy52YWx1ZSA9IHNlbGVjdGVkQm9vay5udW1QYWdlcztcclxuXHRcdFxyXG5cdFx0aWYgKHNlbGVjdGVkQm9vay5ib29rUmVhZCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjdXJyZW50Qm9va0Zvcm1Ob2RlLnRleHRDb250ZW50ID0gZGVmYXVsdE1zZztcclxuXHRcdFxyXG5cdFx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0Zm9ybUVkaXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KCkge1xyXG5cdG5vZGVUaXRsZS52YWx1ZSA9ICcnO1xyXG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcclxuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcclxuXHRub2RlQm9va05vdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0Z2V0Rm9ybUZpZWxkcyxcclxuXHRzZXRGb3JtRmllbGRzLFxyXG5cdGNsZWFyRm9ybVNoZWV0XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcclxuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XHJcblxyXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcclxuXHJcbmZ1bmN0aW9uIHNob3dNZXNzYWdlQm9hcmQobm9kZSwgbWVzc2FnZSA9IG1zZywgY3NzQ2xhc3MpIHtcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcclxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XHJcblx0XHJcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdH1cclxuXHQsIDUwMDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lc3NhZ2VCb2FyZDtcclxuXHJcbiIsImZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcclxuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcblx0XHJcblx0aWYgKGh0bWxUZXh0KSB7XHJcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcclxuXHRcdFxyXG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NDbGFzcykge1xyXG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0lkKSB7XHJcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xyXG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXdOb2RlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnLCBjc3NDbGFzcykge1xyXG5cdGxldCBtZXNzYWdlID0gbXNnO1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBjcmVhdGVET01Ob2RlKFxyXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRyZXR1cm4gbmV3VUlOb2RlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZURPTU5vZGUsXHJcblx0XHRwcmludE1zZyxcclxufTtcclxuXHJcblxyXG4iLCIvKlxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJcIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAwLCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgbGlicmFyeURhdGFBcnIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIb2JiaXRcIixcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAyOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJhbHJlYWR5IHJlYWRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVHdvIFRvd2Vyc1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSZXR1cm4gb2YgdGhlIEtpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tSZWFkKSB7XHJcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdHRoaXMuY29hdXRob3JzID0gW107XHJcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcclxuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcclxuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcclxuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcclxuXHR0aGlzLmVkaXRpb24gPSAxO1xyXG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xyXG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcclxuXHR0aGlzLmJvb2tSZWFkID0gYm9va1JlYWQ7XHJcblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKVxyXG5cdHRoaXMubGFzdENoYW5nZSA9IG5ldyBEYXRlKCk7XHJcblx0XHJcblx0dGhpcy5ib29rRGVzYyA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcGVsbGVudGVzcXVlLCBkb2xvciBhYyBzdXNjaXBpdCB2b2x1dHBhdCwgdXJuYSBvZGlvIHN1c2NpcGl0IHRvcnRvciwgdXQgY29uZGltZW50dW0gbWV0dXMgbnVsbGEgc29kYWxlcyBuaXNsLiBOdWxsYW0gcG9ydHRpdG9yIGZpbmlidXMgbWV0dXMgdXQgZmF1Y2lidXMuYDtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBFZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tSZWFkLnRvVXBwZXJDYXNlKCl9XCIgOjo6ICR7dGhpcy5ib29rRGVzY31cclxuXHRgO1xyXG5cdFx0XHRcclxuXHRyZXR1cm4gc2hvcnREZXNjO1xyXG59XHJcblxyXG5Cb29rLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLmF1dGhvcn0gJ3MgJHt0aGlzLnRpdGxlfSBpcyBhIGJvb2sgYWJvdXQ6ICR7dGhpcy5ib29rRGVzY31gO1xyXG5cdFxyXG5cdHJldHVybiBiaWdEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2suanMnO1xyXG5cclxuZnVuY3Rpb24gTGlicmFyeSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5saWJyYXJ5ID0gW107XHJcbn1cclxuXHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rID0gZnVuY3Rpb24oYm9vaykge1xyXG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5ib29rUmVhZCk7XHJcbiAgICBcclxuICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG59XHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShib29rcykpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGJvb2tzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2tzW2ldLnRpdGxlLCBib29rc1tpXS5hdXRob3IsIGJvb2tzW2ldLm51bVBhZ2VzLCBib29rc1tpXS5ib29rUmVhZCk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxyXG4qIFxyXG4qL1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XHJcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xyXG5pbXBvcnQgc2hvd0Jvb2tEZXNjcmlwdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQm9va0Rlc2MuanMnO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzLCBjbGVhckZvcm1TaGVldCB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JtRGVzYy5qcyc7XHJcbiBcclxuLy8gYm9vayBkYXRhXHJcbmltcG9ydCB7IGxpYnJhcnlEYXRhQXJyIH0gZnJvbSAnLi9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19jbGVhcicpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuXHJcbmxldCBjdXJyZW50U2VsZWN0ZWRCb29rO1xyXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xyXG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XHJcblxyXG5jaGVja0xpYnJhcnkoKTtcclxuXHJcblxyXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5mb3JtQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGxldCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkcygpO1xyXG5cclxuICBsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gICAgXHJcblx0YWRkQm9va1RvTGlicmFyeShmb3JtRmllbGRzLnRpdGxlLCBmb3JtRmllbGRzLmF1dGhvciwgZm9ybUZpZWxkcy5uUGFnZXMsIGZvcm1GaWVsZHMuYlJlYWQpO1xyXG4gIFxyXG5cdGxldCBib29rQm9hcmRNc2c7XHJcblx0aWYgKGNhc2hlZExpYnJhcnlMZW5ndGggIT09IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoKSB7XHJcblx0XHRib29rQm9hcmRNc2cgPSBgWW91ciBib29rIFwiJHtmb3JtRmllbGRzLnRpdGxlfVwiIHdhcyBhZGRlZCB0byB0aGUgSlMtTElCUkFSWSFgO1xyXG5cdFx0XHRcclxuXHRcdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGJvb2sudGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gJ0Jvb2sgd2FzIG5vdCBhZGRlZCB0byB0aGUgbHlicmFyeSEnO1xyXG5cdH0gXHJcbiAgICBcclxuXHRjbGVhckZvcm1TaGVldCgpO1xyXG5cdFxyXG4gIGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsOyBcclxuICAgIFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICBcclxuICBzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn0pOyBcclxuXHJcblxyXG5mb3JtRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBFeHRyYWN0IHNlbGVjdGVkIGJvb2sgZnJvbSBsaWJyYXJ5XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSAhPT0gYm9vay50aXRsZSk7XHJcblx0XHJcblx0bGV0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzKCk7XHJcblx0XHJcblx0bGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICBcclxuXHQvLyBUdXJuIGludG8gQm9vayBvYmplY3QgYW5kIEFkZCB0byBsaWJyYXJ5XHJcblx0YWRkQm9va1RvTGlicmFyeShmb3JtRmllbGRzLnRpdGxlLCBmb3JtRmllbGRzLmF1dGhvciwgZm9ybUZpZWxkcy5uUGFnZXMsIGZvcm1GaWVsZHMuYlJlYWQpO1xyXG5cclxuXHRsZXQgYm9va0JvYXJkTXNnO1xyXG5cdGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoIDwgbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBUaGUgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgZWRpdGVkIWA7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBUaGUgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgTk9UIGVkaXRlZCFgO1xyXG5cdFx0XHJcblx0XHQvLyBUdXJuIGludG8gQm9vayBvYmplY3QgYW5kIEFkZCB0byBsaWJyYXJ5XHJcblx0XHRhZGRCb29rVG9MaWJyYXJ5KGN1cnJlbnRTZWxlY3RlZEJvb2sudGl0bGUsIGN1cnJlbnRTZWxlY3RlZEJvb2suYXV0aG9yLCBjdXJyZW50U2VsZWN0ZWRCb29rLm51bVBhZ2VzLCBjdXJyZW50U2VsZWN0ZWRCb29rLmJvb2tSZWFkKTtcclxuXHR9XHJcblx0XHRcclxuXHRjbGVhckZvcm1TaGVldCgpO1xyXG5cdFxyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG5cdFxyXG5cdHNldEZvcm1GaWVsZHMoY3VycmVudFNlbGVjdGVkQm9vayk7XHJcblx0XHJcblx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHJcblx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdGdldEJvb2tEZXNjKCk7XHJcblx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0cmVtb3ZlQm9va3MoKTtcclxuICAgICBcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZik7XHJcblx0XHJcblx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59KTtcclxuXHJcblxyXG5mb3JtQ2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Y2xlYXJGb3JtU2hlZXQoKTtcclxuXHRjdXJyZW50U2VsZWN0ZWRCb29rID0gbnVsbDtcclxuXHRzZXRGb3JtRmllbGRzKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRCb29rRGVzYygpIHtcclxuXHRjb25zdCBkZXNjQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFxyXG5cdGRlc2NCdG5zLmZvckVhY2goYnRuID0+IHtcclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IGJ0bklkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0Y29uc29sZS5sb2coYnRuSWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGJvb2sgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGlkeCA9PT0gYnRuSWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBib29rO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBEZWVwIGNvcHlcclxuXHRcdFx0Y3VycmVudFNlbGVjdGVkQm9vayA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9va1swXSkpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHJcblx0XHRcdHNldEZvcm1GaWVsZHMoY3VycmVudFNlbGVjdGVkQm9vayk7XHJcblx0XHRcdFx0XHJcblx0XHRcdC8vIEFsdGVybmF0aXZlIGJvb2sgbWV0aG9kIGRldGFpbHNcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBib29rWzBdLmRlc2NyaXB0aW9uKCk7XHJcblxyXG5cdFx0XHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tbMF0uaW5mbygpLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQm9va05vdGVzKCkge1xyXG5cdGNvbnN0IGJvb2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNib29rLW5vdGUnKTtcclxuXHRcclxuXHRib29rTm90ZXMuZm9yRWFjaChub3RlID0+IHtcclxuXHRcdG5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XHJcblx0XHRcdGxldCBub3RlSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhub3RlSWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnYWxyZWFkeSByZWFkJykge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ25vdCByZWFkIHlldCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdhbHJlYWR5IHJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9va3MoKSB7XHJcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcclxuXHRcclxuXHRyZW1vdmVCdG5zLmZvckVhY2goYnRuID0+IHtcclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGxldCBidG5JbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZW1vdmVCb29rZnJvbUxpYnJhcnkoYnRuSW5kZXgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUmVuZGVyIEJvb2tsaXN0XHJcblx0XHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdFx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRcdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHRcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufSAgXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1JlYWQpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3QgbmV3Qm9vayA9IHtcclxuXHRcdFx0XHR0aXRsZSxcclxuXHRcdFx0XHRhdXRob3IsXHJcblx0XHRcdFx0bnVtUGFnZXMsXHJcblx0XHRcdFx0Ym9va1JlYWRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2sobmV3Qm9vayk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcclxuXHRcdFxyXG5cdFx0bGV0IG1lc3NhZ2UgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tSZWFkID0gbm90ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcclxuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xyXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcclxuXHRsZXQgYm9va0JvYXJkTXNnID0gJ0NsaWNrIG9uIHRoZSBib29rcyB0byBnZXQgdGhlaXIgZGVzY3JpcHRpb25zISc7XHJcbiAgICBcclxuXHRpZiAobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGggPiAwKSB7XHJcblx0XHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcblx0XHRcdFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0XHRcdFxyXG5cdFx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBkZWZhdWx0Qm9vayA9IHtcclxuXHRcdFx0dGl0bGU6ICdZb3VyIEJvb2sgaGVyZSEnLCBcclxuXHRcdFx0YXV0aG9yOiAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsIFxyXG5cdFx0XHRudW1QYWdlczogJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCBcclxuXHRcdFx0Ym9va1JlYWQ6ICdub3QgcmVhZCB5ZXQnLFxyXG5cdFx0fTtcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xyXG4gICAgICAgIFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgIFxyXG4gICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH0gXHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiTGlicmFyeSIsImJvb2tsaXN0UGFydGl0aW9uRGVzYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRNc2ciLCJzaG93Qm9va0JvYXJkIiwibm9kZSIsIm1lc3NhZ2UiLCJjc3NDbGFzcyIsImxpYiIsImlubmVySFRNTCIsIm5ld0xpYnJhcnlOb2RlIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZENoaWxkIiwibmV3TGlicmFyeU9ybmFtZW50IiwibmV3TGlicmFyeU5vZGUyIiwibGlicmFyeSIsImxlbmd0aCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwic3BhbkRlc2NCdG4iLCJoNSIsImF1dGhvciIsInBhcmExIiwibnVtUGFnZXMiLCJzcGFuIiwiYm9va1JlYWQiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50Qm9va0Zvcm1Ob2RlIiwiZm9ybUFkZEJ0biIsImZvcm1FZGl0QnRuIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImZvcm1GaWVsZHMiLCJuUGFnZXMiLCJiUmVhZCIsImdldEZvcm1GaWVsZHMiLCJjaGVja2VkIiwic2V0Rm9ybUZpZWxkcyIsInNlbGVjdGVkQm9vayIsInRleHRDb250ZW50IiwiZGlzYWJsZWQiLCJjbGVhckZvcm1TaGVldCIsIm1lc3NhZ2VCb2FyZCIsInRoaXJkV2FsbE9ybmFtZW50IiwibXNnIiwic2hvd01lc3NhZ2VCb2FyZCIsIm5ld1VJTm9kZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJtc2dUaW1lb3V0Iiwic2V0VGltZW91dCIsImh0bWxUZXh0IiwiY3NzSWQiLCJjc3NQcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibGlicmFyeURhdGFBcnIiLCJCb29rIiwiY29hdXRob3JzIiwibnVtVm9sdW1lcyIsInB1Ymxpc2hlciIsImJvb2tUeXBlIiwiYm9va0NhdGVnb3J5IiwiZWRpdGlvbiIsInJlbGVhc2VZZWFyIiwiRGF0ZSIsImRhdGUiLCJsYXN0Q2hhbmdlIiwiYm9va0Rlc2MiLCJwcm90b3R5cGUiLCJpbmZvIiwic2hvcnREZXNjIiwiZ2V0RnVsbFllYXIiLCJkZXNjcmlwdGlvbiIsImJpZ0Rlc2MiLCJhZGRCb29rIiwibmV3Qm9vayIsInB1c2giLCJhZGRCb29rTGlzdCIsImJvb2tzIiwic2hvd0Jvb2tEZXNjcmlwdGlvbiIsImFib3V0U2VjdGlvbiIsImZvcm1DbGVhckJ0biIsImN1cnJlbnRTZWxlY3RlZEJvb2siLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXNoZWRMaWJyYXJ5TGVuZ3RoIiwiYWRkQm9va1RvTGlicmFyeSIsImJvb2tCb2FyZE1zZyIsImZpbHRlciIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZSIsImJ0bklkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYm9va05vdGVzIiwibm90ZSIsIm5vdGVJZCIsImNoZWNrQm9va05vdGUiLCJyZW1vdmVCdG5zIiwiYnRuSW5kZXgiLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rSW5kZXgiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9