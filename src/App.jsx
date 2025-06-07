import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
    </>
  )
}

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
      <img src={viteLogo} alt="Vite Logo" />
      <img src={reactLogo} alt="React Logo" />
      <h1>Vite + React</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">SERVICIOS</a></li>
        <li><a href="#">NOSOTROS</a></li>
        <li><a href="#">CONTACTENOS</a></li>
      </ul>
    </nav>
    </header>
    
  )
}

export default App
