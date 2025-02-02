import React from 'react';
const Button = (props) => {
    return (
        <div>
            <button className='px-6 py-1 text-brightColor 
            hover:bg-brightColor hover:text-white trasition-all btn info justify-content center'
            style={{backgroundColor:"Blue"}}>
                {props.title}
            </button>
        </div>
    );
};
export default Button;