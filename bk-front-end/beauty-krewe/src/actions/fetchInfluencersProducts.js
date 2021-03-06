export default function fetchInfluencersProducts() {
    return (dispatch) => {
    fetch('http://localhost:3001/api/influencersproducts')
     .then(response => response.json())
     .then(influencersProducts => dispatch({
         type: 'FETCH_INFLUENCERS_PRODUCTS',
         payload: influencersProducts
     }))
    }
}
