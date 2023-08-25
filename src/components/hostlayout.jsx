import { Link, Outlet } from "react-router-dom"
import './hostlayout.css'

export default function HostLayout(){
    return(
        <>
        <main className="hostMain">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            
        </main>
        <Outlet />
        </>
    )
}