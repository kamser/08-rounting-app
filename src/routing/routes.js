import { HomePage } from '../pages/Home.jsx';
import { AboutPage } from "../pages/About.jsx";
import { SearchPage } from '../pages/Search.jsx';

export const appRoutes = [
    {
        path:'/search/:query',
        Component: SearchPage
    }
]