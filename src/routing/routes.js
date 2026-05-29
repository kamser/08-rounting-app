import AboutPage from '../pages/About.jsx';
import { SearchPage } from '../pages/Search.jsx';

export const appRoutes = [
    {
        path:'/:lang/about',
        Component: AboutPage
    },
    {
        path:'/search/:query',
        Component: SearchPage
    }
]