import React from 'react';
import BrandProducts from './BrandProducts';

const Brand = (props) => {
    
    let brand = props.brands[0].filter(brand => brand.id == props.match.params.id)[0]
    
    return (
        <div>
            <h2>
                {/* {brand ? null : <Redirect to='/brands' />} */}
                {brand ? brand.name : null}
            </h2>

            <BrandProducts brand={brand} />
        </div>
    )
}

export default Brand;