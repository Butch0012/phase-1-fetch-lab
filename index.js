function fetchBooks() {

  // To pass the tests, don't forget to return your fetch!
    fetch('https://anapioficeandfire.com/api/books')
      .then(function (response) {return response.json()}) // Convert the response to JSON
      .then(function(jsInfo) {
        // Calling the renderBooks function and pass the jsInfo
        renderBooks(jsInfo);
      })
      .catch(function(error){
        console.error('Error fetching data:', error);
      });
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
