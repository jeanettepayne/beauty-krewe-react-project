export default function fetchBrands() {
    return (dispatch) => {
    fetch('http://localhost:3001/api/brands')
     .then(response => response.json())
     .then(brands => dispatch({
         type: 'FETCH_BRANDS',
         payload: brands
     }))
    }
}

