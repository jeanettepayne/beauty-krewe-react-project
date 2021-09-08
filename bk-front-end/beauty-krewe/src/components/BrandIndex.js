import React from 'react';
// import Brand from './Brand';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const BrandIndex = (props) => {
    console.log(props)

    return(

        <div>
            <h2>
                Brands
            </h2>
            <div className="d-grid gap-2">
            {props.brands && props.brands[0].map(brand => 
                <Link to={`/brands/${brand.id}`}> <Button key={brand.id} variant="secondary">{brand.name}</Button> </Link>)}
            </div>
        </div>
    )

}

export default BrandIndex;