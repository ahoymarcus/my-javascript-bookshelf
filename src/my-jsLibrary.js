/*
* 
*/
import Library from './model/Library.js';

import showBooklist from './components/Booklist.js';
import showMessageBoard from './components/MessageBoard.js';
import showBookBoard from './components/BookDesc.js';

// book data
import { libraryDataArr } from './data/library-data-array.js';

// UI nodes
const aboutSection = document.getElementById('description-partition__about');
const addBookBtn = document.getElementById('add-book');
const bookshelfBoard = document.getElementById('book-desc');


const myBookshelf = new Library('JavaScript Bookshelf');
myBookshelf.addBookList(libraryDataArr);

checkLibrary();



aboutSection.addEventListener('click', () => {
	console.log('test about section');
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
	
    let cashedLibraryLength = myBookshelf.library.length;
    
	addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);

    
    let bookBoardMsg;
    if (cashedLibraryLength !== myBookshelf.library.length) {
        bookBoardMsg = `Your book "${nodeTitle.value}" was added to the JS-LIBRARY!`;
        
        myBookshelf.library = myBookshelf.library.filter(book => book.title !== 'Your Book here!');
    } else {
        bookBoardMsg = 'Click on the books to get their descriptions!';
    }
   
    
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
    
    
	// Render library
	showBooklist(myBookshelf.library);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
    
    
    console.log(myBookshelf);
    
    // Show bookshelfBoard
    showBookBoard('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
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
            
            // Alternative book method details
            let message = book[0].description();

            showBookBoard('h4', book[0].info(), 'booklist-partition__board-text2', myBookshelf);
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
		
        const newBook = {
            title,
            author,
            numPages,
            bookState
        };
		
		myBookshelf.addBook(newBook);
		
		console.log(myBookshelf.library);
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
	let bookBoardMsg = 'Click on the books to get their descriptions!';
    
    if (myBookshelf.library.length > 0) {
		myBookshelf.library = myBookshelf.library.filter(book => book.title !== 'Your Book here!');
        
        // Render library
		showBooklist(myBookshelf.library);
		
		// Pass Eventlisteners
		getBookDesc();
		changeBookNotes();
		removeBooks();
        
        // Show bookshelfBoard
        showBookBoard('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf, myBookshelf);
	} else {
		const defaultBook = {
            title: 'Your Book here!', 
            author: 'This is also for you! :-)', 
            numPages: 'All that you need: ', 
            bookState: 'not read yet',
        };
		myBookshelf.addBook(defaultBook);
		
        console.log(myBookshelf);
        
		// Render library
		showBooklist(myBookshelf.library);
		
		// Pass Eventlisteners
		removeBooks();
        
        // Show bookshelfBoard
        showBookBoard('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
	}
}


