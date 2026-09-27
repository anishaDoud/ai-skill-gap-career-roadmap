function OldLogin({
  closeAuth,
  handleAuthSubmit,
  handleInputChange,
  formData,
  authMode,
  setAuthMode,
}) {
  return (
    <div className="auth-modal-overlay" onClick={closeAuth}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-auth"
          type="button"
          onClick={closeAuth}
          aria-label="Close login form"
        >
          ×
        </button>

        {/* Login / Signup tabs */}
        <div className="auth-tabs">
          <button
            type="button"
            className={authMode === "login" ? "active" : ""}
            onClick={() => setAuthMode("login")}
          >
            Login
          </button>

          <button
            type="button"
            className={authMode === "signup" ? "active" : ""}
            onClick={() => setAuthMode("signup")}
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
              <label htmlFor="confirmPasswordId">Confirm Password</label>

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
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
          >
            {authMode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default OldLogin;
