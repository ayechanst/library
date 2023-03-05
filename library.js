const button = document.getElementById('button');
const form = document.getElementById('form');
const removeBtn = document.getElementById('removeBtn');

const library = [];

function makeBook(book) {
  const bookShelf = document.getElementById('bookshelf');
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('container');
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  bookTitle.classList.add('title');
  bookTitle.innerHTML = book.title;
  bookDiv.appendChild(bookTitle);
  // done book title
  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('author');
  bookAuthor.innerHTML = book.author;
  bookDiv.appendChild(bookAuthor);
  // done book author
  const bookPages = document.createElement('p');
  bookPages.classList.add('pages');
  bookPages.innerHTML = book.pages;
  bookDiv.appendChild(bookPages);
  // done book pages
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.addEventListener('click', () => {
    bookDiv.remove();
  });
  bookDiv.appendChild(removeButton);
  // done remove button
  const readStatusButton = document.createElement('button');
  readStatusButton.classList.add('button');
  readStatusButton.innerHTML = 'not read';
  bookDiv.appendChild(readStatusButton);
  readStatusButton.addEventListener('click', () => {
    if (readStatusButton.innerHTML === 'read') {
      readStatusButton.innerHTML = 'not read';
    } else {
      readStatusButton.innerHTML = 'read';
    }
  });
  // done to read/done reading button
  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', `idNum${library.length}`);
  bookContainer.appendChild(bookDiv);
  bookShelf.appendChild(bookContainer);
}

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// end helper functions

button.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title').value;
  const authorInput = document.getElementById('author').value;
  const pagesInput = document.getElementById('pages').value;
  const book = new Book(titleInput, authorInput, pagesInput);
  library.push(book);
  makeBook(library[library.length - 1]);
  form.reset();
  console.log(authorInput);
  console.log(pagesInput);
  console.log(pagesInput);
});

// eslint-disable-next-line no-console
console.log(library);
``;
