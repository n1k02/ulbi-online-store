import React, {useContext, useEffect, useState} from 'react';

import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {check} from "../http/userAPI";
import {Spinner} from "react-bootstrap";

const Layout = observer(() => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=> setLoading(false))
    }, [])
    if (loading) {
        return (
            <div className={'d-flex align-items-center justify-content-center vh-100'}>
                <Spinner animation={'grow'}/>
            </div>
        )
    }
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
});

export default Layout;