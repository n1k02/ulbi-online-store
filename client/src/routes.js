import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";
import {createBrowserRouter} from "react-router-dom";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>,
        errorElement: <Shop/>,
        exect: true
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
]

export const router = createBrowserRouter([...authRoutes, ...publicRoutes])