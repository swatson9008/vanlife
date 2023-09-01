import { useState, useEffect } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import "./hostvansdetail.css";

export default function VanHostDetail() {
  const params = useParams();
  const [vanData, setVanData] = useState(null);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVanData(data.vans[0]))
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
        ←{" "}
        <span>
          <Link to="/host/vans" relative="path">
            Back to all vans
          </Link>
        </span>
      </div>
      <div className="vanHostContainer">
        <div className="vanTop">
          <img src={vanData.imageUrl} alt="" className="VanDImg" />
          <div className="vanRightD">
            <button className={`vanTypeD ${vanData.type}`}>
              {vanData.type}
            </button>
            <h3 className="vanHostDName">{vanData.name}</h3>
            <div className="vanHostPrice">${vanData.price}/day</div>
          </div>
        </div>
        <div className="navHostBar">
          <NavLink
            to="."
            end style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet 
            context={[vanData]}
        />
      </div>
    </>
  );
}
