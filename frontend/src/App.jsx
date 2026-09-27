import{BrowserRouter,Routes,Route}from"react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import ResumeContainer from "./ResumeContainer.jsx";
// import OldLogin from "./components/login/Oldlogin.jsx";
import { saveSignupData } from "./services/files/LocalStorageService.js";
import { getSignupData } from "./services/files/LocalStorageService.js";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [authMode, setAuthMode] = useState("login");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Open login/signup popup
  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  // Close popup
  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle login/signup
  const handleAuthSubmit = (event) => {
    event.preventDefault();

    if (authMode === "signup") {
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        return;
      }

      saveSignupData({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
    } else {
      const user=getSignupData(formData.email);
      if (!user || user.email !== formData.email || user.password !== formData.password) {
       <h1 color="red">Invalid email or password</h1>
        return;

      }
    }

    // Login/signup successful
    setIsLoggedIn(true);
    setIsAuthOpen(false);

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // =========================
  // LOGGED-IN PAGE
  // =========================
if (isLoggedIn) {
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

          <button
            className="logout-btn"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        </nav>

        {/* Resume Component */}
        <ResumeContainer />

      </div>
    );
  };
  

  
  return (
  <BrowserRouter>
  <Routes>
   <Route path = "/"  element ={<HomePage  openAuth ={openAuth} 
   closeAuth ={closeAuth}
   isAuthOpen={isAuthOpen}
    handleAuthSubmit = {handleAuthSubmit}
   formData ={formData} authMode={authMode}
    setAuthMode ={setAuthMode}
     handleInputChange ={handleInputChange} />
    }
   /> 
   </Routes>
   </BrowserRouter>
  );
}
  

export default App;

