import React from 'react';

const Brand = (props) => {

    let brand = props.brands[props.match.params.id - 1]

    return (
        <li>
            {brand ? brand.name : null}
        </li>
    )
}

export default Brand;