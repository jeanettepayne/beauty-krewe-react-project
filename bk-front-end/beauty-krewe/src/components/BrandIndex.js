import React from 'react';
import Brand from './Brand';

const BrandIndex = (props) => {

    return(
        <div>
            {props.brands.map(brand => <li key={brand.id}> <Brand brand={brand} /> </li>)}
        </div>
    )

}

export default BrandIndex;