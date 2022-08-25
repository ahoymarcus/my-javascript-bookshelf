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
var searchIcon = document.querySelector('.search-form__icon');
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
searchIcon.addEventListener('click', function () {
  var inputTitle = document.querySelector('.search-form__input');
  var regex = new RegExp("^.*".concat(inputTitle.value, ".*$"), 'i');
  var result = myBookshelf.library.filter(function (book) {
    return book.title.match(regex);
  }).map(function (book) {
    return book.title;
  });
  console.log(result);
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', "".concat(result), 'message-board-msg');
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
      var removedBook = myBookshelf.library.filter(function (book, idx) {
        return idx === btnIndex;
      });
      console.log(removedBook);
      removeBookfromLibrary(btnIndex); // Render Booklist

      (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myBookshelf.library); // Pass Eventlisteners

      getBookDesc();
      changeBookNotes();
      removeBooks();
      checkLibrary();

      if (removedBook[0].title !== 'Your Book here!') {
        (0,_components_BookDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])('h4', "The \"".concat(removedBook[0].title, "\" was removed from the library!"), 'booklist-partition__board-text2', myBookshelf);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUcscUJBQXFCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQ0FBdkIsQ0FBOUI7QUFHQSxJQUFJQyxVQUFVLEdBQUcsYUFBakI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBa0U7RUFBQSxJQUFyQ0MsT0FBcUMsdUVBQTNCSCxVQUEyQjtFQUFBLElBQWZJLFFBQWU7RUFBQSxJQUFMQyxHQUFLO0VBQ2pFUixxQkFBcUIsQ0FBQ1MsU0FBdEIsR0FBa0MsSUFBbEM7RUFFQSxJQUFJQyxjQUFjLEdBQUdaLDREQUFRLENBQUMsSUFBRCxFQUFPVSxHQUFHLENBQUNHLEtBQUosQ0FBVUMsV0FBVixFQUFQLEVBQWdDLGlDQUFoQyxDQUE3QjtFQUNBWixxQkFBcUIsQ0FBQ2EsV0FBdEIsQ0FBa0NILGNBQWxDO0VBRUEsSUFBSUksa0JBQWtCLEdBQUdqQixpRUFBYSxDQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksOEJBQVosQ0FBdEMsQ0FOaUUsQ0FPakU7O0VBQ0FHLHFCQUFxQixDQUFDYSxXQUF0QixDQUFrQ0Msa0JBQWxDO0VBRUEsSUFBSUMsZUFBSjs7RUFDQSxJQUFJUCxHQUFHLENBQUNRLE9BQUosQ0FBWSxDQUFaLEVBQWVMLEtBQWYsS0FBeUIsaUJBQTdCLEVBQWdEO0lBQzlDSSxlQUFlLEdBQUdqQiw0REFBUSxDQUFDLEdBQUQsNkJBQWlDLGlDQUFqQyxDQUExQjtFQUNELENBRkQsTUFFTztJQUNMaUIsZUFBZSxHQUFHakIsNERBQVEsQ0FBQyxHQUFELDRCQUF5QlUsR0FBRyxDQUFDUSxPQUFKLENBQVlDLE1BQXJDLGFBQXFELGlDQUFyRCxDQUExQjtFQUNEOztFQUNEakIscUJBQXFCLENBQUNhLFdBQXRCLENBQWtDRSxlQUFsQztFQUVBLElBQUlHLFdBQVcsR0FBR3BCLDREQUFRLENBQUNPLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsUUFBaEIsQ0FBMUI7RUFDQVAscUJBQXFCLENBQUNhLFdBQXRCLENBQWtDSyxXQUFsQztBQUNBOztBQUdELGlFQUFlZCxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Q0M3QkE7O0FBQ0EsSUFBTWUsU0FBUyxHQUFHbEIsUUFBUSxDQUFDbUIsY0FBVCxDQUF3QixVQUF4QixDQUFsQjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtFQUMzQkgsU0FBUyxDQUFDVixTQUFWLEdBQXNCLElBQXRCO0VBRUEsSUFBSWMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtJQUNyQztJQUNBLElBQU1DLEVBQUUsR0FBRzlCLGlFQUFhLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVywwQkFBWCxDQUF4QjtJQUNBLElBQU0rQixHQUFHLEdBQUcvQixpRUFBYSxDQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksMEJBQVosRUFBd0MsRUFBeEMsRUFBNEMsQ0FBQztNQUFFZ0MsSUFBSSxFQUFFLEtBQVI7TUFBZUMsS0FBSyxFQUFFO0lBQXRCLENBQUQsRUFBK0Q7TUFBRUQsSUFBSSxFQUFFLEtBQVI7TUFBZUMsS0FBSyxFQUFFO0lBQXRCLENBQS9ELENBQTVDLENBQXpCO0lBQ0EsSUFBTUMsR0FBRyxHQUFHbEMsaUVBQWEsQ0FBQyxLQUFELEVBQVEsRUFBUixFQUFZLGtDQUFaLENBQXpCO0lBQ0EsSUFBTW1DLEVBQUUsR0FBR25DLGlFQUFhLENBQUMsSUFBRCxFQUFPNEIsSUFBSSxDQUFDZCxLQUFaLEVBQW1CLDJCQUFuQixDQUF4QjtJQUNBLElBQU1zQixXQUFXLEdBQUdwQyxpRUFBYSxDQUFDLE1BQUQsRUFBUyxHQUFULEVBQWMsa0NBQWQsQ0FBakM7SUFDQSxJQUFNcUMsRUFBRSxHQUFHckMsaUVBQWEsQ0FBQyxJQUFELEVBQU80QixJQUFJLENBQUNVLE1BQVosRUFBb0IsNEJBQXBCLENBQXhCO0lBQ0EsSUFBTUMsS0FBSyxHQUFHdkMsaUVBQWEsQ0FBQyxHQUFELFlBQVM0QixJQUFJLENBQUNZLFFBQWQsYUFBZ0MsMkJBQWhDLENBQTNCO0lBRUEsSUFBSUMsSUFBSjs7SUFDQSxJQUFJYixJQUFJLENBQUNjLFFBQUwsS0FBa0IsY0FBdEIsRUFBc0M7TUFDckNELElBQUksR0FBR3pDLGlFQUFhLENBQUMsTUFBRCxFQUFTNEIsSUFBSSxDQUFDYyxRQUFkLEVBQXdCLCtCQUF4QixFQUF5RCxXQUF6RCxDQUFwQjtJQUNBLENBRkQsTUFFTztNQUNORCxJQUFJLEdBQUd6QyxpRUFBYSxDQUFDLE1BQUQsRUFBUzRCLElBQUksQ0FBQ2MsUUFBZCxFQUF3QixtQ0FBeEIsRUFBNkQsV0FBN0QsQ0FBcEI7SUFDQTs7SUFHRCxJQUFNQyxTQUFTLEdBQUczQyxpRUFBYSxDQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLGdDQUFoQixFQUFrRCxFQUFsRCxDQUEvQixDQWxCcUMsQ0FvQnJDOztJQUNBb0MsV0FBVyxDQUFDUSxZQUFaLENBQXlCLFNBQXpCLEVBQW9DZixHQUFwQztJQUNBYyxTQUFTLENBQUNDLFlBQVYsQ0FBdUIsU0FBdkIsRUFBa0NmLEdBQWxDO0lBQ0FZLElBQUksQ0FBQ0csWUFBTCxDQUFrQixTQUFsQixFQUE2QmYsR0FBN0IsRUF2QnFDLENBeUJyQzs7SUFDQU0sRUFBRSxDQUFDbkIsV0FBSCxDQUFlb0IsV0FBZjtJQUVBRixHQUFHLENBQUNsQixXQUFKLENBQWdCbUIsRUFBaEI7SUFDQUQsR0FBRyxDQUFDbEIsV0FBSixDQUFnQnFCLEVBQWhCO0lBQ0FILEdBQUcsQ0FBQ2xCLFdBQUosQ0FBZ0J1QixLQUFoQjtJQUNBTCxHQUFHLENBQUNsQixXQUFKLENBQWdCeUIsSUFBaEI7SUFFQVgsRUFBRSxDQUFDZCxXQUFILENBQWVlLEdBQWY7SUFDQUQsRUFBRSxDQUFDZCxXQUFILENBQWVrQixHQUFmO0lBQ0FKLEVBQUUsQ0FBQ2QsV0FBSCxDQUFlMkIsU0FBZjtJQUVBckIsU0FBUyxDQUFDTixXQUFWLENBQXNCYyxFQUF0QjtJQUVBLE9BQU9BLEVBQVA7RUFDQSxDQXhDYSxDQUFkO0FBeUNBOztBQUdELGlFQUFlTixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztDQ25EQTs7QUFDQSxJQUFNcUIsbUJBQW1CLEdBQUd6QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQTVCO0FBQ0EsSUFBTXlDLFVBQVUsR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBbkI7QUFDQSxJQUFNMEMsV0FBVyxHQUFHM0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFwQixFQUVBOztBQUNBLElBQU0yQyxTQUFTLEdBQUc1QyxRQUFRLENBQUNtQixjQUFULENBQXdCLE9BQXhCLENBQWxCO0FBQ0EsSUFBTTBCLFVBQVUsR0FBRzdDLFFBQVEsQ0FBQ21CLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbkI7QUFDQSxJQUFNMkIsU0FBUyxHQUFHOUMsUUFBUSxDQUFDbUIsY0FBVCxDQUF3QixXQUF4QixDQUFsQjtBQUNBLElBQU00QixZQUFZLEdBQUcvQyxRQUFRLENBQUNtQixjQUFULENBQXdCLFNBQXhCLENBQXJCO0FBRUEsSUFBSWpCLFVBQVUsR0FBRyw0QkFBakI7QUFFQSxJQUFNOEMsVUFBVSxHQUFHO0VBQ2xCdEMsS0FBSyxFQUFFLElBRFc7RUFFbEJ3QixNQUFNLEVBQUUsSUFGVTtFQUdsQmUsTUFBTSxFQUFFLENBSFU7RUFJbEJDLEtBQUssRUFBRTtBQUpXLENBQW5COztBQVFBLFNBQVNDLGFBQVQsR0FBeUI7RUFDeEJILFVBQVUsQ0FBQ3RDLEtBQVgsR0FBbUJWLFFBQVEsQ0FBQ21CLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNVLEtBQXBEO0VBQ0FtQixVQUFVLENBQUNkLE1BQVgsR0FBb0JsQyxRQUFRLENBQUNtQixjQUFULENBQXdCLFFBQXhCLEVBQWtDVSxLQUF0RDtFQUNBbUIsVUFBVSxDQUFDQyxNQUFYLEdBQW9CakQsUUFBUSxDQUFDbUIsY0FBVCxDQUF3QixXQUF4QixFQUFxQ1UsS0FBekQ7O0VBRUEsSUFBSTdCLFFBQVEsQ0FBQ21CLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNpQyxPQUF2QyxFQUFnRDtJQUMvQ0osVUFBVSxDQUFDRSxLQUFYLEdBQW1CLGNBQW5CO0VBQ0EsQ0FGRCxNQUVPO0lBQ05GLFVBQVUsQ0FBQ0UsS0FBWCxHQUFtQixjQUFuQjtFQUNBOztFQUVELE9BQU9GLFVBQVA7QUFDQTs7QUFHRCxTQUFTSyxhQUFULENBQXVCQyxZQUF2QixFQUFxQztFQUNwQyxJQUFJQSxZQUFKLEVBQWtCO0lBQ2pCYixtQkFBbUIsQ0FBQ2MsV0FBcEIsR0FBa0NELFlBQVksQ0FBQzVDLEtBQWIsQ0FBbUJDLFdBQW5CLEVBQWxDO0lBQ0FpQyxTQUFTLENBQUNmLEtBQVYsR0FBa0J5QixZQUFZLENBQUM1QyxLQUEvQjtJQUNBbUMsVUFBVSxDQUFDaEIsS0FBWCxHQUFtQnlCLFlBQVksQ0FBQ3BCLE1BQWhDO0lBQ0FZLFNBQVMsQ0FBQ2pCLEtBQVYsR0FBa0J5QixZQUFZLENBQUNsQixRQUEvQjs7SUFFQSxJQUFJa0IsWUFBWSxDQUFDaEIsUUFBYixLQUEwQixjQUE5QixFQUE4QztNQUM3Q1MsWUFBWSxDQUFDSyxPQUFiLEdBQXVCLElBQXZCO0lBQ0EsQ0FGRCxNQUVPO01BQ05MLFlBQVksQ0FBQ0ssT0FBYixHQUF1QixLQUF2QjtJQUNBOztJQUVEVixVQUFVLENBQUNjLFFBQVgsR0FBc0IsSUFBdEI7SUFDQWIsV0FBVyxDQUFDYSxRQUFaLEdBQXVCLEtBQXZCO0VBQ0EsQ0FkRCxNQWNPO0lBQ05mLG1CQUFtQixDQUFDYyxXQUFwQixHQUFrQ3JELFVBQWxDO0lBRUF3QyxVQUFVLENBQUNjLFFBQVgsR0FBc0IsS0FBdEI7SUFDQWIsV0FBVyxDQUFDYSxRQUFaLEdBQXVCLElBQXZCO0VBQ0E7QUFDRDs7QUFHRCxTQUFTQyxjQUFULEdBQTBCO0VBQ3pCYixTQUFTLENBQUNmLEtBQVYsR0FBa0IsRUFBbEI7RUFDQWdCLFVBQVUsQ0FBQ2hCLEtBQVgsR0FBbUIsRUFBbkI7RUFDQWlCLFNBQVMsQ0FBQ2pCLEtBQVYsR0FBa0IsRUFBbEI7RUFDQWtCLFlBQVksQ0FBQ0ssT0FBYixHQUF1QixLQUF2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztDQ2hFRDs7QUFDQSxJQUFNTSxZQUFZLEdBQUcxRCxRQUFRLENBQUNtQixjQUFULENBQXdCLHNCQUF4QixDQUFyQjtBQUNBLElBQU13QyxpQkFBaUIsR0FBRzNELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBMUI7QUFFQSxJQUFJMkQsR0FBRyxHQUFHLGlEQUFWOztBQUVBLFNBQVNDLGdCQUFULENBQTBCekQsSUFBMUIsRUFBeUQ7RUFBQSxJQUF6QkMsT0FBeUIsdUVBQWZ1RCxHQUFlO0VBQUEsSUFBVnRELFFBQVU7RUFFeEQsSUFBSXdELFNBQVMsR0FBR2pFLDREQUFRLENBQUNPLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsUUFBaEIsQ0FBeEI7RUFFQW9ELFlBQVksQ0FBQ0ssS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsT0FBN0I7RUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlQLGlCQUFaO0VBRUFELFlBQVksQ0FBQzlDLFdBQWIsQ0FBeUJrRCxTQUF6QjtFQUVBLElBQU1LLFVBQVUsR0FBR0MsVUFBVSxDQUFDLFlBQU07SUFDbkNWLFlBQVksQ0FBQ0ssS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7SUFDQU4sWUFBWSxDQUFDbEQsU0FBYixHQUF5QixJQUF6QjtFQUNBLENBSDRCLEVBSTNCLElBSjJCLENBQTdCO0FBS0E7O0FBR0QsaUVBQWVxRCxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLFNBQVNqRSxhQUFULEdBQXdFO0VBQUEsSUFBakRRLElBQWlELHVFQUExQyxHQUEwQztFQUFBLElBQXJDaUUsUUFBcUM7RUFBQSxJQUEzQi9ELFFBQTJCO0VBQUEsSUFBakJnRSxLQUFpQjtFQUFBLElBQVZDLFFBQVU7RUFDdkUsSUFBSWpELE9BQU8sR0FBR3RCLFFBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUJwRSxJQUF2QixDQUFkOztFQUVBLElBQUlpRSxRQUFKLEVBQWM7SUFDYixJQUFNSSxRQUFRLEdBQUd6RSxRQUFRLENBQUMwRSxjQUFULENBQXdCTCxRQUF4QixDQUFqQjtJQUVBL0MsT0FBTyxDQUFDVixXQUFSLENBQW9CNkQsUUFBcEI7RUFDQTs7RUFFRCxJQUFJbkUsUUFBSixFQUFjO0lBQ2JnQixPQUFPLENBQUNxRCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQnRFLFFBQXRCO0VBQ0E7O0VBRUQsSUFBSWdFLEtBQUosRUFBVztJQUNWaEQsT0FBTyxDQUFDdUQsRUFBUixHQUFhUCxLQUFiO0VBQ0EsQ0Fmc0UsQ0FpQnZFO0VBQ0E7OztFQUNBLElBQUlRLEtBQUssQ0FBQ0MsT0FBTixDQUFjUixRQUFkLENBQUosRUFBNkI7SUFDNUIsS0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxRQUFRLENBQUN2RCxNQUE3QixFQUFxQ2dFLENBQUMsSUFBSSxDQUExQyxFQUE2QztNQUM1QzFELE9BQU8sQ0FBQ2lELFFBQVEsQ0FBQ1MsQ0FBRCxDQUFSLENBQVlwRCxJQUFiLENBQVAsR0FBNEIyQyxRQUFRLENBQUNTLENBQUQsQ0FBUixDQUFZbkQsS0FBeEM7SUFDQTtFQUNEOztFQUVELE9BQU9QLE9BQVA7QUFDQTs7QUFHRCxTQUFTekIsUUFBVCxDQUFrQk8sSUFBbEIsRUFBd0J3RCxHQUF4QixFQUE2QnRELFFBQTdCLEVBQXVDO0VBQ3RDLElBQUlELE9BQU8sR0FBR3VELEdBQWQ7RUFFQSxJQUFJRSxTQUFTLEdBQUdsRSxhQUFhLENBQzdCUSxJQUQ2QixFQUN2QkMsT0FEdUIsRUFDZEMsUUFEYyxDQUE3QjtFQUdBLE9BQU93RCxTQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1tQixjQUFjLEdBQUcsQ0FDMUI7RUFDSSxTQUFTLFlBRGI7RUFFSSxVQUFVLGdCQUZkO0VBR0ksYUFBYSxFQUhqQjtFQUlJLGNBQWMsQ0FKbEI7RUFLSSxhQUFhLHFCQUxqQjtFQU1JLFlBQVksWUFOaEI7RUFPSSxnQkFBZ0IsU0FQcEI7RUFRSSxXQUFXLENBUmY7RUFTSSxlQUFlLEVBVG5CO0VBVUksWUFBWSxHQVZoQjtFQVdJLFlBQVksY0FYaEI7RUFZSSxRQUFRLEVBWlo7RUFhSSxjQUFjO0FBYmxCLENBRDBCLEVBZ0IxQjtFQUNJLFNBQVMsNEJBRGI7RUFFSSxVQUFVLGdCQUZkO0VBR0ksYUFBYSxFQUhqQjtFQUlJLGNBQWMsQ0FKbEI7RUFLSSxhQUFhLHFCQUxqQjtFQU1JLFlBQVksWUFOaEI7RUFPSSxnQkFBZ0IsU0FQcEI7RUFRSSxXQUFXLENBUmY7RUFTSSxlQUFlLEVBVG5CO0VBVUksWUFBWSxHQVZoQjtFQVdJLFlBQVksY0FYaEI7RUFZSSxRQUFRLEVBWlo7RUFhSSxjQUFjO0FBYmxCLENBaEIwQixFQStCMUI7RUFDSSxTQUFTLGdCQURiO0VBRUksVUFBVSxnQkFGZDtFQUdJLGFBQWEsRUFIakI7RUFJSSxjQUFjLENBSmxCO0VBS0ksYUFBYSxxQkFMakI7RUFNSSxZQUFZLFlBTmhCO0VBT0ksZ0JBQWdCLFNBUHBCO0VBUUksV0FBVyxDQVJmO0VBU0ksZUFBZSxFQVRuQjtFQVVJLFlBQVksR0FWaEI7RUFXSSxZQUFZLGNBWGhCO0VBWUksUUFBUSxFQVpaO0VBYUksY0FBYztBQWJsQixDQS9CMEIsRUE4QzFCO0VBQ0ksU0FBUyx3QkFEYjtFQUVJLFVBQVUsZ0JBRmQ7RUFHSSxhQUFhLEVBSGpCO0VBSUksY0FBYyxDQUpsQjtFQUtJLGFBQWEscUJBTGpCO0VBTUksWUFBWSxZQU5oQjtFQU9JLGdCQUFnQixTQVBwQjtFQVFJLFdBQVcsQ0FSZjtFQVNJLGVBQWUsRUFUbkI7RUFVSSxZQUFZLEdBVmhCO0VBV0ksWUFBWSxjQVhoQjtFQVlJLFFBQVEsRUFaWjtFQWFJLGNBQWM7QUFibEIsQ0E5QzBCLENBQXZCOzs7Ozs7Ozs7Ozs7OztBQ2xCUCxTQUFTQyxJQUFULENBQWN4RSxLQUFkLEVBQXFCd0IsTUFBckIsRUFBNkJFLFFBQTdCLEVBQXVDRSxRQUF2QyxFQUFpRDtFQUNoRCxLQUFLNUIsS0FBTCxHQUFhQSxLQUFiO0VBQ0EsS0FBS3dCLE1BQUwsR0FBY0EsTUFBZDtFQUNBLEtBQUtpRCxTQUFMLEdBQWlCLEVBQWpCO0VBQ0EsS0FBS0MsVUFBTCxHQUFrQixDQUFsQjtFQUNBLEtBQUtDLFNBQUwsR0FBaUIscUJBQWpCO0VBQ0EsS0FBS0MsUUFBTCxHQUFnQixhQUFoQjtFQUNBLEtBQUtDLFlBQUwsR0FBb0IsU0FBcEI7RUFDQSxLQUFLQyxPQUFMLEdBQWUsQ0FBZjtFQUNBLEtBQUtDLFdBQUwsR0FBbUIsSUFBSUMsSUFBSixFQUFuQjtFQUNBLEtBQUt0RCxRQUFMLEdBQWdCQSxRQUFoQjtFQUNBLEtBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsS0FBS3FELElBQUwsR0FBWSxJQUFJRCxJQUFKLEVBQVo7RUFDQSxLQUFLRSxVQUFMLEdBQWtCLElBQUlGLElBQUosRUFBbEI7RUFFQSxLQUFLRyxRQUFMO0FBQ0E7O0FBRURYLElBQUksQ0FBQ1ksU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFlBQVc7RUFDaEMsSUFBTUMsU0FBUyx3QkFBZ0IsS0FBS3RGLEtBQXJCLG1CQUFrQyxLQUFLd0IsTUFBdkMsa0JBQXFELEtBQUtFLFFBQTFELHdCQUFnRixLQUFLZ0QsVUFBckYsaUNBQXNILEtBQUtHLFlBQUwsQ0FBa0I1RSxXQUFsQixFQUF0SCw2QkFBd0ssS0FBSzBFLFNBQTdLLHFDQUFnTixLQUFLQyxRQUFyTiwyQkFBNk8sS0FBS0csV0FBTCxDQUFpQlEsV0FBakIsRUFBN08sa0JBQWtSLEtBQUszRCxRQUFMLENBQWMzQixXQUFkLEVBQWxSLG9CQUFzVCxLQUFLa0YsUUFBM1QsU0FBZjtFQUdBLE9BQU9HLFNBQVA7QUFDQSxDQUxEOztBQU9BZCxJQUFJLENBQUNZLFNBQUwsQ0FBZUksV0FBZixHQUE2QixZQUFXO0VBQ3ZDLElBQU1DLE9BQU8sYUFBTSxLQUFLakUsTUFBWCxpQkFBd0IsS0FBS3hCLEtBQTdCLCtCQUF1RCxLQUFLbUYsUUFBNUQsQ0FBYjtFQUVBLE9BQU9NLE9BQVA7QUFDQSxDQUpEOztBQU1BLGlFQUFlakIsSUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOztBQUVBLFNBQVNwRixPQUFULENBQWlCWSxLQUFqQixFQUF3QjtFQUNwQixLQUFLQSxLQUFMLEdBQWFBLEtBQWI7RUFDQSxLQUFLSyxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQUdEakIsT0FBTyxDQUFDZ0csU0FBUixDQUFrQk0sT0FBbEIsR0FBNEIsVUFBUzVFLElBQVQsRUFBZTtFQUN2QyxJQUFJNkUsT0FBTyxHQUFHLElBQUluQixnREFBSixDQUFTMUQsSUFBSSxDQUFDZCxLQUFkLEVBQXFCYyxJQUFJLENBQUNVLE1BQTFCLEVBQWtDVixJQUFJLENBQUNZLFFBQXZDLEVBQWlEWixJQUFJLENBQUNjLFFBQXRELENBQWQ7RUFFQSxLQUFLdkIsT0FBTCxDQUFhdUYsSUFBYixDQUFrQkQsT0FBbEI7QUFDSCxDQUpEOztBQU1BdkcsT0FBTyxDQUFDZ0csU0FBUixDQUFrQlMsV0FBbEIsR0FBZ0MsVUFBU0MsS0FBVCxFQUFnQjtFQUM1QyxJQUFJMUIsS0FBSyxDQUFDQyxPQUFOLENBQWN5QixLQUFkLENBQUosRUFBMEI7SUFDdEIsS0FBSyxJQUFJeEIsQ0FBVCxJQUFjd0IsS0FBZCxFQUFxQjtNQUVqQixJQUFJSCxPQUFPLEdBQUcsSUFBSW5CLGdEQUFKLENBQVNzQixLQUFLLENBQUN4QixDQUFELENBQUwsQ0FBU3RFLEtBQWxCLEVBQXlCOEYsS0FBSyxDQUFDeEIsQ0FBRCxDQUFMLENBQVM5QyxNQUFsQyxFQUEwQ3NFLEtBQUssQ0FBQ3hCLENBQUQsQ0FBTCxDQUFTNUMsUUFBbkQsRUFBNkRvRSxLQUFLLENBQUN4QixDQUFELENBQUwsQ0FBUzFDLFFBQXRFLENBQWQsQ0FGaUIsQ0FJN0I7O01BRVksS0FBS3ZCLE9BQUwsQ0FBYXVGLElBQWIsQ0FBa0JELE9BQWxCO0lBQ0g7RUFDSjtBQUNKLENBWEQ7O0FBY0EsaUVBQWV2RyxPQUFmOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0EsSUFBTTRHLFlBQVksR0FBRzFHLFFBQVEsQ0FBQ21CLGNBQVQsQ0FBd0IsOEJBQXhCLENBQXJCO0FBQ0EsSUFBTXdGLFVBQVUsR0FBRzNHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBbkI7QUFDQSxJQUFNeUMsVUFBVSxHQUFHMUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFuQjtBQUNBLElBQU0yRyxZQUFZLEdBQUc1RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0FBQ0EsSUFBTTBDLFdBQVcsR0FBRzNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBcEI7QUFHQSxJQUFJNEcsbUJBQUo7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSWhILHlEQUFKLENBQVksc0JBQVosQ0FBcEI7QUFDQWdILFdBQVcsQ0FBQ1AsV0FBWixDQUF3QnRCLHVFQUF4QjtBQUVBOEIsWUFBWTtBQUdaTCxZQUFZLENBQUNNLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07RUFDNUMsSUFBSTNHLE9BQU8sR0FBRyxpRUFBZDtFQUVBd0QsdUVBQWdCLENBQUMsSUFBRCxFQUFPeEQsT0FBUCxFQUFnQixtQkFBaEIsQ0FBaEI7QUFDQSxDQUpEO0FBT0FzRyxVQUFVLENBQUNLLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07RUFDMUMsSUFBTUMsVUFBVSxHQUFHakgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFuQjtFQUVBLElBQU1pSCxLQUFLLEdBQUcsSUFBSUMsTUFBSixjQUFpQkYsVUFBVSxDQUFDcEYsS0FBNUIsVUFBd0MsR0FBeEMsQ0FBZDtFQUVBLElBQUl1RixNQUFNLEdBQUdOLFdBQVcsQ0FBQy9GLE9BQVosQ0FBb0JzRyxNQUFwQixDQUEyQixVQUFBN0YsSUFBSSxFQUFJO0lBQy9DLE9BQU9BLElBQUksQ0FBQ2QsS0FBTCxDQUFXNEcsS0FBWCxDQUFpQkosS0FBakIsQ0FBUDtFQUNBLENBRlksRUFFVjNGLEdBRlUsQ0FFTixVQUFBQyxJQUFJO0lBQUEsT0FBSUEsSUFBSSxDQUFDZCxLQUFUO0VBQUEsQ0FGRSxDQUFiO0VBSUF1RCxPQUFPLENBQUNDLEdBQVIsQ0FBWWtELE1BQVo7RUFFQXZELHVFQUFnQixDQUFDLElBQUQsWUFBVXVELE1BQVYsR0FBb0IsbUJBQXBCLENBQWhCO0FBQ0EsQ0FaRDtBQWVBMUUsVUFBVSxDQUFDc0UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtFQUMxQyxJQUFJaEUsVUFBVSxHQUFHRyxzRUFBYSxFQUE5QjtFQUVDLElBQUlvRSxtQkFBbUIsR0FBR1QsV0FBVyxDQUFDL0YsT0FBWixDQUFvQkMsTUFBOUM7RUFFRHdHLGdCQUFnQixDQUFDeEUsVUFBVSxDQUFDdEMsS0FBWixFQUFtQnNDLFVBQVUsQ0FBQ2QsTUFBOUIsRUFBc0NjLFVBQVUsQ0FBQ0MsTUFBakQsRUFBeURELFVBQVUsQ0FBQ0UsS0FBcEUsQ0FBaEI7RUFFQSxJQUFJdUUsWUFBSjs7RUFDQSxJQUFJRixtQkFBbUIsS0FBS1QsV0FBVyxDQUFDL0YsT0FBWixDQUFvQkMsTUFBaEQsRUFBd0Q7SUFDdkR5RyxZQUFZLHlCQUFpQnpFLFVBQVUsQ0FBQ3RDLEtBQTVCLG9DQUFaO0lBRUFvRyxXQUFXLENBQUMvRixPQUFaLEdBQXNCK0YsV0FBVyxDQUFDL0YsT0FBWixDQUFvQnNHLE1BQXBCLENBQTJCLFVBQUE3RixJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDZCxLQUFMLEtBQWUsaUJBQW5CO0lBQUEsQ0FBL0IsQ0FBdEI7RUFDQSxDQUpELE1BSU87SUFDTitHLFlBQVksR0FBRyxvQ0FBZjtFQUNBOztFQUVEaEUsdUVBQWM7RUFFYm9ELG1CQUFtQixHQUFHLElBQXRCLENBbEJ5QyxDQW9CMUM7O0VBQ0F6RixtRUFBWSxDQUFDMEYsV0FBVyxDQUFDL0YsT0FBYixDQUFaLENBckIwQyxDQXVCMUM7O0VBQ0EyRyxXQUFXO0VBQ1hDLGVBQWU7RUFDZkMsV0FBVztFQUVWbkIsbUVBQW1CLENBQUMsSUFBRCxFQUFPZ0IsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RYLFdBQXhELENBQW5CO0VBRUQ3QyxPQUFPLENBQUNDLEdBQVIsQ0FBWTRDLFdBQVcsQ0FBQy9GLE9BQXhCO0FBQ0EsQ0EvQkQ7QUFrQ0E0QixXQUFXLENBQUNxRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0VBQzNDO0VBQ0FGLFdBQVcsQ0FBQy9GLE9BQVosR0FBc0IrRixXQUFXLENBQUMvRixPQUFaLENBQW9Cc0csTUFBcEIsQ0FBMkIsVUFBQTdGLElBQUk7SUFBQSxPQUFJcUYsbUJBQW1CLENBQUNuRyxLQUFwQixLQUE4QmMsSUFBSSxDQUFDZCxLQUF2QztFQUFBLENBQS9CLENBQXRCO0VBRUEsSUFBSXNDLFVBQVUsR0FBR0csc0VBQWEsRUFBOUI7RUFFQSxJQUFJb0UsbUJBQW1CLEdBQUdULFdBQVcsQ0FBQy9GLE9BQVosQ0FBb0JDLE1BQTlDLENBTjJDLENBUTNDOztFQUNBd0csZ0JBQWdCLENBQUN4RSxVQUFVLENBQUN0QyxLQUFaLEVBQW1Cc0MsVUFBVSxDQUFDZCxNQUE5QixFQUFzQ2MsVUFBVSxDQUFDQyxNQUFqRCxFQUF5REQsVUFBVSxDQUFDRSxLQUFwRSxDQUFoQjtFQUVBLElBQUl1RSxZQUFKOztFQUNBLElBQUlGLG1CQUFtQixHQUFHVCxXQUFXLENBQUMvRixPQUFaLENBQW9CQyxNQUE5QyxFQUFzRDtJQUNyRHlHLFlBQVksd0JBQWdCekUsVUFBVSxDQUFDdEMsS0FBM0IsbUJBQVo7RUFDQSxDQUZELE1BRU87SUFDTitHLFlBQVksd0JBQWdCekUsVUFBVSxDQUFDdEMsS0FBM0IsdUJBQVosQ0FETSxDQUdOOztJQUNBOEcsZ0JBQWdCLENBQUNYLG1CQUFtQixDQUFDbkcsS0FBckIsRUFBNEJtRyxtQkFBbUIsQ0FBQzNFLE1BQWhELEVBQXdEMkUsbUJBQW1CLENBQUN6RSxRQUE1RSxFQUFzRnlFLG1CQUFtQixDQUFDdkUsUUFBMUcsQ0FBaEI7RUFDQTs7RUFFRG1CLHVFQUFjO0VBRWRvRCxtQkFBbUIsR0FBRyxJQUF0QjtFQUVBeEQsc0VBQWEsQ0FBQ3dELG1CQUFELENBQWIsQ0F6QjJDLENBMkIzQzs7RUFDQXpGLG1FQUFZLENBQUMwRixXQUFXLENBQUMvRixPQUFiLENBQVosQ0E1QjJDLENBOEIzQzs7RUFDQTJHLFdBQVc7RUFDWEMsZUFBZTtFQUNmQyxXQUFXO0VBRVgzRCxPQUFPLENBQUNDLEdBQVIsQ0FBWTRDLFdBQVo7RUFFQUwsbUVBQW1CLENBQUMsSUFBRCxFQUFPZ0IsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RYLFdBQXhELENBQW5CO0VBRUE3QyxPQUFPLENBQUNDLEdBQVIsQ0FBWTRDLFdBQVcsQ0FBQy9GLE9BQXhCO0FBQ0EsQ0F4Q0Q7QUEyQ0E2RixZQUFZLENBQUNJLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07RUFDNUN2RCx1RUFBYztFQUNkb0QsbUJBQW1CLEdBQUcsSUFBdEI7RUFDQXhELHNFQUFhLENBQUN3RCxtQkFBRCxDQUFiO0FBQ0EsQ0FKRDs7QUFPQSxTQUFTYSxXQUFULEdBQXVCO0VBQ3RCLElBQU1HLFFBQVEsR0FBRzdILFFBQVEsQ0FBQzhILGdCQUFULENBQTBCLG1DQUExQixDQUFqQjtFQUVBRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsR0FBRyxFQUFJO0lBQ3ZCQSxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFBaUIsQ0FBQyxFQUFJO01BQ2xDO01BQ0EsSUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBbEI7TUFDQXBFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0UsS0FBWjtNQUVBLElBQUkxRyxJQUFJLEdBQUdzRixXQUFXLENBQUMvRixPQUFaLENBQW9Cc0csTUFBcEIsQ0FBMkIsVUFBQzdGLElBQUQsRUFBT0MsR0FBUCxFQUFlO1FBQ3BELElBQUlBLEdBQUcsS0FBS3lHLEtBQVosRUFBbUI7VUFDbEIsT0FBTzFHLElBQVA7UUFDQTtNQUNELENBSlUsQ0FBWCxDQUxrQyxDQVdsQzs7TUFDQXFGLG1CQUFtQixHQUFHeUIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlaEgsSUFBSSxDQUFDLENBQUQsQ0FBbkIsQ0FBWCxDQUF0QjtNQUNBeUMsT0FBTyxDQUFDQyxHQUFSLENBQVkyQyxtQkFBWjtNQUVBeEQsc0VBQWEsQ0FBQ3dELG1CQUFELENBQWIsQ0Fma0MsQ0FpQmxDOztNQUNBLElBQUl4RyxPQUFPLEdBQUdtQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEwRSxXQUFSLEVBQWQ7TUFFQU8sbUVBQW1CLENBQUMsSUFBRCxFQUFPakYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUUsSUFBUixFQUFQLEVBQXVCLGlDQUF2QixFQUEwRGUsV0FBMUQsQ0FBbkI7SUFDQSxDQXJCRDtFQXNCQSxDQXZCRDtFQXlCQTdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNEMsV0FBVyxDQUFDL0YsT0FBeEI7QUFDQTs7QUFHRCxTQUFTNEcsZUFBVCxHQUEyQjtFQUMxQixJQUFNYyxTQUFTLEdBQUd6SSxRQUFRLENBQUM4SCxnQkFBVCxDQUEwQixZQUExQixDQUFsQjtFQUVBVyxTQUFTLENBQUNWLE9BQVYsQ0FBa0IsVUFBQVcsSUFBSSxFQUFJO0lBQ3pCQSxJQUFJLENBQUMxQixnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFBaUIsQ0FBQyxFQUFJO01BQ25DO01BQ0EsSUFBSVUsTUFBTSxHQUFHUixNQUFNLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBbkI7TUFDQXBFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeUUsTUFBWjs7TUFFQSxJQUFJVixDQUFDLENBQUNHLE1BQUYsQ0FBUzdFLFdBQVQsS0FBeUIsY0FBN0IsRUFBNkM7UUFDNUNxRixhQUFhLENBQUNYLENBQUMsQ0FBQ0csTUFBSCxFQUFXTyxNQUFYLEVBQW1CLGNBQW5CLEVBQW1DLCtCQUFuQyxFQUFvRSxtQ0FBcEUsQ0FBYjtNQUNBLENBRkQsTUFFTztRQUNOQyxhQUFhLENBQUNYLENBQUMsQ0FBQ0csTUFBSCxFQUFXTyxNQUFYLEVBQW1CLGNBQW5CLEVBQW1DLG1DQUFuQyxFQUF3RSwrQkFBeEUsQ0FBYjtNQUNBO0lBQ0QsQ0FWRDtFQVdBLENBWkQ7QUFhQTs7QUFHRCxTQUFTZixXQUFULEdBQXVCO0VBQ3RCLElBQU1pQixVQUFVLEdBQUc3SSxRQUFRLENBQUM4SCxnQkFBVCxDQUEwQixpQ0FBMUIsQ0FBbkI7RUFFQWUsVUFBVSxDQUFDZCxPQUFYLENBQW1CLFVBQUFDLEdBQUcsRUFBSTtJQUN6QkEsR0FBRyxDQUFDaEIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQWlCLENBQUMsRUFBSTtNQUNsQ2hFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBWjtNQUNBLElBQUlTLFFBQVEsR0FBR1gsTUFBTSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixTQUF0QixDQUFELENBQXJCO01BRUEsSUFBTVUsV0FBVyxHQUFHakMsV0FBVyxDQUFDL0YsT0FBWixDQUFvQnNHLE1BQXBCLENBQTJCLFVBQUM3RixJQUFELEVBQU9DLEdBQVA7UUFBQSxPQUFlQSxHQUFHLEtBQUtxSCxRQUF2QjtNQUFBLENBQTNCLENBQXBCO01BQ0E3RSxPQUFPLENBQUNDLEdBQVIsQ0FBWTZFLFdBQVo7TUFFQUMscUJBQXFCLENBQUNGLFFBQUQsQ0FBckIsQ0FQa0MsQ0FTbEM7O01BQ0ExSCxtRUFBWSxDQUFDMEYsV0FBVyxDQUFDL0YsT0FBYixDQUFaLENBVmtDLENBWWxDOztNQUNBMkcsV0FBVztNQUNYQyxlQUFlO01BQ2ZDLFdBQVc7TUFDWGIsWUFBWTs7TUFFWixJQUFJZ0MsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlckksS0FBZixLQUF5QixpQkFBN0IsRUFBZ0Q7UUFDL0MrRixtRUFBbUIsQ0FBQyxJQUFELGtCQUFlc0MsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlckksS0FBOUIsdUNBQXNFLGlDQUF0RSxFQUF5R29HLFdBQXpHLENBQW5CO01BQ0E7SUFDRCxDQXJCRDtFQXNCQSxDQXZCRDtFQXlCQTdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNEMsV0FBVyxDQUFDL0YsT0FBeEI7QUFDQTs7QUFHRCxTQUFTeUcsZ0JBQVQsQ0FBMEI5RyxLQUExQixFQUFpQ3dCLE1BQWpDLEVBQXlDRSxRQUF6QyxFQUFtREUsUUFBbkQsRUFBNkQ7RUFDM0QsSUFBSTVCLEtBQUssSUFBSXdCLE1BQWIsRUFBcUI7SUFDckIsSUFBSSxDQUFDRSxRQUFMLEVBQWU7TUFDZEEsUUFBUSxHQUFHLENBQVg7SUFDQTs7SUFFRCxJQUFNaUUsT0FBTyxHQUFHO01BQ2QzRixLQUFLLEVBQUxBLEtBRGM7TUFFZHdCLE1BQU0sRUFBTkEsTUFGYztNQUdkRSxRQUFRLEVBQVJBLFFBSGM7TUFJZEUsUUFBUSxFQUFSQTtJQUpjLENBQWhCO0lBT0F3RSxXQUFXLENBQUNWLE9BQVosQ0FBb0JDLE9BQXBCO0VBQ0EsQ0FiQSxNQWFNO0lBQ05wQyxPQUFPLENBQUNDLEdBQVI7SUFFQSxJQUFJN0QsT0FBTyxHQUFHLHdEQUFkO0lBRUF3RCx1RUFBZ0IsQ0FBQyxJQUFELEVBQU94RCxPQUFQLEVBQWdCLDBCQUFoQixDQUFoQjtFQUNBO0FBQ0Q7O0FBR0QsU0FBUzJJLHFCQUFULENBQStCQyxTQUEvQixFQUEwQztFQUN6Q25DLFdBQVcsQ0FBQy9GLE9BQVosR0FBc0IrRixXQUFXLENBQUMvRixPQUFaLENBQW9Cc0csTUFBcEIsQ0FBMkIsVUFBQzdGLElBQUQsRUFBT0MsR0FBUCxFQUFlO0lBQy9ELElBQUlBLEdBQUcsS0FBS3dILFNBQVosRUFBdUI7TUFDdEIsT0FBT3pILElBQVA7SUFDQTtFQUNELENBSnFCLENBQXRCO0FBS0E7QUFHRDs7O0FBQ0EsU0FBU29ILGFBQVQsQ0FBdUJ4SSxJQUF2QixFQUE2QnVJLE1BQTdCLEVBQXFDRCxJQUFyQyxFQUEyQ1EsV0FBM0MsRUFBd0RDLFFBQXhELEVBQWtFO0VBQ2pFckMsV0FBVyxDQUFDL0YsT0FBWixDQUFvQlEsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7SUFDdEMsSUFBSUEsR0FBRyxLQUFLa0gsTUFBWixFQUFvQjtNQUNuQm5ILElBQUksQ0FBQ2MsUUFBTCxHQUFnQm9HLElBQWhCO0lBQ0E7RUFDRCxDQUpEO0VBTUF0SSxJQUFJLENBQUNtRCxXQUFMLEdBQW1CbUYsSUFBbkI7RUFDQXRJLElBQUksQ0FBQ3VFLFNBQUwsQ0FBZXlFLE1BQWYsQ0FBc0JGLFdBQXRCO0VBQ0E5SSxJQUFJLENBQUN1RSxTQUFMLENBQWVDLEdBQWYsQ0FBbUJ1RSxRQUFuQjtFQUVBbEYsT0FBTyxDQUFDQyxHQUFSLENBQVk0QyxXQUFXLENBQUMvRixPQUF4QjtBQUNBOztBQUVELFNBQVNnRyxZQUFULEdBQXdCO0VBQ3ZCLElBQUlVLFlBQVksR0FBRywrQ0FBbkI7O0VBRUEsSUFBSVgsV0FBVyxDQUFDL0YsT0FBWixDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7SUFDbkM4RixXQUFXLENBQUMvRixPQUFaLEdBQXNCK0YsV0FBVyxDQUFDL0YsT0FBWixDQUFvQnNHLE1BQXBCLENBQTJCLFVBQUE3RixJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDZCxLQUFMLEtBQWUsaUJBQW5CO0lBQUEsQ0FBL0IsQ0FBdEIsQ0FEbUMsQ0FHbkM7O0lBQ0FVLG1FQUFZLENBQUMwRixXQUFXLENBQUMvRixPQUFiLENBQVosQ0FKbUMsQ0FNbkM7O0lBQ0EyRyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsV0FBVztJQUVYbkIsbUVBQW1CLENBQUMsSUFBRCxFQUFPZ0IsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RYLFdBQXhELENBQW5CO0VBQ0EsQ0FaRCxNQVlPO0lBQ04sSUFBTXVDLFdBQVcsR0FBRztNQUNuQjNJLEtBQUssRUFBRSxpQkFEWTtNQUVuQndCLE1BQU0sRUFBRSwyQkFGVztNQUduQkUsUUFBUSxFQUFFLHFCQUhTO01BSW5CRSxRQUFRLEVBQUU7SUFKUyxDQUFwQjtJQU1Bd0UsV0FBVyxDQUFDVixPQUFaLENBQW9CaUQsV0FBcEIsRUFQTSxDQVNOOztJQUNBakksbUVBQVksQ0FBQzBGLFdBQVcsQ0FBQy9GLE9BQWIsQ0FBWixDQVZNLENBWU47O0lBQ0E2RyxXQUFXO0lBRVRuQixtRUFBbUIsQ0FBQyxJQUFELEVBQU9nQixZQUFQLEVBQXFCLGlDQUFyQixFQUF3RFgsV0FBeEQsQ0FBbkI7RUFDRjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Gb3JtRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvYXV4VUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9Cb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9MaWJyYXJ5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9teS1qc0xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rbGlzdFBhcnRpdGlvbkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWRlc2MnKTtcclxuXHJcblxyXG5sZXQgZGVmYXVsdE1zZyA9ICdteUJvb2tzaGVsZic7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va0JvYXJkKG5vZGUsIG1lc3NhZ2UgPSBkZWZhdWx0TXNnLCBjc3NDbGFzcywgbGliKSB7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgbGliLnRpdGxlLnRvVXBwZXJDYXNlKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcclxuXHRcclxuXHRsZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX29ybmFtZW50Jyk7XHJcblx0Ly9sZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnaHInKTtcclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU9ybmFtZW50KTtcclxuXHRcclxuXHRsZXQgbmV3TGlicmFyeU5vZGUyO1xyXG5cdGlmIChsaWIubGlicmFyeVswXS50aXRsZSA9PT0gJ1lvdXIgQm9vayBoZXJlIScpIHtcclxuXHRcdFx0bmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6IDAgYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRcdG5ld0xpYnJhcnlOb2RlMiA9IHByaW50TXNnKCdwJywgYFRvdGFsIG9mIGJvb2tzOiAke2xpYi5saWJyYXJ5Lmxlbmd0aH0gYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xyXG5cdH1cclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUyKTtcclxuXHRcclxuXHRsZXQgbmV3Qm9va05vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XHJcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XHJcblx0XHRcclxuXHRcdGxldCBzcGFuO1xyXG5cdFx0aWYgKGJvb2suYm9va1JlYWQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1JlYWQsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xyXG5cdFx0XHJcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXHJcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHRcdFx0XHJcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblx0XHRcclxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBsaTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBjdXJyZW50Qm9va0Zvcm1Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19zZWxlY3RlZCcpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuXHJcbi8vIEZvcm0gbm9kZXNcclxuY29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbmNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XHJcbmNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuY29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ1RoZXJlIGlzIG5vIHNlbGVjdGVkIGJvb2shJztcclxuXHJcbmNvbnN0IGZvcm1GaWVsZHMgPSB7XHJcblx0dGl0bGU6IG51bGwsXHJcblx0YXV0aG9yOiBudWxsLFxyXG5cdG5QYWdlczogMCwgXHJcblx0YlJlYWQ6ICdub3QgcmVhZCB5ZXQnXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybUZpZWxkcygpIHtcclxuXHRmb3JtRmllbGRzLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcblx0Zm9ybUZpZWxkcy5hdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJykudmFsdWU7XHJcblx0Zm9ybUZpZWxkcy5uUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJykudmFsdWU7XHJcblx0XHJcblx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJykuY2hlY2tlZCkge1xyXG5cdFx0Zm9ybUZpZWxkcy5iUmVhZCA9ICdhbHJlYWR5IHJlYWQnO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmb3JtRmllbGRzLmJSZWFkID0gJ25vdCByZWFkIHlldCc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9ybUZpZWxkcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEZvcm1GaWVsZHMoc2VsZWN0ZWRCb29rKSB7XHJcblx0aWYgKHNlbGVjdGVkQm9vaykge1xyXG5cdFx0Y3VycmVudEJvb2tGb3JtTm9kZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkQm9vay50aXRsZS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0bm9kZVRpdGxlLnZhbHVlID0gc2VsZWN0ZWRCb29rLnRpdGxlO1xyXG5cdFx0bm9kZUF1dGhvci52YWx1ZSA9IHNlbGVjdGVkQm9vay5hdXRob3I7XHJcblx0XHRub2RlUGFnZXMudmFsdWUgPSBzZWxlY3RlZEJvb2subnVtUGFnZXM7XHJcblx0XHRcclxuXHRcdGlmIChzZWxlY3RlZEJvb2suYm9va1JlYWQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdG5vZGVCb29rTm90ZS5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZvcm1BZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0Zm9ybUVkaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y3VycmVudEJvb2tGb3JtTm9kZS50ZXh0Q29udGVudCA9IGRlZmF1bHRNc2c7XHJcblx0XHRcclxuXHRcdGZvcm1BZGRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldCgpIHtcclxuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcclxuXHRub2RlQXV0aG9yLnZhbHVlID0gJyc7XHJcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XHJcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHMsXHJcblx0c2V0Rm9ybUZpZWxkcyxcclxuXHRjbGVhckZvcm1TaGVldFxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xyXG5cclxubGV0IG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKSc7XHJcblxyXG5mdW5jdGlvbiBzaG93TWVzc2FnZUJvYXJkKG5vZGUsIG1lc3NhZ2UgPSBtc2csIGNzc0NsYXNzKSB7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHJcblx0Y29uc29sZS5sb2codGhpcmRXYWxsT3JuYW1lbnQpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xyXG5cdFxyXG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcclxuXHR9XHJcblx0LCA1MDAwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dNZXNzYWdlQm9hcmQ7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0cmV0dXJuIG5ld1VJTm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG5cdFx0cHJpbnRNc2csXHJcbn07XHJcblxyXG5cclxuIiwiLypcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMCwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIlwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpYnJhcnlEYXRhQXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSG9iYml0XCIsXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMjk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwiYWxyZWFkeSByZWFkXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR3byBUb3dlcnNcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmV0dXJuIG9mIHRoZSBLaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfVxyXG5dO1xyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rUmVhZCkge1xyXG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xyXG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XHJcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5lZGl0aW9uID0gMTtcclxuXHR0aGlzLnJlbGVhc2VZZWFyID0gbmV3IERhdGUoKTtcclxuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XHJcblx0dGhpcy5ib29rUmVhZCA9IGJvb2tSZWFkO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG5cdFxyXG5cdHRoaXMuYm9va0Rlc2MgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHBlbGxlbnRlc3F1ZSwgZG9sb3IgYWMgc3VzY2lwaXQgdm9sdXRwYXQsIHVybmEgb2RpbyBzdXNjaXBpdCB0b3J0b3IsIHV0IGNvbmRpbWVudHVtIG1ldHVzIG51bGxhIHNvZGFsZXMgbmlzbC4gTnVsbGFtIHBvcnR0aXRvciBmaW5pYnVzIG1ldHVzIHV0IGZhdWNpYnVzLmA7XHJcbn0gXHJcblxyXG5Cb29rLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2hvcnREZXNjID0gYFRoZSBib29rIFwiJHt0aGlzLnRpdGxlfVwiIGJ5ICR7dGhpcy5hdXRob3J9IGhhcyAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCBpbiAke3RoaXMubnVtVm9sdW1lc30gdm9sdW1lKHMpLiBJdCBpcyBhICR7dGhpcy5ib29rQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX0gcHVibGljYXRpb24gYnkgJHt0aGlzLnB1Ymxpc2hlcn0gRWRpdG9ycywgcmVsZWFzZWQgaW4gXCIke3RoaXMuYm9va1R5cGV9XCIgZm9ybWF0LCBpbiAke3RoaXMucmVsZWFzZVllYXIuZ2V0RnVsbFllYXIoKX0gLSBcIiR7dGhpcy5ib29rUmVhZC50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XHJcblx0YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy5hdXRob3J9ICdzICR7dGhpcy50aXRsZX0gaXMgYSBib29rIGFib3V0OiAke3RoaXMuYm9va0Rlc2N9YDtcclxuXHRcclxuXHRyZXR1cm4gYmlnRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vaztcclxuIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rLmpzJztcclxuXHJcbmZ1bmN0aW9uIExpYnJhcnkodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubGlicmFyeSA9IFtdO1xyXG59XHJcblxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9vayA9IGZ1bmN0aW9uKGJvb2spIHtcclxuICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2subnVtUGFnZXMsIGJvb2suYm9va1JlYWQpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxufVxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9va0xpc3QgPSBmdW5jdGlvbihib29rcykge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9va3MpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBib29rcykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rc1tpXS50aXRsZSwgYm9va3NbaV0uYXV0aG9yLCBib29rc1tpXS5udW1QYWdlcywgYm9va3NbaV0uYm9va1JlYWQpO1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9vayk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi8gXHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcclxuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcbmltcG9ydCBzaG93Qm9va0Rlc2NyaXB0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Cb29rRGVzYy5qcyc7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMsIGNsZWFyRm9ybVNoZWV0IH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvcm1EZXNjLmpzJztcclxuIFxyXG4vLyBib29rIGRhdGFcclxuaW1wb3J0IHsgbGlicmFyeURhdGFBcnIgfSBmcm9tICcuL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wYXJ0aXRpb25fX2Fib3V0Jyk7XHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm1fX2ljb24nKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1DbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fY2xlYXInKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuXHJcblxyXG5sZXQgY3VycmVudFNlbGVjdGVkQm9vaztcclxuY29uc3QgbXlCb29rc2hlbGYgPSBuZXcgTGlicmFyeSgnSmF2YVNjcmlwdCBCb29rc2hlbGYnKTtcclxubXlCb29rc2hlbGYuYWRkQm9va0xpc3QobGlicmFyeURhdGFBcnIpO1xyXG5cclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtX19pbnB1dCcpO1xyXG5cdFxyXG5cdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXi4qJHtpbnB1dFRpdGxlLnZhbHVlfS4qJGAsICdpJyk7XHJcblx0XHJcblx0bGV0IHJlc3VsdCA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4ge1xyXG5cdFx0cmV0dXJuIGJvb2sudGl0bGUubWF0Y2gocmVnZXgpO1xyXG5cdH0pLm1hcChib29rID0+IGJvb2sudGl0bGUpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBgJHtyZXN1bHR9YCwgJ21lc3NhZ2UtYm9hcmQtbXNnJyk7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1BZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bGV0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzKCk7XHJcblxyXG4gIGxldCBjYXNoZWRMaWJyYXJ5TGVuZ3RoID0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGg7XHJcbiAgICBcclxuXHRhZGRCb29rVG9MaWJyYXJ5KGZvcm1GaWVsZHMudGl0bGUsIGZvcm1GaWVsZHMuYXV0aG9yLCBmb3JtRmllbGRzLm5QYWdlcywgZm9ybUZpZWxkcy5iUmVhZCk7XHJcbiAgXHJcblx0bGV0IGJvb2tCb2FyZE1zZztcclxuXHRpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCAhPT0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBZb3VyIGJvb2sgXCIke2Zvcm1GaWVsZHMudGl0bGV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XHJcblx0XHRcdFxyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRib29rQm9hcmRNc2cgPSAnQm9vayB3YXMgbm90IGFkZGVkIHRvIHRoZSBseWJyYXJ5ISc7XHJcblx0fSBcclxuICAgIFxyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0XHJcbiAgY3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7IFxyXG4gICAgXHJcblx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHJcblx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdGdldEJvb2tEZXNjKCk7XHJcblx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0cmVtb3ZlQm9va3MoKTtcclxuICAgIFxyXG4gIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufSk7IFxyXG5cclxuXHJcbmZvcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEV4dHJhY3Qgc2VsZWN0ZWQgYm9vayBmcm9tIGxpYnJhcnlcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBjdXJyZW50U2VsZWN0ZWRCb29rLnRpdGxlICE9PSBib29rLnRpdGxlKTtcclxuXHRcclxuXHRsZXQgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMoKTtcclxuXHRcclxuXHRsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gIFxyXG5cdC8vIFR1cm4gaW50byBCb29rIG9iamVjdCBhbmQgQWRkIHRvIGxpYnJhcnlcclxuXHRhZGRCb29rVG9MaWJyYXJ5KGZvcm1GaWVsZHMudGl0bGUsIGZvcm1GaWVsZHMuYXV0aG9yLCBmb3JtRmllbGRzLm5QYWdlcywgZm9ybUZpZWxkcy5iUmVhZCk7XHJcblxyXG5cdGxldCBib29rQm9hcmRNc2c7XHJcblx0aWYgKGNhc2hlZExpYnJhcnlMZW5ndGggPCBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtmb3JtRmllbGRzLnRpdGxlfVwiIHdhcyBlZGl0ZWQhYDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtmb3JtRmllbGRzLnRpdGxlfVwiIHdhcyBOT1QgZWRpdGVkIWA7XHJcblx0XHRcclxuXHRcdC8vIFR1cm4gaW50byBCb29rIG9iamVjdCBhbmQgQWRkIHRvIGxpYnJhcnlcclxuXHRcdGFkZEJvb2tUb0xpYnJhcnkoY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSwgY3VycmVudFNlbGVjdGVkQm9vay5hdXRob3IsIGN1cnJlbnRTZWxlY3RlZEJvb2subnVtUGFnZXMsIGN1cnJlbnRTZWxlY3RlZEJvb2suYm9va1JlYWQpO1xyXG5cdH1cclxuXHRcdFxyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0XHJcblx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgIFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjbGVhckZvcm1TaGVldCgpO1xyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG5cdHNldEZvcm1GaWVsZHMoY3VycmVudFNlbGVjdGVkQm9vayk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xyXG5cdGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHJcblx0ZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhidG5JZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpZiAoaWR4ID09PSBidG5JZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIERlZXAgY29weVxyXG5cdFx0XHRjdXJyZW50U2VsZWN0ZWRCb29rID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib29rWzBdKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcblx0XHRcdHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHJlbW92ZWRCb29rID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4gaWR4ID09PSBidG5JbmRleCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVtb3ZlZEJvb2tbMF0udGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKSB7XHJcblx0XHRcdFx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBgVGhlIFwiJHtyZW1vdmVkQm9va1swXS50aXRsZX1cIiB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBsaWJyYXJ5IWAsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rUmVhZCkge1xyXG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcclxuXHRcdGlmICghbnVtUGFnZXMpIHtcclxuXHRcdFx0bnVtUGFnZXMgPSAwO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBuZXdCb29rID0ge1xyXG5cdFx0XHRcdHRpdGxlLFxyXG5cdFx0XHRcdGF1dGhvcixcclxuXHRcdFx0XHRudW1QYWdlcyxcclxuXHRcdFx0XHRib29rUmVhZFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhuZXdCb29rKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xyXG5cdFx0XHJcblx0XHRsZXQgbWVzc2FnZSA9ICdQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1InO1xyXG5cdFx0XHJcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcclxuXHR9ICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XHJcblx0XHRcdHJldHVybiBib29rO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjaGVja0Jvb2tOb3RlKG5vZGUsIG5vdGVJZCwgbm90ZSwgY3NzVG9SZW1vdmUsIGNzc1RvQWRkKSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeS5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XHJcblx0XHRcdGJvb2suYm9va1JlYWQgPSBub3RlO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xyXG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xyXG5cdGxldCBib29rQm9hcmRNc2cgPSAnQ2xpY2sgb24gdGhlIGJvb2tzIHRvIGdldCB0aGVpciBkZXNjcmlwdGlvbnMhJztcclxuICAgIFxyXG5cdGlmIChteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGJvb2sudGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKTtcclxuXHRcdFx0XHJcblx0XHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0XHJcblx0XHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRCb29rID0ge1xyXG5cdFx0XHR0aXRsZTogJ1lvdXIgQm9vayBoZXJlIScsIFxyXG5cdFx0XHRhdXRob3I6ICdUaGlzIGlzIGFsc28gZm9yIHlvdSEgOi0pJywgXHJcblx0XHRcdG51bVBhZ2VzOiAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsIFxyXG5cdFx0XHRib29rUmVhZDogJ25vdCByZWFkIHlldCcsXHJcblx0XHR9O1xyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhkZWZhdWx0Qm9vayk7XHJcbiAgICAgICAgXHJcblx0XHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHJcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG4gICAgICAgXHJcbiAgICBzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0fSBcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJMaWJyYXJ5IiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibGliIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMaWJyYXJ5T3JuYW1lbnQiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwibGVuZ3RoIiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rUmVhZCIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRCb29rRm9ybU5vZGUiLCJmb3JtQWRkQnRuIiwiZm9ybUVkaXRCdG4iLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiZm9ybUZpZWxkcyIsIm5QYWdlcyIsImJSZWFkIiwiZ2V0Rm9ybUZpZWxkcyIsImNoZWNrZWQiLCJzZXRGb3JtRmllbGRzIiwic2VsZWN0ZWRCb29rIiwidGV4dENvbnRlbnQiLCJkaXNhYmxlZCIsImNsZWFyRm9ybVNoZWV0IiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJzaG93Qm9va0Rlc2NyaXB0aW9uIiwiYWJvdXRTZWN0aW9uIiwic2VhcmNoSWNvbiIsImZvcm1DbGVhckJ0biIsImN1cnJlbnRTZWxlY3RlZEJvb2siLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFRpdGxlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHQiLCJmaWx0ZXIiLCJtYXRjaCIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZ2V0Qm9va0Rlc2MiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImRlc2NCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwiYnRuSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJib29rTm90ZXMiLCJub3RlIiwibm90ZUlkIiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZWRCb29rIiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va0luZGV4IiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsImRlZmF1bHRCb29rIl0sInNvdXJjZVJvb3QiOiIifQ==