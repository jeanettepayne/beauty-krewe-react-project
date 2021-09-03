import React from 'react';
import { Redirect } from 'react-router-dom';

const Brand = (props) => {
    // fix to find brand id, not array item
    let brand = props.brands[props.match.params.id - 1]

    return (
        <h2>
            {brand ? brand.name : null}
            {/* {brand ? null : <Redirect to='/brands'/>} */}
        </h2>
    )
}

export default Brand;