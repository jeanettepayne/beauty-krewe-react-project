import React from 'react';

const Influencer = (props) => {
    console.log(props)

    let influencer = props.influencers.filter(influencer => influencer.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
            {influencer.name}
            </h2>

        </div>
    )
}

export default Influencer;