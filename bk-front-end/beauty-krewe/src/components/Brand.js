import React from 'react';
// import { Redirect } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import BrandProducts from './BrandProducts';

const Brand = (props) => {
    // fix to find brand id, not array item
    // let brand = props.brands[props.match.params.id - 1]
    let brand = props.brands.filter(brand => brand.id == props.match.params.id)[0]
    console.log(props)
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