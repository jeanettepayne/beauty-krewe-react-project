import React from 'react';
import { Link } from 'react-router-dom';

const InfluencerIndex = (props) => {

    return(
        <div>
            <h2>
                Influencers
            </h2>
            {props.influencers && props.influencers.map(influencer => <div key={influencer.id}> <Link to={`/influencers/${influencer.id}`}> {influencer.name} </Link></div>)}
        </div>
    )

}

export default InfluencerIndex;

// {props.brands.map(brand => <div key={brand.id}> <Link to={`/brands/${brand.id}`}>{brand.name}</Link>  </div>)}