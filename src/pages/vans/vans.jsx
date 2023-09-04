/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./vans.css";

export default function Vans() {
  const [vanData, setVanData] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vanData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vanData;

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
        <div className="topFilters">
          <button
            className="filterButtons"
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            className="filterButtons"
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className="filterButtons"
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            Rugged
          </button>
          <span
            className="clearF"
            onClick={() => setSearchParams({ type: "" })}
          >
            Clear Filters
          </span>
        </div>

        <div className="vanData">
          {displayedVans ? (
            displayedVans.map((van) => (
              <Link to={`/vans/${van.id}`} key={van.id}>
                <div className="vanItem">
                  <p>
                    <img src={van.imageUrl} alt="" />
                  </p>
                  <p className="vanName">{van.name}</p>
                  <p className="vanPrice">${van.price}/day</p>
                  <p className={`vanType ${van.type}`}>
                    <button>{van.type}</button>
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading your vans!</p>
          )}
        </div>
      </main>
    </>
  );
}
