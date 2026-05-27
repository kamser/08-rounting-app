import { HomePage } from "../components/Home";
import { AboutPage } from "../components/About";

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