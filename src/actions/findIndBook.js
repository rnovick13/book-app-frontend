export default function findBook(id) {
  debugger
  fetch(`http://localhost:3000/books/${id}`)
    .then(response => response.json())
    .then(resp => {
      debugger
      this.setState({
        book: resp
      })
    })
}
