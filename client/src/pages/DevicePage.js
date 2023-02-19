import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import star from "../assets/star.svg"
import {useLocation, useNavigate, useNavigation, useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(()=> {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className={"mt-4"}>
            <Row>
                <Col md={4}>
                    <Image height={300} width={300} src={process.env.REACT_APP_API_URL + device.img} style={{objectFit: "cover"}}/>
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
                {device.info.map((info, index) =>
                        <Row key={info.id} style={{background:index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title} : {info.description}
                        </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;