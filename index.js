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
  booklistPartitionDesc.innerHTML = null; // let newLibraryNode = printMsg('h2', lib.title.toUpperCase(), 'booklist-partition__board-title');
  // booklistPartitionDesc.appendChild(newLibraryNode);

  var newLibraryNode2;

  if (lib.library[0].title === 'Your Book here!') {
    newLibraryNode2 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('h3', "Total of books: 0 books", 'booklist-partition__board-title');
  } else {
    newLibraryNode2 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)('h3', "Total of books: ".concat(lib.library.length, " books"), 'booklist-partition__board-title');
  }

  booklistPartitionDesc.appendChild(newLibraryNode2);
  var newLibraryOrnament = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('div', '', 'booklist-partition__ornament');
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
var msg = ['Welcome, fell free to post your books here! :-)'];

function showMessageBoard(node) {
  var messageArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : msg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  messageBoard.style.display = 'block';
  messageArray.forEach(function (msg) {
    var newUINode = document.createElement(node);
    newUINode.textContent = msg;
    newUINode.classList.add(cssClass);
    messageBoard.appendChild(newUINode);
  });
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
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', [message], 'message-board-msg');
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
  var messageBoard = document.getElementById('hidden-message-board');
  messageBoard.style.display = 'block';
  result.forEach(function (title) {
    var h3 = document.createElement('h3');
    h3.textContent = title;
    h3.classList.add('search-form__result');
    messageBoard.appendChild(h3);
  });
  var msgTimeout = setTimeout(function () {
    messageBoard.style.display = 'none';
    messageBoard.innerHTML = null;
  }, 5000); // showMessageBoard('h3', [result], 'message-board-msg');
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
    (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h4', [message], 'message-board-validation');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1EZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9tb2RlbC9MaWJyYXJ5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGJvb2tsaXN0UGFydGl0aW9uRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stZGVzYycpO1xyXG5cclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ215Qm9va3NoZWxmJztcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzLCBsaWIpIHtcclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuaW5uZXJIVE1MID0gbnVsbDtcclxuXHRcclxuXHQvLyBsZXQgbmV3TGlicmFyeU5vZGUgPSBwcmludE1zZygnaDInLCBsaWIudGl0bGUudG9VcHBlckNhc2UoKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuXHQvLyBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xyXG5cdFxyXG5cdGxldCBuZXdMaWJyYXJ5Tm9kZTI7XHJcblx0aWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xyXG5cdFx0XHRuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygnaDMnLCBgVG90YWwgb2YgYm9va3M6IDAgYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10aXRsZScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRcdG5ld0xpYnJhcnlOb2RlMiA9IHByaW50TXNnKCdoMycsIGBUb3RhbCBvZiBib29rczogJHtsaWIubGlicmFyeS5sZW5ndGh9IGJvb2tzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuXHR9XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlMik7XHJcblx0XHJcblx0bGV0IG5ld0xpYnJhcnlPcm5hbWVudCA9IGNyZWF0ZURPTU5vZGUoJ2RpdicsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19vcm5hbWVudCcpO1xyXG5cdGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rUmVhZCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tSZWFkLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdFxyXG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcclxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgY3VycmVudEJvb2tGb3JtTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fc2VsZWN0ZWQnKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1FZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19lZGl0Jyk7XHJcblxyXG4vLyBGb3JtIG5vZGVzXHJcbmNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5jb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5jb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcbmNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XHJcblxyXG5sZXQgZGVmYXVsdE1zZyA9ICdUaGVyZSBpcyBubyBzZWxlY3RlZCBib29rISc7XHJcblxyXG5jb25zdCBmb3JtRmllbGRzID0ge1xyXG5cdHRpdGxlOiBudWxsLFxyXG5cdGF1dGhvcjogbnVsbCxcclxuXHRuUGFnZXM6IDAsIFxyXG5cdGJSZWFkOiAnbm90IHJlYWQgeWV0J1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1GaWVsZHMoKSB7XHJcblx0Zm9ybUZpZWxkcy50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG5cdGZvcm1GaWVsZHMuYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpLnZhbHVlO1xyXG5cdGZvcm1GaWVsZHMublBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpLnZhbHVlO1xyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpLmNoZWNrZWQpIHtcclxuXHRcdGZvcm1GaWVsZHMuYlJlYWQgPSAnYWxyZWFkeSByZWFkJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9ybUZpZWxkcy5iUmVhZCA9ICdub3QgcmVhZCB5ZXQnO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZvcm1GaWVsZHM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRGb3JtRmllbGRzKHNlbGVjdGVkQm9vaykge1xyXG5cdGlmIChzZWxlY3RlZEJvb2spIHtcclxuXHRcdGN1cnJlbnRCb29rRm9ybU5vZGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZEJvb2sudGl0bGUudG9VcHBlckNhc2UoKTtcclxuXHRcdG5vZGVUaXRsZS52YWx1ZSA9IHNlbGVjdGVkQm9vay50aXRsZTtcclxuXHRcdG5vZGVBdXRob3IudmFsdWUgPSBzZWxlY3RlZEJvb2suYXV0aG9yO1xyXG5cdFx0bm9kZVBhZ2VzLnZhbHVlID0gc2VsZWN0ZWRCb29rLm51bVBhZ2VzO1xyXG5cdFx0XHJcblx0XHRpZiAoc2VsZWN0ZWRCb29rLmJvb2tSZWFkID09PSAnYWxyZWFkeSByZWFkJykge1xyXG5cdFx0XHRub2RlQm9va05vdGUuY2hlY2tlZCA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRub2RlQm9va05vdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdGZvcm1FZGl0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdGN1cnJlbnRCb29rRm9ybU5vZGUudGV4dENvbnRlbnQgPSBkZWZhdWx0TXNnO1xyXG5cdFx0XHJcblx0XHRmb3JtQWRkQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQoKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRGb3JtRmllbGRzLFxyXG5cdHNldEZvcm1GaWVsZHMsXHJcblx0Y2xlYXJGb3JtU2hlZXRcclxufTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xyXG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcclxuXHJcbmxldCBtc2cgPSBbJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJ107XHJcblxyXG5mdW5jdGlvbiBzaG93TWVzc2FnZUJvYXJkKG5vZGUsIG1lc3NhZ2VBcnJheSA9IG1zZywgY3NzQ2xhc3MpIHtcclxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHJcblx0bWVzc2FnZUFycmF5LmZvckVhY2gobXNnID0+IHtcclxuXHRcdGxldCBuZXdVSU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFx0XHJcblx0XHRuZXdVSU5vZGUudGV4dENvbnRlbnQgPSBtc2c7XHJcblx0XHRuZXdVSU5vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0XHRcclxuXHRcdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcclxuXHR9XHJcblx0LCA1MDAwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dNZXNzYWdlQm9hcmQ7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0cmV0dXJuIG5ld1VJTm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG5cdFx0cHJpbnRNc2csXHJcbn07XHJcblxyXG5cclxuIiwiLypcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMCwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIlwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpYnJhcnlEYXRhQXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSG9iYml0XCIsXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMjk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwiYWxyZWFkeSByZWFkXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR3byBUb3dlcnNcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcIm5vdCByZWFkIHlldFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUmV0dXJuIG9mIHRoZSBLaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfVxyXG5dO1xyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rUmVhZCkge1xyXG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xyXG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XHJcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5lZGl0aW9uID0gMTtcclxuXHR0aGlzLnJlbGVhc2VZZWFyID0gbmV3IERhdGUoKTtcclxuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XHJcblx0dGhpcy5ib29rUmVhZCA9IGJvb2tSZWFkO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG5cdFxyXG5cdHRoaXMuYm9va0Rlc2MgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHBlbGxlbnRlc3F1ZSwgZG9sb3IgYWMgc3VzY2lwaXQgdm9sdXRwYXQsIHVybmEgb2RpbyBzdXNjaXBpdCB0b3J0b3IsIHV0IGNvbmRpbWVudHVtIG1ldHVzIG51bGxhIHNvZGFsZXMgbmlzbC4gTnVsbGFtIHBvcnR0aXRvciBmaW5pYnVzIG1ldHVzIHV0IGZhdWNpYnVzLmA7XHJcbn0gXHJcblxyXG5Cb29rLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2hvcnREZXNjID0gYFRoZSBib29rIFwiJHt0aGlzLnRpdGxlfVwiIGJ5ICR7dGhpcy5hdXRob3J9IGhhcyAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCBpbiAke3RoaXMubnVtVm9sdW1lc30gdm9sdW1lKHMpLiBJdCBpcyBhICR7dGhpcy5ib29rQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX0gcHVibGljYXRpb24gYnkgJHt0aGlzLnB1Ymxpc2hlcn0gRWRpdG9ycywgcmVsZWFzZWQgaW4gXCIke3RoaXMuYm9va1R5cGV9XCIgZm9ybWF0LCBpbiAke3RoaXMucmVsZWFzZVllYXIuZ2V0RnVsbFllYXIoKX0gLSBcIiR7dGhpcy5ib29rUmVhZC50b1VwcGVyQ2FzZSgpfVwiIDo6OiAke3RoaXMuYm9va0Rlc2N9XHJcblx0YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy5hdXRob3J9ICdzICR7dGhpcy50aXRsZX0gaXMgYSBib29rIGFib3V0OiAke3RoaXMuYm9va0Rlc2N9YDtcclxuXHRcclxuXHRyZXR1cm4gYmlnRGVzYztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vaztcclxuIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rLmpzJztcclxuXHJcbmZ1bmN0aW9uIExpYnJhcnkodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubGlicmFyeSA9IFtdO1xyXG59XHJcblxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9vayA9IGZ1bmN0aW9uKGJvb2spIHtcclxuICAgIGxldCBuZXdCb29rID0gbmV3IEJvb2soYm9vay50aXRsZSwgYm9vay5hdXRob3IsIGJvb2subnVtUGFnZXMsIGJvb2suYm9va1JlYWQpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxufVxyXG5cclxuTGlicmFyeS5wcm90b3R5cGUuYWRkQm9va0xpc3QgPSBmdW5jdGlvbihib29rcykge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9va3MpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBib29rcykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rc1tpXS50aXRsZSwgYm9va3NbaV0uYXV0aG9yLCBib29rc1tpXS5udW1QYWdlcywgYm9va3NbaV0uYm9va1JlYWQpO1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9vayk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi8gXHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcclxuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcbmltcG9ydCBzaG93Qm9va0Rlc2NyaXB0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Cb29rRGVzYy5qcyc7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMsIGNsZWFyRm9ybVNoZWV0IH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvcm1EZXNjLmpzJztcclxuIFxyXG4vLyBib29rIGRhdGFcclxuaW1wb3J0IHsgbGlicmFyeURhdGFBcnIgfSBmcm9tICcuL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wYXJ0aXRpb25fX2Fib3V0Jyk7XHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm1fX2ljb24nKTtcclxuY29uc3QgZm9ybUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fYWRkJyk7XHJcbmNvbnN0IGZvcm1DbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fY2xlYXInKTtcclxuY29uc3QgZm9ybUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2VkaXQnKTtcclxuXHJcblxyXG5sZXQgY3VycmVudFNlbGVjdGVkQm9vaztcclxuY29uc3QgbXlCb29rc2hlbGYgPSBuZXcgTGlicmFyeSgnSmF2YVNjcmlwdCBCb29rc2hlbGYnKTtcclxubXlCb29rc2hlbGYuYWRkQm9va0xpc3QobGlicmFyeURhdGFBcnIpO1xyXG5cclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBbbWVzc2FnZV0sICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTsgXHJcblxyXG5cclxuc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtX19pbnB1dCcpO1xyXG5cdFxyXG5cdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXi4qJHtpbnB1dFRpdGxlLnZhbHVlfS4qJGAsICdpJyk7XHJcblx0XHJcblx0bGV0IHJlc3VsdCA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4ge1xyXG5cdFx0cmV0dXJuIGJvb2sudGl0bGUubWF0Y2gocmVnZXgpO1xyXG5cdH0pLm1hcChib29rID0+IGJvb2sudGl0bGUpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHJcblx0XHJcblx0Y29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdHJlc3VsdC5mb3JFYWNoKHRpdGxlID0+IHtcclxuXHRcdGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cdFx0aDMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWZvcm1fX3Jlc3VsdCcpO1xyXG5cdFx0XHJcblx0XHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRtZXNzYWdlQm9hcmQuaW5uZXJIVE1MID0gbnVsbDtcclxuXHR9XHJcblx0LCA1MDAwKTtcclxuXHQvLyBzaG93TWVzc2FnZUJvYXJkKCdoMycsIFtyZXN1bHRdLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7IFxyXG5cclxuXHJcbmZvcm1BZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bGV0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzKCk7XHJcblxyXG4gIGxldCBjYXNoZWRMaWJyYXJ5TGVuZ3RoID0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGg7XHJcbiAgICBcclxuXHRhZGRCb29rVG9MaWJyYXJ5KGZvcm1GaWVsZHMudGl0bGUsIGZvcm1GaWVsZHMuYXV0aG9yLCBmb3JtRmllbGRzLm5QYWdlcywgZm9ybUZpZWxkcy5iUmVhZCk7XHJcbiAgXHJcblx0bGV0IGJvb2tCb2FyZE1zZztcclxuXHRpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCAhPT0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9IGBZb3VyIGJvb2sgXCIke2Zvcm1GaWVsZHMudGl0bGV9XCIgd2FzIGFkZGVkIHRvIHRoZSBKUy1MSUJSQVJZIWA7XHJcblx0XHRcdFxyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRib29rQm9hcmRNc2cgPSAnQm9vayB3YXMgbm90IGFkZGVkIHRvIHRoZSBseWJyYXJ5ISc7XHJcblx0fSBcclxuICAgIFxyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0XHJcbiAgY3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7IFxyXG4gICAgXHJcblx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHJcblx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdGdldEJvb2tEZXNjKCk7XHJcblx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0cmVtb3ZlQm9va3MoKTtcclxuICAgIFxyXG4gIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufSk7IFxyXG5cclxuXHJcbmZvcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEV4dHJhY3Qgc2VsZWN0ZWQgYm9vayBmcm9tIGxpYnJhcnlcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBjdXJyZW50U2VsZWN0ZWRCb29rLnRpdGxlICE9PSBib29rLnRpdGxlKTtcclxuXHRcclxuXHRsZXQgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMoKTtcclxuXHRcclxuXHRsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gIFxyXG5cdC8vIFR1cm4gaW50byBCb29rIG9iamVjdCBhbmQgQWRkIHRvIGxpYnJhcnlcclxuXHRhZGRCb29rVG9MaWJyYXJ5KGZvcm1GaWVsZHMudGl0bGUsIGZvcm1GaWVsZHMuYXV0aG9yLCBmb3JtRmllbGRzLm5QYWdlcywgZm9ybUZpZWxkcy5iUmVhZCk7XHJcblxyXG5cdGxldCBib29rQm9hcmRNc2c7XHJcblx0aWYgKGNhc2hlZExpYnJhcnlMZW5ndGggPCBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtmb3JtRmllbGRzLnRpdGxlfVwiIHdhcyBlZGl0ZWQhYDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFRoZSBib29rIFwiJHtmb3JtRmllbGRzLnRpdGxlfVwiIHdhcyBOT1QgZWRpdGVkIWA7XHJcblx0XHRcclxuXHRcdC8vIFR1cm4gaW50byBCb29rIG9iamVjdCBhbmQgQWRkIHRvIGxpYnJhcnlcclxuXHRcdGFkZEJvb2tUb0xpYnJhcnkoY3VycmVudFNlbGVjdGVkQm9vay50aXRsZSwgY3VycmVudFNlbGVjdGVkQm9vay5hdXRob3IsIGN1cnJlbnRTZWxlY3RlZEJvb2subnVtUGFnZXMsIGN1cnJlbnRTZWxlY3RlZEJvb2suYm9va1JlYWQpO1xyXG5cdH1cclxuXHRcdFxyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0XHJcblx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgIFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn0pO1xyXG5cclxuXHJcbmZvcm1DbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjbGVhckZvcm1TaGVldCgpO1xyXG5cdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBudWxsO1xyXG5cdHNldEZvcm1GaWVsZHMoY3VycmVudFNlbGVjdGVkQm9vayk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEJvb2tEZXNjKCkge1xyXG5cdGNvbnN0IGRlc2NCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XHJcblx0XHJcblx0ZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgYnRuSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhidG5JZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYm9vayA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpZiAoaWR4ID09PSBidG5JZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIERlZXAgY29weVxyXG5cdFx0XHRjdXJyZW50U2VsZWN0ZWRCb29rID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib29rWzBdKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0Ly8gQWx0ZXJuYXRpdmUgYm9vayBtZXRob2QgZGV0YWlsc1xyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcclxuXHJcblx0XHRcdHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va1swXS5pbmZvKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHJlbW92ZWRCb29rID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4gaWR4ID09PSBidG5JbmRleCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlbW92ZWRCb29rKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBSZW5kZXIgQm9va2xpc3RcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdFx0cmVtb3ZlQm9va3MoKTtcclxuXHRcdFx0Y2hlY2tMaWJyYXJ5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVtb3ZlZEJvb2tbMF0udGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKSB7XHJcblx0XHRcdFx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBgVGhlIFwiJHtyZW1vdmVkQm9va1swXS50aXRsZX1cIiB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBsaWJyYXJ5IWAsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcdFxyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59ICBcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rUmVhZCkge1xyXG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcclxuXHRcdGlmICghbnVtUGFnZXMpIHtcclxuXHRcdFx0bnVtUGFnZXMgPSAwO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBuZXdCb29rID0ge1xyXG5cdFx0XHRcdHRpdGxlLFxyXG5cdFx0XHRcdGF1dGhvcixcclxuXHRcdFx0XHRudW1QYWdlcyxcclxuXHRcdFx0XHRib29rUmVhZFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0bXlCb29rc2hlbGYuYWRkQm9vayhuZXdCb29rKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xyXG5cdFx0XHJcblx0XHRsZXQgbWVzc2FnZSA9ICdQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1InO1xyXG5cdFx0XHJcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIFttZXNzYWdlXSwgJ21lc3NhZ2UtYm9hcmQtdmFsaWRhdGlvbicpO1xyXG5cdH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4vKiBBVVhJTElBUlkgRlVOQ1RJT05TICovXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcclxuXHRcdFx0Ym9vay5ib29rUmVhZCA9IG5vdGU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XHJcblx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNzc1RvUmVtb3ZlKTtcclxuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XHJcblx0bGV0IGJvb2tCb2FyZE1zZyA9ICdDbGljayBvbiB0aGUgYm9va3MgdG8gZ2V0IHRoZWlyIGRlc2NyaXB0aW9ucyEnO1xyXG4gICAgXHJcblx0aWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xyXG5cdFx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xyXG5cdFx0XHRcclxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHJcblx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRnZXRCb29rRGVzYygpO1xyXG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG5cdFx0XHRcclxuXHRcdHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XHJcblx0XHRcdHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXHJcblx0XHRcdGF1dGhvcjogJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCBcclxuXHRcdFx0bnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXHJcblx0XHRcdGJvb2tSZWFkOiAnbm90IHJlYWQgeWV0JyxcclxuXHRcdH07XHJcblx0XHRteUJvb2tzaGVsZi5hZGRCb29rKGRlZmF1bHRCb29rKTtcclxuICAgICAgICBcclxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgICBcclxuICAgIHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHR9IFxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTU5vZGUiLCJwcmludE1zZyIsIkxpYnJhcnkiLCJib29rbGlzdFBhcnRpdGlvbkRlc2MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZWZhdWx0TXNnIiwic2hvd0Jvb2tCb2FyZCIsIm5vZGUiLCJtZXNzYWdlIiwiY3NzQ2xhc3MiLCJsaWIiLCJpbm5lckhUTUwiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwidGl0bGUiLCJsZW5ndGgiLCJhcHBlbmRDaGlsZCIsIm5ld0xpYnJhcnlPcm5hbWVudCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwic3BhbkRlc2NCdG4iLCJoNSIsImF1dGhvciIsInBhcmExIiwibnVtUGFnZXMiLCJzcGFuIiwiYm9va1JlYWQiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50Qm9va0Zvcm1Ob2RlIiwiZm9ybUFkZEJ0biIsImZvcm1FZGl0QnRuIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImZvcm1GaWVsZHMiLCJuUGFnZXMiLCJiUmVhZCIsImdldEZvcm1GaWVsZHMiLCJjaGVja2VkIiwic2V0Rm9ybUZpZWxkcyIsInNlbGVjdGVkQm9vayIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJkaXNhYmxlZCIsImNsZWFyRm9ybVNoZWV0IiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibWVzc2FnZUFycmF5Iiwic3R5bGUiLCJkaXNwbGF5IiwiZm9yRWFjaCIsIm5ld1VJTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtc2dUaW1lb3V0Iiwic2V0VGltZW91dCIsImh0bWxUZXh0IiwiY3NzSWQiLCJjc3NQcm9wcyIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJzaG93Qm9va0Rlc2NyaXB0aW9uIiwiYWJvdXRTZWN0aW9uIiwic2VhcmNoSWNvbiIsImZvcm1DbGVhckJ0biIsImN1cnJlbnRTZWxlY3RlZEJvb2siLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFRpdGxlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHQiLCJmaWx0ZXIiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjYXNoZWRMaWJyYXJ5TGVuZ3RoIiwiYWRkQm9va1RvTGlicmFyeSIsImJvb2tCb2FyZE1zZyIsImdldEJvb2tEZXNjIiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJkZXNjQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG4iLCJlIiwiYnRuSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJib29rTm90ZXMiLCJub3RlIiwibm90ZUlkIiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG5JbmRleCIsInJlbW92ZWRCb29rIiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va0luZGV4IiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsImRlZmF1bHRCb29rIl0sInNvdXJjZVJvb3QiOiIifQ==