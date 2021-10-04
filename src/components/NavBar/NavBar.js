import React from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand='lg'>
                <Container>
                    <Navbar.Brand href="#home">Codewithahsan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Button variant="danger" className='ms-lg-4'>Sign Up</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
