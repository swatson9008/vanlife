import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import './hostvansdetail.css'

export default function VanHostDetail() {
  const params = useParams();
  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVanData(data.vans[0])) // Access the first object in the array
      .catch((error) => console.error("Error fetching data:", error));
  }, [params.id]);

  if (!vanData) {
    return <p className="loadingText">Loading your vans!</p>;
  }

  return (
    <>
      <div className="hostBack">
        ← <span>Back to all vans</span>
      </div>
      <div className="vanHostContainer">
        <div className="vanTop">
            <img src={vanData.imageUrl} alt="" className="VanDImg"/>
            <div className="vanRightD">
            <button className={`vanTypeD ${vanData.type}`}>{vanData.type}</button>
            <h3 className="vanHostDName">{vanData.name}</h3>
            <div className="vanHostPrice">${vanData.price}/day</div></div>
        </div>
        <div className="navHostBar">
        <NavLink to="/">Details</NavLink><NavLink to="/">Pricing</NavLink><NavLink to="/">Photos</NavLink>
        </div>
        <p>Description: {vanData.description}</p>
        <br />
      </div>
    </>
  );
}
