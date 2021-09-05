export default function fetchApi() {
    return (dispatch) => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
     .then(response => response.json())
     .then(products => dispatch({
         type: 'FETCH_PRODUCTS_API',
         payload: products,

        //  type: 'FETCH_BRANDS_API',
        //  payload: [...new Set(products.map(product => product.brand))]
     }))
    }
}