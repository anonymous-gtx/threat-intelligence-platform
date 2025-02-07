import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ThreatDetail = () => {
    const { id } = useParams(); // Get the threat ID from the URL params
    const [threat, setThreat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Dummy data for threats (same as in Threats.jsx)
    const threatsData = [
        {
            id: 1,
            name: "Phishing Attack",
            description:
                "Phishing attacks aim to steal sensitive information by impersonating a trusted entity in electronic communications.",
            mitigation: "User education and multi-factor authentication.",
            impact: "Can lead to account compromise, data theft, and identity theft.",
        },
        {
            id: 2,
            name: "Ransomware",
            description:
                "Ransomware is a type of malicious software that locks or encrypts a victim's data and demands a ransom to restore access.",
            mitigation: "Regular backups and endpoint security solutions.",
            impact: "Data loss, financial loss, and business interruption.",
        },
        {
            id: 3,
            name: "SQL Injection",
            description:
                "SQL injection is a code injection technique that exploits vulnerabilities in a web application's software to execute arbitrary SQL code.",
            mitigation: "Use parameterized queries and ORM frameworks.",
            impact: "Database compromise, data leakage, and loss of integrity.",
        },
        {
            id: 4,
            name: "Malware Infection",
            description:
                "Malware is software specifically designed to disrupt, damage, or gain unauthorized access to computer systems.",
            mitigation: "Antivirus software, regular updates, and user awareness.",
            impact: "System compromise, data theft, and financial loss.",
        },
        {
            id: 5,
            name: "Cross-Site Scripting (XSS)",
            description:
                "XSS attacks enable attackers to inject malicious scripts into websites viewed by other users, leading to data theft and security breaches.",
            mitigation: "Sanitize user inputs and use Content Security Policy (CSP).",
            impact: "Session hijacking, data theft, and unauthorized access.",
        },
    ];

    // Fetch threat details based on the threat ID
    useEffect(() => {
        const selectedThreat = threatsData.find((threat) => threat.id === parseInt(id));
        if (selectedThreat) {
            setThreat(selectedThreat);
        } else {
            setError("Threat not found.");
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="text-center text-xl">Loading details...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{threat.name} - Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Description</h2>
                <p className="mt-2 text-sm text-gray-600">{threat.description}</p>

                <h2 className="mt-4 text-2xl font-semibold text-gray-700">Impact</h2>
                <p className="mt-2 text-sm text-gray-600">{threat.impact}</p>

                <h2 className="mt-4 text-2xl font-semibold text-gray-700">Mitigation</h2>
                <p className="mt-2 text-sm text-gray-600">{threat.mitigation}</p>

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={() => navigate("/threats")}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Back to Threats
                    </button>
                    <button
                        onClick={() => alert("Report Issue functionality")}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThreatDetail;
