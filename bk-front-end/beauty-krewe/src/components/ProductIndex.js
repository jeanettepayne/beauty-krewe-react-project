import React from 'react';
import Product from './Product';

const ProductIndex = (props) => {
    console.log(props)

    return(
        <div>
            {props.products.map(product => <div key={product.id}> <Product product={product} /> </div>)}
        </div>
    )

}

export default ProductIndex;