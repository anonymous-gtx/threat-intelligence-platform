import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { email, password });
            navigate("/login"); // Redirect to login after successful registration
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                <form onSubmit={handleRegister} className="mt-4">
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
                    <div className="mt-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Already have an account? <a href="/login" className="text-indigo-600">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
