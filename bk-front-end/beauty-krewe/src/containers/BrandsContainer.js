import React from 'react';
import BrandIndex from '../components/BrandIndex';
import { connect } from 'react-redux';
import fetchBrands from '../actions/fetchBrands';

class BrandsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBrands()    
    }

    render() {
        return(
            <div>
                <BrandIndex brands={this.props.brands} />
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