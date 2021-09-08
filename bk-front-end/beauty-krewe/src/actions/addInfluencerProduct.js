export default function addInfluencerProduct(data) {
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
        .then(influencersProducts => dispatch({type: 'ADD_INFLUENCERS_PRODUCT', payload: influencersProducts}))
    }
}