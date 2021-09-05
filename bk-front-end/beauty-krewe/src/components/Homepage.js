import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';

const Homepage = (props) => {

    return (
        <div>
            <h1>Welcome to Beauty Krewe!</h1>
            <h4><em>Your premiere source for beauty product recommendations</em></h4>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <CardColumns xs="auto">
            <Card bg="light" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><Link to={'/brands'}>Browse by Brand</Link></Card.Title>
                </Card.Body>
            </Card>
            <br></br>
            <Card bg="light" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><Link to={'/influencers'}>Browse by Influencer</Link></Card.Title>
                </Card.Body>
            </Card>
            <br></br>
            <Card bg="light" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><Link to={'/products'}>Browse All Products</Link></Card.Title>
                </Card.Body>
            </Card>
            </CardColumns>
            </div>
            
        </div>
    )
}

export default Homepage;