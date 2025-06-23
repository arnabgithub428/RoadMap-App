import { useState } from "react";
import { useNavigate } from "react-router-dom";

const roadmapItems = [
    "Frontend", "Backend", "DevOps",
    "Full Stack", "AI Engineer", "Data Analyst",
    "AI and Data Scientist", "Android", "iOS",
    "PostgreSQL", "Blockchain", "QA",
    "Software Architect", "Cyber Security", "UX Design",
    "Game Developer", "Technical Writer", "MLOps",
    "Product Manager", "Engineering Manager", "Developer Relations",
];

   

const ItemsSection = () => {
     const navigate = useNavigate();

    // Simulated login state — replace with your actual auth logic
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleCreateClick = () => {
        if (isLoggedIn) {
            navigate("/items"); // Route for logged-in users
        } else {
            navigate("/signup"); // Route for sign-up
        }
    };
    return (

        <section>
            <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center py-16 px-4">
                <h1 className="text-4xl font-bold text-purple-400 mb-4">Developer Roadmaps</h1>
                <p className="text-center max-w-xl text-gray-300 mb-8">
                    Explore curated learning paths and tools crafted by developers, for developers — helping you master new technologies and grow your career with confidence.
                </p>

                <button className="bg-[#1e293b] text-sm text-white py-2 px-4 rounded-full border border-gray-600 mb-10 hover:bg-[#334155] transition">
                    Role-based Roadmaps
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {roadmapItems.map((item, index) => (
                        <button
                            key={index}
                            className="bg-[#1e293b] hover:bg-[#334155] px-5 py-3 rounded-lg text-white text-left transition"
                        >
                            {item}
                        </button>
                    ))}
                    <button   onClick={handleCreateClick} className="border border-dashed border-gray-600 px-5 py-3 rounded-lg text-gray-400 hover:border-gray-400 hover:text-white transition">
                        + Create your own Roadmap
                    </button>
                </div>
            </div>
        </section>

    );
};

export default ItemsSection;