import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import avatarIcon from "../assets/avatar.png";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="NavBar">
      <span>
        <Link to="/">#VANLIFE</Link>
      </span>
      <div className="navLinks">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="loginLink">
          <img src={avatarIcon} className="loginIcon" />
        </Link>
      </div>
    </div>
  );
}
