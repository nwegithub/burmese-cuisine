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
import { Button } from '@mui/material';

const categoryArr = [
    {
        id: 1,
        category: "SUMMER",
        category_mm: "နွေရာသီ"
    },
    {
        id: 2,
        category: "RAINY SEASON",
        category_mm: "မိုးရာသီ"
    },
    {
        id: 3,
        category: "WINTER",
        category_mm: "ဆောင်းရာသီ"
    },
]

const Articles = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const { isMya, setIsMya } = useAuth();
    const [categorySelected, setCategorySelected] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    const handleClick = (item) => {
        navigate("/Readmore", { state: { item } });
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


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

    useEffect(() => {
        if (categorySelected) {
            setFilterProduct(article.filter(item => item.category === categorySelected.category));
        } else {
            setFilterProduct(article);
        }
    }, [categorySelected, article]);

    const newArr1 = [{ category: "All", category_mm: "အားလုံး" }]

    const newCategoryData = newArr1.concat(categoryArr)
    const productsToDisplay = categorySelected.category === "All" ? article : filterProduct;


    if (!productsToDisplay) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <div data-aos="fade-in"
                className="promotion-banner-container bg-custom-gradient " style={{ maxHeight: '60vh' }}>
                <div className="content-image-wrapper ">
                    <div className="content-container" style={{ marginLeft: '20px' }}>
                        <p className="header title1" style={{ textAlign: 'center' }}>
                            {isMya ? "Myanmar Cuisine အစားအစာဘလော့ဂ်" : " Welcome to our food blog"}
                        </p>
                        <p className="body1 text-4xl mt-4">
                            {isMya ? "ပြီးပြည့်စုံပြီးအရသာရှိလှသော ချက်ပြုတ်နည်းများဖြင့် အတွေ့အကြုံမရှိသေးသော အိိမ်ရှင်မများအတွက် ဟင်းလျာများကို ဖန်တီးပေးထားပါသည်။ချက်ပြုတ်နည်းတစ်ခုစီတိုင်းသည် လတ်ဆတ်အရည်အသွေးမြင့်သော ပါဝင်ပစ္စည်းများကို အသုံးပြု၍အလွယ်ကူဆုံးနည်းဖြင့် ရနိုင်ကြောင်း စမ်းသပ်ထားသည်။ အမှတ်ရဖွယ်အစားအစာများကို ဖန်တီးရန် ချက်ပြုတ်နည်းများနှင့် အာဟာရဆိုင်ရာ အချက်အလက်များကို စူးစမ်းလေ့လာလိုက်ပါ။ စိတ်အားထက်သန်မှုနှင့် တီထွင်ဖန်တီးမှုဖြင့် ချက်ပြုတ်ခြင်း၏ပျော်ရွှင်မှုကို ရှာဖွေလိုက်ပါ။။" : " Delight your senses with our curated collection of gourmet recipes, perfect for every occasion. From hearty breakfasts to exquisite dinners, our culinary experts have crafted dishes that cater to both novice cooks and seasoned chefs. Each recipe is meticulously tested to ensure it delivers maximum flavor with minimal effort, using fresh, high-quality ingredients. Explore our step-by-step guides, cooking tips, and nutritional information to create memorable meals that will impress your family and friends. Join us on a culinary journey and discover the joy of cooking with passion and creativity."}
                        </p>
                    </div>
                    <div className="image-container" style={{ marginLeft: '100px' }}>
                        <img src={promoImage} alt="Promotion" className="rotated-image" style={{ width: 400, height: 400 }} />
                    </div>
                </div>
            </div>

            <div style={styles.scrollContainer}>
                {newCategoryData.map((item, index) => (
                    <Button
                        key={index}
                        data-aos="fade-left"
                        data-aos-delay={100}
                        onClick={() => setCategorySelected(item)}
                        style={{
                            margin: '0 10px',
                            backgroundColor: categorySelected === item ? '#42eff5' : '#FFFFFF',
                            borderRadius: '10px', // Adjust the radius as needed
                            padding: '10px',
                            paddingRight: '20px',
                            paddingLeft: '20px'

                        }}
                    >
                        <span className="body1" style={{
                            color: categorySelected === item ? 'black' : 'red'
                        }}>
                            {isMya ? item.category_mm : item.category}
                        </span>
                    </Button>
                ))}
            </div>
            <Grid container spacing={2} style={{ marginTop: '10px', padding: '30px' }}>
                {productsToDisplay.map((item, index) => {
                    const reverse = index % 2 !== 0;
                    const truncatedDescription = truncateText(isMya ? item.description_mm : item.description, 30);

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
                            <Grid item xs={6} style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={`http://localhost:4000/${item.image}`} alt={item.name} style={{ width: 300, height: 300 }} />
                            </Grid>

                            <Grid
                                item
                                xs={6}
                                style={{ paddingRight: '20px', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <p className="header title1">{ isMya ? item.name_mm : item.name}</p>

                                <p className="body1" style={{ marginTop: 10, marginBottom: 10, textAlign: "justify", lineHeight: '2.5rem' }}>
                                    {truncatedDescription}

                                </p>
                                <button
                                    className='px-7 py-3 flex items-center'
                                    style={{
                                        borderRadius: '30px',
                                        border: '2px solid black', // Adds a solid black border
                                        color: 'red'               // Sets the text color to red
                                    }}
                                    onClick={() => handleClick(item)}
                                >
                                   {isMya? "ဆက်ရန်" : "Read More"} 
                                    <ArrowForwardIcon className="ml-2" />
                                </button>

                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
            <Footer />
        </div>
    );
};

export default Articles;


const styles = {
    filterContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '30px',
    },
    scrollContainer: {
        display: 'flex',
        overflowX: 'auto',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    icon: {
        width: 24,
        height: 24,
    },

};
