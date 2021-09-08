export default function addInfluencersProduct(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/influencersproducts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(influencersProduct => dispatch({type: 'ADD_INFLUENCERS_PRODUCT', payload: influencersProduct}))
    }
}
