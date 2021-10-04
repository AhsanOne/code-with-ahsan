import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col-md-12 text-center">
                        <h1 className='display-1'>404</h1>
                        <div className="mb-4 lead">The page you are looking for was not found.</div>
                        <Nav.Link as={Link} to='/home'>Back to Home</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NotFound
