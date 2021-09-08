export default function fetchProducts() {
    return (dispatch) => {
    fetch('http://localhost:3001/api/products')
     .then(response => response.json())
     .then(products => dispatch({
         type: 'FETCH_PRODUCTS',
         payload: products
     }))
    }
}