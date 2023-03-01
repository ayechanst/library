const form = document.getElementById('form');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');

const library = [
  { title: 'Moby Cock', author: 'Bobby Bob', pages: 420 },
  { title: 'Tom Sawyer', author: 'Mark Twain', pages: 432343 },
  { title: 'Beyond Good and Evil', author: 'Nichze', pages: 2 },
];

class Book {
  constructor(title, author, pages) {
    // this makes the object thats it
    this.title = title;
    this.author = author;
    this.pages = pages;
    return {};
  }
}

form.addEventListener('submit', () => {
  Book(title, author, pages);
});

function addBook() {
  library.push(book);
}

console.log(library);
