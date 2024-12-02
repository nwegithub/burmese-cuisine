import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import '../../Article.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../Auth/AuthContext';

const HomeArticle = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [article, setArticle] = useState([]);
  const { isMya, setIsMya } = useAuth();

  const handleClick = (item) => {
    navigate("/Favorite");
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
        setArticle(data.slice(0, 3)); 
      })
      .catch(error => {
        console.error('There was an error fetching the article data!', error);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, [article]);

  if (!article.length) {
    return null
  }

  return (
    <div ref={ref} style={{ minHeight: '50vh', marginTop: '80px' }}>
      <h1 
      data-aos="fade-left"
      className="title1" style ={{textAlign : 'center'}}>{isMya? "နောက်ဆုံးမျှဝေထားသော ဆောင်းပါးများ" : "Latest Shared Blogs"}</h1>
      <Grid container spacing={2} style={{ marginTop: '5px', padding: '10px', justifyContent: 'center' }}>
        {article.map((item, index) => {
          const truncatedDescription = truncateText(isMya? item.description_mm :item.description, 20);

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.id}
              style={{
                maxWidth: '250px',
                margin: '10px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
              
            >
              <div style={{flex:1}}>
              <img
                src={`http://localhost:4000/${item.image}`}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  objectFit: 'cover'
                }}
              />
              <h2 style={{ margin: '10px 0', fontSize: '1.8rem' }} className="title2">{isMya? item.name_mm : item.name}</h2>
              <p 
            data-aos="fade-out"
              className="body1" style={{ margin: '10px 0', color: '#555', fontSize: '1.2rem',textAlign : 'justify' }}>
                {truncatedDescription}
              </p>
              </div>
              
              <button
                className="body2"
                style={{
                  borderRadius: '20px',
                  backgroundColor: "#fe9e0d",
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease',
                  marginTop: '10px'
                }}
                onClick={() => navigate("/Readmore",{ state: { item } })}
              >
                {isMya? "ဆက်ရန်" : "Read More"}
                <ArrowForwardIcon style={{ marginLeft: '8px', fontSize: '1rem' }} />
              </button>
            </Grid>
          );
        })}
      </Grid>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px' 
      }}>
        <button
          className="body2"
          style={{
            borderRadius: '20px',
            backgroundColor: "#fe9e0d",
            color: '#fff',
            border: 'none',
            padding: '6px 12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
            marginTop: '0px' 
          }}
          onClick={() => navigate("/articles")}
        >
          {isMya? "ဆောင်းပါးအားလုံးကြည့်ရန်" : "View all Articles"}
          <ArrowForwardIcon style={{ marginLeft: '8px', fontSize: '1rem' }} />
        </button>
      </div>
    </div>
   );
  });

export default HomeArticle;