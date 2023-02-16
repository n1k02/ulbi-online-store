import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTyeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className={'d-flex flex-column'}>
            <Button variant={"outline-dark"} className={"mt-4 p-2"} onClick={()=> setTyeVisible(true)}>Add type</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"} onClick={()=> setBrandVisible(true)}>Add brand</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"} onClick={()=> setDeviceVisible(true)}>Add device</Button>
            <CreateType show={typeVisible} onHide={()=> setTyeVisible(false)}/>
            <CreateBrand  show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;