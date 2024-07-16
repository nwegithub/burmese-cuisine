import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { GiSaltShaker } from 'react-icons/gi';
import '../../Style.css';

const IngredientDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { props } = location.state || {};
  const { isMya } = useAuth();

  if (!props) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className=" w-full y-full p-6">
        <div className="flex flex-col md:flex-row">
          {/* Image Column */}
          <div className="md:w-1/3 p-4 flex justify-center items-center">
            <img
              className="rounded-lg"
              src={`http://localhost:4000/${props.image}`}
              alt="Recipe"
              style={{ width: '420px', height: '420px' }}
            />
          </div>

          {/* Ingredients and Directions Column */}
          <div className="md:w-2/3 p-4 flex flex-col">
            {/* Ingredients Box */}
            <div className="bg-yellow-100 p-6 rounded-lg mb-6">
              <h2 className="text-4xl font-semibold text-yellow-800 mb-4 text-center">
                {isMya ? "ပါဝင်ပစ္စည်းများ" : "Ingredients"}
              </h2>
              <ul className="list-disc list-inside text-3xl">
                {isMya
                  ? props.ingredient.map((item, index) => (
                      <li key={index} className="flex items-center my-2">
                        <GiSaltShaker className="mr-2" /> {item.name} : {item.amount} {item.unit}
                      </li>
                    ))
                  : props.ingredient_mm.map((item, index) => (
                      <li key={index} className="flex items-center my-2">
                        <GiSaltShaker className="mr-2" /> {item.name} : {item.amount} {item.unit}
                      </li>
                    ))}
              </ul>
            </div>

            {/* Directions Box */}
            <div className="bg-yellow-100 p-6 rounded-lg">
              <h2 className="text-4xl font-semibold text-yellow-800 mb-4 text-center">Directions</h2>
              <ol className="list-decimal list-inside text-gray-700 text-3xl">
                {/* {props.directions.map((direction, index) => (
                  <li key={index} className="mb-2">{direction}</li>
                ))} */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quae,
                officiis deleniti sunt laborum optio officia natus ab perspiciatis
                error nisi autem. Libero eaque dignissimos quia ipsam eligendi id maiores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis necessitatibus fugit sed ducimus sequi atque, voluptatem expedita praesentium, error veniam excepturi 
                corrupti accusantium aliquam quidem soluta vero ipsa rem?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione laudantium dolorem animi tempora unde, incidunt, iste id dolorum aliquid temporibus qui architecto? Ratione 
                saepe ipsam voluptatum blanditiis dignissimos repudiandae illo?
              </ol>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
            onClick={() => navigate("/IngredientCalculation", { state: { props } })}
          >
             Calculate Ingredients
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetail;
