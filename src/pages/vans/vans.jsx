/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";
import "./vans.css";

export default function Vans() {
  const [vanData, setVanData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [loading, setLoading] = useState(false)

  const displayedVans = vanData
    ? typeFilter
      ? vanData.filter((van) => van.type.toLowerCase() === typeFilter)
      : vanData
    : [];


    useEffect(() => {
      async function loadVans() {
          setLoading(true)
          const data = await getVans()
          setVanData(data)
          setLoading(false)
      }
      
      loadVans()
  }, [])

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

if (vanData === null) {
  return <p className="loadingText">Loading your vans!</p>;
}

  return (
    <>
      <main className="vanMain">
        <h2>Explore our van options</h2>
        <div className="topFilters">
          <button
            className={`filterButtons simple ${typeFilter === "simple" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`filterButtons luxury ${typeFilter === "luxury" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`filterButtons rugged ${typeFilter === "rugged" ? "selected" : ""}`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter !== null ? (
            <span
              className="clearF"
              onClick={() => handleFilterChange("type", null)}
            >
              Clear Filters
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="vanData">
          {displayedVans.length > 0 ? (
            displayedVans.map((van) => (
              <Link to={van.id} state={{ search: `?${searchParams.toString()}` }} key={van.id}>
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
            <p>No vans match your criteria.</p>
          )}
        </div>
      </main>
    </>
  );
}
