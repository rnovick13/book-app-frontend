export default function removeFavorite() {
  return (dispatch) => {
  unfavorite = (animalId) => {
    this.setState({favorites: this.state.favorites.filter(animal => animal.id != animalId)})
  }
}
}
