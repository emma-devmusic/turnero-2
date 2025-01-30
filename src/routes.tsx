import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, Login, Register } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
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