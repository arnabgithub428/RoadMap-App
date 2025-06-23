import { ThumbsUp, MessageCircle } from 'lucide-react';

const ItemsCard = ({item}) => {
    const {title,description,category,status,upvotes} = item;
    return (
        <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <div className="text-sm text-gray-500 mt-1">
                        Category: <span className="font-medium">{category}</span> | Status: <span className="font-medium">{status}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                        <ThumbsUp className="w-4 h-4" /> {upvotes}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:underline">
                        <MessageCircle className="w-4 h-4" /> Comment
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ItemsCard;