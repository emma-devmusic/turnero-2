import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "./pages";
import { Users, Profile, Settings, Dash } from "./views";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <Dash />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);