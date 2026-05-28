import { HomePage } from '../pages/Home.jsx';
import { AboutPage } from "../pages/About.jsx";
import { SearchPage } from '../pages/Search.jsx';

export const appRoutes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path:'/about',
        Component: AboutPage
    },
    {
        path:'/search/:query',
        Component: SearchPage
    }
]