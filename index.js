/*
* 
*/
const uiNodeMsg = document.getElementById('form-validate');
const thirdWallOrnament = document.getElementById('third-ornament');

const ulNode = document.getElementById('booklist');
const nodeTitle = document.getElementById('title');
const nodeAuthor = document.getElementById('author');
let nodePages = 0;
let nodeState = false;
const addBookBtn = document.getElementById('add-book');

let bookState = 'not read yet';


addBookBtn.addEventListener('click', () => {
	let title = nodeTitle.value;
	let author = nodeAuthor.value;
	let numPages = nodePages.value;
	let booksRead = nodeState.value;
	
	console.log(numPages);
	console.log(booksRead);
	
	addBookToLibrary(title, author, numPages, booksRead);
});


let myLibrary = [];
            
function Book(title, author, numPages, bookState) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.bookState = bookState;
} 

Book.prototype.info = function() {
	const info = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.bookState}`;
			
	return info;
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const theFellowship = new Book('The Fellowshiop of the Ring', 'J.R.R. Tolkien', 395, 'not read yet');
const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien', 395, 'not read yet');
const theReturnOfTheKing = new Book('The Return of the King', 'J.R.R. Tolkien', 395, 'not read yet');

myLibrary.push(theHobbit, theFellowship, theTwoTowers, theReturnOfTheKing);
//console.log(myLibrary);

showBooklist(myLibrary);




/*
<li class="book" >
	<img class="div-color" src="./public/images/icons8-book-64.png" alt="books icon" />
	<div>
		<h3>The Hobbit</h3>
		<h5>J.R.R. Tolkien</h5>
		<p>295 pages</p>
		<p>
			not read yet 
			<span>
				<input 
					id="is-read"
					type="checkbox"  
					name="is-read" 
				/>
			</span>
		</p>
	</div>
</li>
*/
//createDOMNode(node = 'p', htmlText, cssClass, cssId, cssProps)
function showBooklist(list) {
	let newNode = list.map((book) => {
		const li = createDOMNode('li', '', 'book');
		const img = createDOMNode('img', '', 'div-color', '', [{ prop: 'src', value: './public/images/icons8-book-64.png'}, { prop: 'alt', value: 'books icon'}]);
		const div = createDOMNode('div');
		const h3 = createDOMNode('h3', book.title, '');
		const h5 = createDOMNode('h5', book.author, '');
		const para1 = createDOMNode('p', book.numPages, '');
		const para2 = createDOMNode('p', book.bookState, '');
		const span = createDOMNode('span');
		const input = createDOMNode('input', '', '', 'is-read', [{ prop: 'type', value: 'checkbox'}, { prop: 'name', value: 'is-read'}]);
		
		li.appendChild(img);
		
		div.appendChild(h3);
		div.appendChild(h5);
		div.appendChild(para1);
		
		span.appendChild(input);
		para2.appendChild(span);
		div.appendChild(para2);
		
		li.appendChild(div);
		
		ulNode.appendChild(li);
		
		return li;
	});

	//console.log(newNode);
}






/*
* https://www.tabnine.com/academy/javascript/get-value-of-input/
*/
function addBookToLibrary(title, author, numPages, booksRead) {
  if (title && author) {
		if (!numPages) {
			numPages = 0;
		}
		
		if (!booksRead) {
			booksRead = bookState; //'not read yet';
		}
		
		const book = new Book(title, author, numPages, booksRead);
		
		myLibrary.push(book);
		
		console.log(myLibrary);
	} else {
		console.log(`Please, fill all the required fields: TITLE and AUTHOR`);
		
		printMsg(`Please, fill all the required fields: TITLE and AUTHOR`);
	}  
}

/* AUXILIARY FUNCTIONS */
//createDOMNode(node = 'p', htmlText, cssClass, cssId, ...cssProps)
function createDOMNode(node = 'p', htmlText, cssClass, cssId, cssProps) {
	let newNode = document.createElement(node);
	
	if (htmlText) {
		const textNode = document.createTextNode(htmlText);
		
		newNode.appendChild(textNode);
	}
	
	if (cssClass) {
		newNode.classList.add(cssClass);
	}
	
	if (cssId) {
		newNode.id = cssId;
	}
	
	//console.log(cssProps);
	//console.log(Array.isArray(cssProps));
	if (Array.isArray(cssProps)) {
		for (let i = 0; i < cssProps.length; i += 1) {
			newNode[cssProps[i].prop] = cssProps[i].value;
		}
	}
	
	return newNode;
}

function printMsg(msg = 'Okey dokey!') {
	let message = msg;
	
	let newUINode = createDOMNode(
	'p', message);
	
	thirdWallOrnament.style.marginBottom = '40px';
	uiNodeMsg.style.display = 'block';
	
	console.log(thirdWallOrnament);
	
	
	uiNodeMsg.appendChild(newUINode);
	
	const msgTimeout = setTimeout(() => uiNodeMsg.style.display = 'none', 5000);
}



