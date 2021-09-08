import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'

const BrandProducts = (props) => {

    return(
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Accordion>
                {props.brand.products && props.brand.products.map(product =>
                    <Accordion.Item eventKey={product.id}>
                        <Accordion.Header>{product.name}</Accordion.Header>
                            <Accordion.Body>
                                ${product.price}<br></br>
                                {product.description}<br></br>
                                <br></br>
                                {/* <em>Recommended by</em>
                                <br></br>
                                {product.influencers.map(influencer =>
                                    <p>{influencer.name}</p>
                                )} */}
                            
                            </Accordion.Body>
                    </Accordion.Item>)}
            </Accordion>
        </div>


            Don't see the product you're looking for? Add it <Link to={`/products/new`}>here!</Link>
      </div>
    )

}

export default BrandProducts;

{/* <Brand brand={brand} /> */}