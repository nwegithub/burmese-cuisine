import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
        AOS.init({
          duration: 1200, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for animations
          once: false, // Animation happens every time you scroll
          anchorPlacement: 'top-bottom',
          offset: 100, // Trigger animations when elements are 100px away from viewport
        });
      }, []);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/feedback');
                setFeedbacks(response.data);
            } catch (error) {
                setError('Error fetching feedback. Please try again later.');
                console.error('Error fetching feedback:', error);
            }
        };
        fetchFeedbacks();
    }, []);

    const indexOfLastFeedback = currentPage * feedbacksPerPage;
    const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
    const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

    console.log("dddd",feedbacks)

    if (currentFeedbacks.length === 0) {
        return null;
    }
    return (
        <div
            className="flex flex-col items-center"
            style={{ marginTop: 80, maxHeight: '100vh' }} // Adjusted value
        >
            <h1 data-aos="fade-left" className="text-3xl font-bold mb-8">
                {isMya ? "ကြည့်ရှုသူများ၏အကြံပြုချက်များ" : "Customer Reviews"}
            </h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-wrap justify-center gap-20">
                {currentFeedbacks.map((item, index) => (
                    <div
                    data-aos="fade-right"
                        key={index}
                        className={` p-6 flex flex-col items-center space-y-4 rounded-lg shadow-lg transform transition-transform duration-500 ${index % 2 !== 0 ? 'rotate-2' : '-rotate-3'
                            }`}
                        style={{ borderRadius: '20px',width:250 ,height:250,
                            borderColor:'#e48f0f',
                            borderWidth:4,backgroundColor:'ButtonFace'
                        }}
                    >
                        <p className="text-black-900 font-bold text-2xl mb-2">{item.user.name}</p>
                        <div className="relative w-full"
                            style={{
                                marginTop: '80px',
                                maxHeight: '100vh',
                                // border: '1px solid yellow',
                                // borderStyle: 'solid',
                                // borderColor: 'yellow'
                            }}>
                            <div className="p-10">   
                                <p className="text-black-700 italic text-center">{item.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pb-5">
                <button
                    onClick={() => navigate('/Customer')}
                    className="bg-custom-yellow text-black px-5 py-4 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-10"
                >
                    {isMya ? "အားလုံးကြည့်ရန်" : "View All"}
                </button>
            </div>
        </div>

    );
};

export default CustomerReview;
