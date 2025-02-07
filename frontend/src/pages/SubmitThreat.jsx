import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubmitThreat = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [impact, setImpact] = useState("");
    const [mitigation, setMitigation] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    // Handle file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Check for valid file extensions (.txt, .json, .stix)
            const validExtensions = [".txt", ".json", ".stix"];
            const fileExtension = selectedFile.name.split(".").pop();
            if (!validExtensions.includes(`.${fileExtension}`)) {
                setError("Invalid file type. Please upload a .txt, .json, or .stix file.");
                setFile(null); // Clear file input
            } else {
                setError(""); // Clear any previous error
                setFile(selectedFile);
            }
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccessMessage("");

        const url = "http://localhost:5000/api/threats"; // Replace with real endpoint

        const newThreat = {
            name,
            description,
            impact,
            mitigation,
        };

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("impact", impact);
        formData.append("mitigation", mitigation);

        // Append the file if present
        if (file) {
            formData.append("file", file);
        }

        try {
            // Send the new threat data (and file) to the backend API
            await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setSuccessMessage("Threat submitted successfully!");
            setName("");
            setDescription("");
            setImpact("");
            setMitigation("");
            setFile(null); // Reset file input
            setLoading(false);
        } catch (err) {
            setError("Failed to submit the threat. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Submit a New Threat</h1>

            {/* Display success or error message */}
            {successMessage && (
                <div className="text-center text-xl text-green-500 mb-4">
                    {successMessage}
                </div>
            )}
            {error && (
                <div className="text-center text-xl text-red-500 mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Threat Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="impact" className="block text-sm font-semibold text-gray-700">
                        Impact
                    </label>
                    <input
                        type="text"
                        id="impact"
                        value={impact}
                        onChange={(e) => setImpact(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="mitigation" className="block text-sm font-semibold text-gray-700">
                        Mitigation
                    </label>
                    <input
                        type="text"
                        id="mitigation"
                        value={mitigation}
                        onChange={(e) => setMitigation(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                {/* File Upload Section */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-semibold text-gray-700">
                        Attach a Threat File (Optional)
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {file && (
                        <p className="mt-2 text-sm text-gray-600">Selected file: {file.name}</p>
                    )}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit Threat"}
                    </button>
                    <button
                        onClick={() => navigate("/threats")}
                        type="button"
                        className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmitThreat;
