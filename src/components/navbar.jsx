import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar(){

    return(
      <div className="NavBar">
        <span><Link to="/">#VANLIFE</Link></span>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
    )
}