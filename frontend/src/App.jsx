import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Threats from "./pages/Threats.jsx";
import ThreatDetail from "./pages/ThreatDetail";
import SubmitThreat from "./pages/SubmitThreat";
import Agreements from "./pages/Agreements";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/threats" element={<Threats />} />
                <Route path="/threats/:id" element={<ThreatDetail />} />
                <Route path="/submit-threat" element={<SubmitThreat />} />
                <Route path="/agreements" element={<Agreements />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;