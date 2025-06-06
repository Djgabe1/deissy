import '../style/navbar.scss'
import { Link } from 'react-router-dom'

import deissy from '../assets/deissy.jpeg';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
            <div className='logo'>
                
                <Link className="navbar-brand" to="/deissy">
                <img className="logo" src='../assets/deissy.jpeg' alt="Logo" onError={(e)=>{e.target.onError = null; e.target.src=deissy;}}/>
                Deissy Garcia</Link>
            </div>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-house-door-fill"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                <Link className="nav-link " aria-current="page" to="/deissy/about">Sobre mi</Link>
                <Link className="nav-link" to="/deissy/projects">Proyectos</Link>
                <Link className="nav-link" to="/deissy/contact">Contacto</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
