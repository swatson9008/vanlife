import './about.css'
import vanAbout from '../assets/vanabout.png'

export default function About() {
    return (
      <>
      <main className='aboutMain'>
        <img src={vanAbout} alt="" className='aboutBanner'/>
        <span className='title'><h2>Don't squeeze in a sedan when you could relax in a van.</h2></span>
        <span className='paraOne'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans go off without a hitch. <br/>(Hitch costs extra)</span>
        <span className='paraTwo'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</span>
        <div className='exploreVans'>
          <h3>Your destination is waiting.<br />
          Your van is ready.</h3>
          <button>Explore our vans</button>
        </div>
      </main>
      </>
    )
  }