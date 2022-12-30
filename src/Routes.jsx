import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Home from "./components/Home/Home/Home";
import StatusDetails from "./components/Home/Post/StatusDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Main from "./Layout.jsx/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: "/home",
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: "/statusDetails/:id",
                loader: ({params}) => fetch(`https://job-task-server-jet.vercel.app/comments/${params.id}`),
                element: <PrivateRoute><StatusDetails></StatusDetails></PrivateRoute>
            },
            
        ]
    },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
]);

export default router;