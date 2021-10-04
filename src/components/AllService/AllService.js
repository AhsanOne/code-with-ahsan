import React from 'react'
import { Badge, Card, Col } from 'react-bootstrap'
import './AllService.css'

const AllService = (props) => {
    const {name, img, price} = props.service
    return (
        <Col>
            <Card>
                <Card.Img className="all-service-thumb" variant="top" src={img} />
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

export default AllService
