import React, { useEffect, useState } from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import categorybg from "../assets/category-bg.jpeg"
import '../Style.css';
import { useNavigate } from "react-router-dom";

import Home from './Home'; // Home component



const Categories = (item) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate("/Feedback", { state: { item } }); // Navigate and pass state
    };

    const { category } = useParams();
    const [product, setProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products/allProduct')
            .then(response => response.json())
            .then(data => {
                setProduct(data.result);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);
    useEffect(() => {
        if (category) {
            setFilterProduct(product.filter(item => item.category === category));
        } else {
            setFilterProduct(product);
        }
    }, [category, product]);
    console.log(category);
    if (!product) {
        return <div>Loading...</div>;
    }

    const handleClickHome = () => {
        navigate('/Home');
    };
    const handleClickMenu = () => {
        navigate('/Menu');
    };
    const handleClickCat = () => {
        navigate('/Categories');
    };


    return (
        <div className=" flex-col bg-custom-gradient" style={{ minHeight: "60vh" }}>
            <div className="pt-5">
                <div className="pt-5 flex flex-row" style={{
                    border: "2px solid #fcbf49",
                    borderRadius: "10px", // optional: to round the corners
                    padding: "0px 15px",
                    backgroundColor: "#ffd670",
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                    width: "280px",
                    marginRight: "5px"
                }}>
                    <button className="p-3" onClick={handleClickHome} type="button" >
                        Home  /
                    </button>
                    <button className="p-3" onClick={handleClickMenu} type="button"
                    >
                        Menu /
                    </button>
                    <button className="p-3" onClick={handleClickCat} type="button"  >
                        Categories
                    </button>
                </div>
            </div>

            {/* <div className="relative " style={{ height: '40vh' }}>
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
            </div> */}
            <h1 className="text-4xl font-semibold text-center pt-10 pb-5">
                Our Categories</h1>
            {
                category === "All" ?
                    <Grid container spacing={0}>
                        {product.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                                <DishCard
                                    item={item}
                                // image={item.image}
                                // name={item.name}
                                // name_mm={item.name_mm}
                                // ingredient={item.ingredients}
                                // ingredient_mm={item.ingredients_mm}
                                // recipe={item.recipe}
                                // recipe_mm={item.recipe_mm}
                                // category={item.category}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    :
                    <Grid container spacing={0}>
                        {filterProduct.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                                <DishCard
                                    item={item}
                                // image={item.image}
                                // name={item.name}
                                // name_mm={item.name_mm}
                                // ingredient={item.ingredients}
                                // ingredient_mm={item.ingredients_mm}
                                // recipe={item.recipe}
                                // recipe_mm={item.recipe_mm}
                                // category={item.category}
                                />
                            </Grid>
                        ))}
                    </Grid>
            }
            <div className="customer-review-container"
                style={{ paddingBottom: "20%", marginTop: 50 }} >
                <button
                    className="button-52"
                    onClick={() => handleClick(item)}>
                    Customer Feedback
                </button>
            </div>
        </div >
    )
}
export default Categories;


