import React from 'react';
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
                {/* <Route exact path='/products' render={(routerProps) => <ProductIndex {...routerProps} products={this.props.products} />} /> */}
                <Route path='/products/new' render={(routerProps) => <ProductForm {...routerProps} brands={this.props.brands} products={this.props.products} />}/>
                <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products} />} />
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