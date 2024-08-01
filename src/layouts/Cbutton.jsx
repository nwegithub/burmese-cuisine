import React from "react";
import  "../Style.css";
const Cbutton = ({isOutline,text,icon}) => {
  return (
        <button className={isOutline ? "outline_btn" : "primary_btn"}
        style={{ fontSize: '16px' }} >
            {icon}
            {text}
        </button>
  )
  }
export default Cbutton;