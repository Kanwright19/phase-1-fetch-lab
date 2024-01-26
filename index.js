function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => {
        console.log(resp); 
        return resp.json();
      })
    .then(books => renderBooks(books))
    .catch(error => {
      console.error('Error:', error);
    })
  };
  
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if(!response.ok) {
        throw new Error (response.statusText)
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data)
    })
    .catch(error => {
      console.error('Error fetching books:' , error);
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

module.exports ={fetchBooks , renderBooks}; 