import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgreementPage = () => {
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    // Handle checkbox toggle
    const handleAgreementChange = () => {
        setAgreed(!agreed);
    };

    // Handle form submission (user agrees to the terms)
    const handleSubmit = () => {
        if (!agreed) {
            alert("You must agree to the terms before proceeding.");
            return;
        }

        // Redirect to the next step (e.g., SubmitThreat page)
        navigate("/submit-threat"); // Replace with your actual path to the submit page
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Data Sharing Agreement</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Please Review the Terms</h2>
                
                <p className="mb-4 text-gray-700">
                    By submitting threat intelligence data, you agree to the following terms:
                </p>
                
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>All shared data must be accurate and relevant to cybersecurity threats.</li>
                    <li>The data shared is strictly for improving collective cybersecurity defense.</li>
                    <li>Data privacy must be maintained, and sensitive information should not be shared unless necessary.</li>
                    <li>Access to shared data is restricted to authorized users only.</li>
                    <li>Any misuse of the platform or data will lead to access being revoked.</li>
                </ul>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agreed}
                        onChange={handleAgreementChange}
                        className="mr-2"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700">
                        I agree to the terms and conditions.
                    </label>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={handleSubmit}
                        className={`px-6 py-2 ${agreed ? "bg-blue-600" : "bg-gray-400"} text-white rounded-lg hover:bg-blue-700`}
                    >
                        Continue
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgreementPage;
