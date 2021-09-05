import React from 'react';

// class Product extends React.Component {
    

//     // let product = props.products.filter(product => product.id == props.match.params.id)[0]
//     render() {
//         // let product = props.product.filter(product => product.id == props.match.params.id)[0]
//         let product = this.props.product
//         return (
//             <div>
//                 {product.name}
//                 {/* {props.products && props.products.map(product =>  */}
//                     {/* <div key={this.props.product.id}> */}
//                         test name
//                         {/* {product.name} */}
//                     {/* </div> */}
//                     {/* } */}
//             </div>
//         )
//     }
// }

// export default Product;

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

            {/* <ProductsContainer brand={brand} /> */}
        </div>
    )
}

export default Product;