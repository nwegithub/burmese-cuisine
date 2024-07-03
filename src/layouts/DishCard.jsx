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

        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full lg:w-1/4 p-2 rounded-lg card  onMouseEnter={handleMouseEnter} slideTop"
        >
            {/* <img className="rounded-xl style={{ width: '100%', height: '100%'}}" src={props.img} alt="img" /> */}

            <img
                className="rounded-xl " style={{ width: '500px', height: '300px', objectFit: 'cover', padding: '20px', borderRadius: '30px' }}
                src={props.img}
                alt="img"
            />
            <div className="space-y-4">
                {isHovered && (
                    <div><div>
                        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3></div>

                        <div className="flex justify-center space-x-2">
                            <Button onClick={() => setOpenIngredientModal(true)}
                                style={{ color: 'blue' }}>
                                Ingredients
                            </Button>


                            <Button onClick={() => setOpenRecipeModal(true)}
                                style={{ color: 'blue' }}>
                                Recipe </Button>
                        </div>
                    </div>)}

                <div>
                    <Modals
                        openIngredientModal={openIngredientModal}
                        setOpenIngredientModal={setOpenIngredientModal}
                        openRecipeModal={openRecipeModal}
                        setOpenRecipeModal={setOpenRecipeModal}
                        props={props}
                    />
                </div>
            </div>
        </div>
    );
};
export default DishCard;