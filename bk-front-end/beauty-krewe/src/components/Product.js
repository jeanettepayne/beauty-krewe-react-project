import React from 'react';

const Product = (props) => {
    console.log(props)

    let product = props.products.filter(product => product.id == props.match.params.id)[0]
    console.log(product)
    return (
        <li>
            {/* {props.product.name} */}
            {/* {props.products && props.products.map(product =>  */}
                <div key={product.id}>
                    test name
                    {product.name}
                </div>
                {/* } */}
        </li>
    )
}

export default Product;