import { useState, useEffect } from "react";
import Footer from "./footer";
import './van.css'

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
            <div key={van.id} className="vanItem">
              <p><img src={van.imageUrl} alt=""/></p>
              <p className="vanName">{van.name}</p>
              <p className="vanPrice">${van.price}/day</p>
              <p className={`vanType ${van.type}`}><button>{van.type}</button></p>
            </div>
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
