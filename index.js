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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUwsQ0FBZUMsR0FBZixDQUFtQjJELFFBQW5CO0FBQ0E7O0FBRUQsU0FBUzlCLFlBQVQsR0FBd0I7RUFDdkIsSUFBSU4sU0FBUyxDQUFDbEIsTUFBVixHQUFtQixDQUF2QixFQUEwQjtJQUN6QmxELG1FQUFZLENBQUNvRSxTQUFELENBQVo7SUFDQWUsZUFBZTtJQUNmQyxXQUFXO0VBQ1gsQ0FKRCxNQUlPO0lBQ04sSUFBTXNCLEtBQUssR0FBRyxJQUFJdkQsc0RBQUosQ0FBUyxpQkFBVCxFQUE0QiwyQkFBNUIsRUFBeUQscUJBQXpELEVBQWdGLGNBQWhGLENBQWQ7SUFDQWlCLFNBQVMsQ0FBQ0ssSUFBVixDQUFlaUMsS0FBZjtJQUVBMUcsbUVBQVksQ0FBQ29FLFNBQUQsQ0FBWjtJQUNBZSxlQUFlO0lBQ2ZDLFdBQVc7RUFDWDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9Cb29rbGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL2NvbXBvbmVudHMvYXV4VUlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL21vZGVsL0Jvb2suanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wLy4vc3JjL215LWpzTGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XHJcblxyXG5mdW5jdGlvbiBzaG93Qm9va2xpc3QobGlzdCkge1xyXG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xyXG5cdFxyXG5cdGxldCBuZXdOb2RlID0gbGlzdC5tYXAoKGJvb2ssIGlkeCkgPT4ge1xyXG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xyXG5cdFx0Y29uc3QgbGkgPSBjcmVhdGVET01Ob2RlKCdsaScsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rJyk7XHRcclxuXHRcdGNvbnN0IGltZyA9IGNyZWF0ZURPTU5vZGUoJ2ltZycsICcnLCAnYm9va2xpc3QtcGFydGl0aW9uX19pY29uJywgJycsIFt7IHByb3A6ICdzcmMnLCB2YWx1ZTogJy4vcHVibGljL2ltYWdlcy9pY29uczgtYm9vay02NC5wbmcnIH0sIHsgcHJvcDogJ2FsdCcsIHZhbHVlOiAnYm9va3MgaWNvbicgfV0pO1xyXG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xyXG5cdFx0Y29uc3QgaDMgPSBjcmVhdGVET01Ob2RlKCdoMycsIGJvb2sudGl0bGUsICdib29rbGlzdC1wYXJ0aXRpb25fX3RpdGxlJyApO1xyXG5cdFx0Y29uc3QgaDUgPSBjcmVhdGVET01Ob2RlKCdoNScsIGJvb2suYXV0aG9yLCAnYm9va2xpc3QtcGFydGl0aW9uX19hdXRob3InKTtcclxuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNwYW47XHJcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdHNwYW4gPSBjcmVhdGVET01Ob2RlKCdzcGFuJywgYm9vay5ib29rU3RhdGUsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcsICdib29rLW5vdGUnKTtcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBjcmVhdGVET01Ob2RlKCdidXR0b24nLCAnWCcsICdib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nLCAnJyk7XHJcblx0XHRcclxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0c3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZHgpO1xyXG5cdFx0XHJcblx0XHQvLyBBc3NlbWJsZSB0aGUgY29tcG9uZW50XHRcdFxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0XHRcclxuXHRcdGxpLmFwcGVuZENoaWxkKGltZyk7XHJcblx0XHRsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHRcdFxyXG5cdFx0Ym9va1NoZWxmLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NTm9kZSB9IGZyb20gJy4vYXV4VUlGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbi8vIFVJIG5vZGVzXHJcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xyXG5jb25zdCB0aGlyZFdhbGxPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXN0YWNrX19vcm5hbWVudDMnKTtcclxuXHJcbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKScsIGNzc0NsYXNzKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSBtc2c7XHJcblx0XHJcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXHJcblx0bm9kZSwgbWVzc2FnZSwgY3NzQ2xhc3MpO1xyXG5cdFxyXG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcclxuXHRjb25zb2xlLmxvZyh0aGlyZFdhbGxPcm5hbWVudCk7XHJcblx0XHJcblx0bWVzc2FnZUJvYXJkLmFwcGVuZENoaWxkKG5ld1VJTm9kZSk7XHJcblx0XHJcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bWVzc2FnZUJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdG1lc3NhZ2VCb2FyZC5pbm5lckhUTUwgPSBudWxsO1xyXG5cdH1cclxuXHQsIDUwMDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRNc2c7XHJcblxyXG4iLCJmdW5jdGlvbiBjcmVhdGVET01Ob2RlKG5vZGUgPSAncCcsIGh0bWxUZXh0LCBjc3NDbGFzcywgY3NzSWQsIGNzc1Byb3BzKSB7XHJcblx0bGV0IG5ld05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG5cdFxyXG5cdGlmIChodG1sVGV4dCkge1xyXG5cdFx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sVGV4dCk7XHJcblx0XHRcclxuXHRcdG5ld05vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoY3NzQ2xhc3MpIHtcclxuXHRcdG5ld05vZGUuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0fVxyXG5cdFxyXG5cdGlmIChjc3NJZCkge1xyXG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xyXG5cdH1cclxuXHRcclxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcclxuXHQvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoY3NzUHJvcHMpKTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wcykpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0bmV3Tm9kZVtjc3NQcm9wc1tpXS5wcm9wXSA9IGNzc1Byb3BzW2ldLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3Tm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVET01Ob2RlLFxyXG59O1xyXG5cclxuIiwiLypcclxuICogT3RoZXIgYm9vaydzIHByb3BlcnRpZXM6XHJcbiAqIGNvQXV0aG9yc1xyXG4gKiB2b2x1bWVzXHJcbiAqIHB1Ymxpc2hlclxyXG4gKiBlZGl0aW9uXHJcbiAqIHJlbGVhc2VZZWFyXHJcbiAqIGFyZWFcclxuICogcHVibGljYXRpb25UeXBlXHJcbiAqIGRhdGVcclxuICogbGFzdENoYW5nZVxyXG4gKiBcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XHJcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xyXG5cdHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG5cdHRoaXMuY29hdXRob3JzID0gW107XHJcblx0dGhpcy5udW1Wb2x1bWVzID0gMTtcclxuXHR0aGlzLnB1Ymxpc2hlciA9ICdGYW50YXN0aWMgQm9va3NoZWxmJztcclxuXHR0aGlzLmJvb2tUeXBlID0gJ2hhcmQgY29ydmVyJztcclxuXHR0aGlzLmJvb2tDYXRlZ29yeSA9ICdmaWN0aW9uJztcclxuXHR0aGlzLmJvb2tEZXNjID0gJ1RoaXMgaXMgdGhlIGdyZWF0ZXN0IGJvb2sgb2YgYWxsIHRpbWUhISEnO1xyXG5cdHRoaXMuZWRpdGlvbiA9IDE7XHJcblx0dGhpcy5yZWxlYXNlWWVhciA9IG5ldyBEYXRlKCk7XHJcblx0dGhpcy5udW1QYWdlcyA9IG51bVBhZ2VzO1xyXG5cdHRoaXMuYm9va1N0YXRlID0gYm9va1N0YXRlO1xyXG5cdHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuXHR0aGlzLmxhc3RDaGFuZ2UgPSBuZXcgRGF0ZSgpO1xyXG59IFxyXG5cclxuQm9vay5wcm90b3R5cGUuc2hvcnREZXNjID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3Qgc2hvcnREZXNjID0gYCR7dGhpcy50aXRsZX0gYnkgJHt0aGlzLmF1dGhvcn0sICR7dGhpcy5udW1QYWdlc30gcGFnZXMsICR7dGhpcy5ib29rU3RhdGV9YDtcclxuXHRcdFx0XHJcblx0cmV0dXJuIHNob3J0RGVzYztcclxufVxyXG5cclxuQm9vay5wcm90b3R5cGUuYmlnRGVzYyA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGJpZ0Rlc2MgPSBgJHt0aGlzLnRpdGxlfSBieSAke3RoaXMuYXV0aG9yfSBoYXMgJHt0aGlzLm51bVZvbHVtZXN9IHZvbHVtZXMuIEl0J3MgYWJvdXQgJHt0aGlzLmJvb2tDYXRlZ29yeX0gYW5kIHdhcyBwdWJsaXNoZWQgaW4gdGhlIGZvcm1hdCAke3RoaXMuYm9va1R5cGV9IGJ5ICR7dGhpcy5wdWJsaXNoZXJ9LCBpbiB0aGUgeWVhciAke3RoaXMucmVsZWFzZVllYXJ9LCAke3RoaXMuYm9va1N0YXRlfS4gJHt0aGlzLmJvb2tEZXNjfWA7XHJcblx0XHJcblx0cmV0dXJuIGJpZ0Rlc2M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcclxuKiBcclxuKi9cclxuaW1wb3J0IEJvb2sgZnJvbSAnLi9tb2RlbC9Cb29rLmpzJztcclxuaW1wb3J0IHNob3dCb29rbGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQm9va2xpc3QuanMnO1xyXG5pbXBvcnQgcHJpbnRNc2cgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XHJcblxyXG5cclxuLy8gVUkgbm9kZXNcclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBhcnRpdGlvbl9fYWJvdXQnKTtcclxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9vaycpO1xyXG5cclxuXHJcbmxldCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbmNvbnN0IHRoZUhvYmJpdCA9IG5ldyBCb29rKCdUaGUgSG9iYml0JywgJ0ouUi5SLiBUb2xraWVuJywgMjk1LCAnYWxyZWFkeSByZWFkJyk7XHJcbmNvbnN0IHRoZUZlbGxvd3NoaXAgPSBuZXcgQm9vaygnVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCAnSi5SLlIuIFRvbGtpZW4nLCAzOTUsICdub3QgcmVhZCB5ZXQnKTtcclxuY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcbmNvbnN0IHRoZVJldHVybk9mVGhlS2luZyA9IG5ldyBCb29rKCdUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XHJcblxyXG5teUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcclxuY2hlY2tMaWJyYXJ5KCk7XHJcblxyXG5cclxuYWJvdXRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCd0ZXN0IGFib3V0IHNlYycpO1xyXG5cdGxldCBtc2cgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcclxuXHRcclxuXHRwcmludE1zZygnaDMnLCBtc2csICdtZXNzYWdlLWJvYXJkLW1zZycpO1xyXG59KTtcclxuXHJcblxyXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIEZvcm0gbm9kZXNcclxuXHRjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cdGNvbnN0IG5vZGVQYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW0tcGFnZXMnKTtcclxuXHRjb25zdCBub2RlQm9va05vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXMtcmVhZCcpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBub2RlQm9va05vdGUuY2hlY2tlZCk7XHJcblx0XHJcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xyXG5cdFxyXG5cdGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpO1xyXG5cdFxyXG5cdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xyXG5cdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdHJlbW92ZUJvb2tzKCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VCb29rTm90ZXMoKSB7XHJcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xyXG5cdFxyXG5cdGJvb2tOb3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xyXG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUuZGlyKGUudGFyZ2V0KTtcclxuXHRcdFx0bGV0IG5vdGVJZCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdhbHJlYWR5IHJlYWQnKSB7XHJcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNoZWNrQm9va05vdGUoZS50YXJnZXQsIG5vdGVJZCwgJ2FscmVhZHkgcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stbm90LXJlYWQnLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcclxuXHRjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tsaXN0LXBhcnRpdGlvbl9fcmVtb3ZlLWJ0bicpO1xyXG5cdFxyXG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlbW92ZUJvb2tmcm9tTGlicmFyeShidG5JbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdFx0Y2hhbmdlQm9va05vdGVzKCk7XHJcblx0XHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0XHRcdGNoZWNrTGlicmFyeSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHRcclxufSAgXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeSh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKSB7XHJcbiAgaWYgKHRpdGxlICYmIGF1dGhvcikge1xyXG5cdFx0aWYgKCFudW1QYWdlcykge1xyXG5cdFx0XHRudW1QYWdlcyA9IDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGVja2VkIHZhbHVlOiAnLCBib29rc1JlYWQpO1xyXG5cdFx0aWYgKGJvb2tzUmVhZCkge1xyXG5cdFx0XHRib29rc1JlYWQgPSAnYWxyZWFkeSByZWFkJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvb2tzUmVhZCA9ICdub3QgcmVhZCB5ZXQnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCk7XHJcblx0XHRcclxuXHRcdG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhgUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SYCk7XHJcblx0XHRcclxuXHRcdGxldCBtc2cgPSAnUGxlYXNlLCBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzOiBUSVRMRSBhbmQgQVVUSE9SJztcclxuXHRcdFxyXG5cdFx0cHJpbnRNc2coJ2g0JywgbXNnLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XHJcblx0fSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVCb29rZnJvbUxpYnJhcnkoYm9va0luZGV4KSB7XHJcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XHJcblx0XHRpZiAoaWR4ICE9PSBib29rSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2s7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHRcclxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xyXG59XHJcblxyXG5cclxuLyogQVVYSUxJQVJZIEZVTkNUSU9OUyAqL1xyXG5mdW5jdGlvbiBjbGVhckZvcm1TaGVldChub2RlVGl0bGUsIG5vZGVBdXRob3IsIG5vZGVQYWdlcywgbm9kZUJvb2tOb3RlKSB7XHJcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XHJcblx0bm9kZUF1dGhvci52YWx1ZSA9ICcnO1xyXG5cdG5vZGVQYWdlcy52YWx1ZSA9ICcnO1xyXG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcclxuXHRteUxpYnJhcnkubWFwKChib29rLCBpZHgpID0+IHtcclxuXHRcdGlmIChpZHggPT09IG5vdGVJZCkge1xyXG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0bm9kZS50ZXh0Q29udGVudCA9IG5vdGU7XHJcblx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNzc1RvUmVtb3ZlKTtcclxuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XHJcblx0aWYgKG15TGlicmFyeS5sZW5ndGggPiAwKSB7XHJcblx0XHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcclxuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xyXG5cdFx0cmVtb3ZlQm9va3MoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3Qgc2lkZUIgPSBuZXcgQm9vaygnWW91ciBCb29rIGhlcmUhJywgJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsICdub3QgcmVhZCB5ZXQnKTtcclxuXHRcdG15TGlicmFyeS5wdXNoKHNpZGVCKTtcclxuXHRcdFxyXG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XHJcblx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcclxuXHRcdHJlbW92ZUJvb2tzKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZURPTU5vZGUiLCJib29rU2hlbGYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0Jvb2tsaXN0IiwibGlzdCIsImlubmVySFRNTCIsIm5ld05vZGUiLCJtYXAiLCJib29rIiwiaWR4IiwibGkiLCJpbWciLCJwcm9wIiwidmFsdWUiLCJkaXYiLCJoMyIsInRpdGxlIiwiaDUiLCJhdXRob3IiLCJwYXJhMSIsIm51bVBhZ2VzIiwic3BhbiIsImJvb2tTdGF0ZSIsInJlbW92ZUJ0biIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwibWVzc2FnZUJvYXJkIiwidGhpcmRXYWxsT3JuYW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJpbnRNc2ciLCJub2RlIiwibXNnIiwiY3NzQ2xhc3MiLCJtZXNzYWdlIiwibmV3VUlOb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsIm1zZ1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaHRtbFRleHQiLCJjc3NJZCIsImNzc1Byb3BzIiwiY3JlYXRlRWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJCb29rIiwiY29hdXRob3JzIiwibnVtVm9sdW1lcyIsInB1Ymxpc2hlciIsImJvb2tUeXBlIiwiYm9va0NhdGVnb3J5IiwiYm9va0Rlc2MiLCJlZGl0aW9uIiwicmVsZWFzZVllYXIiLCJEYXRlIiwiZGF0ZSIsImxhc3RDaGFuZ2UiLCJwcm90b3R5cGUiLCJzaG9ydERlc2MiLCJiaWdEZXNjIiwiYWJvdXRTZWN0aW9uIiwiYWRkQm9va0J0biIsIm15TGlicmFyeSIsInRoZUhvYmJpdCIsInRoZUZlbGxvd3NoaXAiLCJ0aGVUd29Ub3dlcnMiLCJ0aGVSZXR1cm5PZlRoZUtpbmciLCJwdXNoIiwiY2hlY2tMaWJyYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGVUaXRsZSIsIm5vZGVBdXRob3IiLCJub2RlUGFnZXMiLCJub2RlQm9va05vdGUiLCJjaGVja2VkIiwiYWRkQm9va1RvTGlicmFyeSIsImNsZWFyRm9ybVNoZWV0IiwiY2hhbmdlQm9va05vdGVzIiwicmVtb3ZlQm9va3MiLCJib29rTm90ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vdGUiLCJlIiwibm90ZUlkIiwiTnVtYmVyIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJjaGVja0Jvb2tOb3RlIiwicmVtb3ZlQnRucyIsImJ0biIsImJ0bkluZGV4IiwicmVtb3ZlQm9va2Zyb21MaWJyYXJ5IiwiYm9va3NSZWFkIiwiYm9va0luZGV4IiwiZmlsdGVyIiwiY3NzVG9SZW1vdmUiLCJjc3NUb0FkZCIsInJlbW92ZSIsInNpZGVCIl0sInNvdXJjZVJvb3QiOiIifQ==