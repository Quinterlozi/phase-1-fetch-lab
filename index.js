//In this code, we use the fetch() function to make a request to the API.
// We then chain two then() methods to the promise returned by fetch(). 
//The first then() method converts the response to JSON format, and the second then() method calls the renderBooks() function and passes in the JSON data as an argument.

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then (response => response.json())
  .then(data => renderBooks(data));
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
