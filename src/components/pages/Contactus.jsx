import React, { useState } from 'react';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import "../../Contactus.css";
import img2 from "../../assets/image2.png";
import Cbutton from '../../layouts/Cbutton';
import axios from 'axios';
import { useAuth } from '../../Auth/AuthContext';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const { isMya, setIsMya } = useAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/createContact/addContact', { name, email, text });
      setMessage(response.data.message);
      setName('');
      setEmail('');
      setText('');
      alert(isMya ? 'ဆက်သွယ်မှုတင်ပြီး' : 'Create contact successful');
    } catch (error) {
      setMessage(isMya ? 'ဆက်သွယ်မှုတင်ရန်အမှားတစ်ခုဖြစ်ပွားခဲ့သည်' : 'Error submitting contact request');
      console.log("e", error)
    }
  };

  return (
    <div className="container min-h-screen" style={{ backgroundColor: 'white', minHeight: "100vh" }}>
      <div className="container-section" style={{ padding: '0px 50px 50px 50px' }}>
        <div className="contact_section" style={{ padding: '0px 50px' }}>
          <h1 className='title1'>{isMya ? "ဆက်သွယ်ရန်" : "Contact Us"}</h1>
          <h2 className='body4'>
            {isMya
              ? "မေးခွန်းတစ်ခုခု မှတ်ချက်တစ်ခုခု ရှိပါက သို့မဟုတ် ဆက်သွယ်လို့ပါက ဒီစာမျက်နှာမှတစ်ဆင့် ဖုန်း၊ အီးမေးလ် တို့မှတဆင့်ကျွန်ုပ်တို့နှင့်ဆက်သွယ်နိုင်ပါသည်။"
              : "let's connect: we're here to help, and we'd love to hear from you! whether you have a question, comment, or just want to chat, you can reach out to us through the contact form on this page, or by phone, email, or social media."
            }
          </h2>
        </div>
        <section className="form_section" style={{ padding: '0px 50px' }}>
          <div>
            <form onSubmit={onSubmit} className="form">
              <div className="form_control">
                <input
                  type="text"
                  name='name'
                  placeholder={isMya ? 'သင်၏နာမည်ထည့်ပါ' : 'Enter your name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div className="form_control">
                <input
                  type="text"
                  name='email'
                  placeholder={isMya ? 'အီးမေလ်ရိုက်ထည့်ပါ' : 'abc@example.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div className="form_control">
                <textarea
                  name='text'
                  placeholder={isMya ? 'ဖော်ပြချက်' : 'Description'}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ fontSize: '14px' }}
                />
              </div>
              <div className="submit" style={{ fontSize: '30px'}}>
                <Cbutton text={isMya ? 'ပေးပို့ရန်' : 'SUBMIT'} />
              </div>
              {message && <p>{message}</p>}
            </form>
          </div>
          <div className="contact_image">
            <img style={{ height: "350px", width: "330px", marginTop: "-30px", marginBottom: "30px" }} src={img2} alt={isMya ? 'ဆက်သွယ်ရန်' : 'Contact us'} />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Contactus;
