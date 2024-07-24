import React, { useState } from "react";
import Modals from "./Modals";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Auth/AuthContext';

const DishCard = (item) => {
    const [openIngredientModal, setOpenIngredientModal] = useState(false);
    const [openRecipeModal, setOpenRecipeModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    const { isMya, setIsMya} = useAuth();
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const itemData = item.item


    return (
        <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="m-8 border-5 border-red-500 card  "
            style={{ backgroundColor: isHovered && '#b8860b', height: 270, borderRadius: 10 }}>
            <img className="  shadow-slate-200" style={{borderTopRadius: 10, width: '100%', height: isHovered ? '75%' : '80%' }} 
            src={`http://localhost:4000/${itemData.image}`} alt="img" />
            {
                isHovered ?
                    (<div className="flex justify-center space-x-1 items-center"
                        style={{ height: '30%' }}>
                        <Button onClick={() => navigate('/IngredientDetail', { state: { item:itemData } })}
                            style={{paddingInline: 10, backgroundColor: '#42eff5', color: 'black'}}>
                            Ingredients
                        </Button>
                        <Button onClick={() => setOpenRecipeModal(true)} style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}>
                            Recipe
                        </Button>
                    </div>
                    )
                    :

                    <h3 className="font-semibold text-center text-xl pt-6">{isMya ? item.name_mm : item.name}</h3>
            }

        </div>
    
    );
};
export default DishCard;
