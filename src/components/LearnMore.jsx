import React,{useRef}from "react";
import '../Style.css';
import pic1 from "../assets/pic1.jpg";

const LearnMore=React.forwardRef((props,ref)=>{

    return(
        <div ref={ref} >
            <div style={{ padding: '10%' }} >
        <div className="relative flex justify-end md:space-x-2 space-x-1">
          <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img className="product-image1  border-gray-300" src={pic1} alt="img" />
          </div>
          <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img className="product-image1 border-gray-300" src={pic1} alt="img" />
          </div>
          <div className="w-full md:w-auto p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
            <img className="product-image1  border-gray-300" src={pic1} alt="img" />
          </div>
        </div>
        <div className="image-row" style={{ padding: '10%' }}>
          <img className="round-image w-48 h-48" src={pic1} alt="" />
          <img className="round-image w-48 h-48" src={pic1} alt="" />
        </div>
      </div>
        </div>
    )
}
)
export default LearnMore;