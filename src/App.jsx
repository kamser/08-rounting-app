import { AppRouter } from './routing/AppRouter.jsx'
import { Route } from './components/Route.jsx'
import { appRoutes } from './routing/routes.js'

import { NotFoundPage } from './pages/NotFound.jsx'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'

function App() {

  return (
    <main>
      <AppRouter routes={appRoutes} defaultComponent={NotFoundPage}>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
      </AppRouter>
    </main>
  )
}

export default App
