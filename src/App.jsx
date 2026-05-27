import { useState, useEffect } from 'react'
import './App.css'
import { AboutPage } from './components/About'
import { HomePage } from './components/Home'

import { NAVIGATION_EVENT } from './routing/utils.js'

function App() {
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
