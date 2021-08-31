import React from 'react';

const ProductIndex = (props) => {

    return(
        <div>
            {props.products.map(product => <li> {product.name} </li>)}
        </div>
    )

}

export default ProductIndex;