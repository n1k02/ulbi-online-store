import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter e-mail..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter password..."
                    />
                    <div className={"d-flex justify-content-between mt-3"}>
                        {isLogin ?
                            <div className={"w-auto"}>
                                Don't have an account yet? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                            </div>
                            :
                            <div className={"w-auto"}>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                            </div>
                        }

                        <Button style={{width: "auto"}} variant={"outline-success"}>
                            {isLogin ? "Sigh In" : "Sign Up"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;