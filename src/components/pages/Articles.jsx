import React from "react";
import { Grid, Typography, Paper } from '@mui/material';
import "../../index.css";
import recipie from "../../../recipie.json";

const Articles = () => {
    return (
        <div className="container py-14 relative">
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
