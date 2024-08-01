import React from 'react'
import '../FooterAboutUs.css'
import Chef from '../assets/chef.jpg'
import Vegitables from '../assets/c4085bdb960487ca31f85c867da0fcab.jpg'
import { useAuth } from '../Auth/AuthContext';
import Footer from '././pages/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const FooterAboutUs = () => {
  const { isMya, setIsMya } = useAuth();
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false, // Animation happens only once
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className="App">
      <main>
        <div id="front" style={{ minHeight: '50vh' }}>
          <h1 data-aos="fade-up" className="title1" style={{color: '#d97706',textAlign: "center"}}>
            {isMya ? "Myanmar Cuisineမှကြိုဆိုပါတယ်" : "Welcome to Myanmar Cuisine"}
          </h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p data-aos="fade-up" className='title1' style={{ textAlign: "center", lineHeight: '3rem' }}>
            {isMya ? "ကျွန်ုမတို့သည် အစားအသောက်ချစ်သူများ၊စားဖိုမှူးများနှင့်ရိုးရှင်းစွာချက်ပြုတ်ရန် ဝါသနာပါသော မည်သူမဆိုအတွက် အကောင်းဆုံးသောနေရာတစ်ခု ဖြစ်ပါသည်။ကျွန်ုမတို့၏ရည်မှန်းချက်မှာ ချက်ပြုတ်ခြင်းအနုပညာကို ပိုမိုကောင်းမွန်စေရန်၊ပညာပေးရန်နှင့် အရသာရှိသော ချက်ပြုတ်နည်းများကို မျှဝေရန် ဖြစ်သည်။" : "Welcome to Myanmar Cuisine, your ultimate destination for all things culinary. We are dedicated to bringing together food enthusiasts, home cooks, and professional chefs to celebrate the art of cooking. Our mission is to inspire, educate, and delight your taste buds with a diverse array of recipes, cooking tips, and nutritional information"}

          </p>
        </div>
        <div id="second" style={{ width: '100%' }}>
          <div>
            <div>
              <h1 data-aos="fade-up" className="title1 mt-10px" style={{color: '#d97706'}}> {isMya ? "Myanmar Cuisineမှပေးနိုင်သည့်အရာ " : "What We Offer"}</h1>

              <p data-aos="fade-up" className="body1" style={{ fontSize: '1.3rem', lineHeight: '3' }}>
                {isMya ? "ကျွန်ုမတို့၏ အဆင့်ဆင့်လမ်းညွှန်ချက်များသည် လူကြီးမင်းအနေနဲ့ဟင်းပွဲတစ်ခုစီကို ယုံကြည်မှုအပြည့်ဖြင့် ပြန်လည်ဖန်တီးနိုင်စေရန် ရည်ရွယ်ပါသည်။ကျွန်ုမတို့၏ချက်ပြုတ်နည်းများ၊သင်ခန်းစာများမှတဆင့် အကောင်းဆုံးလေ့လာပါ။ချက်ပြုတ်ခြင်းအနုပညာကို ကျွမ်းကျင်အောင်လေ့လာပြီး လူကြီးမင်း၏မီးဖိုချောင်ကျွမ်းကျင်မှုကို မြှင့်တင်ပါ။" : "Find recipes for every occasion, dietary preference, and skill level. Our step-by-step guides ensure you can recreate each dish with confidence.Learn from the best with our cooking tips, techniques, and tutorials. Master the art of cooking and elevate your kitchen skills.Stay updated with the latest in the culinary world. From new ingredients to emerging food trends, we bring you the freshest insights.Join a community of food lovers. Share your own recipes, leave reviews, and connect with others who share your passion for great food."}
              </p>
            </div>
            <img
            data-aos="fade-in"

              src={Chef}
            />
          </div>
          <div id='second' style={{ width: '100%' }}>
            <div>
            <h1 data-aos="fade-left" className="title1" style={{color: '#d97706'}}> {isMya ? "ဘာကြောင့်Myanmar Cuisineကိုလေ့လာသင့်တာလဲ" : "Why should you study Myanmar Cuisine?"}</h1>
              <p data-aos="fade-right" className="body1" style={{ fontSize: '4', lineHeight: '3rem', textAlign: 'justify' }}>
                {isMya ? "ချက်ပြုတ်နည်းပေါင်းများစွာကို တစ်နေရာထဲမှာ ရှာဖွေနိုင်ခြင်း။ရာသီစာများနှင့် တိုင်းရင်းသားအစားအစာများကို လွယ်လွယ်ကူကူကြည့်ပီး သင်ယူနိုင်ပါတယ်။လွယ်ကူမြန်ဆန်သောနည်းလမ်းများကို လမ်းညွှန်ပေးနိုင်ခြင်းနှင့် အချက်အပြုတ်စွမ်းရည်ကို တိုးမြှင့်ပေးနိုင်တဲ့အတွက် လေ့လာသင့်သောဝဘ်ဆိုဒ်တခုဖြစ်ပါတယ်" : "You can find many recipes in one place.You can easily learn about seasonal and ethnic foods It's a website you should learn because it can guide you on quick and easy methods and improve your cooking skills."}
              </p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '5px', // Adds space between the columns
              // Ensures that the content wraps if needed
            }}>
              <div style={{ flex: '1', minWidth: '100px', display: 'flex', justifyContent: 'center' }}>
                <img
                  data-aos="fade-right"
                  src={Vegitables}
                  alt="Vegetables"
                  style={{
                    maxWidth: '100%',
                    height: '80%',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <div style={{ flex: '1', paddingRight: '20px', paddingTop: '15%'}}>
                <h1  data-aos="fade-out" className="title1" style={{color: '#d97706'}}>
                  {isMya ? "Myanmar Cuisine၏ကတိကဝတ်များ" : "Our Promise"}
                </h1>
                <p data-aos="fade-in" className="body1" style={{ fontSize: '1.3rem', lineHeight: '4', textAlign: 'justify' }}>
                  {isMya
                    ? "အရည်အသွေးသည် ကျွန်ုပ်တို့လုပ်သမျှ၏ အရေးအကြီးဆုံးကဏ္ဏတွင်ပါဝင်သည်။ သင့်ချက်ပြုတ်မှုအတွေ့အကြုံကို ပိုမိုကောင်းမွန်စေမည့် ယုံကြည်စိတ်ချရသော အရည်အသွေးမြင့် အကြောင်းအရာများကို ပေးအပ်ရန် ကျွန်ုပ်တို့ကတိပြုပါသည်။ ကျွန်ုပ်တို့၏ အားလုံးသော လုပ်ဆောင်ချက်များတွင် အရည်အသွေးကို အထူး ဂရုစိုက်ပါသည်။ အကောင်းဆုံးအချက်အပြုတ်နည်းလမ်းများကိုသေချာစေရန်နှင့် ပိုမိုကောင်းမွန်အောင် ဆန်းသစ်တီထွင်ရန် ကျွန်ုပ်တို့ စဉ်ဆက်မပြတ် ကြိုးစားနေပါသည်။"
                    : "Quality is at the heart of everything we do. We are committed to providing you with reliable, high-quality content that enhances your cooking experience. We care about quality in all our activities. We continuously strive to improve and innovate, ensuring that you have access to the latest and best in the culinary world."
                  }
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* <h1 className="title1" style={{ textAlign: 'center' }}>
            {isMya ? "ဆက်သွယ်ရန်" : "Contact Us"}
          </h1> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '600px' }}>
              {/* <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circlelocation-map-marker-navigation-icon-45868.png"
                alt="Address"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <span>
                <h3 className="body1" style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {isMya ? "လိပ်စာ" : "Address"}
                </h3>
                <p className="body1" style={{ margin: '0', fontSize: '1.5rem' }}>
                  {isMya ? "ကွန်ပျူတာတက္ကသိုလ်(သထုံ)" : "Computer University Thaton"}
                </p>
              </span>
            </a> */}

              {/* <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt="Phone"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <span>
                <h3 className="body1" style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {isMya ? "ဖုန်း" : "Phone"}
                </h3>
                <p className="body1" style={{ margin: '0', fontSize: '1.5rem' }}>
                  {isMya ? "+၀၉၉၇၉၃၁၈၇၈၉၁" : "+959793187891"}
                </p>
              </span>
            </a> */}

              {/* <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt="Email"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <span>
                <h3 className="body1" style={{ margin: '0', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {isMya ? "အီးမေးလ်" : "E-mail"}
                </h3>
                <p className="body1" style={{ margin: '0', fontSize: '1rem' }}>
                  {isMya ? "linnwe3487@gmail.com" : "linnwe3487@gmail.com"}
                </p>
              </span>
            </a> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}
export default FooterAboutUs;
