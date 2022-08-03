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
function Book(title, author, numPages, bookState) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.bookState = bookState;
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
  var msg = 'Welcome, to this Library and fell free share your books here!';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pFcEMsU0FBUyxDQUFDcEQsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0lBQzVCLElBQUlBLEdBQUcsS0FBS3dFLE1BQVosRUFBb0I7TUFDbkJ6RSxJQUFJLENBQUNjLFNBQUwsR0FBaUJ5RCxJQUFqQjtJQUNBO0VBQ0QsQ0FKRDtFQU1BakQsSUFBSSxDQUFDdUQsV0FBTCxHQUFtQk4sSUFBbkI7RUFDQWpELElBQUksQ0FBQ2lCLFNBQUwsQ0FBZWlELE1BQWYsQ0FBc0JGLFdBQXRCO0VBQ0FoRSxJQUFJLENBQUNpQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIrQyxRQUFuQjtBQUNBOztBQUVELFNBQVM5QixZQUFULEdBQXdCO0VBQ3ZCLElBQUlOLFNBQVMsQ0FBQ04sTUFBVixHQUFtQixDQUF2QixFQUEwQjtJQUN6QmxELG1FQUFZLENBQUN3RCxTQUFELENBQVo7SUFDQWUsZUFBZTtJQUNmQyxXQUFXO0VBQ1gsQ0FKRCxNQUlPO0lBQ04sSUFBTXNCLEtBQUssR0FBRyxJQUFJM0Msc0RBQUosQ0FBUyxpQkFBVCxFQUE0QiwyQkFBNUIsRUFBeUQscUJBQXpELEVBQWdGLGNBQWhGLENBQWQ7SUFDQUssU0FBUyxDQUFDSyxJQUFWLENBQWVpQyxLQUFmO0lBRUE5RixtRUFBWSxDQUFDd0QsU0FBRCxDQUFaO0lBQ0FlLGVBQWU7SUFDZkMsV0FBVztFQUNYO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xuXHRcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xuXHRcdGNvbnN0IGxpID0gY3JlYXRlRE9NTm9kZSgnbGknLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vaycpO1x0XG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xuXHRcdGNvbnN0IGgzID0gY3JlYXRlRE9NTm9kZSgnaDMnLCBib29rLnRpdGxlLCAnYm9va2xpc3QtcGFydGl0aW9uX190aXRsZScgKTtcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcblx0XHRcblx0XHRsZXQgc3Bhbjtcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xuXHRcdFxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0XG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblx0XHRcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFxuXHRcdHJldHVybiBsaTtcblx0fSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XG5cbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKScsIGNzc0NsYXNzKSB7XG5cdGxldCBtZXNzYWdlID0gbXNnO1xuXHRcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xuXHRcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XG5cdH1cblx0LCA1MDAwKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwcmludE1zZztcblxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XG5cdFxuXHRpZiAoaHRtbFRleHQpIHtcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcblx0XHRcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcblx0fVxuXHRcblx0aWYgKGNzc0NsYXNzKSB7XG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcblx0fVxuXHRcblx0aWYgKGNzc0lkKSB7XG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xuXHR9XG5cdFxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NTm9kZSxcbn07XG5cbiIsImZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tTdGF0ZSkge1xuXHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuXHR0aGlzLm51bVBhZ2VzID0gbnVtUGFnZXM7XG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xufSBcblxuQm9vay5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCBpbmZvID0gYCR7dGhpcy50aXRsZX0gYnkgJHt0aGlzLmF1dGhvcn0sICR7dGhpcy5udW1QYWdlc30gcGFnZXMsICR7dGhpcy5ib29rU3RhdGV9YDtcblx0XHRcdFxuXHRyZXR1cm4gaW5mbztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCb29rO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuKiBcbiovXG5pbXBvcnQgQm9vayBmcm9tICcuL21vZGVsL0Jvb2suanMnO1xuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xuaW1wb3J0IHByaW50TXNnIGZyb20gJy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMnO1xuXG5cbi8vIFVJIG5vZGVzXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGFydGl0aW9uX19hYm91dCcpO1xuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vaycpO1xuXG5cbmxldCBteUxpYnJhcnkgPSBbXTtcblxuY29uc3QgdGhlSG9iYml0ID0gbmV3IEJvb2soJ1RoZSBIb2JiaXQnLCAnSi5SLlIuIFRvbGtpZW4nLCAyOTUsICdhbHJlYWR5IHJlYWQnKTtcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcbmNvbnN0IHRoZVR3b1Rvd2VycyA9IG5ldyBCb29rKCdUaGUgVHdvIFRvd2VycycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuY29uc3QgdGhlUmV0dXJuT2ZUaGVLaW5nID0gbmV3IEJvb2soJ1RoZSBSZXR1cm4gb2YgdGhlIEtpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcblxubXlMaWJyYXJ5LnB1c2godGhlSG9iYml0LCB0aGVGZWxsb3dzaGlwLCB0aGVUd29Ub3dlcnMsIHRoZVJldHVybk9mVGhlS2luZyk7XG5jaGVja0xpYnJhcnkoKTtcblxuXG5hYm91dFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xuXHRsZXQgbXNnID0gJ1dlbGNvbWUsIHRvIHRoaXMgTGlicmFyeSBhbmQgZmVsbCBmcmVlIHNoYXJlIHlvdXIgYm9va3MgaGVyZSEnO1xuXHRcblx0cHJpbnRNc2coJ2gzJywgbXNnLCAnbWVzc2FnZS1ib2FyZC1tc2cnKTtcbn0pO1xuXG5cbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdC8vIEZvcm0gbm9kZXNcblx0Y29uc3Qgbm9kZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdGNvbnN0IG5vZGVBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yJyk7XG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcblx0Y29uc3Qgbm9kZUJvb2tOb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzLXJlYWQnKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRhZGRCb29rVG9MaWJyYXJ5KG5vZGVUaXRsZS52YWx1ZSwgbm9kZUF1dGhvci52YWx1ZSwgbm9kZVBhZ2VzLnZhbHVlLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XG5cdFxuXHRjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKTtcblx0XG5cdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0cmVtb3ZlQm9va3MoKTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gY2hhbmdlQm9va05vdGVzKCkge1xuXHRjb25zdCBib29rTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm9vay1ub3RlJyk7XG5cdFxuXHRib29rTm90ZXMuZm9yRWFjaChub3RlID0+IHtcblx0XHRub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcblx0XHRcdGxldCBub3RlSWQgPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0Y29uc29sZS5sb2cobm90ZUlkKTtcblx0XHRcdFxuXHRcdFx0aWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnYWxyZWFkeSByZWFkJykge1xuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdub3QgcmVhZCB5ZXQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGVja0Jvb2tOb3RlKGUudGFyZ2V0LCBub3RlSWQsICdhbHJlYWR5IHJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLW5vdC1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tzKCkge1xuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xuXHRcblx0cmVtb3ZlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdFx0XHRsZXQgYnRuSW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0XG5cdFx0XHRyZW1vdmVCb29rZnJvbUxpYnJhcnkoYnRuSW5kZXgpO1xuXHRcdFx0XG5cdFx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdFx0cmVtb3ZlQm9va3MoKTtcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xuXHRcdH0pO1xuXHR9KTtcdFxufSAgXG5cblxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XG4gIGlmICh0aXRsZSAmJiBhdXRob3IpIHtcblx0XHRpZiAoIW51bVBhZ2VzKSB7XG5cdFx0XHRudW1QYWdlcyA9IDA7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xuXHRcdGlmIChib29rc1JlYWQpIHtcblx0XHRcdGJvb2tzUmVhZCA9ICdhbHJlYWR5IHJlYWQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib29rc1JlYWQgPSAnbm90IHJlYWQgeWV0Jztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBib29rc1JlYWQpO1xuXHRcdFxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYFBsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUmApO1xuXHRcdFxuXHRcdGxldCBtc2cgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcblx0XHRcblx0XHRwcmludE1zZygnaDQnLCBtc2csICdtZXNzYWdlLWJvYXJkLXZhbGlkYXRpb24nKTtcblx0fSAgXG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJvb2tJbmRleCkge1xuXHRteUxpYnJhcnkgPSBteUxpYnJhcnkuZmlsdGVyKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcblx0XHRcdHJldHVybiBib29rO1xuXHRcdH1cblx0fSk7XG5cdFx0XG5cdGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG59XG5cblxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xuZnVuY3Rpb24gY2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSkge1xuXHRub2RlVGl0bGUudmFsdWUgPSAnJztcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xuXHRub2RlUGFnZXMudmFsdWUgPSAnJztcblx0bm9kZUJvb2tOb3RlLmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb29rTm90ZShub2RlLCBub3RlSWQsIG5vdGUsIGNzc1RvUmVtb3ZlLCBjc3NUb0FkZCkge1xuXHRteUxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcblx0XHRpZiAoaWR4ID09PSBub3RlSWQpIHtcblx0XHRcdGJvb2suYm9va1N0YXRlID0gbm90ZTtcblx0XHR9XG5cdH0pO1xuXHRcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XG5cdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjc3NUb1JlbW92ZSk7XG5cdG5vZGUuY2xhc3NMaXN0LmFkZChjc3NUb0FkZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGlicmFyeSgpIHtcblx0aWYgKG15TGlicmFyeS5sZW5ndGggPiAwKSB7XG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBzaWRlQiA9IG5ldyBCb29rKCdZb3VyIEJvb2sgaGVyZSEnLCAnVGhpcyBpcyBhbHNvIGZvciB5b3UhIDotKScsICdBbGwgdGhhdCB5b3UgbmVlZDogJywgJ25vdCByZWFkIHlldCcpO1xuXHRcdG15TGlicmFyeS5wdXNoKHNpZGVCKTtcblx0XHRcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRyZW1vdmVCb29rcygpO1xuXHR9XG59XG5cblxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTU5vZGUiLCJib29rU2hlbGYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0Jvb2tsaXN0IiwibGlzdCIsImlubmVySFRNTCIsIm5ld05vZGUiLCJtYXAiLCJib29rIiwiaWR4IiwibGkiLCJpbWciLCJwcm9wIiwidmFsdWUiLCJkaXYiLCJoMyIsInRpdGxlIiwiaDUiLCJhdXRob3IiLCJwYXJhMSIsIm51bVBhZ2VzIiwic3BhbiIsImJvb2tTdGF0ZSIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJpbnRNc2ciLCJub2RlIiwibXNnIiwiY3NzQ2xhc3MiLCJtZXNzYWdlIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJCb29rIiwicHJvdG90eXBlIiwiaW5mbyIsImFib3V0U2VjdGlvbiIsImFkZEJvb2tCdG4iLCJteUxpYnJhcnkiLCJ0aGVIb2JiaXQiLCJ0aGVGZWxsb3dzaGlwIiwidGhlVHdvVG93ZXJzIiwidGhlUmV0dXJuT2ZUaGVLaW5nIiwicHVzaCIsImNoZWNrTGlicmFyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub2RlVGl0bGUiLCJub2RlQXV0aG9yIiwibm9kZVBhZ2VzIiwibm9kZUJvb2tOb3RlIiwiY2hlY2tlZCIsImFkZEJvb2tUb0xpYnJhcnkiLCJjbGVhckZvcm1TaGVldCIsImNoYW5nZUJvb2tOb3RlcyIsInJlbW92ZUJvb2tzIiwiYm9va05vdGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub3RlIiwiZSIsIm5vdGVJZCIsIk51bWJlciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiY2hlY2tCb29rTm90ZSIsInJlbW92ZUJ0bnMiLCJidG4iLCJidG5JbmRleCIsInJlbW92ZUJvb2tmcm9tTGlicmFyeSIsImJvb2tzUmVhZCIsImJvb2tJbmRleCIsImZpbHRlciIsImNzc1RvUmVtb3ZlIiwiY3NzVG9BZGQiLCJyZW1vdmUiLCJzaWRlQiJdLCJzb3VyY2VSb290IjoiIn0=