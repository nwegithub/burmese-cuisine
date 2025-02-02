import React from "react";
import  "../Style.css";
const Cbutton = ({isOutline,text,icon}) => {
  return (
        <button className={isOutline ? "outline_btn" : "primary_btn"}
          style={{ 
            fontSize: '16px',
            boxShadow: '0 6px 12px 2px rgba(0, 0, 0, 0.15)',
            color:'black',
          backgroundColor:''}} >
            {icon}
            {text}
        </button>
  )
  }
export default Cbutton;