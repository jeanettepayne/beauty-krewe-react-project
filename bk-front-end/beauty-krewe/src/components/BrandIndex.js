import React from 'react';

const BrandIndex = (props) => {

    return(
        <div>
            {props.brands.map(brand => <li> {brand.name} </li>)}
        </div>
    )

}

export default BrandIndex;