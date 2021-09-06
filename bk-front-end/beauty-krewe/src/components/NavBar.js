import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#E0BFB8",
    color: "black"
}

const NavBar = () => {
    return (
    <div>
    <Navbar bg="light" variant="light" sticky="top">
    <Container>
    <Navbar.Brand href="/">Beauty Krewe</Navbar.Brand>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/brands">Brands</Nav.Link>
      <Nav.Link href="/influencers">Influencers</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    {/* <Nav justify variant="tabs" bg="light" >
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
    </Nav> */}
    </div>
    )
    
}

export default NavBar;