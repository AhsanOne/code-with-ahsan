import React, { useEffect, useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Service from '../Service/Service'

const Services = () => {
    const [courses, setCourses] = useState([])
    const [bestSelling, setBestSelling] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        if (courses.length) {
            const bestSelling = courses.filter(course => course.sales > 30)
            setBestSelling(bestSelling)
        }
    }, [courses])

    const history = useHistory()
    const handleViewAll = () => {
        history.push('/services')
    }
    
    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="text-center mb-5">Best-Selling Courses</h2>
                <Row xs={1} md={2} className="g-4 my-5">
                    {
                        bestSelling.map(bestSell => <Service key={bestSell.key} course={bestSell}></Service>)
                    }
                </Row>
                <Button onClick={handleViewAll} className='w-25 d-block m-auto py-3' variant='danger'>View All Services</Button>
            </Container>
        </div>
    )
}

export default Services
