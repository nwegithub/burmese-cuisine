import React from "react";
import DishCard from "../layouts/DishCard";
import img1 from "../assets/img1.jpg"


const Dishes = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center
        items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Dishes</h1>
            <div className="flex flex-wrap gap-8 justify-center">

                <DishCard img={img1} title="Tasty Dishes" />
                <DishCard img={img1} title="Tasty Dishes" />
                <DishCard img={img1} title="Tasty Dishes" />
                <DishCard img={img1} title="Tasty Dishes" />
                <DishCard img={img1} title="Tasty Dishes" />

            </div>
        </div>
    )
}
export default Dishes;