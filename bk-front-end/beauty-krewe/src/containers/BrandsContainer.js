import React from 'react';
import BrandIndex from '../components/BrandIndex';
import { connect } from 'react-redux';
import fetchBrands from '../actions/fetchBrands';
import { Route } from 'react-router-dom';
import Brand from '../components/Brand';
// import Product from '../components/Product';

class BrandsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBrands()    
    }

    render() {
        return(
            <div>
                <Route exact path='/brands' render={(routerProps) => <BrandIndex {...routerProps} brands={this.props.brands} />} />
                {/* <BrandIndex brands={this.props.brands} /> */}
                <Route path='/brands/:id' render={(routerProps) => <Brand {...routerProps} brands={this.props.brands} />} />
                {/* <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.brand.products} />} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        brands: state.brands
    }
}

export default connect(mapStateToProps, {fetchBrands})(BrandsContainer);