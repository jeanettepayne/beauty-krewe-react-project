import React from 'react';
import Product from './Product';

const ProductIndex = (props) => {

    return(
        <div>
            {props.products && props.products.map(product => <div key={product.id}> <Product product={product} /> </div>)}
            {/* product index */}
        </div>
    )

}

export default ProductIndex;