


import React, { useEffect, useState } from "react";
import DishCard from "../layouts/DishCard";
import data from "../../recipie.json"
import { Container, Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import categorybg from "../assets/category-bg.jpeg"
import '../Style.css';
import { useNavigate } from "react-router-dom";
import '../Ethnicalfood.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const buttonLabels = ['Kachin', 'Kayar', 'Kayin', 'Chin', 'Mon', 'Rakhine', 'Shan', 'Bamar'];


const Ethnicalfood = (item) => {
    const navigate = useNavigate();


    const handleClick = (item) => {
        navigate("/Feedback", { state: { item } }); // Navigate and pass state
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
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
    return (
        <div className=" flex-col" style={{background : 'pink'}}>
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


            <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
                Our Ethnical Food</h1>


            <div className="button-header">
                
                <Slider {...settings}>
                    
                    {buttonLabels.map((label, index) => (
                        <button key={index} className="button-item">
                            {label}
                        </button>
                    ))}
                </Slider>
            </div>

            {


                category === "All" ?
                    <Grid container spacing={0}>
                        {product.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                                <DishCard
                                    image={item.image}
                                    name={item.name}
                                    name_mm={item.name_mm}
                                    ingredient={item.ingredients}
                                    ingredient_mm={item.ingredients_mm}
                                    recipe={item.recipe}
                                    recipe_mm={item.recipe_mm}
                                    category={item.category}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    :
                    <Grid container spacing={0}>

                        {filterProduct.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
                                <DishCard
                                    image={item.image}
                                    name={item.name}
                                    name_mm={item.name_mm}
                                    ingredient={item.ingredients}
                                    ingredient_mm={item.ingredients_mm}
                                    recipe={item.recipe}
                                    recipe_mm={item.recipe_mm}
                                    category={item.category}
                                />
                            </Grid>
                        ))}
                    </Grid>
            }
            <div className="customer-review-container"
                style={{ paddingBottom: "20%" }} >
                <button
                    className="button-52"
                    onClick={() => handleClick(item)}>
                    Customer Feedback
                </button>
            </div>
        </div >
    )
}
export default Ethnicalfood;



