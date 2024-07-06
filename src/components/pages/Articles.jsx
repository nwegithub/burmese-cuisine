import React, { useRef, useState, useEffect } from "react";
import { Grid, Typography, Paper } from '@mui/material';
import "../../index.css";
import recipie from "../../../recipie.json";
import promoImage from "../../assets/article.png"
import Footer from "./Footer";

const Articles = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showReadMoreButton, setShowReadMoreButton] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            console.log(ref.current.scrollHeight, ref.current.clientHeight);
            setShowReadMoreButton(
                ref.current.scrollHeight > ref.current.clientHeight
            );
        }
    }, []);
    return (
        <div className="container  relative">
            <div className="promotion-banner-container">
                <div className="content-container">
                    <p className="header">Welcome to our food blog,</p>
                    <p className="subheader">
                        a culinary journey that celebrates the rich and diverse flavors from around the world.
                        Here, we share mouthwatering recipes, cooking tips, and inspiring stories behind your favorite dishes.
                        Whether you're a seasoned chef or a home cook, you'll find a treasure trove of delicious ideas to elevate your meals.
                        Join us as we explore the art of cooking and the joy of sharing food with loved ones.
                    </p>
                </div>
                <div className="image-container">
                    <img src={promoImage} alt="Promotion" className="rotated-image" />
                </div>
            </div>
            <Grid container spacing={2}>
                {recipie.Salad.map((item, index) => {
                    const reverse = index % 2 !== 0;
                    return (
                        <Grid container item xs={12} spacing={2} key={item.id} direction={reverse ? "row-reverse" : "row"} style={{ marginTop: '50px' }} >
                            <Grid item xs={6} style={{ marginTop: '20px' }}>
                                <img src={item.url} alt={item.name} />
                            </Grid>
                            <Grid item xs={6}>
                                <p>{item.name}</p>

                                <p
                                    style={isOpen ? null : { overflow: "clip", maxHeight: "4em" }} ref={ref}
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nisi nihil ea, harum voluptate in expedita architecto vitae
                                    sed nobis atque iure rem amet
                                    doloribus explicabo non numquam debitis? Nam, quidem.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam nulla
                                    officiis autem expedita fuga possimus deserunt soluta consectetur beatae maiores nisi at praesentium adipisci
                                    minima nemo corrupti, obcaecati rem!
                                </p>
                                {showReadMoreButton && (
                                    <div>
                                        <button onClick={() => setIsOpen(!isOpen)} className="rounded-button">
                                            {isOpen ? 'Read less...' : 'Read more...'}
                                        </button>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
            <Footer />
        </div>
    );
};

export default Articles;


