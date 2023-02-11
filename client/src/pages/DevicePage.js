import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import star from "../assets/star.svg"

const DevicePage = () => {
    const device = {id: 2, name: "S20+", price: 3000, rating: 0, img: "632a2d08-f84c-4d8d-9699-cc6cbadfb5b8.jpg"};
    device.img = "https://w.wallhaven.cc/full/zm/wallhaven-zm9kpy.jpg"
    const description = [
        {id:1, title: "RAM", description: '8Gb'},
        {id:2, title: "Camera", description: '64Mp'},
        {id:3, title: "Processor", description: 'Exynos 2100'},
    ]
    return (
        <Container className={"mt-4"}>
            <Row>
                <Col md={4}>
                    <Image height={300} width={300} src={device.img} style={{objectFit: "cover"}}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2 className={"d-flex justify-content-center"}>{device.name}</h2>
                        <div
                            className={"d-flex align-items-center justify-content-center"}
                            style={{
                                background: `url(${star}) center / cover no-repeat`,
                                width: 240,
                                height: 240,
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className={"d-flex flex-column justify-content-around align-items-center"}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: ${device.price}</h3>
                        <Button variant={"outline-dark"}>Add to card</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1>Description</h1>
                {description.map((info, index) =>
                        <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title} : {info.description}
                        </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;