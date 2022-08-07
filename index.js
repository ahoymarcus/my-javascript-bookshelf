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
  this.publisher = 'Fantastic Bookshelf';
  this.bookType = 'hard corver';
  this.bookCategory = 'fiction';
  this.bookDesc = 'This is the greatest book of all time!!!';
  this.edition = 1;
  this.releaseYear = new Date();
  this.numPages = numPages;
  this.bookState = bookState;
  this.date = new Date();
  this.lastChange = new Date();
}

Book.prototype.shortDesc = function () {
  var shortDesc = "".concat(this.title, " by ").concat(this.author, ", ").concat(this.numPages, " pages, ").concat(this.bookState);
  return shortDesc;
};

Book.prototype.bigDesc = function () {
  var bigDesc = "".concat(this.title, " by ").concat(this.author, " has ").concat(this.numVolumes, " volumes. It's about ").concat(this.bookCategory, " and was published in the format ").concat(this.bookType, " by ").concat(this.publisher, ", in the year ").concat(this.releaseYear, ", ").concat(this.bookState, ". ").concat(this.bookDesc);
  return bigDesc;
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
    var message = 'Please, fill all the required fields: TITLE and AUTHOR';
    (0,_components_MessageBoard_js__WEBPACK_IMPORTED_MODULE_2__["default"])('h4', message, 'message-board-validation');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQSxHQUFHLEtBQUtxRixNQUFaLEVBQW9CO01BQ25CdEYsSUFBSSxDQUFDYyxTQUFMLEdBQWlCc0UsSUFBakI7SUFDQTtFQUNELENBSkQ7RUFNQTVELElBQUksQ0FBQ2tFLFdBQUwsR0FBbUJOLElBQW5CO0VBQ0E1RCxJQUFJLENBQUNnQixTQUFMLENBQWU2RCxNQUFmLENBQXNCRixXQUF0QjtFQUNBM0UsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CMkQsUUFBbkI7QUFDQTs7QUFFRCxTQUFTOUIsWUFBVCxHQUF3QjtFQUN2QixJQUFJTixTQUFTLENBQUNsQixNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0lBQ3pCbkQsbUVBQVksQ0FBQ3FFLFNBQUQsQ0FBWjtJQUNBZSxlQUFlO0lBQ2ZDLFdBQVc7RUFDWCxDQUpELE1BSU87SUFDTixJQUFNc0IsS0FBSyxHQUFHLElBQUl2RCxzREFBSixDQUFTLGlCQUFULEVBQTRCLDJCQUE1QixFQUF5RCxxQkFBekQsRUFBZ0YsY0FBaEYsQ0FBZDtJQUNBaUIsU0FBUyxDQUFDSyxJQUFWLENBQWVpQyxLQUFmO0lBRUEzRyxtRUFBWSxDQUFDcUUsU0FBRCxDQUFaO0lBQ0FlLGVBQWU7SUFDZkMsV0FBVztFQUNYO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG4vLyBVSSBub2Rlc1xyXG5jb25zdCBib29rU2hlbGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2xpc3QnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XHJcblx0Ym9va1NoZWxmLmlubmVySFRNTCA9IG51bGw7XHJcblx0XHJcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgZWxlbWVudHMgYW5kIGl0cyBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBsaSA9IGNyZWF0ZURPTU5vZGUoJ2xpJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2snKTtcdFxyXG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XHJcblx0XHRjb25zdCBkaXYgPSBjcmVhdGVET01Ob2RlKCdkaXYnLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1jb250ZW50Jyk7XHJcblx0XHRjb25zdCBoMyA9IGNyZWF0ZURPTU5vZGUoJ2gzJywgYm9vay50aXRsZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fdGl0bGUnICk7XHJcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xyXG5cdFx0Y29uc3QgcGFyYTEgPSBjcmVhdGVET01Ob2RlKCdwJywgYCR7Ym9vay5udW1QYWdlc30gcGFnZXNgLCAnYm9va2xpc3QtcGFydGl0aW9uX19wYWdlcycpO1xyXG5cdFx0XHJcblx0XHRsZXQgc3BhbjtcclxuXHRcdGlmIChib29rLmJvb2tTdGF0ZSA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW4nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2stbm90ZScpO1x0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbScsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2stbm90ZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZURPTU5vZGUoJ2J1dHRvbicsICdYJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicsICcnKTtcclxuXHRcdFxyXG5cdFx0Ly8gU2V0IGdsb2JhbCBkYXRhIGF0dHJpYnV0ZVxyXG5cdFx0cmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XHJcblx0XHRcclxuXHRcdC8vIEFzc2VtYmxlIHRoZSBjb21wb25lbnRcdFx0XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGg1KTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChwYXJhMSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdFxyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xyXG5cdFx0XHJcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gbGk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Qm9va2xpc3Q7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlLCBwcmludE1zZyB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xyXG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcclxuXHJcbmxldCBtc2cgPSAnV2VsY29tZSwgZmVsbCBmcmVlIHRvIHBvc3QgeW91ciBib29rcyBoZXJlISA6LSknO1xyXG5cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2VCb2FyZChub2RlLCBtZXNzYWdlID0gbXNnLCBjc3NDbGFzcykge1xyXG5cdFxyXG5cdGxldCBuZXdVSU5vZGUgPSBwcmludE1zZyhub2RlLCBtZXNzYWdlLCBjc3NDbGFzcyk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcclxuXHRcclxuXHRtZXNzYWdlQm9hcmQuYXBwZW5kQ2hpbGQobmV3VUlOb2RlKTtcclxuXHRcclxuXHRjb25zdCBtc2dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRtZXNzYWdlQm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XHJcblx0fVxyXG5cdCwgNTAwMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TWVzc2FnZUJvYXJkO1xyXG5cclxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xyXG5cdGxldCBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuXHRcclxuXHRpZiAoaHRtbFRleHQpIHtcclxuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbFRleHQpO1xyXG5cdFx0XHJcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHR9XHJcblx0XHJcblx0aWYgKGNzc0NsYXNzKSB7XHJcblx0XHRuZXdOb2RlLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzSWQpIHtcclxuXHRcdG5ld05vZGUuaWQgPSBjc3NJZDtcclxuXHR9XHJcblx0XHJcblx0Ly9jb25zb2xlLmxvZyhjc3NQcm9wcyk7XHJcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BzLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIG5ld05vZGU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcmludE1zZyhub2RlLCBtc2csIGNzc0NsYXNzKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXHJcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdHJldHVybiBuZXdVSU5vZGU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlRE9NTm9kZSxcclxuXHRcdHByaW50TXNnLFxyXG59O1xyXG5cclxuXHJcbiIsIi8qXHJcbiAqIE90aGVyIGJvb2sncyBwcm9wZXJ0aWVzOlxyXG4gKiBjb0F1dGhvcnNcclxuICogdm9sdW1lc1xyXG4gKiBwdWJsaXNoZXJcclxuICogZWRpdGlvblxyXG4gKiByZWxlYXNlWWVhclxyXG4gKiBhcmVhXHJcbiAqIHB1YmxpY2F0aW9uVHlwZVxyXG4gKiBkYXRlXHJcbiAqIGxhc3RDaGFuZ2VcclxuICogXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xyXG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuXHR0aGlzLmNvYXV0aG9ycyA9IFtdO1xyXG5cdHRoaXMubnVtVm9sdW1lcyA9IDE7XHJcblx0dGhpcy5wdWJsaXNoZXIgPSAnRmFudGFzdGljIEJvb2tzaGVsZic7XHJcblx0dGhpcy5ib29rVHlwZSA9ICdoYXJkIGNvcnZlcic7XHJcblx0dGhpcy5ib29rQ2F0ZWdvcnkgPSAnZmljdGlvbic7XHJcblx0dGhpcy5ib29rRGVzYyA9ICdUaGlzIGlzIHRoZSBncmVhdGVzdCBib29rIG9mIGFsbCB0aW1lISEhJztcclxuXHR0aGlzLmVkaXRpb24gPSAxO1xyXG5cdHRoaXMucmVsZWFzZVllYXIgPSBuZXcgRGF0ZSgpO1xyXG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcclxuXHR0aGlzLmJvb2tTdGF0ZSA9IGJvb2tTdGF0ZTtcclxuXHR0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpXHJcblx0dGhpcy5sYXN0Q2hhbmdlID0gbmV3IERhdGUoKTtcclxufSBcclxuXHJcbkJvb2sucHJvdG90eXBlLnNob3J0RGVzYyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IHNob3J0RGVzYyA9IGAke3RoaXMudGl0bGV9IGJ5ICR7dGhpcy5hdXRob3J9LCAke3RoaXMubnVtUGFnZXN9IHBhZ2VzLCAke3RoaXMuYm9va1N0YXRlfWA7XHJcblx0XHRcdFxyXG5cdHJldHVybiBzaG9ydERlc2M7XHJcbn1cclxuXHJcbkJvb2sucHJvdG90eXBlLmJpZ0Rlc2MgPSBmdW5jdGlvbigpIHtcclxuXHRjb25zdCBiaWdEZXNjID0gYCR7dGhpcy50aXRsZX0gYnkgJHt0aGlzLmF1dGhvcn0gaGFzICR7dGhpcy5udW1Wb2x1bWVzfSB2b2x1bWVzLiBJdCdzIGFib3V0ICR7dGhpcy5ib29rQ2F0ZWdvcnl9IGFuZCB3YXMgcHVibGlzaGVkIGluIHRoZSBmb3JtYXQgJHt0aGlzLmJvb2tUeXBlfSBieSAke3RoaXMucHVibGlzaGVyfSwgaW4gdGhlIHllYXIgJHt0aGlzLnJlbGVhc2VZZWFyfSwgJHt0aGlzLmJvb2tTdGF0ZX0uICR7dGhpcy5ib29rRGVzY31gO1xyXG5cdFxyXG5cdHJldHVybiBiaWdEZXNjO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXHJcbiogXHJcbiovXHJcbmltcG9ydCBCb29rIGZyb20gJy4vbW9kZWwvQm9vay5qcyc7XHJcbmltcG9ydCBzaG93Qm9va2xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tsaXN0LmpzJztcclxuaW1wb3J0IHNob3dNZXNzYWdlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vaycpO1xyXG5cclxuXHJcbmxldCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XHJcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcclxuY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcblxyXG5teUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xyXG5cdGxldCBtZXNzYWdlID0gJ1dlbGNvbWUsIHRvIHRoZSBKUy1MaWJyYXJ5IGFuZCBmZWxsIGZyZWUgc2hhcmUgeW91ciBib29rcyBoZXJlISc7XHJcblx0XHJcblx0c2hvd01lc3NhZ2VCb2FyZCgnaDMnLCBtZXNzYWdlLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcclxufSk7XHJcblxyXG5cclxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHQvLyBGb3JtIG5vZGVzXHJcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblx0Y29uc3Qgbm9kZUF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XHJcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcclxuXHRcclxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG5cdGFkZEJvb2tUb0xpYnJhcnkobm9kZVRpdGxlLnZhbHVlLCBub2RlQXV0aG9yLnZhbHVlLCBub2RlUGFnZXMudmFsdWUsIG5vZGVCb29rTm90ZS5jaGVja2VkKTtcclxuXHRcclxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcclxuXHRcclxuXHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRyZW1vdmVCb29rcygpO1xyXG59KTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQm9va05vdGVzKCkge1xyXG5cdGNvbnN0IGJvb2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNib29rLW5vdGUnKTtcclxuXHRcclxuXHRib29rTm90ZXMuZm9yRWFjaChub3RlID0+IHtcclxuXHRcdG5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XHJcblx0XHRcdGxldCBub3RlSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhub3RlSWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnYWxyZWFkeSByZWFkJykge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ25vdCByZWFkIHlldCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdhbHJlYWR5IHJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9va3MoKSB7XHJcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcclxuXHRcclxuXHRyZW1vdmVCdG5zLmZvckVhY2goYnRuID0+IHtcclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGxldCBidG5JbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZW1vdmVCb29rZnJvbUxpYnJhcnkoYnRuSW5kZXgpO1xyXG5cdFx0XHRcclxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XHJcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0XHRyZW1vdmVCb29rcygpO1xyXG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1x0XHJcbn0gIFxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCkge1xyXG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcclxuXHRcdGlmICghbnVtUGFnZXMpIHtcclxuXHRcdFx0bnVtUGFnZXMgPSAwO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va3NSZWFkKTtcclxuXHRcdGlmIChib29rc1JlYWQpIHtcclxuXHRcdFx0Ym9va3NSZWFkID0gJ2FscmVhZHkgcmVhZCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0JztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xyXG5cdFx0XHJcblx0XHRteUxpYnJhcnkucHVzaChib29rKTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cobXlMaWJyYXJ5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xyXG5cdFx0XHJcblx0XHRsZXQgbWVzc2FnZSA9ICdQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1InO1xyXG5cdFx0XHJcblx0XHRzaG93TWVzc2FnZUJvYXJkKCdoNCcsIG1lc3NhZ2UsICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcclxuXHR9ICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcclxuXHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggIT09IGJvb2tJbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gYm9vaztcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdFxyXG5cdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XHJcbn1cclxuXHJcblxyXG4vKiBBVVhJTElBUlkgRlVOQ1RJT05TICovXHJcbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcclxuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcclxuXHRub2RlQXV0aG9yLnZhbHVlID0gJyc7XHJcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XHJcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xyXG5cdG15TGlicmFyeS5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XHJcblx0XHRcdGJvb2suYm9va1N0YXRlID0gbm90ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRub2RlLnRleHRDb250ZW50ID0gbm90ZTtcclxuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xyXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcclxuXHRpZiAobXlMaWJyYXJ5Lmxlbmd0aCA+IDApIHtcclxuXHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xyXG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRyZW1vdmVCb29rcygpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBzaWRlQiA9IG5ldyBCb29rKCdZb3VyIEJvb2sgaGVyZSEnLCAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsICdBbGwgdGhhdCB5b3UgbmVlZDogJywgJ25vdCByZWFkIHlldCcpO1xyXG5cdFx0bXlMaWJyYXJ5LnB1c2goc2lkZUIpO1xyXG5cdFx0XHJcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NTm9kZSIsImJvb2tTaGVsZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93Qm9va2xpc3QiLCJsaXN0IiwiaW5uZXJIVE1MIiwibmV3Tm9kZSIsIm1hcCIsImJvb2siLCJpZHgiLCJsaSIsImltZyIsInByb3AiLCJ2YWx1ZSIsImRpdiIsImgzIiwidGl0bGUiLCJoNSIsImF1dGhvciIsInBhcmExIiwibnVtUGFnZXMiLCJzcGFuIiwiYm9va1N0YXRlIiwicmVtb3ZlQnRuIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJwcmludE1zZyIsIm1lc3NhZ2VCb2FyZCIsInRoaXJkV2FsbE9ybmFtZW50IiwicXVlcnlTZWxlY3RvciIsIm1zZyIsInNob3dNZXNzYWdlQm9hcmQiLCJub2RlIiwibWVzc2FnZSIsImNzc0NsYXNzIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJCb29rIiwiY29hdXRob3JzIiwibnVtVm9sdW1lcyIsInB1Ymxpc2hlciIsImJvb2tUeXBlIiwiYm9va0NhdGVnb3J5IiwiYm9va0Rlc2MiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJwcm90b3R5cGUiLCJzaG9ydERlc2MiLCJiaWdEZXNjIiwiYWJvdXRTZWN0aW9uIiwiYWRkQm9va0J0biIsIm15TGlicmFyeSIsInRoZUhvYmJpdCIsInRoZUZlbGxvd3NoaXAiLCJ0aGVUd29Ub3dlcnMiLCJ0aGVSZXR1cm5PZlRoZUtpbmciLCJwdXNoIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGVUaXRsZSIsIm5vZGVBdXRob3IiLCJub2RlUGFnZXMiLCJub2RlQm9va05vdGUiLCJjaGVja2VkIiwiYWRkQm9va1RvTGlicmFyeSIsImNsZWFyRm9ybVNoZWV0IiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJib29rTm90ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vdGUiLCJlIiwibm90ZUlkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0biIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va3NSZWFkIiwiYm9va0luZGV4IiwiZmlsdGVyIiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsInNpZGVCIl0sInNvdXJjZVJvb3QiOiIifQ==