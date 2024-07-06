import React from 'react';
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';
import { useAuth } from  '../../Auth/AuthContext'



const IngredientDetail = () => {

  const location = useLocation();
  const { props } = location.state;
  const { isMya} = useAuth();



  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <img
src={`http://localhost:4000/${props.image}`} alt="img"          
          className="w-full h-64 object-cover rounded-t-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{isMya ? props.name_mm : props.name}</h1>
        

        <h2 className="text-2xl font-bold mb-2">{isMya? "ပါဝင်ပစ္စည်းများ" : "Ingredients"}</h2>
        
        {/* <ul className="list-disc list-inside">
          {props.ingredient.map((recipe, index) => (
            <li key={index} className="text-gray-700">
              {recipe}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default IngredientDetail;
