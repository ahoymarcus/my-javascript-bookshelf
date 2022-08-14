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
/* harmony import */ var _data_library_data_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/library-data-array.js */ "./src/data/library-data-array.js");
/*
* 
*/



 // book data

 // UI nodes

var aboutSection = document.getElementById('description-partition__about');
var addBookBtn = document.getElementById('add-book');
var bookshelfBoard = document.getElementById('book-desc');
var myBookshelf = new _model_Library_js__WEBPACK_IMPORTED_MODULE_0__["default"]('JavaScript Bookshelf');
myBookshelf.addBookList(_data_library_data_array_js__WEBPACK_IMPORTED_MODULE_4__.libraryDataArr);
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
      }); // Alternative book method details

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ05VLG1FQUFZLENBQUN1RSxXQUFXLENBQUM1RSxPQUFiLENBQVosQ0FKc0MsQ0FNdEM7O0lBQ0F5RixXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsV0FBVyxHQVQyQixDQVdoQzs7SUFDQXZHLG1FQUFhLENBQUMsSUFBRCxFQUFPa0csWUFBUCxFQUFxQixpQ0FBckIsRUFBd0RWLFdBQXhELEVBQXFFQSxXQUFyRSxDQUFiO0VBQ04sQ0FiRSxNQWFJO0lBQ04sSUFBTXFDLFdBQVcsR0FBRztNQUNWdEgsS0FBSyxFQUFFLGlCQURHO01BRVZ3QixNQUFNLEVBQUUsMkJBRkU7TUFHVkUsUUFBUSxFQUFFLHFCQUhBO01BSVZFLFNBQVMsRUFBRTtJQUpELENBQXBCO0lBTUFxRCxXQUFXLENBQUNSLE9BQVosQ0FBb0I2QyxXQUFwQjtJQUVNaEYsT0FBTyxDQUFDQyxHQUFSLENBQVkwQyxXQUFaLEVBVEEsQ0FXTjs7SUFDQXZFLG1FQUFZLENBQUN1RSxXQUFXLENBQUM1RSxPQUFiLENBQVosQ0FaTSxDQWNOOztJQUNBMkYsV0FBVyxHQWZMLENBaUJBOztJQUNBdkcsbUVBQWEsQ0FBQyxJQUFELEVBQU9rRyxZQUFQLEVBQXFCLGlDQUFyQixFQUF3RFYsV0FBeEQsQ0FBYjtFQUNOO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tEZXNjLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vbW9kZWwvTGlicmFyeS5qcyc7XG5cbi8vIFVJIG5vZGVzXG5jb25zdCBib29rbGlzdFBhcnRpdGlvbkRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rLWRlc2MnKTtcblxuXG5sZXQgZGVmYXVsdE1zZyA9ICdteUJvb2tzaGVsZic7XG5cbmZ1bmN0aW9uIHNob3dCb29rQm9hcmQobm9kZSwgbWVzc2FnZSA9IGRlZmF1bHRNc2csIGNzc0NsYXNzLCBsaWIpIHtcbiAgICBib29rbGlzdFBhcnRpdGlvbkRlc2MuaW5uZXJIVE1MID0gbnVsbDtcbiAgICBcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlID0gcHJpbnRNc2coJ2gyJywgbGliLnRpdGxlLnRvVXBwZXJDYXNlKCksICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRpdGxlJyk7XG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5Tm9kZSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3TGlicmFyeU9ybmFtZW50ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX29ybmFtZW50Jyk7XG4gICAgICAgIC8vbGV0IG5ld0xpYnJhcnlPcm5hbWVudCA9IGNyZWF0ZURPTU5vZGUoJ2hyJyk7XG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdMaWJyYXJ5T3JuYW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5ld0xpYnJhcnlOb2RlMjtcbiAgICAgICAgaWYgKGxpYi5saWJyYXJ5WzBdLnRpdGxlID09PSAnWW91ciBCb29rIGhlcmUhJykge1xuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6IDAgYm9va3NgLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TGlicmFyeU5vZGUyID0gcHJpbnRNc2coJ3AnLCBgVG90YWwgb2YgYm9va3M6ICR7bGliLmxpYnJhcnkubGVuZ3RofSBib29rc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX2JvYXJkLXRleHQxJyk7XG4gICAgICAgIH1cbiAgICAgICAgYm9va2xpc3RQYXJ0aXRpb25EZXNjLmFwcGVuZENoaWxkKG5ld0xpYnJhcnlOb2RlMik7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3Qm9va05vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XG4gICAgICAgIGJvb2tsaXN0UGFydGl0aW9uRGVzYy5hcHBlbmRDaGlsZChuZXdCb29rTm9kZSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tCb2FyZDtcblxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xuXG5cbi8vIFVJIG5vZGVzXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcblxuZnVuY3Rpb24gc2hvd0Jvb2tsaXN0KGxpc3QpIHtcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XG5cdFxuXHRsZXQgbmV3Tm9kZSA9IGxpc3QubWFwKChib29rLCBpZHgpID0+IHtcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcblx0XHRjb25zdCBpbWcgPSBjcmVhdGVET01Ob2RlKCdpbWcnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9faWNvbicsICcnLCBbeyBwcm9wOiAnc3JjJywgdmFsdWU6ICcuL3B1YmxpYy9pbWFnZXMvaWNvbnM4LWJvb2stNjQucG5nJyB9LCB7IHByb3A6ICdhbHQnLCB2YWx1ZTogJ2Jvb2tzIGljb24nIH1dKTtcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xuXHRcdGNvbnN0IHNwYW5EZXNjQnRuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsICdpJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9va2Rlc2MtYnRuJyk7XG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcblx0XHRjb25zdCBwYXJhMSA9IGNyZWF0ZURPTU5vZGUoJ3AnLCBgJHtib29rLm51bVBhZ2VzfSBwYWdlc2AsICdib29rbGlzdC1wYXJ0aXRpb25fX3BhZ2VzJyk7XG5cdFx0XG5cdFx0bGV0IHNwYW47XG5cdFx0aWYgKGJvb2suYm9va1N0YXRlID09PSAnYWxyZWFkeSByZWFkJykge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFtJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9vay1ub3RlJyk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZURPTU5vZGUoJ2J1dHRvbicsICdYJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicsICcnKTtcblx0XHRcblx0XHQvLyBTZXQgZ2xvYmFsIGRhdGEgYXR0cmlidXRlXG5cdFx0c3BhbkRlc2NCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0XG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcblx0XHRoMy5hcHBlbmRDaGlsZChzcGFuRGVzY0J0bik7XG5cdFx0XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDUpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChwYXJhMSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0XG5cdFx0bGkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdGxpLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cdFx0XG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcblx0XHRcblx0XHRyZXR1cm4gbGk7XG5cdH0pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHNob3dCb29rbGlzdDtcblxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSwgcHJpbnRNc2cgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcblxubGV0IG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKSc7XG5cbmZ1bmN0aW9uIHNob3dNZXNzYWdlQm9hcmQobm9kZSwgbWVzc2FnZSA9IG1zZywgY3NzQ2xhc3MpIHtcblx0XG5cdGxldCBuZXdVSU5vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XG5cdFxuXHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XG5cdFxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcblx0XG5cdGNvbnN0IG1zZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xuXHR9XG5cdCwgNTAwMCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd01lc3NhZ2VCb2FyZDtcblxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XG5cdFxuXHRpZiAoaHRtbFRleHQpIHtcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcblx0XHRcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcblx0fVxuXHRcblx0aWYgKGNzc0NsYXNzKSB7XG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcblx0fVxuXHRcblx0aWYgKGNzc0lkKSB7XG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xuXHR9XG5cdFxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZywgY3NzQ2xhc3MpIHtcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XG5cdFxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xuXHRcblx0cmV0dXJuIG5ld1VJTm9kZTtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZURPTU5vZGUsXG5cdFx0cHJpbnRNc2csXG59O1xuXG5cbiIsIi8qXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFxuICAgICAgICBcImF1dGhvclwiOiBcIlwiLCBcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXG4gICAgICAgIFwibnVtUGFnZXNcIjogMCwgXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwiXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxuICAgIH0sXG4qL1xuXG5leHBvcnQgY29uc3QgbGlicmFyeURhdGFBcnIgPSBbXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEhvYmJpdFwiLFxuICAgICAgICBcImF1dGhvclwiOiBcIkouUi5SLiBUb2xraWVuXCIsXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxuICAgICAgICBcImVkaXRpb25cIjogMSxcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxuICAgICAgICBcIm51bVBhZ2VzXCI6IDI5NSwgXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwiYWxyZWFkeSByZWFkXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmdcIiwgXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxuICAgICAgICBcImVkaXRpb25cIjogMSxcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR3byBUb3dlcnNcIiwgXG4gICAgICAgIFwiYXV0aG9yXCI6IFwiSi5SLlIuIFRvbGtpZW5cIiwgXG4gICAgICAgIFwiY29hdXRob3JzXCI6IFtdLFxuICAgICAgICBcIm51bVZvbHVtZXNcIjogMSxcbiAgICAgICAgXCJwdWJsaXNoZXJcIjogXCJGYW50YXN0aWMgQm9va3NoZWxmXCIsXG4gICAgICAgIFwiYm9va1R5cGVcIjogXCJoYXJkIGNvdmVyXCIsXG4gICAgICAgIFwiYm9va0NhdGVnb3J5XCI6IFwiZmljdGlvblwiLFxuICAgICAgICBcImVkaXRpb25cIjogMSxcbiAgICAgICAgXCJyZWxlYXNlWWVhclwiOiBcIlwiLFxuICAgICAgICBcIm51bVBhZ2VzXCI6IDM5NSwgXG4gICAgICAgIFwiYm9va1N0YXRlXCI6IFwibm90IHJlYWQgeWV0XCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIlwiLFxuICAgICAgICBcImxhc3RDaGFuZ2VcIjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFJldHVybiBvZiB0aGUgS2luZ1wiLCBcbiAgICAgICAgXCJhdXRob3JcIjogXCJKLlIuUi4gVG9sa2llblwiLCBcbiAgICAgICAgXCJjb2F1dGhvcnNcIjogW10sXG4gICAgICAgIFwibnVtVm9sdW1lc1wiOiAxLFxuICAgICAgICBcInB1Ymxpc2hlclwiOiBcIkZhbnRhc3RpYyBCb29rc2hlbGZcIixcbiAgICAgICAgXCJib29rVHlwZVwiOiBcImhhcmQgY292ZXJcIixcbiAgICAgICAgXCJib29rQ2F0ZWdvcnlcIjogXCJmaWN0aW9uXCIsXG4gICAgICAgIFwiZWRpdGlvblwiOiAxLFxuICAgICAgICBcInJlbGVhc2VZZWFyXCI6IFwiXCIsXG4gICAgICAgIFwibnVtUGFnZXNcIjogMzk1LCBcbiAgICAgICAgXCJib29rU3RhdGVcIjogXCJub3QgcmVhZCB5ZXRcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiXCIsXG4gICAgICAgIFwibGFzdENoYW5nZVwiOiBcIlwiXG4gICAgfVxuXTtcblxuXG5cbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xuXHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xuXHR0aGlzLm51bVZvbHVtZXMgPSAxO1xuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XG5cdHRoaXMuYm9va0NhdGVnb3J5ID0gJ2ZpY3Rpb24nO1xuXHR0aGlzLmVkaXRpb24gPSAxO1xuXHR0aGlzLnJlbGVhc2VZZWFyID0gbmV3IERhdGUoKTtcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xuXHR0aGlzLmJvb2tTdGF0ZSA9IGJvb2tTdGF0ZTtcblx0dGhpcy5kYXRlID0gbmV3IERhdGUoKVxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xuXHRcblx0dGhpcy5ib29rRGVzYyA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgcGVsbGVudGVzcXVlLCBkb2xvciBhYyBzdXNjaXBpdCB2b2x1dHBhdCwgdXJuYSBvZGlvIHN1c2NpcGl0IHRvcnRvciwgdXQgY29uZGltZW50dW0gbWV0dXMgbnVsbGEgc29kYWxlcyBuaXNsLiBOdWxsYW0gcG9ydHRpdG9yIGZpbmlidXMgbWV0dXMgdXQgZmF1Y2lidXMuYDtcbn0gXG5cbkJvb2sucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpIHtcblx0Y29uc3Qgc2hvcnREZXNjID0gYFRoZSBib29rIFwiJHt0aGlzLnRpdGxlfVwiIGJ5ICR7dGhpcy5hdXRob3J9IGhhcyAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCBpbiAke3RoaXMubnVtVm9sdW1lc30gdm9sdW1lKHMpLiBJdCBpcyBhICR7dGhpcy5ib29rQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX0gcHVibGljYXRpb24gYnkgJHt0aGlzLnB1Ymxpc2hlcn0gRWRpdG9ycywgcmVsZWFzZWQgaW4gXCIke3RoaXMuYm9va1R5cGV9XCIgZm9ybWF0LCBpbiAke3RoaXMucmVsZWFzZVllYXIuZ2V0RnVsbFllYXIoKX0gLSBcIiR7dGhpcy5ib29rU3RhdGUudG9VcHBlckNhc2UoKX1cIiA6OjogJHt0aGlzLmJvb2tEZXNjfVxuXHRgO1xuXHRcdFx0XG5cdHJldHVybiBzaG9ydERlc2M7XG59XG5cbkJvb2sucHJvdG90eXBlLmRlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLmF1dGhvcn0gJ3MgJHt0aGlzLnRpdGxlfSBpcyBhIGJvb2sgYWJvdXQ6ICR7dGhpcy5ib29rRGVzY31gO1xuXHRcblx0cmV0dXJuIGJpZ0Rlc2M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG4iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2suanMnO1xuXG5mdW5jdGlvbiBMaWJyYXJ5KHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubGlicmFyeSA9IFtdO1xufVxuXG5cbkxpYnJhcnkucHJvdG90eXBlLmFkZEJvb2sgPSBmdW5jdGlvbihib29rKSB7XG4gICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5ib29rU3RhdGUpO1xuICAgIFxuICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xufVxuXG5MaWJyYXJ5LnByb3RvdHlwZS5hZGRCb29rTGlzdCA9IGZ1bmN0aW9uKGJvb2tzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9va3MpKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYm9va3MpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5ld0Jvb2sgPSBuZXcgQm9vayhib29rc1tpXS50aXRsZSwgYm9va3NbaV0uYXV0aG9yLCBib29rc1tpXS5udW1QYWdlcywgYm9va3NbaV0uYm9va1N0YXRlKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Qm9vayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGlicmFyeS5wdXNoKG5ld0Jvb2spO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4qIFxuKi9cbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4vbW9kZWwvTGlicmFyeS5qcyc7XG5cbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcbmltcG9ydCBzaG93TWVzc2FnZUJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xuaW1wb3J0IHNob3dCb29rQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tEZXNjLmpzJztcblxuLy8gYm9vayBkYXRhXG5pbXBvcnQgeyBsaWJyYXJ5RGF0YUFyciB9IGZyb20gJy4vZGF0YS9saWJyYXJ5LWRhdGEtYXJyYXkuanMnO1xuXG4vLyBVSSBub2Rlc1xuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2snKTtcbmNvbnN0IGJvb2tzaGVsZkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stZGVzYycpO1xuXG5cbmNvbnN0IG15Qm9va3NoZWxmID0gbmV3IExpYnJhcnkoJ0phdmFTY3JpcHQgQm9va3NoZWxmJyk7XG5teUJvb2tzaGVsZi5hZGRCb29rTGlzdChsaWJyYXJ5RGF0YUFycik7XG5cbmNoZWNrTGlicmFyeSgpO1xuXG5cblxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygndGVzdCBhYm91dCBzZWN0aW9uJyk7XG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XG5cdFxuXHRzaG93TWVzc2FnZUJvYXJkKCdoMycsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLW1zZycpO1xufSk7XG5cblxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Ly8gRm9ybSBub2Rlc1xuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcblx0Y29uc3Qgbm9kZVBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bS1wYWdlcycpO1xuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xuXHRcblx0Y29uc29sZS5sb2coJ2lucHV0IGNoZWNrZWQgdmFsdWU6ICcsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcblx0XG4gICAgbGV0IGNhc2hlZExpYnJhcnlMZW5ndGggPSBteUJvb2tzaGVsZi5saWJyYXJ5Lmxlbmd0aDtcbiAgICBcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXG4gICAgXG4gICAgbGV0IGJvb2tCb2FyZE1zZztcbiAgICBpZiAoY2FzaGVkTGlicmFyeUxlbmd0aCAhPT0gbXlCb29rc2hlbGYubGlicmFyeS5sZW5ndGgpIHtcbiAgICAgICAgYm9va0JvYXJkTXNnID0gYFlvdXIgYm9vayBcIiR7bm9kZVRpdGxlLnZhbHVlfVwiIHdhcyBhZGRlZCB0byB0aGUgSlMtTElCUkFSWSFgO1xuICAgICAgICBcbiAgICAgICAgbXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSAhPT0gJ1lvdXIgQm9vayBoZXJlIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb2tCb2FyZE1zZyA9ICdDbGljayBvbiB0aGUgYm9va3MgdG8gZ2V0IHRoZWlyIGRlc2NyaXB0aW9ucyEnO1xuICAgIH1cbiAgIFxuICAgIFxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcblx0XG4gICAgXG4gICAgXG5cdC8vIFJlbmRlciBsaWJyYXJ5XG5cdHNob3dCb29rbGlzdChteUJvb2tzaGVsZi5saWJyYXJ5KTtcblx0XG5cdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0Z2V0Qm9va0Rlc2MoKTtcblx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdHJlbW92ZUJvb2tzKCk7XG4gICAgXG4gICAgXG4gICAgY29uc29sZS5sb2cobXlCb29rc2hlbGYpO1xuICAgIFxuICAgIC8vIFNob3cgYm9va3NoZWxmQm9hcmRcbiAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XG59KTsgXG5cblxuZnVuY3Rpb24gZ2V0Qm9va0Rlc2MoKSB7XG4gICAgY29uc3QgZGVzY0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va2xpc3QtcGFydGl0aW9uX19ib29rZGVzYy1idG4nKTtcblxuICAgIGRlc2NCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBidG5JZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidG5JZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBib29rID0gbXlCb29rc2hlbGYubGlicmFyeS5maWx0ZXIoKGJvb2ssIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHggPT09IGJ0bklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBbHRlcm5hdGl2ZSBib29rIG1ldGhvZCBkZXRhaWxzXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGJvb2tbMF0uZGVzY3JpcHRpb24oKTtcblxuICAgICAgICAgICAgc2hvd0Jvb2tCb2FyZCgnaDQnLCBib29rWzBdLmluZm8oKSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xuXHRcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XG5cdFx0XHRcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcblx0XG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdFxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVuZGVyIEJvb2tsaXN0XG5cdFx0XHRzaG93Qm9va2xpc3QobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdFx0XHRcblx0XHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0XHRcdGdldEJvb2tEZXNjKCk7XG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRcdHJlbW92ZUJvb2tzKCk7XG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcblx0XHR9KTtcblx0fSk7XHRcbn0gIFxuXG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XG5cdFx0aWYgKCFudW1QYWdlcykge1xuXHRcdFx0bnVtUGFnZXMgPSAwO1xuXHRcdH1cblx0XHRcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va1N0YXRlKTtcblx0XHRpZiAoYm9va1N0YXRlKSB7XG5cdFx0XHRib29rU3RhdGUgPSAnYWxyZWFkeSByZWFkJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9va1N0YXRlID0gJ25vdCByZWFkIHlldCc7XG5cdFx0fVxuXHRcdFxuICAgICAgICBjb25zdCBuZXdCb29rID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBhdXRob3IsXG4gICAgICAgICAgICBudW1QYWdlcyxcbiAgICAgICAgICAgIGJvb2tTdGF0ZVxuICAgICAgICB9O1xuXHRcdFxuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2sobmV3Qm9vayk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2cobXlCb29rc2hlbGYubGlicmFyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xuXHRcdFxuXHRcdGxldCBtZXNzYWdlID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XG5cdFx0XG5cdFx0c2hvd01lc3NhZ2VCb2FyZCgnaDQnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XG5cdH0gIFxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcblx0bXlCb29rc2hlbGYubGlicmFyeSA9IG15Qm9va3NoZWxmLmxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcblx0XHRcdHJldHVybiBib29rO1xuXHRcdH1cblx0fSk7XG5cdFx0XG5cdGNvbnNvbGUubG9nKG15Qm9va3NoZWxmLmxpYnJhcnkpO1xufVxuXG5cbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcblx0bXlCb29rc2hlbGYubGlicmFyeS5tYXAoKGJvb2ssIGlkeCkgPT4ge1xuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xuXHRcdFx0Ym9vay5ib29rU3RhdGUgPSBub3RlO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcblx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNzc1RvUmVtb3ZlKTtcblx0bm9kZS5jbGFzc0xpc3QuYWRkKGNzc1RvQWRkKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tMaWJyYXJ5KCkge1xuXHRsZXQgYm9va0JvYXJkTXNnID0gJ0NsaWNrIG9uIHRoZSBib29rcyB0byBnZXQgdGhlaXIgZGVzY3JpcHRpb25zISc7XG4gICAgXG4gICAgaWYgKG15Qm9va3NoZWxmLmxpYnJhcnkubGVuZ3RoID4gMCkge1xuXHRcdG15Qm9va3NoZWxmLmxpYnJhcnkgPSBteUJvb2tzaGVsZi5saWJyYXJ5LmZpbHRlcihib29rID0+IGJvb2sudGl0bGUgIT09ICdZb3VyIEJvb2sgaGVyZSEnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbmRlciBsaWJyYXJ5XG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xuXHRcdFxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0XHRnZXRCb29rRGVzYygpO1xuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdHJlbW92ZUJvb2tzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaG93IGJvb2tzaGVsZkJvYXJkXG4gICAgICAgIHNob3dCb29rQm9hcmQoJ2g0JywgYm9va0JvYXJkTXNnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib2FyZC10ZXh0MicsIG15Qm9va3NoZWxmLCBteUJvb2tzaGVsZik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgZGVmYXVsdEJvb2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1lvdXIgQm9vayBoZXJlIScsIFxuICAgICAgICAgICAgYXV0aG9yOiAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsIFxuICAgICAgICAgICAgbnVtUGFnZXM6ICdBbGwgdGhhdCB5b3UgbmVlZDogJywgXG4gICAgICAgICAgICBib29rU3RhdGU6ICdub3QgcmVhZCB5ZXQnLFxuICAgICAgICB9O1xuXHRcdG15Qm9va3NoZWxmLmFkZEJvb2soZGVmYXVsdEJvb2spO1xuXHRcdFxuICAgICAgICBjb25zb2xlLmxvZyhteUJvb2tzaGVsZik7XG4gICAgICAgIFxuXHRcdC8vIFJlbmRlciBsaWJyYXJ5XG5cdFx0c2hvd0Jvb2tsaXN0KG15Qm9va3NoZWxmLmxpYnJhcnkpO1xuXHRcdFxuXHRcdC8vIFBhc3MgRXZlbnRsaXN0ZW5lcnNcblx0XHRyZW1vdmVCb29rcygpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hvdyBib29rc2hlbGZCb2FyZFxuICAgICAgICBzaG93Qm9va0JvYXJkKCdoNCcsIGJvb2tCb2FyZE1zZywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9hcmQtdGV4dDInLCBteUJvb2tzaGVsZik7XG5cdH1cbn1cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsInByaW50TXNnIiwiTGlicmFyeSIsImJvb2tsaXN0UGFydGl0aW9uRGVzYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRNc2ciLCJzaG93Qm9va0JvYXJkIiwibm9kZSIsIm1lc3NhZ2UiLCJjc3NDbGFzcyIsImxpYiIsImlubmVySFRNTCIsIm5ld0xpYnJhcnlOb2RlIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZENoaWxkIiwibmV3TGlicmFyeU9ybmFtZW50IiwibmV3TGlicmFyeU5vZGUyIiwibGlicmFyeSIsImxlbmd0aCIsIm5ld0Jvb2tOb2RlIiwiYm9va1NoZWxmIiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwic3BhbkRlc2NCdG4iLCJoNSIsImF1dGhvciIsInBhcmExIiwibnVtUGFnZXMiLCJzcGFuIiwiYm9va1N0YXRlIiwicmVtb3ZlQnRuIiwic2V0QXR0cmlidXRlIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJtc2ciLCJzaG93TWVzc2FnZUJvYXJkIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsaWJyYXJ5RGF0YUFyciIsIkJvb2siLCJjb2F1dGhvcnMiLCJudW1Wb2x1bWVzIiwicHVibGlzaGVyIiwiYm9va1R5cGUiLCJib29rQ2F0ZWdvcnkiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJib29rRGVzYyIsInByb3RvdHlwZSIsImluZm8iLCJzaG9ydERlc2MiLCJnZXRGdWxsWWVhciIsImRlc2NyaXB0aW9uIiwiYmlnRGVzYyIsImFkZEJvb2siLCJuZXdCb29rIiwicHVzaCIsImFkZEJvb2tMaXN0IiwiYm9va3MiLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwiYm9va3NoZWxmQm9hcmQiLCJteUJvb2tzaGVsZiIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY2hlY2tlZCIsImNhc2hlZExpYnJhcnlMZW5ndGgiLCJhZGRCb29rVG9MaWJyYXJ5IiwiYm9va0JvYXJkTXNnIiwiZmlsdGVyIiwiY2xlYXJGb3JtU2hlZXQiLCJnZXRCb29rRGVzYyIsImNoYW5nZUJvb2tOb3RlcyIsInJlbW92ZUJvb2tzIiwiZGVzY0J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImUiLCJidG5JZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImJvb2tOb3RlcyIsIm5vdGUiLCJub3RlSWQiLCJ0ZXh0Q29udGVudCIsImNoZWNrQm9va05vdGUiLCJyZW1vdmVCdG5zIiwiYnRuSW5kZXgiLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rSW5kZXgiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwiZGVmYXVsdEJvb2siXSwic291cmNlUm9vdCI6IiJ9