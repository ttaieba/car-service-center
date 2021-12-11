import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../../../img/expartice.jpg'

const Exparts = () => {



    return (
        <div id="exparts">
            <h1 className="text-center my-5 text-primary">Our Expats</h1>
            <Row xs={1} md={4} className="g-4  text-center ">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Sakib</Card.Title>
                                <Card.Text>
                                    This is a longer card with
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Exparts;