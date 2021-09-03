import React from 'react';

const Product = (props) => {
    console.log(props)
    return (
        <li>
            {/* {props.product.name} */}
            {props.products && props.products.map(product => 
                <li key={product.id}>
                    {product.name}
                </li>)}
        </li>
    )
}

export default Product;