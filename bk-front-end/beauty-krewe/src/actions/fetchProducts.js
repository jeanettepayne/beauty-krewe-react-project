// export default function fetchProducts() {
//     return (dispatch) => {
//     Promise.all([
//     fetch('http://localhost:3001/api/products'),
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
//     ]).then(function (responses) {
//         return Promise.all(responses.map(function (response) {
//             return response.json();
//         }));
//     }).then(function (products) {
//         console.log(products)
//         dispatch({
//             type: 'FETCH_PRODUCTS',
//             payload: products
//         })
//     })
//     }
// }

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