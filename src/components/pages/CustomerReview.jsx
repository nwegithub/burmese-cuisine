import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const CustomerReview = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    const userId = user ? user._id : null;
    const [currentPage, setCurrentPage] = useState(1);
    const feedbacksPerPage = 3; // Number of feedbacks per page
    const navigate = useNavigate();
    const { isMya } = useAuth()

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/feedback/allFeedback');
                setFeedbacks(response.data);
            } catch (error) {
                setError('Error fetching feedback. Please try again later.');
                console.error('Error fetching feedback:', error);
            }
        };
        fetchFeedbacks();
    }, []);

    // Exclude the last feedback
    const feedbacksToDisplay = feedbacks.slice(0, -1);

    const indexOfLastFeedback = currentPage * feedbacksPerPage;
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
    const currentFeedbacks = feedbacksToDisplay.slice(indexOfFirstFeedback, indexOfLastFeedback);


    return (
        <div
            className="flex flex-col items-center"
            style={{ marginTop: 80, maxHeight: '100vh',backgroundColor:'#6FDCE3' }} // Adjusted value
        >
            <h1 className="text-3xl font-bold mb-8">
                {isMya ? "ကြည့်ရှုသူများ၏အကြံပြုချက်များ" : "Customer Reviews"}
            </h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-wrap justify-center gap-20">
                {currentFeedbacks.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white p-6 flex flex-col items-center space-y-4 rounded-lg shadow-lg transform transition-transform duration-500 ${index % 2 !== 0 ? 'rotate-2' : '-rotate-3'
                            }`}
                        style={{ borderRadius: '30px' }}
                    >
                        <div className="relative w-full">
                            <div className="p-20">
                                <p className="text-gray-900 font-semibold text-lg mb-2">{item.user.name}</p>
                                <p className="text-gray-700 italic text-center">{item.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pb-5">
            <button
                onClick={() => navigate('/Customer')}
                className="bg-custom-yellow text-white px-5 py-4 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-10"
            >
                {isMya ? "ကြည့်ရန်" : "View All"}
            </button>
            </div>
        </div>

    );
};

export default CustomerReview;
