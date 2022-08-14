/*
* 
*/
import Library from './model/Library.js';
// import Book from './model/Book.js';

import showBooklist from './components/Booklist.js';
import showMessageBoard from './components/MessageBoard.js';
import showBookBoard from './components/BookDesc.js';

// book data
import { libraryDataArr } from './data/library-data-array.js';
// import { libraryDataJson } from './data/library-data-json.js';

// UI nodes
const aboutSection = document.getElementById('description-partition__about');
const addBookBtn = document.getElementById('add-book');
const bookshelfBoard = document.getElementById('book-desc');


// let myLibrary = [];
// 
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'already read');
// const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
// const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
// const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');
// 
// myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);


const myBookshelf = new Library('JavaScript Bookshelf');
myBookshelf.addBookList(libraryDataArr);

console.log(myBookshelf.title);
console.log(myBookshelf.library.length);
console.log(myBookshelf.library);

checkLibrary();



aboutSection.addEventListener('click', () => {
	console.log('test about sec');
	let message = 'Welcome, to the JS-Library and fell free share your books here!';
	
	showMessageBoard('h3', message, 'message-board-msg');
});


addBookBtn.addEventListener('click', () => {
	// Form nodes
	const nodeTitle = document.getElementById('title');
	const nodeAuthor = document.getElementById('author');
	const nodePages = document.getElementById('num-pages');
	const nodeBookNote = document.getElementById('is-read');
	
	console.log('input checked value: ', nodeBookNote.checked);
	
	addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);
	
    let bookBoardMsg = `Your book "${nodeTitle.value}" was added to the JS-LIBRARY!`;
    
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
    myLibrary = myLibrary.filter(book => book.title !== 'Your Book here!');
    
	// Render library
	showBooklist(myLibrary);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
    
    // Show bookshelfBoard
    showBookBoard('h4', bookBoardMsg, 'booklist-partition__desc-text2');
}); 


function getBookDesc() {
    const descBtns = document.querySelectorAll('.booklist-partition__bookdesc-btn');

    descBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            //console.dir(e.target);
            let btnId = Number(e.target.getAttribute('data-id'));
            console.log(btnId);
            
            let book = myBookshelf.library.filter((book, idx) => {
                if (idx === btnId) {
                    return book;
                }
            });
            
            let message = book[0].description();

            showBookBoard('h4', book[0].info(), 'booklist-partition__desc-text2');
        });
    });
}


function changeBookNotes() {
	const bookNotes = document.querySelectorAll('#book-note');
	
	bookNotes.forEach(note => {
		note.addEventListener('click', e => {
			//console.dir(e.target);
			let noteId = Number(e.target.getAttribute('data-id'));
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
	const removeBtns = document.querySelectorAll('.booklist-partition__remove-btn');
	
	removeBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			console.log(e.target.getAttribute('data-id'));
			let btnIndex = Number(e.target.getAttribute('data-id'));
			
			removeBookfromLibrary(btnIndex);
			
			// Render Booklist
			showBooklist(myBookshelf.library);
			
			// Pass Eventlisteners
			getBookDesc();
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
		
		const book = new Book(title, author, numPages, booksRead);
		
		myLibrary.push(book);
		
		console.log(myLibrary);
	} else {
		console.log(`Please, fill all the required fields: TITLE and AUTHOR`);
		
		let message = 'Please, fill all the required fields: TITLE and AUTHOR';
		
		showMessageBoard('h4', message, 'message-board-validation');
	}  
}


function removeBookfromLibrary(bookIndex) {
	myBookshelf.library = myBookshelf.library.filter((book, idx) => {
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
	myBookshelf.library.map((book, idx) => {
		if (idx === noteId) {
			book.bookState = note;
		}
	});
	
	node.textContent = note;
	node.classList.remove(cssToRemove);
	node.classList.add(cssToAdd);
}

function checkLibrary() {
	let bookBoardMsg = `${myBookshelf.libSize} book(s) :::  Click on the books to get their descriptions!`;
    
    if (myBookshelf.library.length > 0) {
		myBookshelf.library = myBookshelf.library.filter(book => book.title !== 'Your Book here!');
        
        // Render library
		showBooklist(myBookshelf.library);
		
		// Pass Eventlisteners
		getBookDesc();
		changeBookNotes();
		removeBooks();
        
        // Show bookshelfBoard
        showBookBoard('h4', bookBoardMsg, 'booklist-partition__desc-text2');
	} else {
		const defaultBook = {
            title: 'Your Book here!', 
            author: 'This is also for you! :-)', 
            numPages: 'All that you need: ', 
            bookState: 'not read yet',
        };
		myBookshelf.addBook(defaultBook);
		
		// Render library
		showBooklist(myBookshelf.library);
		
		// Pass Eventlisteners
		removeBooks();
        
        // Show bookshelfBoard
        showBookBoard('h4', bookBoardMsg, 'booklist-partition__desc-text2');
	}
}


