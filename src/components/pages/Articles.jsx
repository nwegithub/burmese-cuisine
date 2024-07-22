import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import promoImage from "../../assets/article.png";
import Footer from "./Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import '../../Article.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);

    const handleClick = (item) => {
        navigate("/Readmore", { state: { item } });
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
                        <p className="header" style={{ textAlign: 'center' }}>Welcome to our food blog</p>
                        <p className="subheader">
                            a culinary journey that celebrates the rich and diverse flavors from around the world.
                            Here, we share mouthwatering recipes, cooking tips, and inspiring stories behind your favorite dishes.
                            Whether you're a seasoned chef or a home cook, you'll find a treasure trove of delicious ideas to elevate your meals.
                            Join us as we explore the art of cooking and the joy of sharing food with loved ones.
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
                            data-aos-delay={index * 1000}
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
