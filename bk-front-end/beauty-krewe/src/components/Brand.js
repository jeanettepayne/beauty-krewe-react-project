import React from 'react';
import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';

const Brand = (props) => {
    // fix to find brand id, not array item
    let brand = props.brands[props.match.params.id - 1]

    return (
        <div>
            <h2>
                {brand ? brand.name : null}
                {/* {brand ? null : <Redirect to='/brands'/>} */}
            </h2>

            <ProductsContainer brand={brand} />
        </div>
    )
}

export default Brand;