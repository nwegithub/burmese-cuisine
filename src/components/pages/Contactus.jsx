import React, { useState } from 'react';
import "../../Contactus.css";
import img2 from "../../assets/image2.png";
import Cbutton from '../../layouts/Cbutton';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault(); // Prevent default form submission
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

      // Clear the text fields
      event.target[0].value = '';
      event.target[1].value = '';
      event.target[2].value = '';
    }
  };
  const Cbutton = ({ isOutline, text, icon, style }) => {
    return (
      <button className={isOutline ? "outline_btn" : "primary_btn"} style={style}>
        {icon}
        {text}
      </button>
    );
  };
  return (
    <div className="container" style={{
      backgroundColor: 'white',
      minHeight: "60vh",
      padding: '0', // Remove padding to utilize full width
      fontSize: '1.2rem', // Base font size for the container
    }}>
      <div className="container-section" style={{ padding: '0' }}>
        <div className="contact_section" style={{ padding: '20px 50px' }}>
          <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Contact Our Myanmar Cuisine</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
        <section className="form_section" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 50px', // Adjust padding for proper spacing
          boxSizing: 'border-box' // Ensure padding does not affect width
        }}>
          <form onSubmit={onSubmit} className="form" style={{ flex: 1, marginRight: '20px', fontSize: '1.2rem' }}>
            <div className="form_control" style={{ marginBottom: '20px' }}>
              <input
                type="text"
                name='name'
                placeholder='Enter your name'
                style={{
                  fontSize: '1.5rem',
                  padding: '15px',
                  border: '1.5px solid #ccc',
                  borderRadius: '5px',
                  width: '100%'
                }}
              />
            </div>
            <div className="form_control" style={{ marginBottom: '20px' }}>
              <input
                type="text"
                name='email'
                placeholder='abc@example.com'
                style={{
                  fontSize: '1.5rem',
                  padding: '15px',
                  border: '1.5px solid #ccc',
                  borderRadius: '5px',
                  width: '100%'
                }}
              />
            </div>
            <div className="form_control" style={{ marginBottom: '20px' }}>
              <textarea
                name='text'
                placeholder='Description'
                style={{
                  fontSize: '1.5rem',
                  padding: '15px',
                  border: '1.5px solid #ccc',
                  borderRadius: '5px',
                  width: '100%',
                  height: '150px',
                  resize: 'vertical'
                }}
              />
            </div>
            <div className="submit" style={{ marginBottom: '20px' }}>
              <Cbutton
                text='SUBMIT'
                style={{
                  fontSize: '2rem',
                  backgroundColor: 'skyblue', // Blue background
                  color: 'black', // Black text
                  border: 'none', // Remove default border
                  borderRadius: '5px' // Rounded corners
                }}
              />
            </div>
          </form>
          <div className="contact_image" style={{ flex: 1 }}>
            <img
              src={img2}
              alt="contact us"
              style={{
                height: "350px",
                width: "80%", // Make the image width responsive
                marginTop: "0",
                marginBottom: "30px",
                display: 'block', // Ensure the image doesn't get pushed around
                objectFit: 'cover', // Ensure the image covers the container without distortion
                borderRadius: '8px' // Optional: add some rounding to the image corners
              }}
            />
          </div>
        </section>
        <div style={{ padding: '0 50px' }}>
          <p style={{ fontSize: '2rem'}}>
            {`Name: ${name}`} <br /> {`Email: ${email}`} <br /> {`Text: ${text}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
