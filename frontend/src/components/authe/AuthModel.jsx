import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {signup,login,} from "../../services/auth/AuthServices.js";

function AuthModal({
  closeAuth,
  authMode,
  setAuthMode,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage("");

  };

  const handleAuthSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");

    if (authMode === "signup") {
     
      signup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
    } else {
      login(formData.email, formData.password);
    }
    

    // Login / signup successful
    setIsLoggedIn(true);

    closeAuth();

    navigate("/resume");

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="auth-modal-overlay" onClick={closeAuth}>
      <div
        className="auth-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-auth"
          type="button"
          onClick={closeAuth}
          aria-label="Close authentication form"
        >
          ×
        </button>

        {/* Login / Signup tabs */}
        <div className="auth-tabs">
          <button
            type="button"
            className={authMode === "login" ? "active" : ""}
              onClick={() => {
              setAuthMode("login");
              setErrorMessage("");
            }}
          >
            Login
          </button>

          <button
            type="button"
            className={authMode === "signup" ? "active" : ""}
            onClick={() => {
              setAuthMode("signup");
              setErrorMessage("");
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Authentication Form */}
        <form className="auth-form" onSubmit={handleAuthSubmit}>
          {authMode === "signup" && (
            <div className="form-group">
              <label htmlFor="fullNameId">Full Name</label>

              <input
                id="fullNameId"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="emailId">Email</label>

            <input
              id="emailId"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="passwordId">Password</label>

            <input
              id="passwordId"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          {authMode === "signup" && (
            <div className="form-group">
              <label htmlFor="confirmPasswordId">
                Confirm Password
              </label>

              <input
                id="confirmPasswordId"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          )}

          {errorMessage && (
            <p className="auth-error">
              {errorMessage}
            </p>
          )}

          <button type="submit" className="auth-submit">
            {authMode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          {authMode === "login"
            ? "Need an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() =>
              setAuthMode(
                authMode === "login" ? "signup" : "login"
              )
            }
          >
            {authMode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
