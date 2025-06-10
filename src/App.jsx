import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Galeria />
     <Contactenos />
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

function Galeria () {
  return (
    <div className='galeria'>
      <img src="Humillacion.jpg" alt="" className='imagen'/>
    </div>
  )
}

function Contactenos () {
  return (
    <div class='map'>
  <iframe width="100%" height="400" frameBorder="0" scrolling='no' marginHeight="0" marginWidth="0" src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sena%20%20soacha+(SENA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'>
  </iframe>
  <div class="caja-texto">
    <h2>Contáctenos</h2>
    <p><strong>Correo Electrónico:</strong> contacto@ejemplo.com</p>
    <p><strong>Teléfono:</strong> +57 300 000 0000</p>
    <p><strong>Redes Sociales:</strong> @miempresa</p>
  </div>
  <div className='caja-input'>
    <h2>Brindanos tu Contacto</h2>
    <input type="text" className='input' placeholder='Correo Electronico'/><br />
    <input type="text" className='input' placeholder='Numero Telefono'/><br />
    <input type="text" className='input' placeholder='Otro telefono'/><br />
    <br />
    <button>Enviar</button>
  </div>
</div>
  )
}
export default App
