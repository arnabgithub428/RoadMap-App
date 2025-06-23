
import { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
const Items = () => {
    const [items, setItems] = useState([]);
     
    useEffect(() => {
        fetch('http://localhost:5000/Items')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return (
         <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Roadmap</h1>
          
            <div className="flex gap-2 mb-6">
                {["Popularity", "Status", "Category"].map((option) => (
                    <button
                        key={option}
                        className="px-4 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-blue-50 transition"
                    >
                        {option}
                    </button>
                ))}
            </div>
            
            <div>
                {
                    items.map(item => <ItemsCard
                    key={item._id}
                    item={item}
                    ></ItemsCard>)
                }
            </div>

        </div>
    );
};

export default Items;