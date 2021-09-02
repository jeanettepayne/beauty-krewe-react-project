import React from 'react';
import Brand from './Brand';

const BrandIndex = (props) => {

    return(
        <div>
            {props.brands.map(brand => <div key={brand.id}> <Brand brand={brand} /> </div>)}
        </div>
    )

}

export default BrandIndex;