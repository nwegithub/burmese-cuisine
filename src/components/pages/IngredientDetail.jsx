import React from 'react';
import '../../layouts/RecipeCard.css';
import detail from "../../assets/fc739f95286b81646fa8e719a190ba41.jpg"
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { GiSaltShaker } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import '../../Style.css';

const IngredientDetail = () => {
  const location = useLocation();
  const { props } = location.state;
  const { isMya } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="recipe-card flex w-full h-full">
        <div className="image-section w-1/2 flex justify-center items-center">
          <img
            src={`http://localhost:4000/${props.image}`}
            alt="img"
            ame="recipe-image"
            className="w-full h-full object-cover rounded-t-md" />
        </div>
        <div className="text-section w-1/2 p-4 flex flex-col justify-center">
          <div className="ingredients">
            <ul>
              <h1 className="text-3xl font-bold mb-4">{isMya ? props.name_mm : props.name}</h1>
              <h2 className="text-3xl font-bold mb-4">{isMya ? "ပါဝင်ပစ္စည်းများ" : <div className="text-center">
                <h1 className="gradient-text">Our family Secret Ingredients</h1>
              </div>
              }</h2>
              {
                isMya ?
                  <ul className="list-disc list-inside">
                    {props.ingredient.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 my-2 text-rose-500">
                        <GiSaltShaker className="mr-2" /> {item.name} : {item.amount} {item.unit}
                      </li>
                    ))}
                  </ul>
                  :
                  <ul className="list-disc list-inside">
                    {props.ingredient_mm.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 my-2 text-rose-500">
                        <GiSaltShaker className="mr-2" /> {item.name} : {item.amount} {item.unit}
                      </li>
                    ))}
                  </ul>
              }
            </ul>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mt-4"
              onClick={() => navigate("/IngredientCalculation", { state: { props } })}>
              Ingredients
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div >
  );
};
export default IngredientDetail;
