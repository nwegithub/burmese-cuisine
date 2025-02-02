
import React, { useState,useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Auth/AuthContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SeasonalCalculation = () => {

    const { isMya, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    const id = location.pathname.split('/')[2];
  
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const [numPeople, setNumPeople] = useState(1);


  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/products/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  
  const handleNumPeopleChange = (e) => {
    const value = e.target.value;
    if (value > 100) {
      alert("Number of people cannot exceed 100!");
    } else {
      setNumPeople(value);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    if (!product) {
      console.error("Product is null");
      return;
    }


    doc.text('Myanmar Cuisine', 20, 10); // Title
    doc.text(`Name: ${product.name}`, 20, 20); // English name
    
    doc.text(`Number of People: ${numPeople}`, 20, 40); // Number of people

    const tableColumn = ['Ingredients', 'Quantities'];
    const tableRows = [];

    const ingredients = isMya ? product.ingredients_mm : product.ingredients;
    ingredients.forEach((ingredient) => {
      const ingredientData = [
        ingredient.name,
        `${ingredient.amount * numPeople} ${ingredient.unit}`,
      ];
      tableRows.push(ingredientData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save('ingredient-details.pdf');
  };

  function convertBurmeseNumerals(burmeseNumeral) {
    const burmeseToWesternMap = {
      '၀': '0',
      '၁': '1',
      '၂': '2',
      '၃': '3',
      '၄': '4',
      '၅': '5',
      '၆': '6',
      '၇': '7',
      '၈': '8',
      '၉': '9',
    };

    return burmeseNumeral
      .split('')
      .map(char => burmeseToWesternMap[char] || char)
      .join('');
  }


  if (loading) {
    return <div>..Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='min-h-screen flex bg-custom-gradient'>
      <div className="p-20" style={{ flex: 1 }} >
          <div className="mt-5 text-black p-3 rounded-md body1">
            <h1 className="font-bold  title1">
              {isMya ? product.name_mm : product.name}
            </h1>
        </div>


        <h1
          style={{ textAlign: 'center' }}
          className="text-4xl font-bold mb-10 title1">
          {isMya ? "ပါဝင်ပစ္စည်းများအသေးစိတ်တွက်ရန်" : "Ingredient Detail Calculator"}
        </h1>
        <div className="flex flex-wrap" >
          <div className="w-full md:w-1/2 mb-4">

            <label htmlFor="numPeople" className="body1">
              {isMya ? "လူအရေအတွက်:" : "Number of People:"}

            </label>
            <input
              min={1}
              max={101}
              type="number"
              id="numPeople"
              value={numPeople}
              onChange={handleNumPeopleChange}
              className="mt-1 block p-4 text-4xl text-bold border border-yellow-300 rounded-md"
            />

            <img
              src={`http://localhost:4000/${product.image}`}
              alt="img"
              style={{ width: '300px', height: '400px', paddingTop: '20px' }}               />
          </div>

          <div className="w-full md:w-1/2 mb-4">

            <h2 className="text-5xl block font-lg " style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20 }}>
              {isMya ? "ပါဝင်ပစ္စည်းများ" : " Ingredients:"}
            </h2>


            <ul className="list-disc" style={{ marginTop: 10 }}>
              {
                isMya ? (
                  <>
                    {product.ingredients_mm.map((ingredient) => {
                      const amount = parseFloat(convertBurmeseNumerals(ingredient.amount));
                      return (
              <li
                key={ingredient.name}
                className="mb-10 body1 flex justify-between items-center"
                style={{ display: 'flex', width: '100%', }}
              >
                <div style={{width:'40%',textAlign:'left'}}>
                <span className="flex-1 text-left">{ingredient.name}</span>

                </div>

                <div style={{width:'20%'}}>
              <span className="flex-1 text-left">- </span>

              </div>

                <div className="flex space-x-2" style={{width:'40%'}}>
                  <span className="text-center" style={{width:'20%'}}>{amount * numPeople}</span>
                  <span className="text-right" style={{ color: "green", }}>
                    {ingredient.unit}
                  </span>
                </div>
              </li>
            );
                    })}
                  </>
                ) : (
                  <>
                    {product.ingredients.map((ingredient) => {
                      return (
              <li
                key={ingredient.name}
                className="mb-10 body1 flex justify-between items-center"
                style={{ display: 'flex', width: '100%', }}
              >
                <div style={{width:'40%',textAlign:'left'}}>
                <span className="flex-1 text-left">{ingredient.name}</span>

                </div>

                <div style={{width:'20%'}}>
              <span className="flex-1 text-left">- </span>

              </div>

                <div className="flex space-x-2" style={{width:'40%'}}>
                  <span className="text-center" style={{width:'20%'}}>{ingredient.amount * numPeople}</span>
                  <span className="text-right" style={{ color: "green", }}>
                    {ingredient.unit}
                  </span>
                </div>
              </li>
            );
                    })}

                  </>
                )
              }
             
            </ul>
            <div className="flex space-x-5">

              <button
                onClick={() => navigate('/menu')}
                className="bg-green-300 text-black p-3 rounded-md body1"
              >
                {isMya ? "မီနူး" : "Menu"}
              </button>
              <button
                onClick={generatePDF}
                className="bg-green-300 text-black p-3 rounded-md body1"
              >
                {isMya ? "မှတ်စုထုတ်ရန်" : "Generate Note"}
              </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}
export default SeasonalCalculation;
