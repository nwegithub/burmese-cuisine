import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import RecipeIcon from '@mui/icons-material/RestaurantMenu';
import { useAuth } from '../../Auth/AuthContext';
import { useItem } from '../../Auth/ItemProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EthnicalRecipe = () => {

    const { item } = useItem();
    const { isMya } = useAuth();
  
    useEffect(() => {
      console.log("Language or item changed:", isMya, item);
    }, [isMya, item]);
  
    const recipeSteps = item
      ? isMya
        ? item.recipe_mm?.split(',') || []
        : item.recipe?.split(',') || []
      : [];
  
    if (!item) {
      return <div>Loading...</div>;
    }
    return (
        <div className="bg-custom-gradient min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl">
                <div className="p-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                        {isMya ? product.name_mm : product.name}
                    </h1>
                    {/* <p className="text-center font-bold italic mb-6">Myanmar Cuisine</p> */}
                </div>
                <img
                    className="object-cover object-center"
                    src={`http://localhost:4000/${product.image}`}
                    alt={isMya ? product.name_mm : product.name}
                />
                {/* <div className="px-6 py-4 flex justify-between items-center bg-gray-200">
                    <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md flex-1 mx-2">
                        <p className="font-bold text-gray-800">Prep</p>
                        <p className="text-gray-600">15 min</p>
                    </div>
                    <div className="text-center bg-green-100 p-4 rounded-lg shadow-md flex-1 mx-2">
                        <p className="font-bold text-gray-800">Cook</p>
                        <p className="text-gray-600">20 min</p>
                    </div>
                    <div className="text-center bg-yellow-100 p-4 rounded-lg shadow-md flex-1 mx-2">
                        <p className="font-bold text-gray-800">Ready in</p>
                        <p className="text-gray-600">35 min</p>
                    </div>
                </div> */}
                <div className="px-6 py-4">
                    <h2 className="text-4xl text-center font-bold text-gray-800 mb-4">Directions</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <List>
                            {recipeSteps.map((step, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <RecipeIcon fontSize="large" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1" style={{ fontSize: '1.5rem' }}>
                                                {step.trim()}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow mb-40" style={{ paddingTop: 30, paddingBottom: 30 }}>
                        <button
                            className='bg-custom-gradient flex items-center justify-between mb-4'
                            style={{
                                color: 'black',
                                paddingTop: '2px',
                                paddingBottom: '2px',
                                width: '350px',
                                height: '70px',
                                borderRadius: 10,
                                fontSize: '1.5rem', // Adjust the size of the icon
                            }}
                            onClick={() => navigate("/IngredientDetail", { state: { item } })}
                        >
                            <svg
                                className="w-8 h-8 mr-2" // Adjust size and margin as needed
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                            <p className='title3 text-center' style={{ flex: 1 }}>
                                {isMya ? "ပါဝင်ပစ္စည်းမျာ:" :"Ingredients"}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EthnicalRecipe;