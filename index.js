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

var currentSelectBook = document.querySelector('.current-book__book');
var currentBookBtn = document.querySelector('.current-book__btn');
var defaultMsg = 'Would you like to update: ';

function showSelectedBook(node) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMsg;
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  var book = arguments.length > 3 ? arguments[3] : undefined;
  currentSelectBook.innerHTML = null;
  var currentSelBook = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.printMsg)(node, book.title.toUpperCase(), cssClass);
  currentSelectBook.appendChild(currentSelBook);
  currentBookBtn.style.display = 'block';
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
var addBookBtn = document.getElementById('add-book');
var bookshelfBoard = document.getElementById('book-desc');
var currentSelectedBook;
var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_5__.libraryDataArr);
checkLibrary();
aboutSection.addEventListener('click', function () {
  console.log('test about section');
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
      (0,_components_SelectedBook_js__WEBPACK_IMPORTED_MODULE_4__["default"])('p', '', 'current-book__title', currentSelectedBook); // Alternative book method details

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVAsRUFBcUIsaUNBQXJCLEVBQXdEVixXQUF4RCxFQUFxRUEsV0FBckUsQ0FBYjtFQUNOLENBYkUsTUFhSTtJQUNOLElBQU13QyxXQUFXLEdBQUc7TUFDVjlILEtBQUssRUFBRSxpQkFERztNQUVWd0IsTUFBTSxFQUFFLDJCQUZFO01BR1ZFLFFBQVEsRUFBRSxxQkFIQTtNQUlWRSxTQUFTLEVBQUU7SUFKRCxDQUFwQjtJQU1BMEQsV0FBVyxDQUFDVCxPQUFaLENBQW9CaUQsV0FBcEI7SUFFTXhGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0MsV0FBWixFQVRBLENBV047O0lBQ0E1RSxtRUFBWSxDQUFDNEUsV0FBVyxDQUFDakYsT0FBYixDQUFaLENBWk0sQ0FjTjs7SUFDQWdHLFdBQVcsR0FmTCxDQWlCQTs7SUFDQTVHLG1FQUFhLENBQUMsSUFBRCxFQUFPdUcsWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RWLFdBQXhELENBQWI7RUFDTjtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rRGVzYy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0ZWRCb29rLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL2F1eFVJRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9kYXRhL2xpYnJhcnktZGF0YS1hcnJheS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL21vZGVsL0xpYnJhcnkuanMnO1xyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va2xpc3RQYXJ0aXRpb25EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1kZXNjJyk7XHJcblxyXG5cclxubGV0IGRlZmF1bHRNc2cgPSAnbXlCb29rc2hlbGYnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0Jvb2tCb2FyZChub2RlLCBtZXNzYWdlID0gZGVmYXVsdE1zZywgY3NzQ2xhc3MsIGxpYikge1xyXG4gICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBsZXQgbmV3TGlicmFyeU5vZGUgPSBwcmludE1zZygnaDInLCBsaWIudGl0bGUudG9VcHBlckNhc2UoKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGl0bGUnKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3TGlicmFyeU5vZGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fb3JuYW1lbnQnKTtcclxuICAgICAgICAvL2xldCBuZXdMaWJyYXJ5T3JuYW1lbnQgPSBjcmVhdGVET01Ob2RlKCdocicpO1xyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdMaWJyYXJ5Tm9kZTI7XHJcbiAgICAgICAgaWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xyXG4gICAgICAgICAgICBuZXdMaWJyYXJ5Tm9kZTIgPSBwcmludE1zZygncCcsIGBUb3RhbCBvZiBib29rczogMCBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuZXdCb29rTm9kZSA9IHByaW50TXNnKG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcclxuICAgICAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuYXBwZW5kQ2hpbGQobmV3Qm9va05vZGUpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBzcGFuRGVzY0J0biA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCAnaScsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rLW5vdGUnKTtcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHNwYW5EZXNjQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcclxuXHRcdFxyXG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcclxuXHRcdGgzLmFwcGVuZENoaWxkKHNwYW5EZXNjQnRuKTtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBtZXNzYWdlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLW1lc3NhZ2UtYm9hcmQnKTtcclxuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XHJcblxyXG5sZXQgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJztcclxuXHJcbmZ1bmN0aW9uIHNob3dNZXNzYWdlQm9hcmQobm9kZSwgbWVzc2FnZSA9IG1zZywgY3NzQ2xhc3MpIHtcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gcHJpbnRNc2cobm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcclxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XHJcblx0XHJcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdH1cclxuXHQsIDUwMDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd01lc3NhZ2VCb2FyZDtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTU5vZGUsIHByaW50TXNnIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBjdXJyZW50U2VsZWN0Qm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWJvb2tfX2Jvb2snKTtcclxuY29uc3QgY3VycmVudEJvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1ib29rX19idG4nKTtcclxuXHJcbmxldCBkZWZhdWx0TXNnID0gJ1dvdWxkIHlvdSBsaWtlIHRvIHVwZGF0ZTogJztcclxuXHJcbmZ1bmN0aW9uIHNob3dTZWxlY3RlZEJvb2sobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzLCBib29rKSB7XHJcblx0Y3VycmVudFNlbGVjdEJvb2suaW5uZXJIVE1MID0gbnVsbDtcclxuXHRcclxuXHRsZXQgY3VycmVudFNlbEJvb2sgPSBwcmludE1zZyhub2RlLCBib29rLnRpdGxlLnRvVXBwZXJDYXNlKCksIGNzc0NsYXNzKTtcclxuICBcclxuXHRjdXJyZW50U2VsZWN0Qm9vay5hcHBlbmRDaGlsZChjdXJyZW50U2VsQm9vayk7XHJcblx0XHJcblx0Y3VycmVudEJvb2tCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93U2VsZWN0ZWRCb29rO1xyXG5cclxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xyXG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuXHRcclxuXHRpZiAoaHRtbFRleHQpIHtcclxuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xyXG5cdFx0XHJcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0NsYXNzKSB7XHJcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzSWQpIHtcclxuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcclxuXHR9XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XHJcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG5ld05vZGU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2csIGNzc0NsYXNzKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXHJcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdHJldHVybiBuZXdVSU5vZGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlRE9NTm9kZSxcclxuXHRcdHByaW50TXNnLFxyXG59O1xyXG5cclxuXHJcbiIsIi8qXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcclxuICAgICAgICBcImF1dGhvclwiOiBcIlwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDAsIFxyXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgbGlicmFyeURhdGFBcnIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIb2JiaXRcIixcclxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAyOTUsIFxyXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwiYWxyZWFkeSByZWFkXCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUd28gVG93ZXJzXCIsIFxyXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXHJcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXHJcbiAgICAgICAgXCJudW1Wb2x1bWVzXCI6IDEsXHJcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXHJcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcclxuICAgICAgICBcImJvb2tDYXRlZ29yeVwiOiBcImZpY3Rpb25cIixcclxuICAgICAgICBcImVkaXRpb25cIjogMSxcclxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXHJcbiAgICAgICAgXCJudW1QYWdlc1wiOiAzOTUsIFxyXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXHJcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgXCJsYXN0Q2hhbmdlXCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSZXR1cm4gb2YgdGhlIEtpbmdcIiwgXHJcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcclxuICAgICAgICBcImNvYXV0aG9yc1wiOiBbXSxcclxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcclxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcclxuICAgICAgICBcImJvb2tUeXBlXCI6IFwiaGFyZCBjb3ZlclwiLFxyXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxyXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxyXG4gICAgICAgIFwicmVsZWFzZVllYXJcIjogXCJcIixcclxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXHJcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcclxuICAgICAgICBcImRhdGVcIjogXCJcIixcclxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxyXG4gICAgfVxyXG5dO1xyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuXHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0dGhpcy5jb2F1dGhvcnMgPSBbXTtcclxuXHR0aGlzLm51bVZvbHVtZXMgPSAxO1xyXG5cdHRoaXMucHVibGlzaGVyID0gJ0ZhbnRhc3RpYyBCb29rc2hlbGYnO1xyXG5cdHRoaXMuYm9va1R5cGUgPSAnaGFyZCBjb3J2ZXInO1xyXG5cdHRoaXMuYm9va0NhdGVnb3J5ID0gJ2ZpY3Rpb24nO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG5cdFxyXG5cdHRoaXMuYm9va0Rlc2MgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIHBlbGxlbnRlc3F1ZSwgZG9sb3IgYWMgc3VzY2lwaXQgdm9sdXRwYXQsIHVybmEgb2RpbyBzdXNjaXBpdCB0b3J0b3IsIHV0IGNvbmRpbWVudHVtIG1ldHVzIG51bGxhIHNvZGFsZXMgbmlzbC4gTnVsbGFtIHBvcnR0aXRvciBmaW5pYnVzIG1ldHVzIHV0IGZhdWNpYnVzLmA7XHJcbn0gXHJcblxyXG5Cb29rLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2hvcnREZXNjID0gYFRoZSBib29rIFwiJHt0aGlzLnRpdGxlfVwiIGJ5ICR7dGhpcy5hdXRob3J9IGhhcyAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCBpbiAke3RoaXMubnVtVm9sdW1lc30gdm9sdW1lKHMpLiBJdCBpcyBhICR7dGhpcy5ib29rQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX0gcHVibGljYXRpb24gYnkgJHt0aGlzLnB1Ymxpc2hlcn0gRWRpdG9ycywgcmVsZWFzZWQgaW4gXCIke3RoaXMuYm9va1R5cGV9XCIgZm9ybWF0LCBpbiAke3RoaXMucmVsZWFzZVllYXIuZ2V0RnVsbFllYXIoKX0gLSBcIiR7dGhpcy5ib29rU3RhdGUudG9VcHBlckNhc2UoKX1cIiA6OjogJHt0aGlzLmJvb2tEZXNjfVxyXG5cdGA7XHJcblx0XHRcdFxyXG5cdHJldHVybiBzaG9ydERlc2M7XHJcbn1cclxuXHJcbkJvb2sucHJvdG90eXBlLmRlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYmlnRGVzYyA9IGAke3RoaXMuYXV0aG9yfSAncyAke3RoaXMudGl0bGV9IGlzIGEgYm9vayBhYm91dDogJHt0aGlzLmJvb2tEZXNjfWA7XHJcblx0XHJcblx0cmV0dXJuIGJpZ0Rlc2M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcbiIsImltcG9ydCBCb29rIGZyb20gJy4vQm9vay5qcyc7XHJcblxyXG5mdW5jdGlvbiBMaWJyYXJ5KHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmxpYnJhcnkgPSBbXTtcclxufVxyXG5cclxuXHJcbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2sgPSBmdW5jdGlvbihib29rKSB7XHJcbiAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2sudGl0bGUsIGJvb2suYXV0aG9yLCBib29rLm51bVBhZ2VzLCBib29rLmJvb2tTdGF0ZSk7XHJcbiAgICBcclxuICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xyXG59XHJcblxyXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShib29rcykpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGJvb2tzKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3Qm9vayA9IG5ldyBCb29rKGJvb2tzW2ldLnRpdGxlLCBib29rc1tpXS5hdXRob3IsIGJvb2tzW2ldLm51bVBhZ2VzLCBib29rc1tpXS5ib29rU3RhdGUpO1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9vayk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxpYnJhcnkucHVzaChuZXdCb29rKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi9cclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9tb2RlbC9MaWJyYXJ5LmpzJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xyXG5pbXBvcnQgc2hvd01lc3NhZ2VCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzJztcclxuaW1wb3J0IHNob3dCb29rQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tEZXNjLmpzJztcclxuaW1wb3J0IHNob3dTZWxlY3RlZEJvb2sgZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdGVkQm9vay5qcyc7XHJcblxyXG4vLyBib29rIGRhdGFcclxuaW1wb3J0IHsgbGlicmFyeURhdGFBcnIgfSBmcm9tICcuL2RhdGEvbGlicmFyeS1kYXRhLWFycmF5LmpzJztcclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wYXJ0aXRpb25fX2Fib3V0Jyk7XHJcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2snKTtcclxuY29uc3QgYm9va3NoZWxmQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vay1kZXNjJyk7XHJcblxyXG5cclxubGV0IGN1cnJlbnRTZWxlY3RlZEJvb2s7XHJcbmNvbnN0IG15Qm9va3NoZWxmID0gbmV3IExpYnJhcnkoJ0phdmFTY3JpcHQgQm9va3NoZWxmJyk7XHJcbm15Qm9va3NoZWxmLmFkZEJvb2tMaXN0KGxpYnJhcnlEYXRhQXJyKTtcclxuXHJcbmNoZWNrTGlicmFyeSgpO1xyXG5cclxuXHJcbmFib3V0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygndGVzdCBhYm91dCBzZWN0aW9uJyk7XHJcblx0bGV0IG1lc3NhZ2UgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEZvcm0gbm9kZXNcclxuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblx0XHJcbiAgICBsZXQgY2FzaGVkTGlicmFyeUxlbmd0aCA9IG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoO1xyXG4gICAgXHJcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGJvb2tCb2FyZE1zZztcclxuICAgIGlmIChjYXNoZWRMaWJyYXJ5TGVuZ3RoICE9PSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9IGBZb3VyIGJvb2sgXCIke25vZGVUaXRsZS52YWx1ZX1cIiB3YXMgYWRkZWQgdG8gdGhlIEpTLUxJQlJBUlkhYDtcclxuICAgICAgICBcclxuICAgICAgICBteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvb2tCb2FyZE1zZyA9ICdDbGljayBvbiB0aGUgYm9va3MgdG8gZ2V0IHRoZWlyIGRlc2NyaXB0aW9ucyEnO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xyXG5cdFxyXG4gICAgXHJcbiAgICBcclxuXHQvLyBSZW5kZXIgbGlicmFyeVxyXG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcclxuXHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKG15Qm9va3NoZWxmKTtcclxuICAgIFxyXG4gICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxyXG4gICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG59KTsgXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XHJcbiAgICBjb25zdCBkZXNjQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2tkZXNjLWJ0bicpO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG4gICAgZGVzY0J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGJ0bklkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuSWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGJvb2sgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSBidG5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdC8vIERlZXAgY29weVxyXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWRCb29rID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib29rWzBdKSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZEJvb2spO1xyXG5cdFx0XHRcdFx0XHRzaG93U2VsZWN0ZWRCb29rKCdwJywgJycsICdjdXJyZW50LWJvb2tfX3RpdGxlJywgY3VycmVudFNlbGVjdGVkQm9vayk7XHJcblx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAvLyBBbHRlcm5hdGl2ZSBib29rIG1ldGhvZCBkZXRhaWxzXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYm9va1swXS5kZXNjcmlwdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rWzBdLmluZm8oKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcclxuXHRjb25zdCBib29rTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9vay1ub3RlJyk7XHJcblx0XHJcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XHJcblx0XHRub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5kaXIoZS50YXJnZXQpO1xyXG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0Y29uc29sZS5sb2cobm90ZUlkKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdub3QgcmVhZCB5ZXQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tzKCkge1xyXG5cdGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJyk7XHJcblx0XHJcblx0cmVtb3ZlQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRsZXQgYnRuSW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIFJlbmRlciBCb29rbGlzdFxyXG5cdFx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBQYXNzIEV2ZW50bGlzdGVuZXJzXHJcblx0XHRcdGdldEJvb2tEZXNjKCk7XHJcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0XHRyZW1vdmVCb29rcygpO1xyXG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1x0XHJcbn0gIFxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xyXG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcclxuXHRcdGlmICghbnVtUGFnZXMpIHtcclxuXHRcdFx0bnVtUGFnZXMgPSAwO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va1N0YXRlKTtcclxuXHRcdGlmIChib29rU3RhdGUpIHtcclxuXHRcdFx0Ym9va1N0YXRlID0gJ2FscmVhZHkgcmVhZCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib29rU3RhdGUgPSAnbm90IHJlYWQgeWV0JztcclxuXHRcdH1cclxuXHRcdFxyXG4gICAgICAgIGNvbnN0IG5ld0Jvb2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBhdXRob3IsXHJcbiAgICAgICAgICAgIG51bVBhZ2VzLFxyXG4gICAgICAgICAgICBib29rU3RhdGVcclxuICAgICAgICB9O1xyXG5cdFx0XHJcblx0XHRteUJvb2tzaGVsZi5hZGRCb29rKG5ld0Jvb2spO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xyXG5cdFx0XHJcblx0XHRsZXQgbWVzc2FnZSA9ICdQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1InO1xyXG5cdFx0XHJcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcclxuXHR9ICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcclxuXHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XHJcblx0XHRcdHJldHVybiBib29rO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFx0XHJcblx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XHJcbn1cclxuXHJcblxyXG4vKiBBVVhJTElBUlkgRlVOQ1RJT05TICovXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcclxuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcclxuXHRub2RlQXV0aG9yLnZhbHVlID0gJyc7XHJcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XHJcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15Qm9va3NoZWxmLmxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XHJcblx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNzc1RvUmVtb3ZlKTtcclxuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XHJcblx0bGV0IGJvb2tCb2FyZE1zZyA9ICdDbGljayBvbiB0aGUgYm9va3MgdG8gZ2V0IHRoZWlyIGRlc2NyaXB0aW9ucyEnO1xyXG4gICAgXHJcbiAgICBpZiAobXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGggPiAwKSB7XHJcblx0XHRteUJvb2tzaGVsZi5saWJyYXJ5ID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSAnWW91ciBCb29rIGhlcmUhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0Z2V0Qm9va0Rlc2MoKTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYsIG15Qm9va3NoZWxmKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnWW91ciBCb29rIGhlcmUhJywgXHJcbiAgICAgICAgICAgIGF1dGhvcjogJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCBcclxuICAgICAgICAgICAgbnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXHJcbiAgICAgICAgICAgIGJvb2tTdGF0ZTogJ25vdCByZWFkIHlldCcsXHJcbiAgICAgICAgfTtcclxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xyXG4gICAgICAgIFxyXG5cdFx0Ly8gUmVuZGVyIGxpYnJhcnlcclxuXHRcdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcclxuXHRcdFxyXG5cdFx0Ly8gUGFzcyBFdmVudGxpc3RlbmVyc1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXHJcbiAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rQm9hcmRNc2csICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQyJywgbXlCb29rc2hlbGYpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwicHJpbnRNc2ciLCJMaWJyYXJ5IiwiYm9va2xpc3RQYXJ0aXRpb25EZXNjIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdE1zZyIsInNob3dCb29rQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibGliIiwiaW5uZXJIVE1MIiwibmV3TGlicmFyeU5vZGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMaWJyYXJ5T3JuYW1lbnQiLCJuZXdMaWJyYXJ5Tm9kZTIiLCJsaWJyYXJ5IiwibGVuZ3RoIiwibmV3Qm9va05vZGUiLCJib29rU2hlbGYiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJzcGFuRGVzY0J0biIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJtZXNzYWdlQm9hcmQiLCJ0aGlyZFdhbGxPcm5hbWVudCIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJuZXdVSU5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibXNnVGltZW91dCIsInNldFRpbWVvdXQiLCJjdXJyZW50U2VsZWN0Qm9vayIsImN1cnJlbnRCb29rQnRuIiwic2hvd1NlbGVjdGVkQm9vayIsImN1cnJlbnRTZWxCb29rIiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJjdXJyZW50U2VsZWN0ZWRCb29rIiwibXlCb29rc2hlbGYiLCJjaGVja0xpYnJhcnkiLCJhZGRFdmVudExpc3RlbmVyIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImNoZWNrZWQiLCJjYXNoZWRMaWJyYXJ5TGVuZ3RoIiwiYWRkQm9va1RvTGlicmFyeSIsImJvb2tCb2FyZE1zZyIsImZpbHRlciIsImNsZWFyRm9ybVNoZWV0IiwiZ2V0Qm9va0Rlc2MiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImRlc2NCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwiYnRuSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJib29rTm90ZXMiLCJub3RlIiwibm90ZUlkIiwidGV4dENvbnRlbnQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va0luZGV4IiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsImRlZmF1bHRCb29rIl0sInNvdXJjZVJvb3QiOiIifQ==