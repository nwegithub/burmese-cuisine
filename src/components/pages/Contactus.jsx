import React, { useState } from 'react';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import "../../Contactus.css";
import img2 from "../../assets/image2.png";
import Cbutton from '../../layouts/Cbutton';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault(); // for preventing page default refresh
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

      // Clear the text fields
      event.target[0].value = '';
      event.target[1].value = '';
      event.target[2].value = '';
    }
  };

  return (
    <div className="container min-h-screen">
      <div className="container-section" style={{ padding: '0px 50px 50px 50px'}}>
        <div className="contact_section" style={{ padding: '0px 50px'}}>
          <h2>CONTACT US</h2>
          <p>
            LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! 
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN 
            REACH OUT TO US THROUGH THE CONTACT FROM OF THIS PAGE, OR BY PHONE, 
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
        <section className="form_section" style={{ padding: '0px 50px' }}>
          <div >
            <div className="contact_form">
              <div className="top_btn">
                <Cbutton text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='20px' />} />
                <Cbutton text='VIA CALL' icon={<FaPhoneAlt fontSize='20px' />} />
              </div>
              <Cbutton isOutline='true' text='VIA EMAIL FROM' icon={<HiMail fontSize='10px' />} />
            </div>
            <form onSubmit={onSubmit} className="form">
              <div className="form_control">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='John Peter' />
              </div>
              <div className="form_control">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder='abc@example.com' />
              </div>
              <div className="form_control">
                <label htmlFor="text">Text</label>
                <textarea type="text" name='text' placeholder='Description' />
              </div>
              <div className="submit">
                <Cbutton text='SUBMIT' />
              </div>
              <p>
                {`Name: ${name}`} <br /> {`Email: ${email}`} <br /> {`Text: ${text}`}
              </p>
            </form>
          </div>
          <div className="contact_image" >
            <img style={{height: "350px",
    width: "330px",marginTop:"-30px",marginBottom:"30px"}} src={img2} alt="image" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contactus;