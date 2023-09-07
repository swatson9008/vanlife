/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";
import "./hostvans.css";

export default function Vans() {
  const [vanData, setVanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVanData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <main className="vanHostMain">
        <h2>Your Listed Vans</h2>
        <div className="vanHostData">
          {vanData ? (
            vanData.map((van) => (
              <Link to={van.id} key={van.id}>
                <div key={van.id} className="vanHostItem">
                  <div className="vanHostImg">
                    <img src={van.imageUrl} alt="" />
                  </div>
                  <div className="vanHostInfo">
                    <div className="vanHostName">{van.name}</div>
                    <div className="vanHostPrice">${van.price}/day</div>
                  </div>
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
