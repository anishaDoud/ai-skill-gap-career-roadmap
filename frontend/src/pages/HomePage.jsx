import OldLogin from "../components/authe/OldLogin.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import FloatingIcons from "../components/hero/FloatingIcons.jsx";
import Herosection from "../components/hero/Herosection.jsx";
import RoadmapCards from "../components/hero/RoadmapCards.jsx";
function HomePage({openAuth,  isAuthOpen,closeAuth,  handleAuthSubmit,  handleInputChange,formData,authMode,setAuthMode,}) {
  return (
    <div className="home-page">
      <Navbar openAuth={openAuth} />

      <section className="hero">

        <Herosection />
        <FloatingIcons openAuth={openAuth} />
        <RoadmapCards />

      </section>

      {/* Login / Signup Modal */}
      {isAuthOpen && (
        <OldLogin
          closeAuth={closeAuth}
          handleAuthSubmit={handleAuthSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
          authMode={authMode}
          setAuthMode={setAuthMode}
        />
      )}
    </div>
  );
}
export default HomePage;
