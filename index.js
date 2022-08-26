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
  this.bookDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, dolor ac suscipit volutpat, urna odio suscipit tortor, ut condimentum metus nulla sodales nisl.";
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
  console.log(inputTitle.value);
  var regex = new RegExp("^.*".concat(inputTitle.value, ".*$"), 'i');

  if (inputTitle.value) {
    var messageBoard = document.getElementById('hidden-message-board');
    var result = myBookshelf.library.filter(function (book) {
      return book.title.match(regex);
    }).map(function (book) {
      return book.title;
    });
    console.log(result);
    console.log(result.length);

    if (result.length > 0) {
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
      }, 5000);
    } else {
      messageBoard.style.display = 'block';
      var h3 = document.createElement('h3');
      h3.textContent = 'No books found!';
      h3.classList.add('search-form__result');
      messageBoard.appendChild(h3);

      var _msgTimeout = setTimeout(function () {
        messageBoard.style.display = 'none';
        messageBoard.innerHTML = null;
      }, 5000);
    }

    inputTitle.value = '';
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCLFVBQUFoRyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDWCxLQUFMLEtBQWUsaUJBQW5CO0lBQUEsQ0FBL0IsQ0FBdEIsQ0FEbUMsQ0FHbkM7O0lBQ0FPLG1FQUFZLENBQUMyRixXQUFXLENBQUNuRyxPQUFiLENBQVosQ0FKbUMsQ0FNbkM7O0lBQ0FpSCxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsV0FBVztJQUVYckIsbUVBQW1CLENBQUMsSUFBRCxFQUFPa0IsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RiLFdBQXhELENBQW5CO0VBQ0EsQ0FaRCxNQVlPO0lBQ04sSUFBTXdDLFdBQVcsR0FBRztNQUNuQjFJLEtBQUssRUFBRSxpQkFEWTtNQUVuQnFCLE1BQU0sRUFBRSwyQkFGVztNQUduQkUsUUFBUSxFQUFFLHFCQUhTO01BSW5CRSxRQUFRLEVBQUU7SUFKUyxDQUFwQjtJQU1BeUUsV0FBVyxDQUFDVixPQUFaLENBQW9Ca0QsV0FBcEIsRUFQTSxDQVNOOztJQUNBbkksbUVBQVksQ0FBQzJGLFdBQVcsQ0FBQ25HLE9BQWIsQ0FBWixDQVZNLENBWU47O0lBQ0FtSCxXQUFXO0lBRVRyQixtRUFBbUIsQ0FBQyxJQUFELEVBQU9rQixZQUFQLEVBQXFCLGlDQUFyQixFQUF3RGIsV0FBeEQsQ0FBbkI7RUFDRjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Gb3JtRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvYXV4VUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9Cb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9tb2RlbC9MaWJyYXJ5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9teS1qc0xpYnJhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbW9kZWwvTGlicmFyeS5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rbGlzdFBhcnRpdGlvbkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWRlc2MnKTtcclxuXHJcblxyXG5sZXQgZGVmYXVsdE1zZyA9ICdteUJvb2tzaGVsZic7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va0JvYXJkKG5vZGUsIG1lc3NhZ2UgPSBkZWZhdWx0TXNnLCBjc3NDbGFzcywgbGliKSB7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0Ly8gbGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgbGliLnRpdGxlLnRvVXBwZXJDYXNlKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XHJcblx0Ly8gYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlKTtcclxuXHRcclxuXHRsZXQgbmV3TGlicmFyeU5vZGUyO1xyXG5cdGlmIChsaWIubGlicmFyeVswXS50aXRsZSA9PT0gJ1lvdXIgQm9vayBoZXJlIScpIHtcclxuXHRcdFx0bmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ2gzJywgYFRvdGFsIG9mIGJvb2tzOiAwIGJvb2tzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0XHRuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygnaDMnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XHJcblx0fVxyXG5cdGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZTIpO1xyXG5cdFxyXG5cdGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcclxuXHRib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU9ybmFtZW50KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRsZXQgbmV3Qm9va05vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0Ym9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0Jvb2tOb2RlKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rQm9hcmQ7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3Qgc3BhbkRlc2NCdG4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgJ2knLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcdGNvbnN0IGg1ID0gY3JlYXRlRE9NTm9kZSgnaDUnLCBib29rLmF1dGhvciwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYXV0aG9yJyk7XHJcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XHJcblx0XHRcclxuXHRcdGxldCBzcGFuO1xyXG5cdFx0aWYgKGJvb2suYm9va1JlYWQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rUmVhZCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1JlYWQsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xyXG5cdFx0XHJcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXHJcblx0XHRzcGFuRGVzY0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHRcdFx0XHJcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcblx0XHRcclxuXHRcdGJvb2tTaGVsZi5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBsaTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGN1cnJlbnRCb29rRm9ybU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX3NlbGVjdGVkJyk7XHJcbmNvbnN0IGZvcm1BZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wYXJ0aXRpb25fX2FkZCcpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuLy8gRm9ybSBub2Rlc1xyXG5jb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuY29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuY29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xyXG5jb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnVGhlcmUgaXMgbm8gc2VsZWN0ZWQgYm9vayEnO1xyXG5cclxuY29uc3QgZm9ybUZpZWxkcyA9IHtcclxuXHR0aXRsZTogbnVsbCxcclxuXHRhdXRob3I6IG51bGwsXHJcblx0blBhZ2VzOiAwLCBcclxuXHRiUmVhZDogJ25vdCByZWFkIHlldCdcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtRmllbGRzKCkge1xyXG5cdGZvcm1GaWVsZHMudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLmF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKS52YWx1ZTtcclxuXHRmb3JtRmllbGRzLm5QYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKS52YWx1ZTtcclxuXHRcclxuXHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKS5jaGVja2VkKSB7XHJcblx0XHRmb3JtRmllbGRzLmJSZWFkID0gJ2FscmVhZHkgcmVhZCc7XHJcblx0fSBlbHNlIHtcclxuXHRcdGZvcm1GaWVsZHMuYlJlYWQgPSAnbm90IHJlYWQgeWV0JztcclxuXHR9XHJcblxyXG5cdHJldHVybiBmb3JtRmllbGRzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybUZpZWxkcyhzZWxlY3RlZEJvb2spIHtcclxuXHRpZiAoc2VsZWN0ZWRCb29rKSB7XHJcblx0XHRjdXJyZW50Qm9va0Zvcm1Ob2RlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRCb29rLnRpdGxlLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRub2RlVGl0bGUudmFsdWUgPSBzZWxlY3RlZEJvb2sudGl0bGU7XHJcblx0XHRub2RlQXV0aG9yLnZhbHVlID0gc2VsZWN0ZWRCb29rLmF1dGhvcjtcclxuXHRcdG5vZGVQYWdlcy52YWx1ZSA9IHNlbGVjdGVkQm9vay5udW1QYWdlcztcclxuXHRcdFxyXG5cdFx0aWYgKHNlbGVjdGVkQm9vay5ib29rUmVhZCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRmb3JtRWRpdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjdXJyZW50Qm9va0Zvcm1Ob2RlLnRleHRDb250ZW50ID0gZGVmYXVsdE1zZztcclxuXHRcdFxyXG5cdFx0Zm9ybUFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0Zm9ybUVkaXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KCkge1xyXG5cdG5vZGVUaXRsZS52YWx1ZSA9ICcnO1xyXG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcclxuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcclxuXHRub2RlQm9va05vdGUuY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0Z2V0Rm9ybUZpZWxkcyxcclxuXHRzZXRGb3JtRmllbGRzLFxyXG5cdGNsZWFyRm9ybVNoZWV0XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcclxuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XHJcblxyXG5sZXQgbXNnID0gWydXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKSddO1xyXG5cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlQXJyYXkgPSBtc2csIGNzc0NsYXNzKSB7XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdG1lc3NhZ2VBcnJheS5mb3JFYWNoKG1zZyA9PiB7XHJcblx0XHRsZXQgbmV3VUlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuXHRcdFxyXG5cdFx0bmV3VUlOb2RlLnRleHRDb250ZW50ID0gbXNnO1xyXG5cdFx0bmV3VUlOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG5cdFx0XHJcblx0XHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxuXHR9KTtcclxuXHRcclxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0fVxyXG5cdCwgNTAwMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xyXG5cclxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xyXG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuXHRcclxuXHRpZiAoaHRtbFRleHQpIHtcclxuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xyXG5cdFx0XHJcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0NsYXNzKSB7XHJcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzSWQpIHtcclxuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcclxuXHR9XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XHJcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG5ld05vZGU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2csIGNzc0NsYXNzKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXHJcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdHJldHVybiBuZXdVSU5vZGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlRE9NTm9kZSxcclxuXHRcdHByaW50TXNnLFxyXG59O1xyXG5cclxuXHJcbiIsIi8qXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIlwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDAsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsaWJyYXJ5RGF0YUFyciA9IFtcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhvYmJpdFwiLFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIixcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDI5NSwgXHJcbiAgICAgICAgXCJib29rUmVhZFwiOiBcImFscmVhZHkgcmVhZFwiLFxyXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUd28gVG93ZXJzXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1JlYWRcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJldHVybiBvZiB0aGUgS2luZ1wiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsIFxyXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxyXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxyXG4gICAgICAgIFwicHVibGlzaGVyXCI6IFwiRmFudGFzdGljIEJvb2tzaGVsZlwiLFxyXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXHJcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXHJcbiAgICAgICAgXCJlZGl0aW9uXCI6IDEsXHJcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxyXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcclxuICAgICAgICBcImJvb2tSZWFkXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH1cclxuXTtcclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1JlYWQpIHtcclxuXHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0dGhpcy5jb2F1dGhvcnMgPSBbXTtcclxuXHR0aGlzLm51bVZvbHVtZXMgPSAxO1xyXG5cdHRoaXMucHVibGlzaGVyID0gJ0ZhbnRhc3RpYyBCb29rc2hlbGYnO1xyXG5cdHRoaXMuYm9va1R5cGUgPSAnaGFyZCBjb3J2ZXInO1xyXG5cdHRoaXMuYm9va0NhdGVnb3J5ID0gJ2ZpY3Rpb24nO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1JlYWQgPSBib29rUmVhZDtcclxuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0dGhpcy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcclxuXHRcclxuXHR0aGlzLmJvb2tEZXNjID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBwZWxsZW50ZXNxdWUsIGRvbG9yIGFjIHN1c2NpcGl0IHZvbHV0cGF0LCB1cm5hIG9kaW8gc3VzY2lwaXQgdG9ydG9yLCB1dCBjb25kaW1lbnR1bSBtZXR1cyBudWxsYSBzb2RhbGVzIG5pc2wuYDtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBzaG9ydERlc2MgPSBgVGhlIGJvb2sgXCIke3RoaXMudGl0bGV9XCIgYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1QYWdlc30gcGFnZXMsIGluICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWUocykuIEl0IGlzIGEgJHt0aGlzLmJvb2tDYXRlZ29yeS50b1VwcGVyQ2FzZSgpfSBwdWJsaWNhdGlvbiBieSAke3RoaXMucHVibGlzaGVyfSBFZGl0b3JzLCByZWxlYXNlZCBpbiBcIiR7dGhpcy5ib29rVHlwZX1cIiBmb3JtYXQsIGluICR7dGhpcy5yZWxlYXNlWWVhci5nZXRGdWxsWWVhcigpfSAtIFwiJHt0aGlzLmJvb2tSZWFkLnRvVXBwZXJDYXNlKCl9XCIgOjo6ICR7dGhpcy5ib29rRGVzY31cclxuXHRgO1xyXG5cdFx0XHRcclxuXHRyZXR1cm4gc2hvcnREZXNjO1xyXG59XHJcblxyXG5Cb29rLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLmF1dGhvcn0gJ3MgJHt0aGlzLnRpdGxlfSBpcyBhIGJvb2sgYWJvdXQ6ICR7dGhpcy5ib29rRGVzY31gO1xyXG5cdFxyXG5cdHJldHVybiBiaWdEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2suanMnO1xyXG5cclxuZnVuY3Rpb24gTGlicmFyeSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5saWJyYXJ5ID0gW107XHJcbn1cclxuXHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rID0gZnVuY3Rpb24oYm9vaykge1xyXG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5ib29rUmVhZCk7XHJcbiAgICBcclxuICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG59XHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShib29rcykpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGJvb2tzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2tzW2ldLnRpdGxlLCBib29rc1tpXS5hdXRob3IsIGJvb2tzW2ldLm51bVBhZ2VzLCBib29rc1tpXS5ib29rUmVhZCk7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdCb29rKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxyXG4qIFxyXG4qLyBcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9tb2RlbC9MaWJyYXJ5LmpzJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xyXG5pbXBvcnQgc2hvd01lc3NhZ2VCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzJztcclxuaW1wb3J0IHNob3dCb29rRGVzY3JpcHRpb24gZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tEZXNjLmpzJztcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkcywgc2V0Rm9ybUZpZWxkcywgY2xlYXJGb3JtU2hlZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybURlc2MuanMnO1xyXG4gXHJcbi8vIGJvb2sgZGF0YVxyXG5pbXBvcnQgeyBsaWJyYXJ5RGF0YUFyciB9IGZyb20gJy4vZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybV9faWNvbicpO1xyXG5jb25zdCBmb3JtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19hZGQnKTtcclxuY29uc3QgZm9ybUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcGFydGl0aW9uX19jbGVhcicpO1xyXG5jb25zdCBmb3JtRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBhcnRpdGlvbl9fZWRpdCcpO1xyXG5cclxuXHJcbmxldCBjdXJyZW50U2VsZWN0ZWRCb29rO1xyXG5jb25zdCBteUJvb2tzaGVsZiA9IG5ldyBMaWJyYXJ5KCdKYXZhU2NyaXB0IEJvb2tzaGVsZicpO1xyXG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XHJcblxyXG5jaGVja0xpYnJhcnkoKTtcclxuXHJcblxyXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIFttZXNzYWdlXSwgJ21lc3NhZ2UtYm9hcmQtbXNnJyk7XHJcbn0pOyBcclxuXHJcblxyXG5zZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm1fX2lucHV0Jyk7XHJcblx0Y29uc29sZS5sb2coaW5wdXRUaXRsZS52YWx1ZSk7XHJcblx0XHJcblx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeLioke2lucHV0VGl0bGUudmFsdWV9LiokYCwgJ2knKTtcclxuXHRcclxuXHRpZiAoaW5wdXRUaXRsZS52YWx1ZSkge1xyXG5cdFx0Y29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IHtcclxuXHRcdFx0cmV0dXJuIGJvb2sudGl0bGUubWF0Y2gocmVnZXgpO1xyXG5cdFx0fSkubWFwKGJvb2sgPT4gYm9vay50aXRsZSk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQubGVuZ3RoKTtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdC5mb3JFYWNoKHRpdGxlID0+IHtcclxuXHRcdFx0XHRsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0XHRcdGgzLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblx0XHRcdFx0aDMuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWZvcm1fX3Jlc3VsdCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRcdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0LCA1MDAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0XHJcblx0XHRcdGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRcdGgzLnRleHRDb250ZW50ID0gJ05vIGJvb2tzIGZvdW5kISc7XHJcblx0XHRcdGgzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtX19yZXN1bHQnKTtcclxuXHRcdFx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0XHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdCwgNTAwMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlucHV0VGl0bGUudmFsdWUgPSAnJztcclxuXHR9XHJcbn0pOyAgICAgXHJcblxyXG5cclxuZm9ybUFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRsZXQgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMoKTtcclxuXHJcbiAgbGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcclxuICAgIFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkoZm9ybUZpZWxkcy50aXRsZSwgZm9ybUZpZWxkcy5hdXRob3IsIGZvcm1GaWVsZHMublBhZ2VzLCBmb3JtRmllbGRzLmJSZWFkKTtcclxuICBcclxuXHRsZXQgYm9va0JvYXJkTXNnO1xyXG5cdGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoICE9PSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG5cdFx0Ym9va0JvYXJkTXNnID0gYFlvdXIgYm9vayBcIiR7Zm9ybUZpZWxkcy50aXRsZX1cIiB3YXMgYWRkZWQgdG8gdGhlIEpTLUxJQlJBUlkhYDtcclxuXHRcdFx0XHJcblx0XHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvb2tCb2FyZE1zZyA9ICdCb29rIHdhcyBub3QgYWRkZWQgdG8gdGhlIGx5YnJhcnkhJztcclxuXHR9IFxyXG4gICAgXHJcblx0Y2xlYXJGb3JtU2hlZXQoKTtcclxuXHRcclxuICBjdXJyZW50U2VsZWN0ZWRCb29rID0gbnVsbDsgXHJcbiAgICBcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgXHJcbiAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG59KTsgXHJcblxyXG5cclxuZm9ybUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Ly8gRXh0cmFjdCBzZWxlY3RlZCBib29rIGZyb20gbGlicmFyeVxyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGN1cnJlbnRTZWxlY3RlZEJvb2sudGl0bGUgIT09IGJvb2sudGl0bGUpO1xyXG5cdFxyXG5cdGxldCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkcygpO1xyXG5cdFxyXG5cdGxldCBjYXNoZWRMaWJyYXJ5TGVuZ3RoID0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGg7XHJcbiAgXHJcblx0Ly8gVHVybiBpbnRvIEJvb2sgb2JqZWN0IGFuZCBBZGQgdG8gbGlicmFyeVxyXG5cdGFkZEJvb2tUb0xpYnJhcnkoZm9ybUZpZWxkcy50aXRsZSwgZm9ybUZpZWxkcy5hdXRob3IsIGZvcm1GaWVsZHMublBhZ2VzLCBmb3JtRmllbGRzLmJSZWFkKTtcclxuXHJcblx0bGV0IGJvb2tCb2FyZE1zZztcclxuXHRpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCA8IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoKSB7XHJcblx0XHRib29rQm9hcmRNc2cgPSBgVGhlIGJvb2sgXCIke2Zvcm1GaWVsZHMudGl0bGV9XCIgd2FzIGVkaXRlZCFgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRib29rQm9hcmRNc2cgPSBgVGhlIGJvb2sgXCIke2Zvcm1GaWVsZHMudGl0bGV9XCIgd2FzIE5PVCBlZGl0ZWQhYDtcclxuXHRcdFxyXG5cdFx0Ly8gVHVybiBpbnRvIEJvb2sgb2JqZWN0IGFuZCBBZGQgdG8gbGlicmFyeVxyXG5cdFx0YWRkQm9va1RvTGlicmFyeShjdXJyZW50U2VsZWN0ZWRCb29rLnRpdGxlLCBjdXJyZW50U2VsZWN0ZWRCb29rLmF1dGhvciwgY3VycmVudFNlbGVjdGVkQm9vay5udW1QYWdlcywgY3VycmVudFNlbGVjdGVkQm9vay5ib29rUmVhZCk7XHJcblx0fVxyXG5cdFx0XHJcblx0Y2xlYXJGb3JtU2hlZXQoKTtcclxuXHRcclxuXHRjdXJyZW50U2VsZWN0ZWRCb29rID0gbnVsbDtcclxuXHRcclxuXHRzZXRGb3JtRmllbGRzKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFxyXG5cdC8vIFJlbmRlciBsaWJyYXJ5XHJcblx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xyXG5cdFxyXG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRnZXRCb29rRGVzYygpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbiAgICAgXHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG5cdFxyXG5cdHNob3dCb29rRGVzY3JpcHRpb24oJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufSk7XHJcblxyXG5cclxuZm9ybUNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNsZWFyRm9ybVNoZWV0KCk7XHJcblx0Y3VycmVudFNlbGVjdGVkQm9vayA9IG51bGw7XHJcblx0c2V0Rm9ybUZpZWxkcyhjdXJyZW50U2VsZWN0ZWRCb29rKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XHJcblx0Y29uc3QgZGVzY0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcclxuXHRcclxuXHRkZXNjQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XHJcblx0XHRcdGxldCBidG5JZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGJ0bklkKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBib29rID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGlmIChpZHggPT09IGJ0bklkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gRGVlcCBjb3B5XHJcblx0XHRcdGN1cnJlbnRTZWxlY3RlZEJvb2sgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvb2tbMF0pKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY3VycmVudFNlbGVjdGVkQm9vayk7XHJcblx0XHRcdFxyXG5cdFx0XHRzZXRGb3JtRmllbGRzKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQvLyBBbHRlcm5hdGl2ZSBib29rIG1ldGhvZCBkZXRhaWxzXHJcblx0XHRcdGxldCBtZXNzYWdlID0gYm9va1swXS5kZXNjcmlwdGlvbigpO1xyXG5cclxuXHRcdFx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rWzBdLmluZm8oKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcclxuXHRjb25zdCBib29rTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9vay1ub3RlJyk7XHJcblx0XHJcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XHJcblx0XHRub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0Y29uc29sZS5sb2cobm90ZUlkKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdub3QgcmVhZCB5ZXQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tzKCkge1xyXG5cdGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJyk7XHJcblx0XHJcblx0cmVtb3ZlQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRsZXQgYnRuSW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgcmVtb3ZlZEJvb2sgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiBpZHggPT09IGJ0bkluZGV4KTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVtb3ZlZEJvb2spO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFJlbmRlciBCb29rbGlzdFxyXG5cdFx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0XHRyZW1vdmVCb29rcygpO1xyXG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyZW1vdmVkQm9va1swXS50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpIHtcclxuXHRcdFx0XHRzaG93Qm9va0Rlc2NyaXB0aW9uKCdoNCcsIGBUaGUgXCIke3JlbW92ZWRCb29rWzBdLnRpdGxlfVwiIHdhcyByZW1vdmVkIGZyb20gdGhlIGxpYnJhcnkhYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1x0XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn0gIFxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tSZWFkKSB7XHJcbiAgaWYgKHRpdGxlICYmIGF1dGhvcikge1xyXG5cdFx0aWYgKCFudW1QYWdlcykge1xyXG5cdFx0XHRudW1QYWdlcyA9IDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IG5ld0Jvb2sgPSB7XHJcblx0XHRcdFx0dGl0bGUsXHJcblx0XHRcdFx0YXV0aG9yLFxyXG5cdFx0XHRcdG51bVBhZ2VzLFxyXG5cdFx0XHRcdGJvb2tSZWFkXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRteUJvb2tzaGVsZi5hZGRCb29rKG5ld0Jvb2spO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XHJcblx0XHRcclxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XHJcblx0XHRcclxuXHRcdHNob3dNZXNzYWdlQm9hcmQoJ2g0JywgW21lc3NhZ2VdLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tSZWFkID0gbm90ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcclxuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xyXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XHJcblx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcclxuXHRsZXQgYm9va0JvYXJkTXNnID0gJ0NsaWNrIG9uIHRoZSBib29rcyB0byBnZXQgdGhlaXIgZGVzY3JpcHRpb25zISc7XHJcbiAgICBcclxuXHRpZiAobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGggPiAwKSB7XHJcblx0XHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcblx0XHRcdFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcclxuXHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0XHRcdFxyXG5cdFx0c2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBkZWZhdWx0Qm9vayA9IHtcclxuXHRcdFx0dGl0bGU6ICdZb3VyIEJvb2sgaGVyZSEnLCBcclxuXHRcdFx0YXV0aG9yOiAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsIFxyXG5cdFx0XHRudW1QYWdlczogJ0FsbCB0aGF0IHlvdSBuZWVkOiAnLCBcclxuXHRcdFx0Ym9va1JlYWQ6ICdub3QgcmVhZCB5ZXQnLFxyXG5cdFx0fTtcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xyXG4gICAgICAgIFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgIFxyXG4gICAgc2hvd0Jvb2tEZXNjcmlwdGlvbignaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH0gXHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiTGlicmFyeSIsImJvb2tsaXN0UGFydGl0aW9uRGVzYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRNc2ciLCJzaG93Qm9va0JvYXJkIiwibm9kZSIsIm1lc3NhZ2UiLCJjc3NDbGFzcyIsImxpYiIsImlubmVySFRNTCIsIm5ld0xpYnJhcnlOb2RlMiIsImxpYnJhcnkiLCJ0aXRsZSIsImxlbmd0aCIsImFwcGVuZENoaWxkIiwibmV3TGlicmFyeU9ybmFtZW50IiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rUmVhZCIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRCb29rRm9ybU5vZGUiLCJmb3JtQWRkQnRuIiwiZm9ybUVkaXRCdG4iLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiZm9ybUZpZWxkcyIsIm5QYWdlcyIsImJSZWFkIiwiZ2V0Rm9ybUZpZWxkcyIsImNoZWNrZWQiLCJzZXRGb3JtRmllbGRzIiwic2VsZWN0ZWRCb29rIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsImRpc2FibGVkIiwiY2xlYXJGb3JtU2hlZXQiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJtZXNzYWdlQXJyYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JFYWNoIiwibmV3VUlOb2RlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwidGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxpYnJhcnlEYXRhQXJyIiwiQm9vayIsImNvYXV0aG9ycyIsIm51bVZvbHVtZXMiLCJwdWJsaXNoZXIiLCJib29rVHlwZSIsImJvb2tDYXRlZ29yeSIsImVkaXRpb24iLCJyZWxlYXNlWWVhciIsIkRhdGUiLCJkYXRlIiwibGFzdENoYW5nZSIsImJvb2tEZXNjIiwicHJvdG90eXBlIiwiaW5mbyIsInNob3J0RGVzYyIsImdldEZ1bGxZZWFyIiwiZGVzY3JpcHRpb24iLCJiaWdEZXNjIiwiYWRkQm9vayIsIm5ld0Jvb2siLCJwdXNoIiwiYWRkQm9va0xpc3QiLCJib29rcyIsInNob3dCb29rRGVzY3JpcHRpb24iLCJhYm91dFNlY3Rpb24iLCJzZWFyY2hJY29uIiwiZm9ybUNsZWFyQnRuIiwiY3VycmVudFNlbGVjdGVkQm9vayIsIm15Qm9va3NoZWxmIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0VGl0bGUiLCJjb25zb2xlIiwibG9nIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHQiLCJmaWx0ZXIiLCJtYXRjaCIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZ2V0Qm9va0Rlc2MiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImRlc2NCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0biIsImUiLCJidG5JZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImJvb2tOb3RlcyIsIm5vdGUiLCJub3RlSWQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0bkluZGV4IiwicmVtb3ZlZEJvb2siLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rSW5kZXgiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9