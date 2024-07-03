import React, { useState } from "react";
import Modals from "./Modals";
import { Button } from '@mui/material';

const DishCard = (props) => {

    const [openIngredientModal, setOpenIngredientModal] = useState(false);
    const [openRecipeModal, setOpenRecipeModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" slideTop m-8 border-5 border-red-500 card  "
            style={{ backgroundColor: isHovered && '#b8860b', height: 290, borderRadius: 10 }}>
            <img className="rounded-xl shadow-2xl shadow-slate-600" style={{ width: '100%', height: isHovered ? '70%' : '80%' }} src={props.img} alt="img" />


            {
                isHovered ?
                    (<div className="flex justify-center space-x-2 items-center"
                        style={{ height: '30%' }}>
                        <Button onClick={() => setOpenIngredientModal(true)} style={{ paddingInline: 10, backgroundColor: 'white', color: 'black' }}>
                            Ingredients
                        </Button>
                        <Button onClick={() => setOpenRecipeModal(true)} style={{ paddingInline: 10, backgroundColor: 'white', color: 'black' }}>
                            Recipe
                        </Button>
                    </div>
                    )
                    :

                    <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>


            }

<Modals
          openIngredientModal={openIngredientModal}
          setOpenIngredientModal={setOpenIngredientModal}
          openRecipeModal={openRecipeModal}
          setOpenRecipeModal={setOpenRecipeModal}
          props={props}
        />


        </div>
      

    );
};
export default DishCard;
