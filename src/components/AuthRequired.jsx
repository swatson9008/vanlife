import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first", location: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
