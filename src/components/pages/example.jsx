import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const dataArray = [
  {
    title: "Delicious Pizza",
    description: "Freshly baked with a crispy crust.",
    image: "/images/pizza.png",
  },
  {
    title: "Sizzling Steak",
    description: "Juicy and perfectly cooked.",
    image: "/images/steak.png",
  },
  {
    title: "Colorful Salad",
    description: "Healthy and refreshing.",
    image: "/images/salad.png",
  },
  {
    title: "Tasty Tacos",
    description: "Spicy and satisfying.",
    image: "/images/tacos.png",
  },
  {
    title: "Sweet Dessert",
    description: "End your meal with a treat.",
    image: "/images/dessert.png",
  },
  {
    title: "Delicious Pizza",
    description: "Freshly baked with a crispy crust.",
    image: "/images/pizza.png",
  },
  {
    title: "Sizzling Steak",
    description: "Juicy and perfectly cooked.",
    image: "/images/steak.png",
  },
  {
    title: "Colorful Salad",
    description: "Healthy and refreshing.",
    image: "/images/salad.png",
  },
  {
    title: "Tasty Tacos",
    description: "Spicy and satisfying.",
    image: "/images/tacos.png",
  },
  {
    title: "Sweet Dessert",
    description: "End your meal with a treat.",
    image: "/images/dessert.png",
  },
  {
    title: "Delicious Pizza",
    description: "Freshly baked with a crispy crust.",
    image: "/images/pizza.png",
  },
  {
    title: "Sizzling Steak",
    description: "Juicy and perfectly cooked.",
    image: "/images/steak.png",
  },
  {
    title: "Colorful Salad",
    description: "Healthy and refreshing.",
    image: "/images/salad.png",
  },
  {
    title: "Tasty Tacos",
    description: "Spicy and satisfying.",
    image: "/images/tacos.png",
  },
  {
    title: "Sweet Dessert",
    description: "End your meal with a treat.",
    image: "/images/dessert.png",
  },
  {
    title: "Delicious Pizza",
    description: "Freshly baked with a crispy crust.",
    image: "/images/pizza.png",
  },
  {
    title: "Sizzling Steak",
    description: "Juicy and perfectly cooked.",
    image: "/images/steak.png",
  },
  {
    title: "Colorful Salad",
    description: "Healthy and refreshing.",
    image: "/images/salad.png",
  },
  {
    title: "Tasty Tacos",
    description: "Spicy and satisfying.",
    image: "/images/tacos.png",
  },
  {
    title: "Sweet Dessert",
    description: "End your meal with a treat.",
    image: "/images/dessert.png",
  },
  {
    title: "Delicious Pizza",
    description: "Freshly baked with a crispy crust.",
    image: "/images/pizza.png",
  },
  {
    title: "Sizzling Steak",
    description: "Juicy and perfectly cooked.",
    image: "/images/steak.png",
  },
  {
    title: "Colorful Salad",
    description: "Healthy and refreshing.",
    image: "/images/salad.png",
  },
  {
    title: "Tasty Tacos",
    description: "Spicy and satisfying.",
    image: "/images/tacos.png",
  },
  {
    title: "Sweet Dessert",
    description: "End your meal with a treat.",
    image: "/images/dessert.png",
  },
];

const ExamplePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataArray.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg"
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-2xl mb-2">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplePage;


