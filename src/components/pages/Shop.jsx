import React from "react";
import DishCard from "../../layouts/DishCard";
import ShopItems from "../../../shopItems.json";

const Shop = (props) => {
    return (
        <div className=" min-h-screen flex flex-col 
        items-center lg:px-20 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Summer Sale!</h1>
            <div className="flex flex-wrap ">
            {
                     ShopItems.Discount.map(shopItems => {
                        return (
                                <DishCard img={shopItems.url}
                                 text={shopItems.name}/>
                        )
                    })

                }
            </div>
        </div>
    )
}
export default Shop;

