import React from "react";
import { Grid, Typography, Paper } from '@mui/material';
import "../../index.css";
import recipie from "../../../recipie.json";
import promoImage from "../../assets/pic1.jpg"

const Articles = () => {
    return (
        <div className="container py-14 relative">
            <div className="promotion-banner-container">
                <div className="content-container">
                    <div className="promo-header">
                        <p>Fancy up!</p>
                        <div className="rating-icons">
                            {/* Add icons for rating */}
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                    </div>
                    <h2>Buy 1 Get 1 Free!</h2>
                    <p>
                        The refreshing taste that brings excitement to every meal. Enjoy a limited time offer.
                    </p>
                    <button className="cta-button">Order Now</button>
                    <div className="price-tag">
                        <p>$5 ONLY</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={promoImage} alt="Promotion" />
                </div>
            </div>
            <Grid container spacing={2}>
                    {recipie.Salad.map((item, index) => {
                        const reverse = index % 2 !== 0;
                    return (
                        <Grid container item xs={12} spacing={2} key={item.id} direction={reverse ? "row-reverse" : "row"}>
                            <Grid item xs={6}>
                                <img src={item.url} alt={item.name}  style={{borderRadius:20}}/>
                            </Grid>
                            <Grid item xs={6}>
                                <p>{item.name}</p>
                                <p></p>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};
export default Articles;
