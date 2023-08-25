import { Link, Outlet } from "react-router-dom"
import './hostlayout.css'

export default function HostLayout(){
    return(
        <>
        <main className="hostMain">
            <div className="navLinks">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </div>
            
        </main>
        <Outlet />
        </>
    )
}