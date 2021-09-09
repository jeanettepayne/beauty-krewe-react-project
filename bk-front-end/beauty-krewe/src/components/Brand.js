import React from 'react';
import BrandProducts from './BrandProducts';
import ProductForm from './ProductForm';
import { withRouter } from 'react-router';

const Brand = (props) => {
    console.log(props.history)
    
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

export default withRouter(Brand);

// import React from 'react';
// import { connect } from 'react-redux';

// class Brand extends React.Component {
//     render() {
//         return(

//         )
//     }
     
// }

// mapStateToProps = (state, ownProps) => {
//     return {
//         brand: state.brands
//     }
// }

// export default connect(mapStateToProps)(Brand);