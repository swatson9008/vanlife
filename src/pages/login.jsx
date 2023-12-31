// Login.js
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api";
import "./login.css";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/host";


  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="loginMain">
      {location.state?.message && (
        <h3 className="logInFirst">{location.state.message}</h3>
      )}
      <h3>Username and Password is b@b.com / p123</h3>
      <h1>Sign in to your account</h1>
      {error?.message && <h3 className="errorState">{error?.message}</h3>}
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
