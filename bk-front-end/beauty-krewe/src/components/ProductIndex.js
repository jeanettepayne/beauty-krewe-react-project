import React from 'react';
// import Product from './Product';
import { Route, Link } from 'react-router-dom';

const ProductIndex = (props) => {
    console.log(props)

    return(
        <div>
            {/* {props.products && props.products.map(product => <div key={product.id}> <Product product={product} /> </div>)} */}
            {/* testing */}
            {props.products && props.products[0].map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)}
            {props.products && props.products[1].map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)}
            
        </div>
    )

}

export default ProductIndex;