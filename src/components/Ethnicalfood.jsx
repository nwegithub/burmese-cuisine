import React, { useState, useRef, useEffect } from "react";
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAuth } from "../Auth/AuthContext";

const Ethnicalfood = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();
  const {isMya} = useAuth();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [categorySelected, setCategorySelected] = useState('');
  const flatListRef = useRef(null);

  const categoryArr = [
    {
      id: 1,
      img: 'https://mir-s3-cdn-cf.behance.net/projects/404/2defe6118509935.Y3JvcCwzODM1LDMwMDAsMjA4LDA.jpg',
      category: 'Kachin',
      category_mm:"ကချင်"
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNa_n2J8bw0tzvkbYNRWJjK-5lyMBGz6WpA&s',
      category: 'Kayar',
      category_mm:"ကယား"

    },
    {
      id: 3,
      img: 'https://ih1.redbubble.net/image.5232154165.6150/raf,360x360,075,t,fafafa:ca443f4786.jpg',
      category: 'Karen',
      category_mm:"ကရင်"

    },
    {
      id: 4,
      img: 'https://i.pinimg.com/736x/c1/2a/9f/c12a9f27fb7046c618a37a1347d6c821.jpg',
      category: 'Chin',
      category_mm:"ချင်း"

    },
    {
      id: 5,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErtXQnTvsGN4dnAqqpsTg5ZxKcQlDz6zQCYEJ5bOGLP3WG4b4A-KUPUCl1OEFe8IAULk&usqp=CAU',
      category: 'Mon',
      category_mm:"မွန်"

    },
    {
      id: 8,
      img: 'https://i.pinimg.com/originals/84/00/ef/8400efa68538aead97e057d67fabda04.png',
      category: 'Bamar',
      category_mm:"ဗမာ"

    },
    {
      id: 6,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKdVu4WFrEcAuv-eAoP_DhPWGm6p7aP1MvA&s',
      category: 'Rakhine',
      category_mm:"ရခိုင်"

    },
    {
      id: 7,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4UcYkPRf2ht2V7PDKf_vZA57EXo4yIuU3g&s',
      category: 'Shan',
      category_mm:"ရှမ်း"

    },
   
  ];


  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch('http://localhost:4000/ethnical/allProduct')
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




  const newArr1 = [{ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYY0QMUae4NrlglqfuX7-CEKSuvh2nyZhGZA&s',category: "All" }]

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
const handleClickEthical = () => {
  navigate('/Ethnicalfood');
};

  return (
    <div className="min-h-screen p-8 bg-custom-gradient">

      <div className="p-5">
                <div className="pt-5 flex flex-row" style={{
                    border: "2px solid #fcbf49",
                    borderRadius: "10px", // optional: to round the corners
                    padding: "0px 15px",
                    backgroundColor: "#ffd670",
                    // boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
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
                    <button className="p-3" onClick={handleClickEthical} type="button"  >
                        Ethnicalfood
                    </button>
                </div>
            </div>
            <h1 className="text-4xl text-center mb-8 title1">{isMya? "ရိုးရာဟင်းချက်နည်းများ" : "Cultural Culinary Journeys"}</h1>



      <div ref={flatListRef} style={styles.scrollContainer}>
  {newCategoryData.map((item, index) => (
    <Button
      key={index}
      data-aos="fade-left"
      data-aos-delay={100}
      onClick={() => setCategorySelected(item)}
      style={{
        margin: '0 10px',
        // padding: '10px',
        width: '120px', // Adjust width as needed
        textAlign: 'center',
        backgroundColor: categorySelected.id === item.id ? '#FFFFFF' : null,
        borderRadius: '10px', // Adjust the radius as needed
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', // Makes the logo circular
          backgroundImage: `url(${item.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '5px', // Space between logo and name
        }}
      ></div>
      <span style={{
        color: categorySelected.id === item.id ? 'black' : 'red',
        fontSize: '14px', // Adjust font size as needed
        fontWeight: 'bold'
      }}>
        {isMya? item.category_mm: item.category}
      </span>
    </Button>
  ))}
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsToDisplay.map((item, index) => (
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

                  onClick={() => navigate("/ethnicalingredientdetail",{ state: { item } })}>
                  {isMya? "ပါဝင်ပစ္စည်းများ" : "Ingredients"}

                </Button>
                <Button
                  onClick={() => navigate('/Receipe', { state: { item:itemData } })} // Add your modal logic
                  style={{ paddingInline: 10, backgroundColor: '#42eff5', color: 'black' }}
                >
                  {isMya? "ချက်နည်းများ" : "Recipe"}
                </Button>
              </div>
            ) : (
              <div className="h-1/5 flex items-center justify-center" >
                <h3 className="body1 text-red">
                  {isMya? item.name_mm : item.name}
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
    padding:'20px'
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
  filterContent: {
    margin: '0 10px',
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 50,
    borderRadius: '10px', // Adjust the radius as needed
    padding: '10px',

  }
};
