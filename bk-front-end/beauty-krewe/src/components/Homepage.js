import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = (props) => {

    return (
        <div>
            <h3>Welcome to Beauty Krewe!</h3>
            <h4><em>Your premiere source for beauty product recommendations</em></h4>
            <br></br>
            <Link to={'/brands'}>Browse by Brand</Link>
            <br></br>
            Link to browse by Influencer
        </div>
    )
}

export default Homepage;