import { Link } from 'react-router'
import '../style/home.scss'

import deissy from '../assets/deissy.jpeg';
import de from '../assets/de.png';


function HomePage() {
  return (
    <div className="container mt-5">
      <div className="home-page">
        <h3>Hola, soy deissy johana garcia beltran</h3>
        <h1>Desarrolladora Web</h1>
        <p> Soy desarrolladora full stack, me gusta tanto el diseño como la lógica
</p>
      </div>
      <div className='section-home-page '>
          <div className="card" style={{width: '18rem'}}>
            <img src={deissy} className="card-img-top" alt="..." onError={(e)=>{e.target.onError = null; e.target.src=de;}}/>
            <div className="card-body">
            <p className="card-text"><Link to='/deissy/about'>SOBRE MI</Link></p>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <img src="https://i.pinimg.com/736x/75/e0/61/75e06170e12c918187a64335c0a99d42.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default HomePage

