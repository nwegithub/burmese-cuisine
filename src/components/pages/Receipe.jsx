import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText,Typography } from '@mui/material';
import RecipeIcon from '@mui/icons-material/RestaurantMenu'; // Import a suitable icon

const Recipe = () => {
    const location = useLocation();
    const { item } = location.state || {};
    

    // Split the recipe into an array of steps
    const recipeSteps = item.recipe ? item.recipe.split(',') : [];

    return (
        <div className="bg-custom-gradient min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl">
                <div className="p-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                        {item.name}
                    </h1>
                    <p className="text-center font-bold italic mb-6">Myanmar Cuisine</p>
                </div>
                <img
                    className="object-cover object-center"
                    src={`http://localhost:4000/${item.image}`}
                    alt={item.name}
                />
                <div className="px-6 py-4 flex justify-between items-center bg-gray-200">
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
                </div>
                <div className="px-6 py-4">
                    <h2 className="text-4xl text-center font-bold text-gray-800 mb-4">Directions</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <List>
                            {recipeSteps.map((step, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                    <RecipeIcon fontSize="large" />{/* Use the desired icon */}
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
                </div>
            </div>
        </div>
    );
};

export default Recipe;
