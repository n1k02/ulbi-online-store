import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={'my-2'}>
                        <Dropdown.Toggle>{device.selectedType.name || "Choose type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'my-2'}>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={'mt-3'}
                        placeholder={'Device name'}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className={'mt-3'}
                        placeholder={'Device price'}
                        type={'number'}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={'Device image'}
                        type={'file'}
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i => <Row className={'mt-2'} key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                placeholder={"Prop's name"}
                                value={i.title}
                                onChange={e => changeInfo('title', e.target.value, i.number)}
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder={'Description'}
                                value={i.description}
                                onChange={e => changeInfo('description', e.target.value, i.number)}
                            />
                        </Col>
                        <Col md={4}>
                            <Button variant={"outline-danger"}
                                    onClick={() => removeInfo(i.number)}
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>);
});

export default CreateDevice;