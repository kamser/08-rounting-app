import { useState, useEffect } from 'react'
import './App.css'
import { AboutPage } from './components/About'
import { HomePage } from './components/Home'

import { NAVIGATION_EVENT } from './routing/constants.js'

function App() {
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
    window.addEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
      window.removeEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
    }
  })

  return (
    <main>
      {currentPage === '/' && <HomePage/>}
      {currentPage === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
