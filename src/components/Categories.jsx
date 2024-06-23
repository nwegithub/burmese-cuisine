import React from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import Modals from "../layouts/Modals";

const Categories = () => {
    return (
        <div className="flex flex-col justify-center
        items-center lg:px-32 px-5 slideTop">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Categories</h1>

            

            <Grid className="flex flex-wrap  ">
                {
                    data.Dish.map((item, index) => {
                        return (

                            <DishCard
                                img={item.url}
                                title={item.name}
                            />
                        )
                    }
                    )
                }
            </Grid>

            

        </div >
    )
}
export default Categories;