import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style/app.scss'

import HomePage from './pages/HomePage.jsx' 
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

import Navbar from './components/Navbar'
import Project from './pages/Project.jsx'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path="/deissy" element={<HomePage/>} />
        <Route path="/deissy/about" element={<About/>} />
        <Route path="/deissy/contact" element={<Contact/>} />
        <Route path="/deissy/projects" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
