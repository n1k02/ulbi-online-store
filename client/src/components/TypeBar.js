import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div>
            <ListGroup>
                {device.types.map(type =>
                    <ListGroup.Item
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                        active={type.id === device.selectedType.id}
                        style={{cursor: 'pointer'}}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default TypeBar;