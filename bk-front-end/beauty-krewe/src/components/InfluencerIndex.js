import React from 'react';

const InfluencerIndex = (props) => {

    return(
        <div>
            {props.influencers.map(influencer => <li> {influencer.name} </li>)}
        </div>
    )

}

export default InfluencerIndex;