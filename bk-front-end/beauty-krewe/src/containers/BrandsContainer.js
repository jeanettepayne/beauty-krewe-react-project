import React from 'react';
import BrandIndex from '../components/BrandIndex';
import { connect } from 'react-redux';
import fetchBrands from '../actions/fetchBrands';
import { Route } from 'react-router-dom';

class BrandsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBrands()    
    }

    render() {
        return(
            <div>
                <Route exact path='/brands' render={() => < BrandIndex brands={this.props.brands} />} />
                {/* <BrandIndex brands={this.props.brands} /> */}
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