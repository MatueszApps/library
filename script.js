const myLibrary = [
  
];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function showBooks() {

    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        
        // create a new div with for each book

        bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <h3>Name: ${book.name}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        
        `;

        bookList.appendChild(bookItem);
        
    }
}

showBooks();

function addBookToLibrary() {
    const name = document.getElementById('book_name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages_read').value;
    const read = document.getElementById('read_status').checked;
    const submit = document.getElementById('submit');

    myLibrary.push(new Book(name, author, pages, read));
    showBooks();

}

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    addBookToLibrary();
})
