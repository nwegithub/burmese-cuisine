import React from "react";
import DishCard from "../layouts/DishCard";
import img1 from "../assets/img1.jpg"
import recipie from "../../recipie.json"
import "../index.css"



const Dishes = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center
        items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Dishes</h1>
            <div className="flex flex-wrap gap-8 justify-center ">
                {
                     recipie.Dish.map(recipies => {
                        return (
            
                                <DishCard img={recipies.url}
                                 text={recipies.name}/>
                            
                        )
                    })

                }

            </div>
        </div >
    )
}
export default Dishes;