import { AppRouter } from './routing/AppRouter.jsx'
import { appRoutes } from './routing/routes.js'

function App() {

  return (
    <main>
      <AppRouter routes={appRoutes}/>
    </main>
  )
}

export default App
