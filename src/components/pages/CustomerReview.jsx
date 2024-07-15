import React,{useEffect,useState} from "react";
import arr from "../../../recipie.json"; // Assuming the JSON file path is correct
import { Grid } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import axios from "axios";
import { useAuth } from "../../Auth/AuthContext";

const CustomerReview = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    const { user } = useAuth();
    const userId = user && JSON.parse(user)._id

    useEffect(() => {
      const fetchFeedbacks = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/feedback/allFeedback`);
          setFeedbacks(response.data);
        } catch (error) {
          console.error('Error fetching feedback:', error);
        }
      };
  
      fetchFeedbacks();
    }, []);


    return (
        <div className="flex flex-col items-center space-y-8 bg-yellow-200"
            style={{ paddingLeft: '20%',paddingRight:'20%',paddingTop:20,paddingBottom:20,  width: '80%', margin: 'auto', borderTop: 'round' }}
             >

            <Grid container spacing={2}>
                {feedbacks.map((item, index) => (
                    <Grid item xs={12} key={index} className={index % 2 !== 0 ? 'flex-row-reverse' : ''}>
                        <div className="bg-white shadow-lg p-10 flex space-x-9"
                            style={{ borderRadius: '20px', transform: 'rotate(-5deg)' }}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className={index % 2 !== 0 ? 'order-2' : 'order-1'}>
                                    <div className="relative">
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <FaQuoteRight size={10}/> 
                                        </div>
                                    </div>
                                    <p className="text-gray-900 font-semibold">{item.user.name}</p>
                                    <p className="text-gray-700 italic">
                                        {item.comment}
                                    </p>
                                </div>
                                <div className={index % 2 !== 0 ? 'order-1' : 'order-2'}>
                                    <img
                                        src={`http://localhost:4000/${item.user.profileImage}`}
                                        // src={item.url}
                                        className="w-20 h-20 
                                        object-cover border-2 border-gray-200"
                                        alt={`Customer ${index + 1}`}
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CustomerReview;
