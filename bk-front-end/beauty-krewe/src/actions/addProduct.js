// import history from "../components/history"

export default function addProduct(data, history) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/products', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(product => {
            dispatch({type: 'ADD_PRODUCT', payload: product})
            history.push(`/products/${product.id}`)
    
        })
    }
}

