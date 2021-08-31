
export default function addProduct(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/products', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}
