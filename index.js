/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    var h5 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('h5', book.author, 'booklist-partition__author');
    var para1 = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('p', "".concat(book.numPages, " pages"), 'booklist-partition__pages');
    var span;

    if (book.bookState === 'already read') {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('span', book.bookState, 'booklist-partition__book-read', 'book-note');
    } else {
      span = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('spam', book.bookState, 'booklist-partition__book-not-read', 'book-note');
    }

    var removeBtn = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)('button', 'X', 'booklist-partition__remove-btn', ''); // Set global data attribute

    removeBtn.setAttribute('data-id', idx);
    span.setAttribute('data-id', idx); // Assemble the component		

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

function printMsg(node) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Welcome, fell free to post your books here! :-)';
  var cssClass = arguments.length > 2 ? arguments[2] : undefined;
  var message = msg;
  var newUINode = (0,_auxUIFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createDOMNode)(node, message, cssClass);
  messageBoard.style.display = 'block';
  console.log(thirdWallOrnament);
  messageBoard.appendChild(newUINode);
  var msgTimeout = setTimeout(function () {
    messageBoard.style.display = 'none';
    messageBoard.innerHTML = null;
  }, 5000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printMsg);

/***/ }),

/***/ "./src/components/auxUIFunctions.js":
/*!******************************************!*\
  !*** ./src/components/auxUIFunctions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMNode": () => (/* binding */ createDOMNode)
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
/*
 * Other book's properties:
 * coAuthors
 * volumes
 * publisher
 * edition
 * releaseYear
 * area
 * publicationType
 * date
 * lastChange
 * 
 */
function Book(title, author, numPages, bookState) {
  this.title = title;
  this.author = author;
  this.coauthors = [];
  this.numVolumes = 1;
  this.publisher = '';
  this.bookType = 'hard corver';
  this.bookCategory = 'fiction';
  this.bookDesc = '';
  this.edition = 1;
  this.releaseYear = new Date();
  this.numPages = numPages;
  this.bookState = bookState;
  this.date = new Date();
  this.lastChange = new Date();
}

Book.prototype.info = function () {
  var info = "".concat(this.title, " by ").concat(this.author, ", ").concat(this.numPages, " pages, ").concat(this.bookState);
  return info;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);

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
/* harmony import */ var _model_Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Book.js */ "./src/model/Book.js");
/* harmony import */ var _components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Booklist.js */ "./src/components/Booklist.js");
/* harmony import */ var _components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageBoard.js */ "./src/components/MessageBoard.js");
/*
* 
*/


 // UI nodes

var aboutSection = document.getElementById('description-partition__about');
var addBookBtn = document.getElementById('add-book');
var myLibrary = [];
var theHobbit = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
var theFellowship = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
var theTwoTowers = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
var theReturnOfTheKing = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');
myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
checkLibrary();
aboutSection.addEventListener('click', function () {
  console.log('test about sec');
  var msg = 'Welcome, to the JS-Library and fell free share your books here!';
  (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h3', msg, 'message-board-msg');
});
addBookBtn.addEventListener('click', function () {
  // Form nodes
  var nodeTitle = document.getElementById('title');
  var nodeAuthor = document.getElementById('author');
  var nodePages = document.getElementById('num-pages');
  var nodeBookNote = document.getElementById('is-read');
  console.log('input checked value: ', nodeBookNote.checked);
  addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
  clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
  (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary);
  changeBookNotes();
  removeBooks();
});

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
      removeBookfromLibrary(btnIndex);
      (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary);
      changeBookNotes();
      removeBooks();
      checkLibrary();
    });
  });
}

function addBookToLibrary(title, author, numPages, booksRead) {
  if (title && author) {
    if (!numPages) {
      numPages = 0;
    }

    console.log('input checked value: ', booksRead);

    if (booksRead) {
      booksRead = 'already read';
    } else {
      booksRead = 'not read yet';
    }

    var book = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, author, numPages, booksRead);
    myLibrary.push(book);
    console.log(myLibrary);
  } else {
    console.log("Please, fill all the required fields: TITLE and AUTHOR");
    var msg = 'Please, fill all the required fields: TITLE and AUTHOR';
    (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h4', msg, 'message-board-validation');
  }
}

function removeBookfromLibrary(bookIndex) {
  myLibrary = myLibrary.filter(function (book, idx) {
    if (idx !== bookIndex) {
      return book;
    }
  });
  console.log(myLibrary);
}
/* AUXILIARY FUNCTIONS */


function clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote) {
  nodeTitle.value = '';
  nodeAuthor.value = '';
  nodePages.value = '';
  nodeBookNote.checked = false;
}

function checkBookNote(node, noteId, note, cssToRemove, cssToAdd) {
  myLibrary.map(function (book, idx) {
    if (idx === noteId) {
      book.bookState = note;
    }
  });
  node.textContent = note;
  node.classList.remove(cssToRemove);
  node.classList.add(cssToAdd);
}

function checkLibrary() {
  if (myLibrary.length > 0) {
    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary);
    changeBookNotes();
    removeBooks();
  } else {
    var sideB = new _model_Book_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Your Book here!', 'This is also for you! :-)', 'All that you need: ', 'not read yet');
    myLibrary.push(sideB);
    (0,_components_Booklist_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myLibrary);
    changeBookNotes();
    removeBooks();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsU0FBUyxDQUFDSyxJQUFWLENBQWVpQyxLQUFmO0lBRUF6RyxtRUFBWSxDQUFDbUUsU0FBRCxDQUFaO0lBQ0FlLGVBQWU7SUFDZkMsV0FBVztFQUNYO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xyXG5cdFx0Y29uc3QgcGFyYTEgPSBjcmVhdGVET01Ob2RlKCdwJywgYCR7Ym9vay5udW1QYWdlc30gcGFnZXNgLCAnYm9va2xpc3QtcGFydGl0aW9uX19wYWdlcycpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3BhbjtcclxuXHRcdGlmIChib29rLmJvb2tTdGF0ZSA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2stbm90ZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZURPTU5vZGUoJ2J1dHRvbicsICdYJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicsICcnKTtcclxuXHRcdFxyXG5cdFx0Ly8gU2V0IGdsb2JhbCBkYXRhIGF0dHJpYnV0ZVxyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGg1KTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChwYXJhMSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdFxyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xyXG5cdFx0XHJcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbGk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va2xpc3Q7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1tZXNzYWdlLWJvYXJkJyk7XHJcbmNvbnN0IHRoaXJkV2FsbE9ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stc3RhY2tfX29ybmFtZW50MycpO1xyXG5cclxuZnVuY3Rpb24gcHJpbnRNc2cobm9kZSwgbXNnID0gJ1dlbGNvbWUsIGZlbGwgZnJlZSB0byBwb3N0IHlvdXIgYm9va3MgaGVyZSEgOi0pJywgY3NzQ2xhc3MpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG1zZztcclxuXHRcclxuXHRsZXQgbmV3VUlOb2RlID0gY3JlYXRlRE9NTm9kZShcclxuXHRub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxuXHRcclxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0fVxyXG5cdCwgNTAwMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludE1zZztcclxuXHJcbiIsImZ1bmN0aW9uIGNyZWF0ZURPTU5vZGUobm9kZSA9ICdwJywgaHRtbFRleHQsIGNzc0NsYXNzLCBjc3NJZCwgY3NzUHJvcHMpIHtcclxuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcblx0XHJcblx0aWYgKGh0bWxUZXh0KSB7XHJcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcclxuXHRcdFxyXG5cdFx0bmV3Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NDbGFzcykge1xyXG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0lkKSB7XHJcblx0XHRuZXdOb2RlLmlkID0gY3NzSWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8vY29uc29sZS5sb2coY3NzUHJvcHMpO1xyXG5cdC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShjc3NQcm9wcykpO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjc3NQcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRuZXdOb2RlW2Nzc1Byb3BzW2ldLnByb3BdID0gY3NzUHJvcHNbaV0udmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXdOb2RlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZURPTU5vZGUsXHJcbn07XHJcblxyXG4iLCIvKlxyXG4gKiBPdGhlciBib29rJ3MgcHJvcGVydGllczpcclxuICogY29BdXRob3JzXHJcbiAqIHZvbHVtZXNcclxuICogcHVibGlzaGVyXHJcbiAqIGVkaXRpb25cclxuICogcmVsZWFzZVllYXJcclxuICogYXJlYVxyXG4gKiBwdWJsaWNhdGlvblR5cGVcclxuICogZGF0ZVxyXG4gKiBsYXN0Q2hhbmdlXHJcbiAqIFxyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rU3RhdGUpIHtcclxuXHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XHJcblx0dGhpcy5jb2F1dGhvcnMgPSBbXTtcclxuXHR0aGlzLm51bVZvbHVtZXMgPSAxO1xyXG5cdHRoaXMucHVibGlzaGVyID0gJyc7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5ib29rRGVzYyA9ICcnO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG59IFxyXG5cclxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGluZm8gPSBgJHt0aGlzLnRpdGxlfSBieSAke3RoaXMuYXV0aG9yfSwgJHt0aGlzLm51bVBhZ2VzfSBwYWdlcywgJHt0aGlzLmJvb2tTdGF0ZX1gO1xyXG5cdFx0XHRcclxuXHRyZXR1cm4gaW5mbztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi9cclxuaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcclxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xyXG5pbXBvcnQgcHJpbnRNc2cgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vaycpO1xyXG5cclxuXHJcbmxldCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XHJcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcclxuY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcblxyXG5teUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xyXG5cdGxldCBtc2cgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRwcmludE1zZygnaDMnLCBtc2csICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEZvcm0gbm9kZXNcclxuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblx0XHJcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xyXG5cdFxyXG5cdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHRcclxufSAgXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XHJcbiAgaWYgKHRpdGxlICYmIGF1dGhvcikge1xyXG5cdFx0aWYgKCFudW1QYWdlcykge1xyXG5cdFx0XHRudW1QYWdlcyA9IDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xyXG5cdFx0aWYgKGJvb2tzUmVhZCkge1xyXG5cdFx0XHRib29rc1JlYWQgPSAnYWxyZWFkeSByZWFkJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvb2tzUmVhZCA9ICdub3QgcmVhZCB5ZXQnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCk7XHJcblx0XHRcclxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XHJcblx0XHRcclxuXHRcdGxldCBtc2cgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0cHJpbnRNc2coJ2g0JywgbXNnLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHRcclxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XHJcblx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNzc1RvUmVtb3ZlKTtcclxuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XHJcblx0aWYgKG15TGlicmFyeS5sZW5ndGggPiAwKSB7XHJcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3Qgc2lkZUIgPSBuZXcgQm9vaygnWW91ciBCb29rIGhlcmUhJywgJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsICdub3QgcmVhZCB5ZXQnKTtcclxuXHRcdG15TGlicmFyeS5wdXNoKHNpZGVCKTtcclxuXHRcdFxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTU5vZGUiLCJib29rU2hlbGYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0Jvb2tsaXN0IiwibGlzdCIsImlubmVySFRNTCIsIm5ld05vZGUiLCJtYXAiLCJib29rIiwiaWR4IiwibGkiLCJpbWciLCJwcm9wIiwidmFsdWUiLCJkaXYiLCJoMyIsInRpdGxlIiwiaDUiLCJhdXRob3IiLCJwYXJhMSIsIm51bVBhZ2VzIiwic3BhbiIsImJvb2tTdGF0ZSIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJpbnRNc2ciLCJub2RlIiwibXNnIiwiY3NzQ2xhc3MiLCJtZXNzYWdlIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJCb29rIiwiY29hdXRob3JzIiwibnVtVm9sdW1lcyIsInB1Ymxpc2hlciIsImJvb2tUeXBlIiwiYm9va0NhdGVnb3J5IiwiYm9va0Rlc2MiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJwcm90b3R5cGUiLCJpbmZvIiwiYWJvdXRTZWN0aW9uIiwiYWRkQm9va0J0biIsIm15TGlicmFyeSIsInRoZUhvYmJpdCIsInRoZUZlbGxvd3NoaXAiLCJ0aGVUd29Ub3dlcnMiLCJ0aGVSZXR1cm5PZlRoZUtpbmciLCJwdXNoIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGVUaXRsZSIsIm5vZGVBdXRob3IiLCJub2RlUGFnZXMiLCJub2RlQm9va05vdGUiLCJjaGVja2VkIiwiYWRkQm9va1RvTGlicmFyeSIsImNsZWFyRm9ybVNoZWV0IiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJib29rTm90ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vdGUiLCJlIiwibm90ZUlkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0biIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va3NSZWFkIiwiYm9va0luZGV4IiwiZmlsdGVyIiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsInNpZGVCIl0sInNvdXJjZVJvb3QiOiIifQ==