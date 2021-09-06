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
import Accordion from 'react-bootstrap/Accordion'

const BrandProducts = (props) => {

    return(
        <div>
            {/* {props.brand.products.map(product => <div key={product.id}> <Link to={`/products/${product.id}`}>{product.name}</Link>  </div>)}
            <br></br> */}

        {/* // ACCORDION ATTEMPT */}
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Accordion>
                {props.brand.products && props.brand.products.map(product =>
                    <Accordion.Item eventKey={product.id}>
                        <Accordion.Header>{product.name}</Accordion.Header>
                            <Accordion.Body>
                                ${product.price}<br></br>
                                {product.description}<br></br>
                                <br></br>
                                <em>Recommended by</em>

                            
                            </Accordion.Body>
                    </Accordion.Item>)}
            </Accordion>
        </div>


            Don't see the product you're looking for? Add it <Link to={`/products/new`}>here!</Link>
        </div>
    )

}

export default BrandProducts;

{/* <Brand brand={brand} /> */}