import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThreatsList from "../components/ThreatsList";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Simulated authentication check
  const isLoggedIn = !!localStorage.getItem("token"); // Adjust based on your auth system

  const handleAddThreat = () => {
    console.log(!!localStorage.getItem("token"));
    
    if (user) {
      navigate("/add-threat");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Threat Intelligence Platform</h1>

      {/* Add Threat Button */}
      <button
        onClick={handleAddThreat}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit a Threat
      </button>

      <ThreatsList />

      {/* Popup for not logged-in users */}
      {showPopup && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">You need to be logged in</h2>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
