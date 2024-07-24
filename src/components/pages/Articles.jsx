import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import promoImage from "../../assets/article.png";
import Footer from "./Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import '../../Article.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../Auth/AuthContext';

const Articles = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const {  isMya, setIsMya } = useAuth();

    const handleClick = (item) => {
        navigate("/Favorite");
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const countWords = (text) => {
        if (!text) {
            return 0;
        }
        return text.trim().split(/\s+/).length;
    };

    const truncateText = (text, maxWords) => {
        if (!text) {
            return '';
        }
        const words = text.trim().split(/\s+/);
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + ' ...';
        }
        return text;
    };

    useEffect(() => {
        fetch('http://localhost:4000/articles/allArticle')
            .then(response => response.json())
            .then(data => {
                setArticle(data);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <div                             data-aos="fade-in"
 className="promotion-banner-container bg-custom-gradient">
                <div className="content-image-wrapper ">
                    <div className="content-container" style={{ marginLeft: '20px' }}>
                        <p className="header title1" style={{ textAlign: 'center' }}>
                        {isMya ? "Myanmar Cuisineအစားအစာဘလော့ဂ်" : " Welcome to our food blog"}
                        </p>
                        <p className="subheader body1">
                        {isMya ? "ပြီးပြည့်စုံပြီးအရသာရှိသော ချက်ပြုတ်နည်းများဖြင့်အရသာရှိလှသော နံနက်စာများမှသည် လက်ရာမြောက်သော ညစာများအထိ၊ ကျွန်ုပ်တို့၏ အချက်အပြုတ်ကျွမ်းကျင်ပညာရှင်များသည် အတွေ့အကြုံမရှိသေးသော အိိမ်ရှင်မများနှင့် စားဖိုမှူးများအတွက် ဟင်းလျာများကို ဖန်တီးပေးထားပါသည်။ချက်ပြုတ်နည်းတစ်ခုစီတိုင်းသည် လတ်ဆတ်ပြီး အရည်အသွေးမြင့်သော ပါဝင်ပစ္စည်းများကို အသုံးပြု၍အလွယ်ကူဆုံးနည်းဖြင့် အမြင့်ဆုံးအရသာကို ရရှိနိုင်ကြောင်း သေချာစေရန် စေ့စပ်သေချာစွာ စမ်းသပ်ထားသည်။ သင့်မိသားစုနှင့် သူငယ်ချင်းများကို အထင်ကြီးစေမည့် အမှတ်ရဖွယ်အစားအစာများကို ဖန်တီးရန် အဆင့်ဆင့်လမ်းညွှန်ချက်များ၊ ချက်ပြုတ်နည်းများနှင့် အာဟာရဆိုင်ရာ အချက်အလက်များကို စူးစမ်းလေ့လာလိုက်ပါ။ ကျွန်မတို့နှင့်ပူးပေါင်းပြီး စိတ်အားထက်သန်မှုနှင့် တီထွင်ဖန်တီးမှုဖြင့် ချက်ပြုတ်ခြင်း၏ပျော်ရွှင်မှုကို ရှာဖွေလိုက်ပါ။။" : " Delight your senses with our curated collection of gourmet recipes, perfect for every occasion. From hearty breakfasts to exquisite dinners, our culinary experts have crafted dishes that cater to both novice cooks and seasoned chefs. Each recipe is meticulously tested to ensure it delivers maximum flavor with minimal effort, using fresh, high-quality ingredients. Explore our step-by-step guides, cooking tips, and nutritional information to create memorable meals that will impress your family and friends. Join us on a culinary journey and discover the joy of cooking with passion and creativity."}
                        
                        </p>
                    </div>
                    <div className="image-container" style={{ marginLeft: '100px' }}>
                        <img src={promoImage} alt="Promotion" className="rotated-image" style={{ width: 400, height: 400 }} />
                    </div>
                </div>
            </div>

            <Grid container spacing={2} style={{ marginTop: '10px', padding: '30px' }}>
                {article.map((item, index) => {
                    const reverse = index % 2 !== 0;
                    const truncatedDescription = truncateText(item.description, 30);

                    return (
                        <Grid
                            container
                            item
                            xs={12}
                            spacing={2}
                            key={item.id}
                            direction={reverse ? "row-reverse" : "row"}
                            style={{ marginTop: '50px' }}
                            data-aos="fade-up"
                            data-aos-delay={index * 500}
                        >
                            <Grid item xs={6} style={{ marginTop: '20px' }}>
                            <img src={`http://localhost:4000/${item.image}`} alt={item.name} style={{width:200,height:200}}/>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                style={{ paddingRight: '20px', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <p className="header">{item.name}</p>
                                <p className="subheader" style={{ marginTop: 10, marginBottom: 10 }}>
                                    {truncatedDescription}
                                   
                                </p>
                                <button
                                    className='px-6 py-1 text-brightColor hover:bg-brightColor hover:text-white transition-all btn info rounded flex items-center'
                                    style={{ borderRadius: '20px', backgroundColor: "#fe9e0d" }}
                                    onClick={() => handleClick(item)}
                                >
                                    Read More
                                    <ArrowForwardIcon className="ml-2" />
                                </button>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Articles;
