import { AppRouter } from './routing/AppRouter.jsx'
import { appRoutes } from './routing/routes.js'
import { NotFoundPage } from './pages/NotFound.jsx'

function App() {

  return (
    <main>
      <AppRouter routes={appRoutes} defaultComponent={NotFoundPage}/>
    </main>
  )
}

export default App
