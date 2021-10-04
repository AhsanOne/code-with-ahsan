import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Text>&copy; Copyright 2020 codewithahsan.com</Navbar.Text>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Privacy Policy</Nav.Link>
                    <Nav.Link href="#features">Terms of Service</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
