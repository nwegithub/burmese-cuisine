import React from 'react'
import '../FooterAboutUs.css'
import Chef from '../assets/chef.jpg'
import Vegitables from '../assets/vegitables.jpg'
import Promise from '../assets/promise.jpg'
import { useAuth } from '../Auth/AuthContext';

 const  FooterAboutUs = ()  =>{
  const {  isMya, setIsMya } = useAuth();
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  // function kof() {
  //   var j = document.getElementById("arr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

  // function gok() {
  //   let j = document.getElementById("brr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  // }

  // function kog() {
  //   let j = document.getElementById("brr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

  // function hok() {
  //   let j = document.getElementById("crr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  // }

  // function koh() {
  //   let j = document.getElementById("crr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

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
  return (
    <div className="App">
     
      <main>
        <div id="front" style={{minHeight : '50vh'}}>
          <h1 style={{ textAlign: "center" }} className='title1'>
          {isMya ? "Myanmar Cuisineမှကြိုဆိုပါတယ်" : "Welcome to Myanmar Cuisine"}
          </h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p className='body1'>
          {isMya ? "ကျွန်ုမတို့သည် အစားအသောက်ချစ်သူများ၊စားဖိုမှူးများနှင့်ရိုးရှင်းစွာချက်ပြုတ်ရန် ဝါသနာပါသော မည်သူမဆိုအတွက် အကောင်းဆုံးသောနေရာတစ်ခု ဖြစ်ပါသည်။ကျွန်ုမတို့၏ရည်မှန်းချက်မှာ ချက်ပြုတ်ခြင်းအနုပညာကို ပိုမိုကောင်းမွန်စေရန်၊ပညာပေးရန်နှင့် အရသာရှိသော ချက်ပြုတ်နည်းများကို မျှဝေရန် ဖြစ်သည်။" : "Welcome to Myanmar Cuisine, your ultimate destination for all things culinary. We are dedicated to bringing together food enthusiasts, home cooks, and professional chefs to celebrate the art of cooking. Our mission is to inspire, educate, and delight your taste buds with a diverse array of recipes, cooking tips, and nutritional information"}
          
          </p>
        </div>

       


        <div id="second" className="reveal" style={{width:'100%'}}>
          <div className="container">
            <div>
              <h1 className="title2"> {isMya ? "Myanmar Cuisineမှပေးနိုင်သည့်အရာ " : "What We Offer"}</h1>
         
              <p className="body1">
              {isMya ? "ကျွန်ုမတို့၏ အဆင့်ဆင့်လမ်းညွှန်ချက်များသည် လူကြီးမင်းအနေနဲ့ဟင်းပွဲတစ်ခုစီကို ယုံကြည်မှုအပြည့်ဖြင့် ပြန်လည်ဖန်တီးနိုင်စေရန် ရည်ရွယ်ပါသည်။ကျွန်ုမတို့၏ချက်ပြုတ်နည်းများ၊သင်ခန်းစာများမှတဆင့် အကောင်းဆုံးလေ့လာပါ။ချက်ပြုတ်ခြင်းအနုပညာကို ကျွမ်းကျင်အောင်လေ့လာပြီး လူကြီးမင်း၏မီးဖိုချောင်ကျွမ်းကျင်မှုကို မြှင့်တင်ပါ။" : "Find recipes for every occasion, dietary preference, and skill level. Our step-by-step guides ensure you can recreate each dish with confidence.Learn from the best with our cooking tips, techniques, and tutorials. Master the art of cooking and elevate your kitchen skills.Stay updated with the latest in the culinary world. From new ingredients to emerging food trends, we bring you the freshest insights.Join a community of food lovers. Share your own recipes, leave reviews, and connect with others who share your passion for great food."}
              </p>
            </div>
            <img
              src={Chef}
              alt=""
            />
          </div>
          <div className="container">
          <div>
              <h1 className="title2"> {isMya ? "ဘာကြောင့်Myanmar Cuisineကိုလေ့လာသင့်တာလဲ" : "Why should you study Myanmar Cuisine?"}</h1>
         
              <p className="body1">
              {isMya ? "ချက်ပြုတ်နည်းပေါင်းများစွာကို တစ်နေရာထဲမှာ ရှာဖွေနိုင်ခြင်း။ရာသီစာများနှင့် တိုင်းရင်းသားအစားအစာများကို လွယ်လွယ်ကူကူကြည့်ပီး သင်ယူနိုင်ပါတယ်။လွယ်ကူမြန်ဆန်သောနည်းလမ်းများကို လမ်းညွှန်ပေးနိုင်ခြင်းနှင့် အချက်အပြုတ်စွမ်းရည်ကို တိုးမြှင့်ပေးနိုင်တဲ့အတွက် လေ့လာသင့်သောဝဘ်ဆိုဒ်တခုဖြစ်ပါတယ်" : "You can find many recipes in one place.You can easily learn about seasonal and ethnic foods It's a website you should learn because it can guide you on quick and easy methods and improve your cooking skills."}
              </p>
            </div>
            <img
              src={Vegitables}
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
          <div>
              <h1 className="title2"> {isMya ? "Myanmar Cuisine၏ကတိကဝတ်များ" : "Our Promise"}</h1>
         
              <p className="body1">
              {isMya ? " အရည်အသွေးသည် ကျွန်ုပ်တို့လုပ်သမျှ၏ အရေးအကြီးဆုံးကဏ္ဏတွင်ပါဝင်သည်။ သင့်ချက်ပြုတ်မှုအတွေ့အကြုံကို ပိုမိုကောင်းမွန်စေမည့် ယုံကြည်စိတ်ချရသော အရည်အသွေးမြင့် အကြောင်းအရာများကို ပေးအပ်ရန် ကျွန်ုပ်တို့ကတိပြုပါသည်။ကျွန်ုပ်တို့၏ အားလုံးသော လုပ်ဆောင်ချက်များတွင် အရည်အသွေးကို အထူး ဂရုစိုက်ပါသည်။အကောင်းဆုံးအချက်အပြုတ်နည်းလမ်းများကိုသေချာစေရန်နှင့် ပိုမိုကောင်းမွန်အောင် ဆန်းသစ်တီထွင်ရန် ကျွန်ုပ်တို့ စဉ်ဆက်မပြတ် ကြိုးစားနေပါသည်။ " : "Quality is at the heart of everything we do. We are committed to providing you with reliable, high-quality content that enhances your cooking experience.We care about quality in all our activities.We continuously strive to improve and innovate, ensuring that you have access to the latest and best in the culinary world."}
              </p>
            </div>
            <img
              src={Promise}
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          
        </div>
        <div id="fifth" className="reveal">
          <h1 className="title1">{isMya ? "ဆက်သွယ်ရန်" : "Contact"}</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circlelocation-map-marker-navigation-icon-45868.png"
                alt=" "
              />
               <span>
                <h3 className="body1">{isMya ? "လိပ်စာ" : "Address"}</h3>
                <p className="body1">{isMya ? "ကွန်ပျူတာတက္ကသိုလ်(သထုံ)" : "Computer University Thaton"}</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3 className="body1">{isMya ? "ဖုန်း" : "Phone"}</h3>
                <p className="body1">{isMya ? "+၀၉၉၇၉၃၁၈၇၈၉၁" : "+959793187891"}</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3 className="body1">{isMya ? "အီးမေးလ်" : "E-mail"}</h3>
                <p className="body1">{isMya ? "linnwe3487@gmail.com" : "linnwe3487@gmail.com"}</p>
              </span>
            </a>
          </div>
        </div>
      </main>

      <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer>
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>ecerasystem</b>. All Rights Reserved
      </p>
    </div>
  );
}
export default FooterAboutUs;
