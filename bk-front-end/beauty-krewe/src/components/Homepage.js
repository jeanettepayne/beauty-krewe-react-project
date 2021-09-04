import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = (props) => {

    return (
        <div>
            This is the homepage
            <br></br>
            <Link to={'/brands'}>Browse by Brand</Link>
            <br></br>
            Link to browse by Influencer
        </div>
    )
}

export default Homepage;