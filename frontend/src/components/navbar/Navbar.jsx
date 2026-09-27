function Navbar ({openAuth}){
    return (<nav>
      {/* Navbar */}
        <div className="logo-section">

          <div className="logo">🧠</div>

          <div className="logo-text">
            <h2>AI Skill Gap &</h2>
            <h2>Career Roadmap</h2>
          </div>

        </div>

        <div className="nav-buttons">

          <button
            className="login-btn"
            onClick={() => openAuth("login")}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => openAuth("signup")}
          >
            Sign Up
          </button>

        </div>

      </nav>);
}
export default Navbar;