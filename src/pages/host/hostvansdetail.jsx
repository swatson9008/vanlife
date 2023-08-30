import { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (!vanData) {
    return <p className="loadingText">Loading your vans!</p>;
  }

  return (
    <>
      <div className="hostBack">
        ← <span><Link to="/host/vans">Back to all vans</Link></span>
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
        <p className="infoBoxes"><span>Name:</span> {vanData.name}</p>
        <p className="infoBoxes"><span>Category:</span> {capitalizeFirstLetter(vanData.type)}</p>
        <p className="infoBoxes"><span>Description:</span> {vanData.description}</p>
        <p className="infoBoxes"><span>Visibility:</span> Public</p>
      </div>
    </>
  );
}
