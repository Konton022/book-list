import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NaviBar = () => {
    return (
        <Navbar className='mb-3' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href='#home'>Library of Books</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#contacts'>Contacts</Nav.Link>
                    <Nav.Link href='#'>Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NaviBar;
