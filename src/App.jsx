import { lazy, Suspense } from 'react'

import { AppRouter } from './routing/AppRouter.jsx'
import { Route } from './components/Route.jsx'
import { appRoutes } from './routing/routes.js'

const LazyNotFoundPage = lazy(() => import('./pages/NotFound.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <AppRouter routes={appRoutes} defaultComponent={LazyNotFoundPage}>
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/about' Component={LazyAboutPage}/>
        </AppRouter>
      </Suspense> 
    </main>
  )
}

export default App
