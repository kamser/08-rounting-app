import { useState } from 'react'
import './App.css'
import { AboutPage } from './components/About'
import { HomePage } from './components/Home'

function App() {
  
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <main>
      {currentPage === '/' && <HomePage/>}
      {currentPage === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
