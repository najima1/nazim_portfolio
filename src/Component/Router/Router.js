import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About_me from "../Pages/About_me/About_me";
import Contact from "../Pages/Contact/Contact";
import Error_page from "../Pages/Erron_page/Error_page";
import Hero_section from "../Pages/Hero_section/Hero_section";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/PortFolio/Portfolio";
import Project1 from "../Pages/PortFolio/Project1";
import Project2 from "../Pages/PortFolio/Project2";
import Project3 from "../Pages/PortFolio/Project3";
import Project4 from "../Pages/PortFolio/Project4";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error_page />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/about",
                element: <About_me />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/project1",
                element: <Project1 />
            },
            {
                path: "/project2",
                element: <Project2 />
            },
            {
                path: "/project3",
                element: <Project3 />
            },
            {
                path: "/project4",
                element: <Project4 />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])
export default router