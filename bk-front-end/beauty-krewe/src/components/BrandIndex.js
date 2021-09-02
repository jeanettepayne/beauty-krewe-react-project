import React from 'react';
import Brand from './Brand';
import { Route, Link } from 'react-router-dom';

const BrandIndex = (props) => {

    return(
        <div>
            {props.brands.map(brand => <div key={brand.id}> <Link path={`/brands/${brand.id}`}>{brand.name}</Link>  </div>)}
        </div>
    )

}

export default BrandIndex;

{/* <Brand brand={brand} /> */}