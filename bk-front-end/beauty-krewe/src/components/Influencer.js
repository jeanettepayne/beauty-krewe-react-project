import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'


const Influencer = (props) => {
    console.log(props)

    let influencer = props.influencers.filter(influencer => influencer.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
            {influencer.name}
            </h2>
            <em>
                Recommended Products
            </em>
            {/* fix on refresh - doesn't show list */}
            {/* {influencer.products && influencer.products.map(product => <div key={product.id}> <Link to={`/products/${product.id}`}>{product.name}</Link> </div>)} */}

        {/* // ACCORDION ATTEMPT */}
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Accordion>
            {influencer.products && influencer.products.map(product =>
                <Accordion.Item eventKey={product.id}>
                    <Accordion.Header>{product.name}</Accordion.Header>
                        <Accordion.Body>
                            FIX BRAND ASSOCIATION TO NAME NOT ID <br></br>
                            Brand: {product.brand_id}<br></br>
                            Price: ${product.price}<br></br>
                            Rating: {product.rating}<br></br>
                            Description: {product.description}<br></br>
                            
                        </Accordion.Body>
                </Accordion.Item>)}
        </Accordion>
        </div>


        </div>
    )
}

export default Influencer;