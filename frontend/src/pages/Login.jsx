import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // Context for authentication
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const { login } = useContext(AuthContext); // Context function for setting auth state

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            // login(response.data.token); // Save token in context/local storage
            navigate("/dashboard"); // Redirect to dashboard
        } catch (err) {
            setError(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                <form onSubmit={handleLogin} className="mt-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Don't have an account? <a href="/register" className="text-indigo-600">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
