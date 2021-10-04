import React from 'react'
import { Row, Button } from 'react-bootstrap'

const Blog = (props) => {
    const {name, img} = props.blog
    return (
        <Row className="mb-5 pb-4 border-bottom">
            <img className="mb-5" src={img} alt="" />
            <h3>{name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, magni quos similique necessitatibus tenetur excepturi, perferendis eos sit quis consequuntur hic quibusdam dicta doloremque maxime soluta laudantium tempora consequatur possimus.</p>
            <div className="mt-3 d-flex justify-content-between align-items-center"><p>108 <span>Comments</span></p><Button variant="success w-75">Continue Reading</Button></div>
        </Row>
    )
}

export default Blog
