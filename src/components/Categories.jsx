import React from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import Modals from "../layouts/Modals";
import categorybg from "../assets/category-bg.jpeg"
const Categories = () => {
    return (
        <div className=" flex-col 
           slideTop">
             <div className="relative " style={{ height: '40vh' }}>
             <img
  src={categorybg}
  alt="Category"
  className="object-cover w-full h-full"
/>
      <input
  type="text"
  placeholder="Search..."
  className="absolute bottom-40 left-1/2 transform -translate-x-1/2 h-10 px-4 text-lg text-gray-700 bg-white bg-opacity-80 rounded-full outline-none placeholder-gray-500 w-full sm:w-[600px]"
/>


      </div>
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


