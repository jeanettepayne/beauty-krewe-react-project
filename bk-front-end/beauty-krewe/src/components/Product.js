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
            <br></br>
            Description: {product.description}
            <br></br>
            <br></br>
            Reccomended by: {product.influencers.map(influencer =>
                <p>{influencer.name}</p>
            )}
        
        </div>
    )
}

export default Product;