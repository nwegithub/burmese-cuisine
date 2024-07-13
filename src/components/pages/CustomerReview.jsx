import React from "react";
import arr from "../../../recipie.json"; // Assuming the JSON file path is correct
import { Grid } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const CustomerReview = () => {
    return (
        <div className="flex flex-col items-center space-y-8"
            style={{ padding: '20%', backgroundColor: 'pink', width: '80%', margin: 'auto', borderTop: 'round' }} >

            <Grid container spacing={2}>
                {arr.Salad.map((testimonial, index) => (
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
                                    <p className="text-gray-900 font-semibold">Aung</p>
                                    <p className="text-gray-700 italic">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Similique neque temporibus pariatur ab recusandae quo
                                        consectetur nam expedita accusantium quas, culpa aperiam
                                        libero enim qui hic. Ullam accusantium in temporibus.
                                    </p>
                                </div>
                                <div className={index % 2 !== 0 ? 'order-1' : 'order-2'}>
                                    <img
                                        src={testimonial.url}
                                        className="w-45 h-45 
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
