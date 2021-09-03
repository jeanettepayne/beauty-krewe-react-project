import React from 'react';
import ProductIndex from '../components/ProductIndex';
import { connect } from 'react-redux';
import fetchProducts from '../actions/fetchProducts';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import { Route } from 'react-router-dom'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()    
    }

    render() {
        return(
            <div>
                <Route exact path='/products' render={(routerProps) => <ProductIndex {...routerProps} products={this.props.products} />} />
                {/* <ProductIndex products={this.props.products} /> */}
                {/* <ProductForm /> */}
                {/* add brand={this.props.brand} to productform when wanting to associate with specific brand automatically */}
                <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.brand.products} />} />
                {/* <ProductIndex products={this.props.brand && this.props.brand.products}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);