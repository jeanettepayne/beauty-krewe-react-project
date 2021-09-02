import React from 'react';
import Product from './Product';

const ProductIndex = (props) => {
    console.log(props)

    return(
        <div>
            {props.products.map(product => <li key={product.id}> <Product product={product} /> </li>)}
        </div>
    )

}

export default ProductIndex;