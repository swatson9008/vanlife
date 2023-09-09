import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../../api";
import "./vanDetail.css";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [vanData, setVanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const search = location.state?.search || "";
  function spliceType(search) {
    const parts = search.split("=");
    if (parts.length === 2) {
      return parts[1];
    } else {
      return null;
    }
  }

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVanData(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  console.log(vanData)

  if (!vanData) {
    return <p className="loadingText">Loading your vans!</p>;
  }

  return (
    <>
      <div className="hostBack">
        ←{" "}
        <span>
          <Link to={`..${search}`} relative="path">
            Back to all {spliceType(search) === null ? "" : spliceType(search)}{" "}
            vans
          </Link>
        </span>
      </div>
      <div className="vanContainer">
        <h2>{vanData.name}</h2>
        <img src={vanData.imageUrl} alt="" />
        <p>
          <button className={`vanTypeD ${vanData.type}`}>{vanData.type}</button>
        </p>
        <p className="vanPrice">{`$${vanData.price}/day`}</p>
        <p>{vanData.description}</p>
        <br />
        <button className="rentVan">Rent this van</button>
      </div>
    </>
  );
}
