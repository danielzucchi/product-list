import axios from 'axios'

const fetchProducts = () =>
  axios
    .get('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
    .then((response) => response)

export default fetchProducts
