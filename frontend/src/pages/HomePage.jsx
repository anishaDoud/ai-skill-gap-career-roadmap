import AuthModel from "../components/authe/AuthModel.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import FloatingIcons from "../components/hero/FloatingIcons.jsx";
import HeroSection from "../components/hero/HeroSection.jsx";
import RoadmapCards from "../components/hero/RoadmapCards.jsx";

import { useState } from "react";
function HomePage({ setIsLoggedIn }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  
  
  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  // Close popup
  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="home-page">
      <Navbar openAuth={openAuth} />

      <section className="hero">
        <HeroSection openAuth={openAuth} />
        <FloatingIcons />
        <RoadmapCards />
      </section>

      {/* Login / Signup Modal */}
      {isAuthOpen && (
        <AuthModel
          closeAuth={closeAuth}
          setIsLoggedIn={setIsLoggedIn}
          authMode={authMode}
          setAuthMode={setAuthMode}
        />
      )}
    </div>
  );
}

export default HomePage;
