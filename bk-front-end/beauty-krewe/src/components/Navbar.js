import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#E0BFB8",
    color: "black"
}

const Navbar = () => {
    return (
    <div>
    <Nav justify variant="tabs" bg="light" >
        <Nav.Item>
            <Nav.Link href="/" bg="light">Home</Nav.Link>
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