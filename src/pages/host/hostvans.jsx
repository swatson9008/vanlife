/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './hostvans.css'

export default function Vans() {
  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setVanData(data.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <>
    <main className="vanHostMain">
        <h2>Your Listed Vans</h2>
      <div className="vanHostData">
        {vanData ? (
          vanData.map((van) => (
            <Link to={`/host/vans/${van.id}`}>
              <div key={van.id} className="vanHostItem">
              <div className="vanHostImg"><img src={van.imageUrl} alt=""/></div>
              <div className="vanHostInfo"><div className="vanHostName">{van.name}</div>
              <div className="vanHostPrice">${van.price}/day</div></div>
            </div></Link>
          ))
        ) : (
          <p>Loading your vans!</p>
        )}
      </div>
    </main>
    </>
  );
}

