import React, { useState } from "react";
import ShopCards from "../../layouts/ShopCards";
import ShopItems from "../../../shopItems.json";
import { Grid } from "@mui/material";

const Shop = () => {
    const [show,setShow]=useState(true);
    const [cart,setCart]=useState([]);
    const [warning,setWarning]=useState(false);
     
    const handleClick=(item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if (item.id===product.id)
            isPresent=true;
        })
        if (isPresent){

        }
      
    setCart([...cart,item]);
    }
    return (
        <div className=" min-h-screen flex flex-col 
        items-center lg:px-20 px-5">
            <h1 className="text-4xl font-semibold pt-24 pb-10">
                Summer Sale!</h1>

            <Grid className="flex flex-wrap">
                {
                    ShopItems.Discount.map(shopItems => {
                        return (
                            <ShopCards 
                                img={shopItems.url}
                                title={shopItems.name}
                                price={shopItems.price}
                                handleClick={handleClick} />
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export default Shop;

