import './home.css'

export default function Home() {
    return (
      <div className='homeMain'>
        <div className='overlayColor'>
          <div className='homeInfo'> 
            <span className='lineOne'>
              You got the travel plans, we got the travel vans.
            </span>
            <span className='lineTwo'>
              Add adventure to your life by joining the #vanlife movement.<br />
              Rent the perfect van to make your perfect road trip.
            </span>
            <button className='vanButton'>Find your van</button>
          </div>
        </div>
      </div>
    )
  }