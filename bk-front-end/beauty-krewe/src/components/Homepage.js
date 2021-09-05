import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const Homepage = (props) => {

    return (
        <div>
            <h1>Welcome to Beauty Krewe!</h1>
            <h4><em>Your premiere source for beauty product recommendations</em></h4>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* <CardColumns xs="auto">
            <Card bg="light-blue" border="dark" style={{ width: '18rem' }}>
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
            </CardColumns> */}
            <div className="d-grid gap-2">
                <Link to={'/brands'}><Button variant="secondary" size="lg">
                    Browse by Brand
                </Button></Link>
                <Link to={'/influencers'}><Button variant="secondary" size="lg">
                    Browse by Influencer
                </Button></Link>
                <Link to={'/products'}><Button variant="secondary" size="lg">
                    Browse All Products
                </Button></Link>
            </div>
            </div>
            
        </div>
    )
}

{/* <Link to="/page2"><button>
              Go to Page 2 
            </button>
            </Link> */}
export default Homepage;