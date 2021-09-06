import React from 'react';
import ProductIndex from '../components/ProductIndex';
import { connect } from 'react-redux';
import fetchProducts from '../actions/fetchProducts';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';
import { Route, Switch } from 'react-router-dom'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()    
    }

    render() {
        return(
            <div>
              <Switch>
                <Route exact path='/products' render={(routerProps) => <ProductIndex {...routerProps} products={this.props.products} />} />
                <Route path='/products/new' render={(routerProps) => <ProductForm {...routerProps} brands={this.props.brands} products={this.props.products} />}/>
                {/* component={ProductForm} add back to products/new */}
                {/* <Route exact path='/products/new' <ProductForm /> /> */}
                {/* <ProductIndex products={this.props.products} /> */}
                {/* <ProductForm /> */}
                {/* add brand={this.props.brand} to productform when wanting to associate with specific brand automatically */}
                <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} />
                {/* above was products={this.props.brand.products} - wasn't getting sent to Product.js */}
                {/* <ProductIndex products={this.props.brand && this.props.brand.products}/> */}
              </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productReducer.products,
        brands: state.brandReducer.brands
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);