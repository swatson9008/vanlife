import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import './vanDetail.css'

export default function VanDetail() {
  const params = useParams();
  const location = useLocation()
  const [vanData, setVanData] = useState(null);
  const search = location.state?.search || "";
  function spliceType (search) {
    const parts = search.split('=');
    if (parts.length === 2) {
      return parts[1];
    } else {
      return null;
    }
  }

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVanData(data.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, [params.id]);

  if (!vanData) {
    return <p className="loadingText">Loading your vans!</p>;
  }

  return (
    <>
    <div className="hostBack">
        ←{" "}
        <span>
        <Link to={`..${search}`} relative="path">
            Back to all {spliceType(search) === null ? 'all' : spliceType(search) } vans
          </Link>
        </span>
      </div>
    <div className="vanContainer">
      <h2>{vanData.name}</h2>
      <img src={vanData.imageUrl} alt=""/>
      <p><button className={`vanTypeD ${vanData.type}`}>{vanData.type}</button></p>
      <p className="vanPrice">{`$${vanData.price}/day`}</p>
      <p>{vanData.description}</p><br />
      <button className="rentVan">Rent this van</button>
    </div>
    </>
  );
}
