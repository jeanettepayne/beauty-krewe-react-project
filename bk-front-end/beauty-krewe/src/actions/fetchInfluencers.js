export default function fetchInfluencers() {
    return (dispatch) => {
    fetch('http://localhost:3001/api/influencers')
     .then(response => response.json())
     .then(influencers => dispatch({
         type: 'FETCH_INFLUENCERS',
         payload: influencers
     }))
    }
}
