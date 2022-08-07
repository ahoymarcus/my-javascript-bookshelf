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
 * year
 * area
 * publicationType
 * date
 * lastChange
 * 
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBR0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbEI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7RUFDM0JKLFNBQVMsQ0FBQ0ssU0FBVixHQUFzQixJQUF0QjtFQUVBLElBQUlDLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7SUFDckM7SUFDQSxJQUFNQyxFQUFFLEdBQUdYLGlFQUFhLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVywwQkFBWCxDQUF4QjtJQUNBLElBQU1ZLEdBQUcsR0FBR1osaUVBQWEsQ0FBQyxLQUFELEVBQVEsRUFBUixFQUFZLDBCQUFaLEVBQXdDLEVBQXhDLEVBQTRDLENBQUM7TUFBRWEsSUFBSSxFQUFFLEtBQVI7TUFBZUMsS0FBSyxFQUFFO0lBQXRCLENBQUQsRUFBK0Q7TUFBRUQsSUFBSSxFQUFFLEtBQVI7TUFBZUMsS0FBSyxFQUFFO0lBQXRCLENBQS9ELENBQTVDLENBQXpCO0lBQ0EsSUFBTUMsR0FBRyxHQUFHZixpRUFBYSxDQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksa0NBQVosQ0FBekI7SUFDQSxJQUFNZ0IsRUFBRSxHQUFHaEIsaUVBQWEsQ0FBQyxJQUFELEVBQU9TLElBQUksQ0FBQ1EsS0FBWixFQUFtQiwyQkFBbkIsQ0FBeEI7SUFDQSxJQUFNQyxFQUFFLEdBQUdsQixpRUFBYSxDQUFDLElBQUQsRUFBT1MsSUFBSSxDQUFDVSxNQUFaLEVBQW9CLDRCQUFwQixDQUF4QjtJQUNBLElBQU1DLEtBQUssR0FBR3BCLGlFQUFhLENBQUMsR0FBRCxZQUFTUyxJQUFJLENBQUNZLFFBQWQsYUFBZ0MsMkJBQWhDLENBQTNCO0lBRUEsSUFBSUMsSUFBSjs7SUFDQSxJQUFJYixJQUFJLENBQUNjLFNBQUwsS0FBbUIsY0FBdkIsRUFBdUM7TUFDdENELElBQUksR0FBR3RCLGlFQUFhLENBQUMsTUFBRCxFQUFTUyxJQUFJLENBQUNjLFNBQWQsRUFBeUIsK0JBQXpCLEVBQTBELFdBQTFELENBQXBCO0lBQ0EsQ0FGRCxNQUVPO01BQ05ELElBQUksR0FBR3RCLGlFQUFhLENBQUMsTUFBRCxFQUFTUyxJQUFJLENBQUNjLFNBQWQsRUFBeUIsbUNBQXpCLEVBQThELFdBQTlELENBQXBCO0lBQ0E7O0lBR0QsSUFBTUMsU0FBUyxHQUFHeEIsaUVBQWEsQ0FBQyxRQUFELEVBQVcsR0FBWCxFQUFnQixnQ0FBaEIsRUFBa0QsRUFBbEQsQ0FBL0IsQ0FqQnFDLENBbUJyQzs7SUFDQXdCLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QixTQUF2QixFQUFrQ2YsR0FBbEM7SUFDQVksSUFBSSxDQUFDRyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCZixHQUE3QixFQXJCcUMsQ0F1QnJDOztJQUNBSyxHQUFHLENBQUNXLFdBQUosQ0FBZ0JWLEVBQWhCO0lBQ0FELEdBQUcsQ0FBQ1csV0FBSixDQUFnQlIsRUFBaEI7SUFDQUgsR0FBRyxDQUFDVyxXQUFKLENBQWdCTixLQUFoQjtJQUNBTCxHQUFHLENBQUNXLFdBQUosQ0FBZ0JKLElBQWhCO0lBRUFYLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlZCxHQUFmO0lBQ0FELEVBQUUsQ0FBQ2UsV0FBSCxDQUFlWCxHQUFmO0lBQ0FKLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlRixTQUFmO0lBRUF2QixTQUFTLENBQUN5QixXQUFWLENBQXNCZixFQUF0QjtJQUVBLE9BQU9BLEVBQVA7RUFDQSxDQXBDYSxDQUFkO0FBcUNBOztBQUdELGlFQUFlUCxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Q0M5Q0E7O0FBQ0EsSUFBTXVCLFlBQVksR0FBR3pCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixzQkFBeEIsQ0FBckI7QUFDQSxJQUFNeUIsaUJBQWlCLEdBQUcxQixRQUFRLENBQUMyQixhQUFULENBQXVCLHdCQUF2QixDQUExQjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUEyRjtFQUFBLElBQW5FQyxHQUFtRSx1RUFBN0QsaURBQTZEO0VBQUEsSUFBVkMsUUFBVTtFQUMxRixJQUFJQyxPQUFPLEdBQUdGLEdBQWQ7RUFFQSxJQUFJRyxTQUFTLEdBQUduQyxpRUFBYSxDQUM3QitCLElBRDZCLEVBQ3ZCRyxPQUR1QixFQUNkRCxRQURjLENBQTdCO0VBR0FOLFlBQVksQ0FBQ1MsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsT0FBN0I7RUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlYLGlCQUFaO0VBRUFELFlBQVksQ0FBQ0QsV0FBYixDQUF5QlMsU0FBekI7RUFFQSxJQUFNSyxVQUFVLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0lBQ25DZCxZQUFZLENBQUNTLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0lBQ0FWLFlBQVksQ0FBQ3JCLFNBQWIsR0FBeUIsSUFBekI7RUFDQSxDQUg0QixFQUkzQixJQUoyQixDQUE3QjtBQUtBOztBQUdELGlFQUFld0IsUUFBZjs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsU0FBUzlCLGFBQVQsR0FBd0U7RUFBQSxJQUFqRCtCLElBQWlELHVFQUExQyxHQUEwQztFQUFBLElBQXJDVyxRQUFxQztFQUFBLElBQTNCVCxRQUEyQjtFQUFBLElBQWpCVSxLQUFpQjtFQUFBLElBQVZDLFFBQVU7RUFDdkUsSUFBSXJDLE9BQU8sR0FBR0wsUUFBUSxDQUFDMkMsYUFBVCxDQUF1QmQsSUFBdkIsQ0FBZDs7RUFFQSxJQUFJVyxRQUFKLEVBQWM7SUFDYixJQUFNSSxRQUFRLEdBQUc1QyxRQUFRLENBQUM2QyxjQUFULENBQXdCTCxRQUF4QixDQUFqQjtJQUVBbkMsT0FBTyxDQUFDbUIsV0FBUixDQUFvQm9CLFFBQXBCO0VBQ0E7O0VBRUQsSUFBSWIsUUFBSixFQUFjO0lBQ2IxQixPQUFPLENBQUN5QyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQmhCLFFBQXRCO0VBQ0E7O0VBRUQsSUFBSVUsS0FBSixFQUFXO0lBQ1ZwQyxPQUFPLENBQUMyQyxFQUFSLEdBQWFQLEtBQWI7RUFDQSxDQWZzRSxDQWlCdkU7RUFDQTs7O0VBQ0EsSUFBSVEsS0FBSyxDQUFDQyxPQUFOLENBQWNSLFFBQWQsQ0FBSixFQUE2QjtJQUM1QixLQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULFFBQVEsQ0FBQ1UsTUFBN0IsRUFBcUNELENBQUMsSUFBSSxDQUExQyxFQUE2QztNQUM1QzlDLE9BQU8sQ0FBQ3FDLFFBQVEsQ0FBQ1MsQ0FBRCxDQUFSLENBQVl4QyxJQUFiLENBQVAsR0FBNEIrQixRQUFRLENBQUNTLENBQUQsQ0FBUixDQUFZdkMsS0FBeEM7SUFDQTtFQUNEOztFQUVELE9BQU9QLE9BQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLFNBQVNnRCxJQUFULENBQWN0QyxLQUFkLEVBQXFCRSxNQUFyQixFQUE2QkUsUUFBN0IsRUFBdUNFLFNBQXZDLEVBQWtEO0VBQ2pELEtBQUtOLEtBQUwsR0FBYUEsS0FBYjtFQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtFQUNBLEtBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsS0FBS0UsU0FBTCxHQUFpQkEsU0FBakI7QUFDQTs7QUFFRGdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFlBQVc7RUFDaEMsSUFBTUEsSUFBSSxhQUFNLEtBQUt4QyxLQUFYLGlCQUF1QixLQUFLRSxNQUE1QixlQUF1QyxLQUFLRSxRQUE1QyxxQkFBK0QsS0FBS0UsU0FBcEUsQ0FBVjtFQUVBLE9BQU9rQyxJQUFQO0FBQ0EsQ0FKRDs7QUFPQSxpRUFBZUYsSUFBZjs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNRyxZQUFZLEdBQUd4RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsOEJBQXhCLENBQXJCO0FBQ0EsSUFBTXdELFVBQVUsR0FBR3pELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFuQjtBQUdBLElBQUl5RCxTQUFTLEdBQUcsRUFBaEI7QUFFQSxJQUFNQyxTQUFTLEdBQUcsSUFBSU4sc0RBQUosQ0FBUyxZQUFULEVBQXVCLGdCQUF2QixFQUF5QyxHQUF6QyxFQUE4QyxjQUE5QyxDQUFsQjtBQUNBLElBQU1PLGFBQWEsR0FBRyxJQUFJUCxzREFBSixDQUFTLDRCQUFULEVBQXVDLGdCQUF2QyxFQUF5RCxHQUF6RCxFQUE4RCxjQUE5RCxDQUF0QjtBQUNBLElBQU1RLFlBQVksR0FBRyxJQUFJUixzREFBSixDQUFTLGdCQUFULEVBQTJCLGdCQUEzQixFQUE2QyxHQUE3QyxFQUFrRCxjQUFsRCxDQUFyQjtBQUNBLElBQU1TLGtCQUFrQixHQUFHLElBQUlULHNEQUFKLENBQVMsd0JBQVQsRUFBbUMsZ0JBQW5DLEVBQXFELEdBQXJELEVBQTBELGNBQTFELENBQTNCO0FBRUFLLFNBQVMsQ0FBQ0ssSUFBVixDQUFlSixTQUFmLEVBQTBCQyxhQUExQixFQUF5Q0MsWUFBekMsRUFBdURDLGtCQUF2RDtBQUNBRSxZQUFZO0FBR1pSLFlBQVksQ0FBQ1MsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtFQUM1QzdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0VBQ0EsSUFBSVAsR0FBRyxHQUFHLGlFQUFWO0VBRUFGLHVFQUFRLENBQUMsSUFBRCxFQUFPRSxHQUFQLEVBQVksbUJBQVosQ0FBUjtBQUNBLENBTEQ7QUFRQTJCLFVBQVUsQ0FBQ1EsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtFQUMxQztFQUNBLElBQU1DLFNBQVMsR0FBR2xFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFsQjtFQUNBLElBQU1rRSxVQUFVLEdBQUduRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBbkI7RUFDQSxJQUFNbUUsU0FBUyxHQUFHcEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0VBQ0EsSUFBTW9FLFlBQVksR0FBR3JFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFyQjtFQUVBbUMsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNnQyxZQUFZLENBQUNDLE9BQWxEO0VBRUFDLGdCQUFnQixDQUFDTCxTQUFTLENBQUN0RCxLQUFYLEVBQWtCdUQsVUFBVSxDQUFDdkQsS0FBN0IsRUFBb0N3RCxTQUFTLENBQUN4RCxLQUE5QyxFQUFxRHlELFlBQVksQ0FBQ0MsT0FBbEUsQ0FBaEI7RUFFQUUsY0FBYyxDQUFDTixTQUFELEVBQVlDLFVBQVosRUFBd0JDLFNBQXhCLEVBQW1DQyxZQUFuQyxDQUFkO0VBRUFuRSxtRUFBWSxDQUFDd0QsU0FBRCxDQUFaO0VBQ0FlLGVBQWU7RUFDZkMsV0FBVztBQUNYLENBaEJEOztBQW9CQSxTQUFTRCxlQUFULEdBQTJCO0VBQzFCLElBQU1FLFNBQVMsR0FBRzNFLFFBQVEsQ0FBQzRFLGdCQUFULENBQTBCLFlBQTFCLENBQWxCO0VBRUFELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxJQUFJLEVBQUk7SUFDekJBLElBQUksQ0FBQ2IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQWMsQ0FBQyxFQUFJO01BQ25DO01BQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBbkI7TUFDQS9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkMsTUFBWjs7TUFFQSxJQUFJRCxDQUFDLENBQUNHLE1BQUYsQ0FBU0UsV0FBVCxLQUF5QixjQUE3QixFQUE2QztRQUM1Q0MsYUFBYSxDQUFDTixDQUFDLENBQUNHLE1BQUgsRUFBV0YsTUFBWCxFQUFtQixjQUFuQixFQUFtQywrQkFBbkMsRUFBb0UsbUNBQXBFLENBQWI7TUFDQSxDQUZELE1BRU87UUFDTkssYUFBYSxDQUFDTixDQUFDLENBQUNHLE1BQUgsRUFBV0YsTUFBWCxFQUFtQixjQUFuQixFQUFtQyxtQ0FBbkMsRUFBd0UsK0JBQXhFLENBQWI7TUFDQTtJQUNELENBVkQ7RUFXQSxDQVpEO0FBYUE7O0FBR0QsU0FBU04sV0FBVCxHQUF1QjtFQUN0QixJQUFNWSxVQUFVLEdBQUd0RixRQUFRLENBQUM0RSxnQkFBVCxDQUEwQixpQ0FBMUIsQ0FBbkI7RUFFQVUsVUFBVSxDQUFDVCxPQUFYLENBQW1CLFVBQUFVLEdBQUcsRUFBSTtJQUN6QkEsR0FBRyxDQUFDdEIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQWMsQ0FBQyxFQUFJO01BQ2xDM0MsT0FBTyxDQUFDQyxHQUFSLENBQVkwQyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixTQUF0QixDQUFaO01BQ0EsSUFBSUssUUFBUSxHQUFHUCxNQUFNLENBQUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBckI7TUFFQU0scUJBQXFCLENBQUNELFFBQUQsQ0FBckI7TUFFQXRGLG1FQUFZLENBQUN3RCxTQUFELENBQVo7TUFDQWUsZUFBZTtNQUNmQyxXQUFXO01BQ1hWLFlBQVk7SUFDWixDQVZEO0VBV0EsQ0FaRDtBQWFBOztBQUdELFNBQVNPLGdCQUFULENBQTBCeEQsS0FBMUIsRUFBaUNFLE1BQWpDLEVBQXlDRSxRQUF6QyxFQUFtRHVFLFNBQW5ELEVBQThEO0VBQzVELElBQUkzRSxLQUFLLElBQUlFLE1BQWIsRUFBcUI7SUFDckIsSUFBSSxDQUFDRSxRQUFMLEVBQWU7TUFDZEEsUUFBUSxHQUFHLENBQVg7SUFDQTs7SUFFRGlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDcUQsU0FBckM7O0lBQ0EsSUFBSUEsU0FBSixFQUFlO01BQ2RBLFNBQVMsR0FBRyxjQUFaO0lBQ0EsQ0FGRCxNQUVPO01BQ05BLFNBQVMsR0FBRyxjQUFaO0lBQ0E7O0lBRUQsSUFBTW5GLElBQUksR0FBRyxJQUFJOEMsc0RBQUosQ0FBU3RDLEtBQVQsRUFBZ0JFLE1BQWhCLEVBQXdCRSxRQUF4QixFQUFrQ3VFLFNBQWxDLENBQWI7SUFFQWhDLFNBQVMsQ0FBQ0ssSUFBVixDQUFleEQsSUFBZjtJQUVBNkIsT0FBTyxDQUFDQyxHQUFSLENBQVlxQixTQUFaO0VBQ0EsQ0FqQkEsTUFpQk07SUFDTnRCLE9BQU8sQ0FBQ0MsR0FBUjtJQUVBLElBQUlQLEdBQUcsR0FBRyx3REFBVjtJQUVBRix1RUFBUSxDQUFDLElBQUQsRUFBT0UsR0FBUCxFQUFZLDBCQUFaLENBQVI7RUFDQTtBQUNEOztBQUdELFNBQVMyRCxxQkFBVCxDQUErQkUsU0FBL0IsRUFBMEM7RUFDekNqQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2tDLE1BQVYsQ0FBaUIsVUFBQ3JGLElBQUQsRUFBT0MsR0FBUCxFQUFlO0lBQzNDLElBQUlBLEdBQUcsS0FBS21GLFNBQVosRUFBdUI7TUFDdEIsT0FBT3BGLElBQVA7SUFDQTtFQUNELENBSlcsQ0FBWjtFQU1BNkIsT0FBTyxDQUFDQyxHQUFSLENBQVlxQixTQUFaO0FBQ0E7QUFHRDs7O0FBQ0EsU0FBU2MsY0FBVCxDQUF3Qk4sU0FBeEIsRUFBbUNDLFVBQW5DLEVBQStDQyxTQUEvQyxFQUEwREMsWUFBMUQsRUFBd0U7RUFDdkVILFNBQVMsQ0FBQ3RELEtBQVYsR0FBa0IsRUFBbEI7RUFDQXVELFVBQVUsQ0FBQ3ZELEtBQVgsR0FBbUIsRUFBbkI7RUFDQXdELFNBQVMsQ0FBQ3hELEtBQVYsR0FBa0IsRUFBbEI7RUFDQXlELFlBQVksQ0FBQ0MsT0FBYixHQUF1QixLQUF2QjtBQUNBOztBQUVELFNBQVNlLGFBQVQsQ0FBdUJ4RCxJQUF2QixFQUE2Qm1ELE1BQTdCLEVBQXFDRixJQUFyQyxFQUEyQ2UsV0FBM0MsRUFBd0RDLFFBQXhELEVBQWtFO0VBQ2pFcEMsU0FBUyxDQUFDcEQsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0lBQzVCLElBQUlBLEdBQUcsS0FBS3dFLE1BQVosRUFBb0I7TUFDbkJ6RSxJQUFJLENBQUNjLFNBQUwsR0FBaUJ5RCxJQUFqQjtJQUNBO0VBQ0QsQ0FKRDtFQU1BakQsSUFBSSxDQUFDdUQsV0FBTCxHQUFtQk4sSUFBbkI7RUFDQWpELElBQUksQ0FBQ2lCLFNBQUwsQ0FBZWlELE1BQWYsQ0FBc0JGLFdBQXRCO0VBQ0FoRSxJQUFJLENBQUNpQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIrQyxRQUFuQjtBQUNBOztBQUVELFNBQVM5QixZQUFULEdBQXdCO0VBQ3ZCLElBQUlOLFNBQVMsQ0FBQ04sTUFBVixHQUFtQixDQUF2QixFQUEwQjtJQUN6QmxELG1FQUFZLENBQUN3RCxTQUFELENBQVo7SUFDQWUsZUFBZTtJQUNmQyxXQUFXO0VBQ1gsQ0FKRCxNQUlPO0lBQ04sSUFBTXNCLEtBQUssR0FBRyxJQUFJM0Msc0RBQUosQ0FBUyxpQkFBVCxFQUE0QiwyQkFBNUIsRUFBeUQscUJBQXpELEVBQWdGLGNBQWhGLENBQWQ7SUFDQUssU0FBUyxDQUFDSyxJQUFWLENBQWVpQyxLQUFmO0lBRUE5RixtRUFBWSxDQUFDd0QsU0FBRCxDQUFaO0lBQ0FlLGVBQWU7SUFDZkMsV0FBVztFQUNYO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL0Jvb2tsaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtYm9va3NoZWxmLW9vcC8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvY29tcG9uZW50cy9hdXhVSUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbW9kZWwvQm9vay5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ib29rc2hlbGYtb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWJvb2tzaGVsZi1vb3AvLi9zcmMvbXktanNMaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTU5vZGUgfSBmcm9tICcuL2F1eFVJRnVuY3Rpb25zLmpzJztcblxuXG4vLyBVSSBub2Rlc1xuY29uc3QgYm9va1NoZWxmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tsaXN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dCb29rbGlzdChsaXN0KSB7XG5cdGJvb2tTaGVsZi5pbm5lckhUTUwgPSBudWxsO1xuXHRcblx0bGV0IG5ld05vZGUgPSBsaXN0Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzIGFuZCBpdHMgcHJvcGVydGllc1xuXHRcdGNvbnN0IGxpID0gY3JlYXRlRE9NTm9kZSgnbGknLCAnJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vaycpO1x0XG5cdFx0Y29uc3QgaW1nID0gY3JlYXRlRE9NTm9kZSgnaW1nJywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2ljb24nLCAnJywgW3sgcHJvcDogJ3NyYycsIHZhbHVlOiAnLi9wdWJsaWMvaW1hZ2VzL2ljb25zOC1ib29rLTY0LnBuZycgfSwgeyBwcm9wOiAnYWx0JywgdmFsdWU6ICdib29rcyBpY29uJyB9XSk7XG5cdFx0Y29uc3QgZGl2ID0gY3JlYXRlRE9NTm9kZSgnZGl2JywgJycsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stY29udGVudCcpO1xuXHRcdGNvbnN0IGgzID0gY3JlYXRlRE9NTm9kZSgnaDMnLCBib29rLnRpdGxlLCAnYm9va2xpc3QtcGFydGl0aW9uX190aXRsZScgKTtcblx0XHRjb25zdCBoNSA9IGNyZWF0ZURPTU5vZGUoJ2g1JywgYm9vay5hdXRob3IsICdib29rbGlzdC1wYXJ0aXRpb25fX2F1dGhvcicpO1xuXHRcdGNvbnN0IHBhcmExID0gY3JlYXRlRE9NTm9kZSgncCcsIGAke2Jvb2subnVtUGFnZXN9IHBhZ2VzYCwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fcGFnZXMnKTtcblx0XHRcblx0XHRsZXQgc3Bhbjtcblx0XHRpZiAoYm9vay5ib29rU3RhdGUgPT09ICdhbHJlYWR5IHJlYWQnKSB7XG5cdFx0XHRzcGFuID0gY3JlYXRlRE9NTm9kZSgnc3BhbicsIGJvb2suYm9va1N0YXRlLCAnYm9va2xpc3QtcGFydGl0aW9uX19ib29rLXJlYWQnLCAnYm9vay1ub3RlJyk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BhbiA9IGNyZWF0ZURPTU5vZGUoJ3NwYW0nLCBib29rLmJvb2tTdGF0ZSwgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rLW5vdGUnKTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gY3JlYXRlRE9NTm9kZSgnYnV0dG9uJywgJ1gnLCAnYm9va2xpc3QtcGFydGl0aW9uX19yZW1vdmUtYnRuJywgJycpO1xuXHRcdFxuXHRcdC8vIFNldCBnbG9iYWwgZGF0YSBhdHRyaWJ1dGVcblx0XHRyZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWR4KTtcblx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkeCk7XG5cdFx0XG5cdFx0Ly8gQXNzZW1ibGUgdGhlIGNvbXBvbmVudFx0XHRcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcblx0XHRsaS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdGxpLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0bGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcblx0XHRcblx0XHRib29rU2hlbGYuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFxuXHRcdHJldHVybiBsaTtcblx0fSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0Jvb2tsaXN0O1xuXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Ob2RlIH0gZnJvbSAnLi9hdXhVSUZ1bmN0aW9ucy5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IG1lc3NhZ2VCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tbWVzc2FnZS1ib2FyZCcpO1xuY29uc3QgdGhpcmRXYWxsT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1zdGFja19fb3JuYW1lbnQzJyk7XG5cbmZ1bmN0aW9uIHByaW50TXNnKG5vZGUsIG1zZyA9ICdXZWxjb21lLCBmZWxsIGZyZWUgdG8gcG9zdCB5b3VyIGJvb2tzIGhlcmUhIDotKScsIGNzc0NsYXNzKSB7XG5cdGxldCBtZXNzYWdlID0gbXNnO1xuXHRcblx0bGV0IG5ld1VJTm9kZSA9IGNyZWF0ZURPTU5vZGUoXG5cdG5vZGUsIG1lc3NhZ2UsIGNzc0NsYXNzKTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XG5cdGNvbnNvbGUubG9nKHRoaXJkV2FsbE9ybmFtZW50KTtcblx0XG5cdG1lc3NhZ2VCb2FyZC5hcHBlbmRDaGlsZChuZXdVSU5vZGUpO1xuXHRcblx0Y29uc3QgbXNnVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG1lc3NhZ2VCb2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cdFx0bWVzc2FnZUJvYXJkLmlubmVySFRNTCA9IG51bGw7XG5cdH1cblx0LCA1MDAwKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwcmludE1zZztcblxuIiwiZnVuY3Rpb24gY3JlYXRlRE9NTm9kZShub2RlID0gJ3AnLCBodG1sVGV4dCwgY3NzQ2xhc3MsIGNzc0lkLCBjc3NQcm9wcykge1xuXHRsZXQgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XG5cdFxuXHRpZiAoaHRtbFRleHQpIHtcblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWxUZXh0KTtcblx0XHRcblx0XHRuZXdOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcblx0fVxuXHRcblx0aWYgKGNzc0NsYXNzKSB7XG5cdFx0bmV3Tm9kZS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcblx0fVxuXHRcblx0aWYgKGNzc0lkKSB7XG5cdFx0bmV3Tm9kZS5pZCA9IGNzc0lkO1xuXHR9XG5cdFxuXHQvL2NvbnNvbGUubG9nKGNzc1Byb3BzKTtcblx0Ly9jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KGNzc1Byb3BzKSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3BzKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY3NzUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdG5ld05vZGVbY3NzUHJvcHNbaV0ucHJvcF0gPSBjc3NQcm9wc1tpXS52YWx1ZTtcblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NTm9kZSxcbn07XG5cbiIsIi8qXG4gKiBPdGhlciBib29rJ3MgcHJvcGVydGllczpcbiAqIGNvQXV0aG9yc1xuICogdm9sdW1lc1xuICogcHVibGlzaGVyXG4gKiBlZGl0aW9uXG4gKiB5ZWFyXG4gKiBhcmVhXG4gKiBwdWJsaWNhdGlvblR5cGVcbiAqIGRhdGVcbiAqIGxhc3RDaGFuZ2VcbiAqIFxuICovXG5cblxuZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va1N0YXRlKSB7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdHRoaXMubnVtUGFnZXMgPSBudW1QYWdlcztcblx0dGhpcy5ib29rU3RhdGUgPSBib29rU3RhdGU7XG59IFxuXG5Cb29rLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGluZm8gPSBgJHt0aGlzLnRpdGxlfSBieSAke3RoaXMuYXV0aG9yfSwgJHt0aGlzLm51bVBhZ2VzfSBwYWdlcywgJHt0aGlzLmJvb2tTdGF0ZX1gO1xuXHRcdFx0XG5cdHJldHVybiBpbmZvO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4qIFxuKi9cbmltcG9ydCBCb29rIGZyb20gJy4vbW9kZWwvQm9vay5qcyc7XG5pbXBvcnQgc2hvd0Jvb2tsaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rbGlzdC5qcyc7XG5pbXBvcnQgcHJpbnRNc2cgZnJvbSAnLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcyc7XG5cblxuLy8gVUkgbm9kZXNcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wYXJ0aXRpb25fX2Fib3V0Jyk7XG5jb25zdCBhZGRCb29rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XG5cblxubGV0IG15TGlicmFyeSA9IFtdO1xuXG5jb25zdCB0aGVIb2JiaXQgPSBuZXcgQm9vaygnVGhlIEhvYmJpdCcsICdKLlIuUi4gVG9sa2llbicsIDI5NSwgJ2FscmVhZHkgcmVhZCcpO1xuY29uc3QgdGhlRmVsbG93c2hpcCA9IG5ldyBCb29rKCdUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuY29uc3QgdGhlVHdvVG93ZXJzID0gbmV3IEJvb2soJ1RoZSBUd28gVG93ZXJzJywgJ0ouUi5SLiBUb2xraWVuJywgMzk1LCAnbm90IHJlYWQgeWV0Jyk7XG5jb25zdCB0aGVSZXR1cm5PZlRoZUtpbmcgPSBuZXcgQm9vaygnVGhlIFJldHVybiBvZiB0aGUgS2luZycsICdKLlIuUi4gVG9sa2llbicsIDM5NSwgJ25vdCByZWFkIHlldCcpO1xuXG5teUxpYnJhcnkucHVzaCh0aGVIb2JiaXQsIHRoZUZlbGxvd3NoaXAsIHRoZVR3b1Rvd2VycywgdGhlUmV0dXJuT2ZUaGVLaW5nKTtcbmNoZWNrTGlicmFyeSgpO1xuXG5cbmFib3V0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y29uc29sZS5sb2coJ3Rlc3QgYWJvdXQgc2VjJyk7XG5cdGxldCBtc2cgPSAnV2VsY29tZSwgdG8gdGhlIEpTLUxpYnJhcnkgYW5kIGZlbGwgZnJlZSBzaGFyZSB5b3VyIGJvb2tzIGhlcmUhJztcblx0XG5cdHByaW50TXNnKCdoMycsIG1zZywgJ21lc3NhZ2UtYm9hcmQtbXNnJyk7XG59KTtcblxuXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHQvLyBGb3JtIG5vZGVzXG5cdGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuXHRjb25zdCBub2RlQXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xuXHRjb25zdCBub2RlUGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtLXBhZ2VzJyk7XG5cdGNvbnN0IG5vZGVCb29rTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcy1yZWFkJyk7XG5cdFxuXHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcblx0YWRkQm9va1RvTGlicmFyeShub2RlVGl0bGUudmFsdWUsIG5vZGVBdXRob3IudmFsdWUsIG5vZGVQYWdlcy52YWx1ZSwgbm9kZUJvb2tOb3RlLmNoZWNrZWQpO1xuXHRcblx0Y2xlYXJGb3JtU2hlZXQobm9kZVRpdGxlLCBub2RlQXV0aG9yLCBub2RlUGFnZXMsIG5vZGVCb29rTm90ZSk7XG5cdFxuXHRzaG93Qm9va2xpc3QobXlMaWJyYXJ5KTtcblx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdHJlbW92ZUJvb2tzKCk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUJvb2tOb3RlcygpIHtcblx0Y29uc3QgYm9va05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jvb2stbm90ZScpO1xuXHRcblx0Ym9va05vdGVzLmZvckVhY2gobm90ZSA9PiB7XG5cdFx0bm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Ly9jb25zb2xlLmRpcihlLnRhcmdldCk7XG5cdFx0XHRsZXQgbm90ZUlkID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVJZCk7XG5cdFx0XHRcblx0XHRcdGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2FscmVhZHkgcmVhZCcpIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnbm90IHJlYWQgeWV0JywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1yZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hlY2tCb29rTm90ZShlLnRhcmdldCwgbm90ZUlkLCAnYWxyZWFkeSByZWFkJywgJ2Jvb2tsaXN0LXBhcnRpdGlvbl9fYm9vay1ub3QtcmVhZCcsICdib29rbGlzdC1wYXJ0aXRpb25fX2Jvb2stcmVhZCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVCb29rcygpIHtcblx0Y29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rbGlzdC1wYXJ0aXRpb25fX3JlbW92ZS1idG4nKTtcblx0XG5cdHJlbW92ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHRcdFx0bGV0IGJ0bkluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0XHRcdFxuXHRcdFx0cmVtb3ZlQm9va2Zyb21MaWJyYXJ5KGJ0bkluZGV4KTtcblx0XHRcdFxuXHRcdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0XHRjaGFuZ2VCb29rTm90ZXMoKTtcblx0XHRcdHJlbW92ZUJvb2tzKCk7XG5cdFx0XHRjaGVja0xpYnJhcnkoKTtcblx0XHR9KTtcblx0fSk7XHRcbn0gIFxuXG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGJvb2tzUmVhZCkge1xuICBpZiAodGl0bGUgJiYgYXV0aG9yKSB7XG5cdFx0aWYgKCFudW1QYWdlcykge1xuXHRcdFx0bnVtUGFnZXMgPSAwO1xuXHRcdH1cblx0XHRcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hlY2tlZCB2YWx1ZTogJywgYm9va3NSZWFkKTtcblx0XHRpZiAoYm9va3NSZWFkKSB7XG5cdFx0XHRib29rc1JlYWQgPSAnYWxyZWFkeSByZWFkJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9va3NSZWFkID0gJ25vdCByZWFkIHlldCc7XG5cdFx0fVxuXHRcdFxuXHRcdGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgYm9va3NSZWFkKTtcblx0XHRcblx0XHRteUxpYnJhcnkucHVzaChib29rKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKGBQbGVhc2UsIGZpbGwgYWxsIHRoZSByZXF1aXJlZCBmaWVsZHM6IFRJVExFIGFuZCBBVVRIT1JgKTtcblx0XHRcblx0XHRsZXQgbXNnID0gJ1BsZWFzZSwgZmlsbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkczogVElUTEUgYW5kIEFVVEhPUic7XG5cdFx0XG5cdFx0cHJpbnRNc2coJ2g0JywgbXNnLCAnbWVzc2FnZS1ib2FyZC12YWxpZGF0aW9uJyk7XG5cdH0gIFxufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2tmcm9tTGlicmFyeShib29rSW5kZXgpIHtcblx0bXlMaWJyYXJ5ID0gbXlMaWJyYXJ5LmZpbHRlcigoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCAhPT0gYm9va0luZGV4KSB7XG5cdFx0XHRyZXR1cm4gYm9vaztcblx0XHR9XG5cdH0pO1xuXHRcdFxuXHRjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xufVxuXG5cbi8qIEFVWElMSUFSWSBGVU5DVElPTlMgKi9cbmZ1bmN0aW9uIGNsZWFyRm9ybVNoZWV0KG5vZGVUaXRsZSwgbm9kZUF1dGhvciwgbm9kZVBhZ2VzLCBub2RlQm9va05vdGUpIHtcblx0bm9kZVRpdGxlLnZhbHVlID0gJyc7XG5cdG5vZGVBdXRob3IudmFsdWUgPSAnJztcblx0bm9kZVBhZ2VzLnZhbHVlID0gJyc7XG5cdG5vZGVCb29rTm90ZS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm9va05vdGUobm9kZSwgbm90ZUlkLCBub3RlLCBjc3NUb1JlbW92ZSwgY3NzVG9BZGQpIHtcblx0bXlMaWJyYXJ5Lm1hcCgoYm9vaywgaWR4KSA9PiB7XG5cdFx0aWYgKGlkeCA9PT0gbm90ZUlkKSB7XG5cdFx0XHRib29rLmJvb2tTdGF0ZSA9IG5vdGU7XG5cdFx0fVxuXHR9KTtcblx0XG5cdG5vZGUudGV4dENvbnRlbnQgPSBub3RlO1xuXHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoY3NzVG9SZW1vdmUpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoY3NzVG9BZGQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpYnJhcnkoKSB7XG5cdGlmIChteUxpYnJhcnkubGVuZ3RoID4gMCkge1xuXHRcdHNob3dCb29rbGlzdChteUxpYnJhcnkpO1xuXHRcdGNoYW5nZUJvb2tOb3RlcygpO1xuXHRcdHJlbW92ZUJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3Qgc2lkZUIgPSBuZXcgQm9vaygnWW91ciBCb29rIGhlcmUhJywgJ1RoaXMgaXMgYWxzbyBmb3IgeW91ISA6LSknLCAnQWxsIHRoYXQgeW91IG5lZWQ6ICcsICdub3QgcmVhZCB5ZXQnKTtcblx0XHRteUxpYnJhcnkucHVzaChzaWRlQik7XG5cdFx0XG5cdFx0c2hvd0Jvb2tsaXN0KG15TGlicmFyeSk7XG5cdFx0Y2hhbmdlQm9va05vdGVzKCk7XG5cdFx0cmVtb3ZlQm9va3MoKTtcblx0fVxufVxuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwiYm9va1NoZWxmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNob3dCb29rbGlzdCIsImxpc3QiLCJpbm5lckhUTUwiLCJuZXdOb2RlIiwibWFwIiwiYm9vayIsImlkeCIsImxpIiwiaW1nIiwicHJvcCIsInZhbHVlIiwiZGl2IiwiaDMiLCJ0aXRsZSIsImg1IiwiYXV0aG9yIiwicGFyYTEiLCJudW1QYWdlcyIsInNwYW4iLCJib29rU3RhdGUiLCJyZW1vdmVCdG4iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2VCb2FyZCIsInRoaXJkV2FsbE9ybmFtZW50IiwicXVlcnlTZWxlY3RvciIsInByaW50TXNnIiwibm9kZSIsIm1zZyIsImNzc0NsYXNzIiwibWVzc2FnZSIsIm5ld1VJTm9kZSIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJtc2dUaW1lb3V0Iiwic2V0VGltZW91dCIsImh0bWxUZXh0IiwiY3NzSWQiLCJjc3NQcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibGVuZ3RoIiwiQm9vayIsInByb3RvdHlwZSIsImluZm8iLCJhYm91dFNlY3Rpb24iLCJhZGRCb29rQnRuIiwibXlMaWJyYXJ5IiwidGhlSG9iYml0IiwidGhlRmVsbG93c2hpcCIsInRoZVR3b1Rvd2VycyIsInRoZVJldHVybk9mVGhlS2luZyIsInB1c2giLCJjaGVja0xpYnJhcnkiLCJhZGRFdmVudExpc3RlbmVyIiwibm9kZVRpdGxlIiwibm9kZUF1dGhvciIsIm5vZGVQYWdlcyIsIm5vZGVCb29rTm90ZSIsImNoZWNrZWQiLCJhZGRCb29rVG9MaWJyYXJ5IiwiY2xlYXJGb3JtU2hlZXQiLCJjaGFuZ2VCb29rTm90ZXMiLCJyZW1vdmVCb29rcyIsImJvb2tOb3RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm90ZSIsImUiLCJub3RlSWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImNoZWNrQm9va05vdGUiLCJyZW1vdmVCdG5zIiwiYnRuIiwiYnRuSW5kZXgiLCJyZW1vdmVCb29rZnJvbUxpYnJhcnkiLCJib29rc1JlYWQiLCJib29rSW5kZXgiLCJmaWx0ZXIiLCJjc3NUb1JlbW92ZSIsImNzc1RvQWRkIiwicmVtb3ZlIiwic2lkZUIiXSwic291cmNlUm9vdCI6IiJ9