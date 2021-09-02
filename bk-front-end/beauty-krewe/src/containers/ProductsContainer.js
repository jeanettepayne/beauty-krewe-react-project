import React from 'react';
import ProductIndex from '../components/ProductIndex';
import { connect } from 'react-redux';
import fetchProducts from '../actions/fetchProducts';
import Product from '../components/Product';

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()    
    }

    render() {
        return(
            <div>
                <ProductIndex products={this.props.products} />
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