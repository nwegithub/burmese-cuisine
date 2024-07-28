// ReadMore.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './pages/Footer';
import receipe from '../../recipie.json';
import { Button } from 'react-scroll';
import { useAuth } from '../Auth/AuthContext';

const ReadMore = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [articleById,setArticleById] = useState()
    const [articleId,setArticleId] = useState()
    const [article,setArticle] = useState()
    const {  isMya, setIsMya } = useAuth();


    useEffect(() => {
        if (item) {
            setArticleId(item._id);
        }
    }, [item]);

    useEffect(() => {
        if (articleId) {
            fetch(`http://localhost:4000/articles/${articleId}`)
                .then(response => response.json())
                .then(data => {
                    setArticleById(data);
                })
                .catch(error => {
                    console.error('There was an error fetching the product data!', error);
                });
        }
    }, [articleId]); 

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


    return (
        <div className="container relative " style={{backgroundColor:'white'}}>
            <div className="min-h-screen flex p-20">
                <div className="w-2/3">
                    <div className="content-container">
                        <p className="header title1">Welcome to...</p>
                        <img src={articleById && `http://localhost:4000/${articleById.image}`} alt={item.name} />
                        <p className='body1'>
                        {articleById ? (isMya ? articleById.description_mm : articleById.description) : null}
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="content-container pr-0">
                        <h1 className="primary-heading title2">Recommended</h1>
                        <div className="space-y-2">
                            {article && article.map((item, index) => (
                                <div key={index} className="w-full md:w-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex items-center hover:bg-gray-100 hover:shadow-lg transition duration-300">
                                    <Button
                                    onClick={() => setArticleId(item._id)}
                                    >
                                    <img className="border-gray-300 w-1/2 transform hover:scale-105 transition duration-300" 
                                    src={`http://localhost:4000/${item.image}`} alt="img" />
                                    <p className="ml-4 text-center body1">{isMya ? item.name_mm : item.name}</p>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ReadMore;
