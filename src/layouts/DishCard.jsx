import React, { useState } from "react";
import Modals from "./Modals";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Auth/AuthContext';
import { useItem } from "../Auth/ItemProvider";

const DishCard = (item) => {
  
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    const { setItem } = useItem();
    const { isMya } = useAuth();
  
    const handleNavigateToDetail = () => {
      setItem(itemData);
      navigate('/IngredientDetail');
    };
  
    const handleNavigateToRecipe = () => {
      setItem(itemData);
      navigate('/Receipe');
    };    
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
            style={{borderWidth:1,borderColor:'GrayText', height: 270, borderRadius: 10 ,justifyContent:'center',alignItems:'center',
                padding:10
            }}>

            <img className="  shadow-slate-200" 
            style={{borderTopRadius: 10, width: '100%', height: isHovered ? '75%' : '80%' }} 
            src={`http://localhost:4000/${itemData.image}`} alt="img"/>
            {
                isHovered ?
                    (<div className="flex justify-center space-x-1 items-center"
                        style={{ height: '30%' }}>
                        <Button onClick={() => handleNavigateToDetail()}
                            style={{paddingInline: 10, backgroundColor: '#42eff5', color: 'black'}}>
                           {isMya? "ပါဝင်ပစ္စည်းများ" : "Ingredients"} 
                        </Button>

                        <Button onClick={() => handleNavigateToRecipe()}
                         style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}>
                           {isMya? "ချက်နည်းများ" : "Recipe"} 
                        </Button>
                    </div>
                    )
                    :

                    <h3 className="font-semibold text-center text-xl pt-6"
                    style={{color:'black'}}>{isMya ? itemData.name_mm : itemData.name}</h3>
            }

        </div>
    
    );
};
export default DishCard;