import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const InfluencerIndex = (props) => {

    return(

        <div>
            <h2>
                Influencers
            </h2>
            <div className="d-grid gap-2">
            {props.influencers && props.influencers.map(influencer => 
                <Link to={`/influencers/${influencer.id}`}> <Button key={influencer.id} variant="secondary">{influencer.name}</Button> </Link>)}
            </div>
        </div>

    )

}

export default InfluencerIndex;

  /* <Accordion.Body>
                            {influencer.products.map(product => <Link to={`/products/${product.id}`}>{product.name}</Link>)}
                         </Accordion.Body> */ 

// {props.brands.map(brand => <div key={brand.id}> <Link to={`/brands/${brand.id}`}>{brand.name}</Link>  </div>)}


/* <Accordion.Item>
                    <Accordion.Header>Test</Accordion.Header>
                    <Accordion.Body>
                    Testing 123<br></br>
                    again this is a test<br></br>
                    dear jesus why isn't this working<br></br>
                    </Accordion.Body>
                </Accordion.Item>  */