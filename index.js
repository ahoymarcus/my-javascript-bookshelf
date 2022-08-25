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
  formFields.nPages = document.getElementById('num-pages').value; // insert validation here!!!!!

  formFields.bRead = document.getElementById('is-read').checked;
  return formFields;
}

function setFormFields(selectedBook) {
  if (selectedBook) {
    currentBookFormNode.textContent = selectedBook.title.toUpperCase();
    nodeTitle.value = selectedBook.title;
    nodeAuthor.value = selectedBook.author;
    nodePages.value = selectedBook.numPages;
    nodeBookNote.checked = selectedBook.bookState;
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
});
formEditBtn.addEventListener('click', function () {
  // Extract selected book from library
  myBookshelf.library = myBookshelf.library.filter(function (book) {
    return currentSelectedBook.title !== book.title;
  });
  var formFields = (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.getFormFields)();
  var cashedLibraryLength = myBookshelf.library.length; // Validate fiels, turn into Book object and Add

  addBookToLibrary(formFields.title, formFields.author, formFields.nPages, formFields.bRead);
  var bookBoardMsg;

  if (cashedLibraryLength < myBookshelf.library.length) {
    bookBoardMsg = "The book \"".concat(formFields.title, "\" was edited!");
  } else {
    bookBoardMsg = "The book \"".concat(formFields.title, "\" was NOT edited!"); // Validate fiels, turn into Book object and Add

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

      currentSelectedBook = JSON.parse(JSON.stringify(book[0])); //console.log(currentSelectedBook);

      (0,_components_FormDesc_js__WEBPACK_IMPORTED_MODULE_4__.setFormFields)(currentSelectedBook); // Alternative book method details

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxHQUFHO01BQ1ZySSxLQUFLLEVBQUUsaUJBREc7TUFFVndCLE1BQU0sRUFBRSwyQkFGRTtNQUdWRSxRQUFRLEVBQUUscUJBSEE7TUFJVkUsUUFBUSxFQUFFO0lBSkEsQ0FBcEI7SUFNQXdFLFdBQVcsQ0FBQ1QsT0FBWixDQUFvQjBDLFdBQXBCO0lBRU03RSxPQUFPLENBQUNDLEdBQVIsQ0FBWTJDLFdBQVosRUFUQSxDQVdOOztJQUNBMUYsbUVBQVksQ0FBQzBGLFdBQVcsQ0FBQy9GLE9BQWIsQ0FBWixDQVpNLENBY047O0lBQ0F3RyxXQUFXO0lBRUxiLG1FQUFtQixDQUFDLElBQUQsRUFBT1MsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RMLFdBQXhELENBQW5CO0VBQ047QUFDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va0Rlc2MuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvQm9va2xpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvRm9ybURlc2MuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL2F1eFVJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XHJcblxyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnbXlCb29rc2hlbGYnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Jvb2tCb2FyZChub2RlLCBtZXNzYWdlID0gZGVmYXVsdE1zZywgY3NzQ2xhc3MsIGxpYikge1xyXG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUgPSBwcmludE1zZygnaDInLCBsaWIudGl0bGUudG9VcHBlckNhc2UoKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcclxuICAgICAgICAvL2xldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdocicpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZTI7XHJcbiAgICAgICAgaWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xyXG4gICAgICAgICAgICBuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygncCcsIGBUb3RhbCBvZiBib29rczogMCBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rUmVhZCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tSZWFkLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdFxyXG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcclxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGN1cnJlbnRCb29rRm9ybU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX3NlbGVjdGVkJyk7XHJcbmNvbnN0IGZvcm1BZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2FkZCcpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuLy8gRm9ybSBub2Rlc1xyXG5jb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuY29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5jb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnVGhlcmUgaXMgbm8gc2VsZWN0ZWQgYm9vayEnO1xyXG5cclxuY29uc3QgZm9ybUZpZWxkcyA9IHtcclxuXHR0aXRsZTogbnVsbCxcclxuXHRhdXRob3I6IG51bGwsXHJcblx0blBhZ2VzOiAwLCBcclxuXHRiUmVhZDogJ25vdCByZWFkIHlldCdcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtRmllbGRzKCkge1xyXG5cdGZvcm1GaWVsZHMudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLmF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLm5QYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKS52YWx1ZTtcclxuXHRcclxuXHQvLyBpbnNlcnQgdmFsaWRhdGlvbiBoZXJlISEhISFcclxuXHRmb3JtRmllbGRzLmJSZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKS5jaGVja2VkO1xyXG5cclxuXHRyZXR1cm4gZm9ybUZpZWxkcztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRGb3JtRmllbGRzKHNlbGVjdGVkQm9vaykge1xyXG5cdGlmIChzZWxlY3RlZEJvb2spIHtcclxuXHRcdGN1cnJlbnRCb29rRm9ybU5vZGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZEJvb2sudGl0bGUudG9VcHBlckNhc2UoKTtcclxuXHRcdG5vZGVUaXRsZS52YWx1ZSA9IHNlbGVjdGVkQm9vay50aXRsZTtcclxuXHRcdG5vZGVBdXRob3IudmFsdWUgPSBzZWxlY3RlZEJvb2suYXV0aG9yO1xyXG5cdFx0bm9kZVBhZ2VzLnZhbHVlID0gc2VsZWN0ZWRCb29rLm51bVBhZ2VzO1xyXG5cdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBzZWxlY3RlZEJvb2suYm9va1N0YXRlO1xyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdGN1cnJlbnRCb29rRm9ybU5vZGUudGV4dENvbnRlbnQgPSBkZWZhdWx0TXNnO1xyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQoKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRGb3JtRmllbGRzLFxyXG5cdHNldEZvcm1GaWVsZHMsXHJcblx0Y2xlYXJGb3JtU2hlZXRcclxufTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xyXG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcclxuXHJcbmxldCBtc2cgPSAnV2VsY29tZSwgZmVsbCBmcmVlIHRvIHBvc3QgeW91ciBib29rcyBoZXJlISA6LSknO1xyXG5cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlID0gbXNnLCBjc3NDbGFzcykge1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxuXHRcclxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0fVxyXG5cdCwgNTAwMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xyXG5cclxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xyXG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuXHRcclxuXHRpZiAoaHRtbFRleHQpIHtcclxuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xyXG5cdFx0XHJcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0NsYXNzKSB7XHJcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzSWQpIHtcclxuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcclxuXHR9XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XHJcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG5ld05vZGU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2csIGNzc0NsYXNzKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXHJcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdHJldHVybiBuZXdVSU5vZGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlRE9NTm9kZSxcclxuXHRcdHByaW50TXNnLFxyXG59O1xyXG5cclxuXHJcbiIsIi8qXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIlwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDAsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsaWJyYXJ5RGF0YUFyciA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhvYmJpdFwiLFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIixcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDI5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcImFscmVhZHkgcmVhZFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUd28gVG93ZXJzXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJldHVybiBvZiB0aGUgS2luZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1JlYWQpIHtcclxuXHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0dGhpcy5jb2F1dGhvcnMgPSBbXTtcclxuXHR0aGlzLm51bVZvbHVtZXMgPSAxO1xyXG5cdHRoaXMucHVibGlzaGVyID0gJ0ZhbnRhc3RpYyBCb29rc2hlbGYnO1xyXG5cdHRoaXMuYm9va1R5cGUgPSAnaGFyZCBjb3J2ZXInO1xyXG5cdHRoaXMuYm9va0NhdGVnb3J5ID0gJ2ZpY3Rpb24nO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1JlYWQgPSBib29rUmVhZDtcclxuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0dGhpcy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcclxuXHRcclxuXHR0aGlzLmJvb2tEZXNjID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBwZWxsZW50ZXNxdWUsIGRvbG9yIGFjIHN1c2NpcGl0IHZvbHV0cGF0LCB1cm5hIG9kaW8gc3VzY2lwaXQgdG9ydG9yLCB1dCBjb25kaW1lbnR1bSBtZXR1cyBudWxsYSBzb2RhbGVzIG5pc2wuIE51bGxhbSBwb3J0dGl0b3IgZmluaWJ1cyBtZXR1cyB1dCBmYXVjaWJ1cy5gO1xyXG59IFxyXG5cclxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IHNob3J0RGVzYyA9IGBUaGUgYm9vayBcIiR7dGhpcy50aXRsZX1cIiBieSAke3RoaXMuYXV0aG9yfSBoYXMgJHt0aGlzLm51bVBhZ2VzfSBwYWdlcywgaW4gJHt0aGlzLm51bVZvbHVtZXN9IHZvbHVtZShzKS4gSXQgaXMgYSAke3RoaXMuYm9va0NhdGVnb3J5LnRvVXBwZXJDYXNlKCl9IHB1YmxpY2F0aW9uIGJ5ICR7dGhpcy5wdWJsaXNoZXJ9IEVkaXRvcnMsIHJlbGVhc2VkIGluIFwiJHt0aGlzLmJvb2tUeXBlfVwiIGZvcm1hdCwgaW4gJHt0aGlzLnJlbGVhc2VZZWFyLmdldEZ1bGxZZWFyKCl9IC0gXCIke3RoaXMuYm9va1JlYWQudG9VcHBlckNhc2UoKX1cIiA6OjogJHt0aGlzLmJvb2tEZXNjfVxyXG5cdGA7XHJcblx0XHRcdFxyXG5cdHJldHVybiBzaG9ydERlc2M7XHJcbn1cclxuXHJcbkJvb2sucHJvdG90eXBlLmRlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYmlnRGVzYyA9IGAke3RoaXMuYXV0aG9yfSAncyAke3RoaXMudGl0bGV9IGlzIGEgYm9vayBhYm91dDogJHt0aGlzLmJvb2tEZXNjfWA7XHJcblx0XHJcblx0cmV0dXJuIGJpZ0Rlc2M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcbiIsImltcG9ydCBCb29rIGZyb20gJy4vQm9vay5qcyc7XHJcblxyXG5mdW5jdGlvbiBMaWJyYXJ5KHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmxpYnJhcnkgPSBbXTtcclxufVxyXG5cclxuXHJcbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2sgPSBmdW5jdGlvbihib29rKSB7XHJcbiAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2sudGl0bGUsIGJvb2suYXV0aG9yLCBib29rLm51bVBhZ2VzLCBib29rLmJvb2tSZWFkKTtcclxuICAgIFxyXG4gICAgdGhpcy5saWJyYXJ5LnB1c2gobmV3Qm9vayk7XHJcbn1cclxuXHJcbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2tMaXN0ID0gZnVuY3Rpb24oYm9va3MpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGJvb2tzKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYm9va3MpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9va3NbaV0udGl0bGUsIGJvb2tzW2ldLmF1dGhvciwgYm9va3NbaV0ubnVtUGFnZXMsIGJvb2tzW2ldLmJvb2tSZWFkKTtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0Jvb2spO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5saWJyYXJ5LnB1c2gobmV3Qm9vayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXHJcbiogXHJcbiovXHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcclxuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcbmltcG9ydCBzaG93Qm9va0Rlc2NyaXB0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Cb29rRGVzYy5qcyc7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMsIGNsZWFyRm9ybVNoZWV0IH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvcm1EZXNjLmpzJztcclxuXHJcbi8vIGJvb2sgZGF0YVxyXG5pbXBvcnQgeyBsaWJyYXJ5RGF0YUFyciB9IGZyb20gJy4vZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1DbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fY2xlYXInKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuXHJcblxyXG5sZXQgY3VycmVudFNlbGVjdGVkQm9vaztcclxuY29uc3QgbXlCb29rc2hlbGYgPSBuZXcgTGlicmFyeSgnSmF2YVNjcmlwdCBCb29rc2hlbGYnKTtcclxubXlCb29rc2hlbGYuYWRkQm9va0xpc3QobGlicmFyeURhdGFBcnIpO1xyXG5cclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuZm9ybUFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRsZXQgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMoKTtcclxuXHJcbiAgbGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICAgIFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkoZm9ybUZpZWxkcy50aXRsZSwgZm9ybUZpZWxkcy5hdXRob3IsIGZvcm1GaWVsZHMublBhZ2VzLCBmb3JtRmllbGRzLmJSZWFkKTtcclxuICBcclxuXHRsZXQgYm9va0JvYXJkTXNnO1xyXG5cdGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoICE9PSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFlvdXIgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgYWRkZWQgdG8gdGhlIEpTLUxJQlJBUlkhYDtcclxuXHRcdFx0XHJcblx0XHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9ICdCb29rIHdhcyBub3QgYWRkZWQgdG8gdGhlIGx5YnJhcnkhJztcclxuXHR9IFxyXG4gICAgXHJcblx0Y2xlYXJGb3JtU2hlZXQoKTtcclxuXHRcclxuICBjdXJyZW50U2VsZWN0ZWRCb29rID0gbnVsbDsgXHJcbiAgICBcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgXHJcbiAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG59KTsgXHJcblxyXG5cclxuZm9ybUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Ly8gRXh0cmFjdCBzZWxlY3RlZCBib29rIGZyb20gbGlicmFyeVxyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGN1cnJlbnRTZWxlY3RlZEJvb2sudGl0bGUgIT09IGJvb2sudGl0bGUpO1xyXG5cdFxyXG5cdGxldCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkcygpO1xyXG5cdFxyXG5cdGxldCBjYXNoZWRMaWJyYXJ5TGVuZ3RoID0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGg7XHJcbiAgXHJcblx0Ly8gVmFsaWRhdGUgZmllbHMsIHR1cm4gaW50byBCb29rIG9iamVjdCBhbmQgQWRkXHJcblx0YWRkQm9va1RvTGlicmFyeShmb3JtRmllbGRzLnRpdGxlLCBmb3JtRmllbGRzLmF1dGhvciwgZm9ybUZpZWxkcy5uUGFnZXMsIGZvcm1GaWVsZHMuYlJlYWQpO1xyXG5cclxuXHRsZXQgYm9va0JvYXJkTXNnO1xyXG5cdGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoIDwgbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBUaGUgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgZWRpdGVkIWA7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBUaGUgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgTk9UIGVkaXRlZCFgO1xyXG5cdFx0XHJcblx0XHQvLyBWYWxpZGF0ZSBmaWVscywgdHVybiBpbnRvIEJvb2sgb2JqZWN0IGFuZCBBZGRcclxuXHRcdGFkZEJvb2tUb0xpYnJhcnkoY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSwgY3VycmVudFNlbGVjdGVkQm9vay5hdXRob3IsIGN1cnJlbnRTZWxlY3RlZEJvb2subnVtUGFnZXMsIGN1cnJlbnRTZWxlY3RlZEJvb2suYm9va1JlYWQpO1xyXG5cdH1cclxuXHRcdFxyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0XHJcblx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgIFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjbGVhckZvcm1TaGVldCgpO1xyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG5cdHNldEZvcm1GaWVsZHMoY3VycmVudFNlbGVjdGVkQm9vayk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xyXG5cdGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHJcblx0ZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhidG5JZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpZHggPT09IGJ0bklkKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRGVlcCBjb3B5XHJcblx0XHRcdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvb2tbMF0pKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcblx0XHRcdHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XHJcblx0XHRpZiAoIW51bVBhZ2VzKSB7XHJcblx0XHRcdG51bVBhZ2VzID0gMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIGJvb2tTdGF0ZSk7XHJcblx0XHRsZXQgYm9va1JlYWQgPSAnJztcclxuXHRcdGlmIChib29rU3RhdGUpIHtcclxuXHRcdFx0Ym9va1JlYWQgPSAnYWxyZWFkeSByZWFkJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvb2tSZWFkID0gJ25vdCByZWFkIHlldCc7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG5ld0Jvb2sgPSB7XHJcblx0XHRcdFx0dGl0bGUsXHJcblx0XHRcdFx0YXV0aG9yLFxyXG5cdFx0XHRcdG51bVBhZ2VzLFxyXG5cdFx0XHRcdGJvb2tSZWFkXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhib29rUmVhZCk7XHJcblx0XHRcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2sobmV3Qm9vayk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XHJcblx0XHRcclxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XHJcblx0XHRcclxuXHRcdHNob3dNZXNzYWdlQm9hcmQoJ2g0JywgbWVzc2FnZSwgJ21lc3NhZ2UtYm9hcmQtdmFsaWRhdGlvbicpO1xyXG5cdH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufVxyXG5cclxuXHJcbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tSZWFkID0gbm90ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcclxuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xyXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcclxuXHRsZXQgYm9va0JvYXJkTXNnID0gJ0NsaWNrIG9uIHRoZSBib29rcyB0byBnZXQgdGhlaXIgZGVzY3JpcHRpb25zISc7XHJcbiAgICBcclxuICAgIGlmIChteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGJvb2sudGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZW5kZXIgbGlicmFyeVxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHJcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCBcclxuICAgICAgICAgICAgbnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXHJcbiAgICAgICAgICAgIGJvb2tSZWFkOiAnbm90IHJlYWQgeWV0JyxcclxuICAgICAgICB9O1xyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhkZWZhdWx0Qm9vayk7XHJcblx0XHRcclxuICAgICAgICBjb25zb2xlLmxvZyhteUJvb2tzaGVsZik7XHJcbiAgICAgICAgXHJcblx0XHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHJcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG4gICAgICAgXHJcbiAgICAgICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJMaWJyYXJ5IiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibGliIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMaWJyYXJ5T3JuYW1lbnQiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwibGVuZ3RoIiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rUmVhZCIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRCb29rRm9ybU5vZGUiLCJmb3JtQWRkQnRuIiwiZm9ybUVkaXRCdG4iLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiZm9ybUZpZWxkcyIsIm5QYWdlcyIsImJSZWFkIiwiZ2V0Rm9ybUZpZWxkcyIsImNoZWNrZWQiLCJzZXRGb3JtRmllbGRzIiwic2VsZWN0ZWRCb29rIiwidGV4dENvbnRlbnQiLCJib29rU3RhdGUiLCJkaXNhYmxlZCIsImNsZWFyRm9ybVNoZWV0IiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJzaG93Qm9va0Rlc2NyaXB0aW9uIiwiYWJvdXRTZWN0aW9uIiwiZm9ybUNsZWFyQnRuIiwiY3VycmVudFNlbGVjdGVkQm9vayIsIm15Qm9va3NoZWxmIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZmlsdGVyIiwiZ2V0Qm9va0Rlc2MiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImRlc2NCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwiYnRuSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJib29rTm90ZXMiLCJub3RlIiwibm90ZUlkIiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tJbmRleCIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJkZWZhdWx0Qm9vayJdLCJzb3VyY2VSb290IjoiIn0=