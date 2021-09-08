import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Homepage = (props) => {

    return (
        <div>
            <br></br>
            <h1>Welcome to Beauty Krewe!</h1>
            <h4><em>Your premiere source for beauty product recommendations</em></h4>
            <br></br>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center'}}>
        
            <div className="d-grid gap-2">
                <Link to={'/brands'}><Button variant="secondary" size="lg">
                    Browse by Brand
                </Button></Link>
                <Link to={'/influencers'}><Button variant="secondary" size="lg">
                    Browse by Influencer
                </Button></Link>
                {/* <Link to={'/products'}><Button variant="secondary" size="lg">
                    Browse All Products
                </Button></Link> */}
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