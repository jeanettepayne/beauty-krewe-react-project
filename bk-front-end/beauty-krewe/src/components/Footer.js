import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        // <div className="footer">
        //     Beauty Krewe©2021
        // </div>

        <div>
            <Navbar bg="light" variant="light" sticky="bottom" style={{display: 'flex', justifyContent: 'center'}}>
            Beauty Krewe©2021
            </Navbar>
        </div>
    );
}

export default Footer;