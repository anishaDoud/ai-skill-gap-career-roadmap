import ResumeContainer from "../ResumeContainer.jsx";
function ResumePage({ setIsLoggedIn }) {

    return (
      <div className="resume-page">
        <nav className="resume-navbar">
          <div className="logo-section">
            <div className="logo">🧠</div>

            <div className="logo-text">
              <h2>AI Skill Gap &</h2>
              <h2>Career Roadmap</h2>
            </div>
          </div>

          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </nav>

        {/* Resume Component */}
        <ResumeContainer />
      </div>
    );
  };
  export default ResumePage;