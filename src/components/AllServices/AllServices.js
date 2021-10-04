import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import AllService from '../AllService/AllService'

export const AllServices = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className='py-5'>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        allServices.map(service => <AllService key={service.key} service={service}></AllService>)
                    }
                </Row>
            </Container>
        </div>
    )
}
