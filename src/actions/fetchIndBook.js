export function fetchIndBook() {
  
}



getBook = (id) => {
  const url = `http://localhost:3000/books/${id}`
  fetch(url)
    .then(response => response.json())
    .then(book => this.setState({display: book}))
  }
