import React from 'react';

const Product = (props) => {

    return (
        <li>
            {props.product.name}
        </li>
    )
}

export default Product;