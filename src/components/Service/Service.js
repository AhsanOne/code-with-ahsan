import React from 'react'
import { Badge, Card, Col } from 'react-bootstrap'
import './Service.css'
const Service = (props) => {
    const { name, img, price } = props.course
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className='best-sell-thumb' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Badge className="px-3" pill bg="danger">
                        $ {price}
                    </Badge>{' '}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Service
