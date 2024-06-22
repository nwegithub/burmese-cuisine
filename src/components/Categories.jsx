import React from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";

const Categories = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center
        items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Categories</h1>
            {/* <Grid className="flex flex-wrap gap-8 justify-center ">
                {
                     recipie.Dish.map(recipies => {
                        return (
                                <DishCard img={recipies.url}
                                 text={recipies.name}/>
                        )
                    })

                }

            </Grid> */}

            <Grid className="flex flex-wrap gap-8 justify-center ">
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

            <Grid className="flex flex-wrap gap-8 justify-center ">
                {
                    data.Salad.map((item, index) => {
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

            <Grid className="flex flex-wrap gap-8 justify-center ">
                {
                    data.Dessert.map((item, index) => {
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