import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SingUp from "../layouts/SingUp/SingUp";
import SingIn from "../layouts/SingIn/SingIn";
import Details from "../pages/Details/Details";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../news.json')
            },
            {
                path: '/sing_up',
                element: <SingUp></SingUp>
            },
            {
                path: '/sing_in',
                element: <SingIn></SingIn>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch('./news.json')
            }
        ]
    }
]);

export default router;