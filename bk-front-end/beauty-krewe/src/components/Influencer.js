import React from 'react';

const Influencer = (props) => {
    console.log(props)

    let influencer = props.influencers.filter(influencer => influencer.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
            {influencer.name}
            </h2>
            <h4>
                Recommended Products
            </h4>
            {/* fix on refresh - doesn't show list */}
            {influencer.products && influencer.products.map(product => <div key={product.id}>{product.name}</div>)}

        </div>
    )
}

export default Influencer;