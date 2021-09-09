import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


const NavBar = () => {
    return (
    <div>
        <Navbar bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">Beauty Krewe</Navbar.Brand>
                  <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/brands">Brands</Nav.Link> */}
                    <Nav.Link href="/influencers">Influencers</Nav.Link>
                    {/* <Nav.Link href="/products">Products</Nav.Link> */}
                  </Nav>
            </Container>
        </Navbar>
    </div>
    )
    
}

export default NavBar;