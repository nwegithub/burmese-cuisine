import React from "react";
const ShopCards = (props,item,handleClick) => {
    
    return (
        <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <p style={{ backgroundColor: 'red', width: 38, color: 'white', textAlign: "center", fontSize: 13 }}>Sale</p>
            <img className="product-image" src={props.img} alt="img" />
            <div className="space-y-4">
                <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
                <h3 className="">{props.price}</h3>
                <div className="">
                    <button className="add-button"
                     onClick={()=>
                        handleClick(item)
                     }
                        >Add To Cart</button>
                </div>
            </div>
        </div>
    );
                    }
export default ShopCards;