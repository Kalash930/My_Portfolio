import { useState } from "react";
import Loader from "./components/Loader";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { StarBackground } from "./components/StarBackground"; // ✅ Import StarBackground

function App() {
  const [loading, setLoading] = useState(true);
  const [showStars, setShowStars] = useState(false); // ✅ Star toggle state

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative ">
          {/* 🌌 Show animated stars if toggled */}
          {showStars && <StarBackground />}

          {/* Navbar receives toggle control */}
          <Navbar showStars={showStars} setShowStars={setShowStars} />

          {/* Main page */}
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
