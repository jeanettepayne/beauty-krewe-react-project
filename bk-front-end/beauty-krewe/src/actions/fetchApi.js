export default function fetchApi() {
    return (dispatch) => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
     .then(response => response.json())
     .then(products => dispatch({
         type: 'FETCH_PRODUCTS',
         payload: products
     }))
    }
}