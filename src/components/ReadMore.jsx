// ReadMore.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './pages/Footer';
import receipe from '../../recipie.json';

const ReadMore = () => {
    const location = useLocation();
    const { item } = location.state || {};
    

    // // Handle case where item or item.url might be undefined/null
    // if (!item || !item.url || !item.name) {
    //     return <div>No item found.</div>;
    // }

    return (
        <div className="container relative">
            <div className="min-h-screen flex">
                <div className="w-2/3">
                    <div className="content-container">
                        <p className="header">Welcome to...</p>
                        <img src={item.url} alt={item.name} />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Velit natus voluptatum debitis officia sunt, vero et earum provident officiis, possimus impedit tempore? Repellat corporis adipisci
                            eveniet. Similique temporibus sint adipisci.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id doloribus dolor voluptate debitis. Ex, eligendi reiciendis dicta laudantium laborum ipsa corporis aut id est aperiam
                            officia nostrum nihil animi tenetur.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="content-container pr-0">
                        <h1 className="primary-heading">Recommended</h1>
                        <div className="space-y-2">
                            {receipe.Salad.map((recipeItem, index) => (
                                <div key={index} className="w-full md:w-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex items-center hover:bg-gray-100 hover:shadow-lg transition duration-300">
                                    <img className="border-gray-300 w-1/2 transform hover:scale-105 transition duration-300" src={recipeItem.url} alt="img" />
                                    <p className="ml-4 text-center">{recipeItem.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-32">
                <Footer />
            </div>
        </div>
    );
};

export default ReadMore;
