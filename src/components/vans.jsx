/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Footer from "./footer";
import './vans.css'

export default function Vans() {
  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVanData(data.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <main className="vanMain">
        <h2>Explore our van options</h2>
      <div className="vanData">
        {vanData ? (
          vanData.map((van) => (
            <Link to={`/vans/${van.id}`}><div key={van.id} className="vanItem">
              <p><img src={van.imageUrl} alt=""/></p>
              <p className="vanName">{van.name}</p>
              <p className="vanPrice">${van.price}/day</p>
              <p className={`vanType ${van.type}`}><button>{van.type}</button></p>
            </div></Link>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}
