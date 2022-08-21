/*
* 
*/
import Library from './model/Library.js';

// Components
import showBooklist from './components/Booklist.js';
import showMessageBoard from './components/MessageBoard.js';
import showBookDescription from './components/BookDesc.js';
import showSelectedBook from './components/SelectedBook.js';

// book data
import { libraryDataArr } from './data/library-data-array.js';

// UI nodes
const aboutSection = document.getElementById('description-partition__about');
const formAddBtn = document.querySelector('.form-partition__add');
const formClearBtn = document.querySelector('.form-partition__clear');
const formEditBtn = document.querySelector('.form-partition__edit');
const bookshelfBoard = document.getElementById('book-desc');
const currentSelectBookTitle = document.querySelector('.form-partition__selected');

let currentSelectedBook;
const myBookshelf = new Library('JavaScript Bookshelf');
myBookshelf.addBookList(libraryDataArr);

checkLibrary();


aboutSection.addEventListener('click', () => {
	console.log('test about section');
	let message = 'Welcome, to the JS-Library and fell free share your books here!';
	
	showMessageBoard('h3', message, 'message-board-msg');
});


formAddBtn.addEventListener('click', () => {
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
        bookBoardMsg = 'Book was not added to the lybrary!';
    }
   
    
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
    
    
	// Render library
	showBooklist(myBookshelf.library);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
    
    
    // console.log(myBookshelf);
    
    // Show bookshelfBoard
    showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
}); 


formEditBtn.addEventListener('click', () => {
	// Extract selected book from library
	myBookshelf.library = myBookshelf.library.filter(book => currentSelectedBook.title !== book.title);
	
	// Form nodes
	const nodeTitle = document.getElementById('title');
	const nodeAuthor = document.getElementById('author');
	const nodePages = document.getElementById('num-pages');
	const nodeBookNote = document.getElementById('is-read');
	
	let cashedLibraryLength = myBookshelf.library.length;
    
	addBookToLibrary(nodeTitle.value, nodeAuthor.value, nodePages.value, nodeBookNote.checked);

    
    let bookBoardMsg;
    if (cashedLibraryLength < myBookshelf.library.length) {
        bookBoardMsg = `The book "${nodeTitle.value}" was edited!`;
    } else {
        bookBoardMsg = `The book "${nodeTitle.value}" was NOT edited!`;
				
				addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookState);
    }
		
	
	// Render library
	showBooklist(myBookshelf.library);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
     
	console.log(myBookshelf);
	
	// Show bookshelfBoard
	showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
	
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
});


formClearBtn.addEventListener('click', () => {
	// Form nodes
	const nodeTitle = document.getElementById('title');
	const nodeAuthor = document.getElementById('author');
	const nodePages = document.getElementById('num-pages');
	const nodeBookNote = document.getElementById('is-read');
	
	clearFormSheet(nodeTitle, nodeAuthor, nodePages, nodeBookNote);
	
	let msg = 'There is no selected book!';
	currentSelectBookTitle.textContent = msg;
	
	currentSelectedBook = null;
	formAddBtn.disabled = false;
	formEditBtn.disabled = true;
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
            
						// Deep copy
						currentSelectedBook = JSON.parse(JSON.stringify(book[0]));
						//console.log(currentSelectedBook);
						showSelectedBook(currentSelectedBook);
						
            // Alternative book method details
            let message = book[0].description();

            showBookDescription('h4', book[0].info(), 'booklist-partition__board-text2', myBookshelf);
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
	
	currentSelectedBook = null;
	formAddBtn.disabled = false;
	formEditBtn.disabled = true;
	
	console.log(myBookshelf);
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
        showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
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
        showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
	}
}


