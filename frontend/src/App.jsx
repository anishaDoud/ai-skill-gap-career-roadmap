import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import ResumePage from "./pages/ResumePage.jsx";
import { Navigate } from "react-router-dom";
import ResultPage from "./pages/ResultPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/resume"
          element={
            isLoggedIn ? (
              <ResumePage setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
