import React from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import Modals from "../layouts/Modals";
const Categories = () => {
    return (
        <div className=" flex-col 
           slideTop">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Categories</h1>
            <Grid container spacing={0}>
                {data.Dish.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                        <DishCard
                img={item.url}
                title={item.name}
                ingredents={item.ingredents}
            />
                    </Grid>
                ))}

            </Grid>
        </div >
    )
}
export default Categories;


