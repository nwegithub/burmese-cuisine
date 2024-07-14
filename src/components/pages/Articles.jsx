import React,{useEffect,useState} from "react";
import { Grid } from '@mui/material';
import "../../index.css";
import recipie from "../../../recipie.json";
import promoImage from "../../assets/article.png";
import Footer from "./Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const Articles = () => {
    const navigate = useNavigate(); 
    const [article,setArticle] = useState([])

    const handleClick = (item) => {
        navigate("/Readmore", { state: { item } }); 
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

    if(!article){
        return <div>Loading...</div>;
    }
    return (
        <div className="container relative">
            <div className="promotion-banner-container min-h-screen flex">
                <div className="content-container">
                    <p className="header">Welcome to our food blog</p>
                    <p className="subheader">
                        a culinary journey that celebrates the rich and diverse flavors from around the world.
                        Here, we share mouthwatering recipes, cooking tips, and inspiring stories behind your favorite dishes.
                        Whether you're a seasoned chef or a home cook, you'll find a treasure trove of delicious ideas to elevate your meals.
                        Join us as we explore the art of cooking and the joy of sharing food with loved ones.
                    </p>
                </div>
                <div className="image-container">
                    <img src={promoImage} alt="Promotion" className="rotated-image" />
                </div>
            </div>
            <Grid container spacing={2}>
                {article.map((item, index) => {
                    const reverse = index % 2 !== 0;
                    return (
                        <Grid container item xs={12} spacing={2} key={item.id} direction={reverse ? "row-reverse" : "row"} style={{ marginTop: '50px' }} >
                            <Grid item xs={6} style={{ marginTop: '20px' }}>
                                <img src={`http://localhost:4000/${item.image}`} alt={item.name} />
                            </Grid>
                            <Grid item xs={6}>
                                <p>{item.name}</p>
                                <p>
                                   {item.description}
                                </p>
                                <div>
                                    <button
                                        className='px-6 py-1 text-brightColor 
                                         hover:bg-brightColor hover:text-white 
                                         transition-all btn info rounded flex items-center'
                                        style={{ backgroundColor: "pink" }}
                                        onClick={() => handleClick(item)} // Pass item data to handleClick
                                    >
                                        Read More
                                        <ArrowForwardIcon className="ml-2" />
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Articles;
