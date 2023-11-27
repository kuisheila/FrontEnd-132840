import Login from "../view/Login";
import Home from "../../Home/view/Home";
import ForgotPassword from "../components/ForgotPassword";
import Register from "../components/Register";

export const AuthRoutes =[

    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/auth/login",
        element: <Login/>
    },
    {
        path:"/auth/register",
        element: <Register/>
    },
    {
        path:"/auth/forgot-password",
        element: <ForgotPassword/>
    },
];