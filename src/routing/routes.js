import { HomePage } from '../pages/Home.jsx';
import { AboutPage } from "../pages/About.jsx";

export const appRoutes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path:'/about',
        Component: AboutPage
    }
]