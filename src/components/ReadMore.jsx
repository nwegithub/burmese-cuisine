import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './pages/Footer';
import { Button } from 'react-scroll';
import { useAuth } from '../Auth/AuthContext';

const ReadMore = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [articleById, setArticleById] = useState(null);
    const [articleId, setArticleId] = useState(null);
    const [articles, setArticles] = useState([]);
    const { isMya } = useAuth();

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
                setArticles(data);
            })
            .catch(error => {
                console.error('There was an error fetching the product data!', error);
            });
    }, []);

    return (
        <div style={{ backgroundColor: "" }}>
            <div className="min-h-screen flex p-20">
                <div className="w-2/3">
                    <div className="content-container">
                        <h2 className="title1">Welcome to...</h2>
                        <img
                            style={{ width: "350px" }}
                            src={articleById && `http://localhost:4000/${articleById.image}`}
                            alt={item?.name}
                        />
                        <p className='body1 justify-content-center pt-10' style={{ textAlign: "justify" }}>
                            {articleById ? (isMya ? articleById.description_mm : articleById.description) : null}

                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="content-container pr-0">
                        <h1 className="primary-heading title2">Recommended</h1>
                        <div className="space-y-8 p-8">
                            {articles && articles.map((article, index) => (
                                <div key={index} className="md:w-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex flex-col items-center hover:bg-gray-100 hover:shadow-lg transition duration-300">

                                    <Button
                                        onClick={() => setArticleId(article._id)}
                                    >
                                        <img
                                            style={{ width: "200px" }}
                                            className="transform hover:scale-105 transition duration-300 p-5"
                                            src={`http://localhost:4000/${article.image}`}
                                            alt="img"
                                        />
                                        <p className="ml-4 text-center pt-3">{isMya ? article.name_mm : article.name}</p>

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