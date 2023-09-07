import { useState, useEffect } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { getHostVans } from "../../../api";

import "./hostvansdetail.css";

export default function VanHostDetail() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setCurrentVan(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, [id]);

  /*useEffect(() => {
  fetch(`/api/host/vans/${params.id}`)
    .then((response) => response.json())
    .then((data) => setCurrentVan(data.currentVan[0]))
    .catch((error) => console.error("Error fetching data:", error));
}, [params.id]);*/

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!currentVan) {
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
          <img src={currentVan.imageUrl} alt="" className="VanDImg" />
          <div className="vanRightD">
            <button className={`vanTypeD ${currentVan.type}`}>
              {currentVan.type}
            </button>
            <h3 className="vanHostDName">{currentVan.name}</h3>
            <div className="vanHostPrice">${currentVan.price}/day</div>
          </div>
        </div>
        <div className="navHostBar">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
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
        <Outlet context={[currentVan]} />
      </div>
    </>
  );
}
