import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const ProductIndex = (props) => {
    console.log(props)

    return(
        <div>
            <h2>
                All Products
            </h2>
            {/* {props.products && props.products.map(product => <div key={product.id}> <Product product={product} /> </div>)} */}
            {/* UNCOMMENT LINE BELOW IF ACCORDION DOES NOT WORK */}
            {/* {props.products && props.products[0].map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)} */}
            {/* {props.products && props.products[1].map(product => <div key={product.id}> <Link to={`/products/${product.id}`}> {product.name} </Link> </div>)} */}


            {/* // ACCORDION ATTEMPT */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Accordion>
                {props.products[0] && props.products[0].map(product =>
                    <Accordion.Item eventKey={product.id}>
                        <Accordion.Header>{product.name} - <i>{product.brand}</i></Accordion.Header>
                            <Accordion.Body>
                                Brand: {product.brand.name}<br></br>
                                Price: ${product.price}<br></br>
                                Rating: {product.rating}<br></br>
                                Description: {product.description}<br></br>
                            
                            </Accordion.Body>
                    </Accordion.Item>)}

                    {/* FOR USE WITH EXTERNAL API
                    {props.products[1] && props.products[1].map(product =>
                    <Accordion.Item eventKey={product.id}>
                        <Accordion.Header>{product.name} - <i>{product.brand}</i></Accordion.Header>
                            <Accordion.Body>
                                Price: ${product.price}<br></br>
                                Consider taking rating out
                                Rating: {product.rating}<br></br>
                                {product.description}<br></br>
                            
                            </Accordion.Body>
                    </Accordion.Item>)} */}
            </Accordion>
        </div>
            
        </div>
    )

}

export default ProductIndex;