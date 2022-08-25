/*
* 
*/
import Library from './model/Library.js';

// Components
import showBooklist from './components/Booklist.js';
import showMessageBoard from './components/MessageBoard.js';
import showBookDescription from './components/BookDesc.js';
import { getFormFields, setFormFields, clearFormSheet } from './components/FormDesc.js';

// book data
import { libraryDataArr } from './data/library-data-array.js';

// UI nodes
const aboutSection = document.getElementById('description-partition__about');
const formAddBtn = document.querySelector('.form-partition__add');
const formClearBtn = document.querySelector('.form-partition__clear');
const formEditBtn = document.querySelector('.form-partition__edit');


let currentSelectedBook;
const myBookshelf = new Library('JavaScript Bookshelf');
myBookshelf.addBookList(libraryDataArr);

checkLibrary();


aboutSection.addEventListener('click', () => {
	let message = 'Welcome, to the JS-Library and fell free share your books here!';
	
	showMessageBoard('h3', message, 'message-board-msg');
});


formAddBtn.addEventListener('click', () => {
	let formFields = getFormFields();

  let cashedLibraryLength = myBookshelf.library.length;
    
	addBookToLibrary(formFields.title, formFields.author, formFields.nPages, formFields.bRead);
  
	let bookBoardMsg;
	if (cashedLibraryLength !== myBookshelf.library.length) {
		bookBoardMsg = `Your book "${formFields.title}" was added to the JS-LIBRARY!`;
			
		myBookshelf.library = myBookshelf.library.filter(book => book.title !== 'Your Book here!');
	} else {
		bookBoardMsg = 'Book was not added to the lybrary!';
	} 
    
	clearFormSheet();
	
  currentSelectedBook = null; 
    
	// Render library
	showBooklist(myBookshelf.library);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
    
  showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
}); 


formEditBtn.addEventListener('click', () => {
	// Extract selected book from library
	myBookshelf.library = myBookshelf.library.filter(book => currentSelectedBook.title !== book.title);
	
	let formFields = getFormFields();
	
	let cashedLibraryLength = myBookshelf.library.length;
  
	// Validate fiels, turn into Book object and Add
	addBookToLibrary(formFields.title, formFields.author, formFields.nPages, formFields.bRead);

	let bookBoardMsg;
	if (cashedLibraryLength < myBookshelf.library.length) {
		bookBoardMsg = `The book "${formFields.title}" was edited!`;
	} else {
		bookBoardMsg = `The book "${formFields.title}" was NOT edited!`;
		
		// Validate fiels, turn into Book object and Add
		addBookToLibrary(currentSelectedBook.title, currentSelectedBook.author, currentSelectedBook.numPages, currentSelectedBook.bookRead);
	}
		
	clearFormSheet();
	
	currentSelectedBook = null;
	
	setFormFields(currentSelectedBook);
	
	// Render library
	showBooklist(myBookshelf.library);
	
	// Pass Eventlisteners
	getBookDesc();
	changeBookNotes();
	removeBooks();
     
	console.log(myBookshelf);
	
	showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
});


formClearBtn.addEventListener('click', () => {
	clearFormSheet();
	currentSelectedBook = null;
	setFormFields(currentSelectedBook);
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
			setFormFields(currentSelectedBook);
				
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
		let bookRead = '';
		if (bookState) {
			bookRead = 'already read';
		} else {
			bookRead = 'not read yet';
		}
		
		const newBook = {
				title,
				author,
				numPages,
				bookRead
		};
		
		console.log(bookRead);
		
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
function checkBookNote(node, noteId, note, cssToRemove, cssToAdd) {
	myBookshelf.library.map((book, idx) => {
		if (idx === noteId) {
			book.bookRead = note;
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
        
        showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
	} else {
		const defaultBook = {
            title: 'Your Book here!', 
            author: 'This is also for you! :-)', 
            numPages: 'All that you need: ', 
            bookRead: 'not read yet',
        };
		myBookshelf.addBook(defaultBook);
		
        console.log(myBookshelf);
        
		// Render library
		showBooklist(myBookshelf.library);
		
		// Pass Eventlisteners
		removeBooks();
       
        showBookDescription('h4', bookBoardMsg, 'booklist-partition__board-text2', myBookshelf);
	}
}


