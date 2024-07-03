import React, { useRef, useState, useEffect } from "react";
import { Grid, Typography, Paper } from '@mui/material';
import "../../index.css";
import recipie from "../../../recipie.json";
import promoImage from "../../assets/image-removebg-preview.png"

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
        <div className="container py-14 relative">
            <div className="promotion-banner-container">
                <div className="content-container">
                    <p className="primary-text">
                        The refreshing taste that brings excitement to every meal.
                        Enjoy a limited time offer.
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
                                <img src={item.url} alt={item.name}/>
                            </Grid>
                            <Grid item xs={6}>
                                <p>{item.name}</p>
                                <p style={isOpen ? null : { overflow: "hidden", maxHeight: "4em" }} ref={ref}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nisi nihil ea, harum voluptate in expedita architecto vitae
                                    sed nobis atque iure rem amet
                                    doloribus explicabo non numquam debitis? Nam, quidem.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam nulla
                                    officiis autem expedita fuga possimus deserunt soluta consectetur beatae maiores nisi at praesentium adipisci
                                    minima nemo corrupti, obcaecati rem!
                                </p>
                                {showReadMoreButton && (
                                    <button onClick={() => setIsOpen(!isOpen)}
                                        className="rounded-button">
                                        {isOpen ? 'Read less...' : 'Read more...'}
                                    </button>
                                )}
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Articles;
