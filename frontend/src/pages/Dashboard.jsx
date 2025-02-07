import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Dummy user profile data
const user = {
    name: "John Doe",
    email: "john.doe@example.com",
};

const Dashboard = () => {
    const [threats, setThreats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThreats = async () => {
            // Dummy data for threats
            const dummyThreats = [
                { id: 1, name: "Malware X", impact: "High", status: true },
                { id: 2, name: "Phishing Attack", impact: "Medium", status: false },
                { id: 3, name: "DDoS Attack", impact: "Critical", status: true },
            ];
            setThreats(dummyThreats);
            setLoading(false);
        };

        fetchThreats();
    }, []);

    const handleViewThreat = (id) => {
        navigate(`/threats/${id}`); // Navigate to the Threat Details page
    };

    const handleSubmitThreat = () => {
        navigate("/submit-threat"); // Navigate to the Submit Threat page
    };

    return (
        <div className="container mx-auto p-4">
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-gray-400">Threat Intelligence Platform</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                    <Link to="/submit-threat" className="hover:text-gray-400">Submit Threat</Link>
                    <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-sm">{user.name}</span>
                    <div className="relative">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                            User Profile
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                            <div className="py-2 px-4 text-sm text-gray-700">Email: {user.email}</div>
                            <div className="py-2 px-4 text-sm text-gray-700">Role: Admin</div>
                            <div className="border-t py-2 px-4">
                                <button className="text-red-500 hover:bg-red-100 w-full text-left">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <h1 className="text-3xl font-bold mb-4">Threat Intelligence Dashboard</h1>

            {/* Error message */}
            {error && <div className="text-center text-xl text-red-500 mb-4">{error}</div>}

            <div className="flex justify-between mb-4">
                <button
                    onClick={handleSubmitThreat}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Submit New Threat
                </button>
            </div>

            {/* Threats List Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recent Threats</h2>

                {loading ? (
                    <div className="text-center text-gray-600">Loading...</div>
                ) : (
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Impact</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {threats.map((threat) => (
                                <tr key={threat.id} className="border-b">
                                    <td className="px-4 py-2">{threat.name}</td>
                                    <td className="px-4 py-2">{threat.impact}</td>
                                    <td className="px-4 py-2">
                                        {threat.status ? "Active" : "Inactive"}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleViewThreat(threat.id)}
                                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
