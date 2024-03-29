import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.svg'
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={"mt-3"}>
            <Card style ={{width: 150, cursor: "pointer"}} border={"light"}  onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className={"d-flex justify-content-between align-items-center mt-1 text-black-50"}>
                    <div>Samsung...</div>
                    <div className={"d-flex align-items-center"}>
                        <div className={'me-1'}>{device.rating}</div>
                        <Image src={star} width={18} height={18}></Image>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;