import { useState, useEffect } from "react";
import Footer from "./footer";

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
      <div className="vanData">
        {vanData ? (
          vanData.map((van) => (
            <div key={van.id}>
              <p><img src={van.imageUrl} alt=""/></p>
              <p>{van.name}</p>
              <p>{van.price}</p>
              <p>{van.type}</p>
              <p>{van.description}</p>
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
