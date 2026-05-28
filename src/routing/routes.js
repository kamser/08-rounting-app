import { SearchPage } from '../pages/Search.jsx';

export const appRoutes = [
    {
        path:'/search/:query',
        Component: SearchPage
    }
]