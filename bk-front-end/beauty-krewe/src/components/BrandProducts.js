// import React from 'react';
// import { connect } from 'react-redux';
// import fetchProducts from '../actions/fetchProducts';
// import { Route, Link } from 'react-router-dom';
// import Product from './Product';


// class BrandProducts extends React.Component {

//     componentDidMount() {
//         this.props.fetchProducts()    
//     }


//     render() {
//         return(
//             <div>
//             {/* <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} /> */}
//             {this.props.brand.products && this.props.brand.products.map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         products: state.products
//     }
// }

// export default connect(mapStateToProps, {fetchProducts})(BrandProducts);

import React from 'react';
// import Brand from './Brand';
import { Route, Link } from 'react-router-dom';

const BrandProducts = (props) => {

    return(
        <div>
            {props.brand.products.map(product => <div key={product.id}> <Link to={`/products/${product.id}`}>{product.name}</Link>  </div>)}
        </div>
    )

}

export default BrandProducts;

{/* <Brand brand={brand} /> */}