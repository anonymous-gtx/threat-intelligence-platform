import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddThreat = () => {
  const [formData, setFormData] = useState({
    threat_type: "",
    description: "",
    url: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to report a threat.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/threats/report",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Threat reported successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Report a Threat</h1>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="threat_type">
            Threat Type
          </label>
          <select
            id="threat_type"
            name="threat_type"
            value={formData.threat_type}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Threat Type</option>
            <option value="spam">Spam</option>
            <option value="harassment">Harassment</option>
            <option value="security_risk">Security Risk</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="4"
            placeholder="Provide a detailed description of the threat"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="url">
            URL (Optional)
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="http://example.com"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Threat
        </button>
      </form>
    </div>
  );
};

export default AddThreat;
