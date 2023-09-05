import './notfound.css'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <main className="notFoundMain">
            <h2>Sorry the page you are looking for is not here</h2>
            <Link to='/'><button className='returnHome'>Back to home</button></Link>
        </main>
    )
}