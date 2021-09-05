import React from 'react';

const Product = (props) => {

    console.log(props)
    // debugger;
    let product = props.products[0].filter(product => product.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
            {product.name}
            {/* {product ? product.name : null} */}
            </h2>
            Price: ${product.price}
            <br></br>
            Rating: {product.rating}
            <br></br>
            Description: {product.description}
        
        </div>
    )
}

export default Product;