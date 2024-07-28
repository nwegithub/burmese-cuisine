import React, { useState, useRef, useEffect } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAuth } from "../Auth/AuthContext";

const categoryArr = [
    {
        id: 1,
        category: "Tagu",
        category_mm: "တန်ခူးလ"
    },
    {
        id: 2,
        category: "Kasone",
        category_mm: "ကဆုန်လ"
    },
    {
        id: 3,
        category: "Nayon",
        category_mm: "နယုန်လ"
    },
    {
        id: 4,
        category: "Warso",
        category_mm: "ဝါဆိုလ"
    },
    {
        id: 5,
        category: "Warkaung",
        category_mm: "ဝါခေါင်လ"
    },
    {
        id: 6,
        category: "Tawthalin",
        category_mm: "တော်တလင်းလ"
    },
    {
        id: 7,
        category: "Thadinkyut",
        category_mm: "သီတင်းကျွတ်လ"
    },
    {
        id: 8,
        category: "Tasaungmone",
        category_mm: "တန်ဆောင်မုန်း လ"
    },
    {
        id: 9,
        category: "Nataw",
        category_mm: "နတ်တော်လ"
    },
    {
        id: 10,
        category: "Pyartho",
        category_mm: "ပြာသိုလ"
    },
    {
        id: 11,
        category: "Tapohtwe",
        category_mm: "တပို့တွဲလ"
    },
    {
        id: 12,
        category: "Tapaung",
        category_mm: "တပေါင်းလ"
    },

]


const Ethnicalfood = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [product, setProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const navigate = useNavigate();
    const { category } = useParams();
    const { isMya } = useAuth()

    const [currentIndex, setCurrentIndex] = useState(0);
    const [categorySelected, setCategorySelected] = useState('');
    const flatListRef = useRef(null);



    useEffect(() => {
        AOS.init({ duration: 1000 });

        fetch('http://localhost:4000/products/allProduct')
            .then(response => response.json())
            .then(data => {
                setProduct(data.result || []);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);

    useEffect(() => {
        if (categorySelected) {
            setFilterProduct(product.filter(item => item.category === categorySelected.category));
        } else {
            setFilterProduct(product);
        }
    }, [categorySelected, product]);
    useEffect(() => {
        flatListRef.current?.scrollTo({
            left: currentIndex * 100, // Adjust 100 based on your item width
            behavior: 'smooth',
        });
    }, [currentIndex]);

    const handleNextPress = () => {
        if (currentIndex < product.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const newArr1 = [{ category: "All", category_mm: "အားလုံး" }]

    const newCategoryData = newArr1.concat(categoryArr)
    const productsToDisplay = categorySelected.category === "All" ? product : filterProduct;



    if (!productsToDisplay) {
        return <div>Loading...</div>;
    }
    const handleClickHome = () => {
        navigate('/Home');
    };
    const handleClickMenu = () => {
        navigate('/Menu');
    };
    const handleClickSeason = () => {
        navigate('/Seasonalfood');
    };

    return (
        <div className="min-h-screen p-8 bg-custom-gradient">
            <div className="p-5">
                <div className="pt-5 flex flex-row" style={{
                    border: "2px solid #fcbf49",
                    borderRadius: "10px", // optional: to round the corners
                    padding: "0px 15px",
                    backgroundColor: "#ffd670",
                    // boxShadow: "0px rgba(0, 0, 0, 0.5)",
                    width: "280px",
                    marginRight: "5px"
                }}>
                    <button className="p-3" onClick={handleClickHome} type="button" >
                        Home  /
                    </button>
                    <button className="p-3" onClick={handleClickMenu} type="button"
                    >
                        Menu /
                    </button>
                    <button className="p-3" onClick={handleClickSeason} type="button"  >
                        Seasonalfood
                    </button>
                </div>
            </div>
            <h1 className="text-4xl text-center mb-8 title1">{isMya? "ရာသီစာများရဲ့အရသာကိုခံစားကြည့်ပါ" : "Savor the Flavors of the Seasonal Food"}</h1>
            <div style={styles.filterContainer}>

                <Button
                    disabled={currentIndex === 0}
                    onClick={handleBack}
                    style={{ color: currentIndex === 0 ? 'red' : 'green' }}
                >
                    <ArrowBackIosIcon />
                </Button>
                <div
                    ref={flatListRef}
                    style={{ display: 'flex', overflowX: 'auto', padding: '10px 0' }}
                >
                    {newCategoryData.map((item, index) => (
                        <Button
                            key={index}
                            data-aos="fade-left"
                            data-aos-delay={100}
                            onClick={() => setCategorySelected(item)}
                            style={{
                                margin: '0 10px',
                                backgroundColor: categorySelected === item ? '#42eff5' : '#FFFFFF',
                                display: 'flex',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                flexShrink: 0,
                                maxWidth: '150px', // Adjust max width as needed
                            }}
                        >
                            <span
                                className="body1"
                                style={{
                                    color: categorySelected === item ? 'black' : 'red'
                                }}
                            >
                                {isMya ? item.category_mm : item.category}
                            </span>
                        </Button>
                    ))}
                </div>


                <Button
                    disabled={currentIndex === product.length - 1}
                    onClick={handleNextPress}
                    style={{ color: currentIndex === 0 ? 'red' : 'green' }}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {


                    productsToDisplay.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            data-aos="fade-up"
                            data-aos-delay={100}
                            className="border-2 border-gray-300 rounded-lg"
                            style={{
                                height: 290,
                                transition: 'transform 0.3s ease', // Smooth transition for scaling
                                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)', // Slightly larger on hover
                            }}
                        >
                            <img
                                className="w-full h-4/5 object-cover rounded-t-lg"
                                src={`http://localhost:4000/${item.image}`}
                                alt="img"
                            />
                            {hoveredIndex === index ? (
                                <div className="flex justify-center space-x-2 items-center" style={{ height: '20%' }}>
                                    <Button
                                        style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}
                                        onClick={() => navigate('/seasonalingredientdetail', { state: { item } })}>
                                        Ingredients
                                    </Button>
                                    <Button
                                        onClick={() => navigate('/Receipe', { state: { item } })}
                                        style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}
                                    >
                                        Recipe
                                    </Button>
                                </div>
                            ) : (
                                <div className="h-1/5 flex items-center justify-center" >
                                    <h3 className="body1 text-white">
                                        {isMya? item.name_mm :  item.name}
                                    </h3>
                                </div>
                            )}
                        </div>
                    ))}


            </div>
        </div>
    );
};

export default Ethnicalfood;

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
