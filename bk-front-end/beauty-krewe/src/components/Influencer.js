import React from 'react';
import { Link } from 'react-router-dom';


const Influencer = (props) => {
    console.log(props)

    let influencer = props.influencers.filter(influencer => influencer.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
            {influencer.name}'s Recommendations
            </h2>
                

            {/* <em>
                Recommended Products
            </em> */}
            <br></br>
            {influencer.products && influencer.products.map(product =>
               <li>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
               </li>)}
            <br></br>
            <Link to={`/influencersproducts/new`}>
            Add Product to {influencer.name}'s Recommended Items List
            </Link>

        </div>
    )
}

export default Influencer;