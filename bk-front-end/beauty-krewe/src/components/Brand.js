import React from 'react';
// import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import BrandProducts from './BrandProducts';

const Brand = (props) => {
    
    let brand = props.brands[0].filter(brand => brand.id == props.match.params.id)[0]
    
    return (
        <div>
            <h2>
                {brand ? brand.name : null}
                {/* {brand ? null : <Redirect to='/brands'/>} */}
            </h2>

            <BrandProducts brand={brand} />

            {/* <ProductsContainer brand={brand} /> */}
        </div>
    )
}

export default Brand;