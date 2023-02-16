import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"cyan", textDecoration:"none"}} to={SHOP_ROUTE}>NIK-STORE</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={()=> navigate(ADMIN_ROUTE)}>Admin panel</Button>
                        <Button variant={"outline-light"} onClick={()=> navigate(LOGIN_ROUTE)} className="ms-2">Exit</Button>
                    </Nav>
                :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={()=> user.setIsAuth(true)}>Sign In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;