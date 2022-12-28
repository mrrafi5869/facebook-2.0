import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Home from "./components/Home/Home/Home";
import Main from "./Layout.jsx/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
]);

export default router;