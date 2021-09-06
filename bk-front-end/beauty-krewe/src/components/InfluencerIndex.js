import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const InfluencerIndex = (props) => {

    return(
        <div>
            <h2>
                Influencers
            </h2>
            {props.influencers && props.influencers.map(influencer => 
                   <div key={influencer.id}> <Link to={`/influencers/${influencer.id}`}> {influencer.name} </Link></div>)}
        </div>

        // <div>
        //     <h2>Influencers</h2>
        //     <div style={{display: 'flex', justifyContent: 'center'}}>
        //     <Accordion flush>
            
                // <Accordion.Item>
                   //{props.influencers && props.influencers.map(influencer => 
                    // <Accordion.Header eventKey={influencer.id}> {influencer.name} </Accordion.Header>
                    
               // )}
                //</Accordion.Item> 
                
                     

        //     </Accordion>
        //     </div>
        // </div>
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