import React, { useState } from 'react';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import "../../Contactus.css";
import img2 from "../../assets/image2.png";
import Cbutton from '../../layouts/Cbutton';
import axios from 'axios';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/createContact/addContact', { name, email, text });
      setMessage(response.data.message);
      setName('');
      setEmail('');
      setText('');
      alert('Create contact successful')
    } catch (error) {
      setMessage('Error submitting contact request');
      console.log("e", error)
    }
  };

  return (
    <div className="container min-h-screen" style={{ backgroundColor: 'white', minHeight: "100vh" }}>
      <div className="container-section" style={{ padding: '0px 50px 50px 50px' }}>
        <div className="contact_section" style={{ padding: '0px 50px' }}>
          <h1 className='title1'>CONTACT US</h1>
          <h2 className='body4'>
            LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! 
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN 
            REACH OUT TO US THROUGH THE CONTACT FORM ON THIS PAGE, OR BY PHONE, 
            EMAIL, OR SOCIAL MEDIA.
          </h2>
        </div>
        <section className="form_section" style={{ padding: '0px 50px' }}>
          <div>
            <form onSubmit={onSubmit} className="form">
              <div className="form_control">
                <input
                  type="text"
                  name='name'
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ fontSize: '16px' }}
                />
              </div>
              <div className="form_control">
                <input
                  type="text"
                  name='email'
                  placeholder='abc@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: '16px' }}
                />
              </div>
              <div className="form_control">
                <textarea
                  name='text'
                  placeholder='Description'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ fontSize: '16px' }}
                />
              </div>
              <div className="submit" style={{ fontSize: '16px' }}>
                <Cbutton text='SUBMIT' />
              </div>
              {message && <p>{message}</p>}
            </form>
          </div>
          <div className="contact_image">
            <img style={{ height: "350px", width: "330px", marginTop: "-30px", marginBottom: "30px" }} src={img2} alt="Contact us" />
          </div>
        </section>
        <div style={{ padding: '0 50px' }}>
          <p style={{ fontSize: '2rem' }}>
            {`Name: ${name}`} <br /> <br/>{`Email: ${email}`} <br /> <br /> {`Text: ${text}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
