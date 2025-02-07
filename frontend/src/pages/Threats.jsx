import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Threats = () => {
    // Dummy data for threats
    const [threats, setThreats] = useState([
        {
            id: 1,
            name: "Phishing Attack",
            description:
                "Phishing attacks aim to steal sensitive information by impersonating a trusted entity in electronic communications.",
        },
        {
            id: 2,
            name: "Ransomware",
            description:
                "Ransomware is a type of malicious software that locks or encrypts a victim's data and demands a ransom to restore access.",
        },
        {
            id: 3,
            name: "SQL Injection",
            description:
                "SQL injection is a code injection technique that exploits vulnerabilities in a web application's software to execute arbitrary SQL code.",
        },
        {
            id: 4,
            name: "Malware Infection",
            description:
                "Malware is software specifically designed to disrupt, damage, or gain unauthorized access to computer systems.",
        },
        {
            id: 5,
            name: "Cross-Site Scripting (XSS)",
            description:
                "XSS attacks enable attackers to inject malicious scripts into websites viewed by other users, leading to data theft and security breaches.",
        },
    ]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Simulate loading state with a timeout
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Loading threats...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Threat Intelligence</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {threats.map((threat) => (
                    <div key={threat.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-700">{threat.name}</h2>
                        <p className="mt-2 text-sm text-gray-600">{threat.description}</p>
                        <Link
                            to={`/threats/${threat.id}`}
                            className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Threats;
