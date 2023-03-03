const button = document.getElementById('button');

const library = [
  { title: 'Moby Cock', author: 'Bobby Bob', pages: 420 },
  { title: 'Tom Sawyer', author: 'Mark Twain', pages: 432343 },
  { title: 'Beyond Good and Evil', author: 'Nichze', pages: 2 },
];

function makeBook(book) {
  // make this function set innerHTML to the correct book values (only make one book a time)
  const bookShelf = document.getElementById('bookshelf');
  const bookDiv = document.createElement('div');
  // set the id to the value of the title
  let bookTitle = document.createElement('p');
  bookTitle = book.title;
  bookTitle.innerHTML = book.title;
  bookDiv.appendChild(bookTitle);
  // done book title
  let bookAuthor = document.createElement('p');
  bookAuthor = book.author;
  bookAuthor.innerHTML = book.author;
  bookDiv.appendChild(bookAuthor);
  // done book author
  let bookPages = document.createElement('p');
  bookPages = book.author;
  bookPages.innerHTML = book.pages;
  bookDiv.appendChild(bookPages);
  // done book pages
  bookShelf.appendChild(bookDiv);
}

class Book {
  constructor(title, author, pages) {
    // this makes the object thats it
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
  library.forEach((item) => {
    makeBook(item);
  });
  makeBook(book);
  console.log(authorInput);
  console.log(pagesInput);
  console.log(pagesInput);
});

// make a thing that makes a card

// make a thing that creates sends the card to the html
// use the elemnt

// eslint-disable-next-line no-console
console.log(library);
