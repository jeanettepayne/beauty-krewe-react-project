import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    color: "black"
}

const Navbar = () => {
    return (
    <div>
     {/* <NavLink  */}
    {/* //         to='/'
    //         exact
    //         style={link}
    //         activeStyle={{
    //             background: "white",
    //         }}
    //     >
    //     Home
    //     </NavLink>

    //     <NavLink 
    //         to='/products'
    //         exact
    //         style={link}
    //         activeStyle={{
    //             background: "white",
    //         }}
    //     >
    //     Products
    //     </NavLink> */}

    <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/brands">Brands</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/influencers">
            Influencers
            </Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/products">Products</Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
    )
    
}

export default Navbar;