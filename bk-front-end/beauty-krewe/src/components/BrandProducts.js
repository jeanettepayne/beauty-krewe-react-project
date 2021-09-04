import React from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../actions/fetchProducts';
import { Link } from 'react-router-dom';


class BrandProducts extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()    
    }


    render() {
        return(
            <div>
                {this.props.brand.products && this.props.brand.products.map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(BrandProducts);