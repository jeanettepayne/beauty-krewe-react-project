import React from 'react';
// import Brand from './Brand';
import { Route, Link } from 'react-router-dom';
import Brand from './Brand';

const BrandIndex = (props) => {
    console.log(props)

    return(
        <div>
            {props.brands && props.brands.map((brand) => <div key={brand.id}> <Link to={`/brands/${brand.id}`}>{brand.name}</Link>  </div>)}
        </div>
    )

}

export default BrandIndex;