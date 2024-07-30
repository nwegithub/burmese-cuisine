
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Auth/AuthContext';
import { useLocation } from 'react-router-dom';
import { useItem } from '../../Auth/ItemProvider';

const IngredientDetail = () => {
  const { item } = useItem();

  const { isMya, setIsMya } = useAuth();


  const [numPeople, setNumPeople] = useState(1);

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Ingredient Detail Calculator', 20, 10);
    doc.text(`Number of People: ${numPeople}`, 20, 20);

    const tableColumn = ['Ingredient', 'Quantity'];
    const tableRows = [];

    isMya ? item.ingredients_mm : item.ingredients.forEach((ingredient) => {
      const ingredientData = [
        ingredient.name,
        `${ingredient.amount * numPeople} ${ingredient.unit}`,
      ];
      tableRows.push(ingredientData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30
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


  return (
    <div className='min-h-screen flex bg-custom-gradient'>
      <div className="p-20" style={{ flex: 1 }} >
          <div className="mt-5 text-black p-3 rounded-md body1">
            <h1 className="font-bold  title1">
              {isMya ? item.name_mm : item.name}
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
              type="number"
              id="numPeople"
              value={numPeople}
              onChange={handleNumPeopleChange}
              className="mt-1 block p-4 text-4xl text-bold border border-yellow-300 rounded-md"
            />

            <img
              src={`http://localhost:4000/${item.image}`}
              alt="img"
              style={{ width: '350px', height: '450px', paddingTop: '20px' }} />
          </div>

          <div className="w-full md:w-1/2 mb-4">

            <h2 className="text-5xl block font-lg " style={{ fontSize: 25, fontWeight: 'bold', paddingBottom: 20 }}>
              {isMya ? "ပါဝင်ပစ္စည်းများ:" : " Ingredients:"}
            </h2>


            <ul className="list-disc" style={{ marginTop: 10 }}>
              {
                isMya ? (
                  <>
                    {item.ingredients_mm.map((ingredient) => {
                      const amount = parseFloat(convertBurmeseNumerals(ingredient.amount));
                      return (
                        <li key={ingredient.name} className="mb-10 body1">
                          {ingredient.name}: {amount * numPeople} <span style={{ color: 'green' }}>{ingredient.unit}</span>
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient.name} className="mb-10 body1">
                        {ingredient.name}: {ingredient.amount * numPeople} <span style={{ color: 'green' }}>{ingredient.unit}</span>
                      </li>
                    ))}

                  </>
                )
              }



            </ul>

            <button
              onClick={generatePDF}
              className="mt-5 bg-green-300 text-black p-3 rounded-md body1"
            > {isMya ? "PDFအဖြစ်ဘောက်ချာထုတ်ရန်" : "Voucher as PDF"}

            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default IngredientDetail;
