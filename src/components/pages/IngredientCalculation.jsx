
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Auth/AuthContext';
import { useLocation } from 'react-router-dom';
import girl from "../../assets/44fe4345f01fc8623c95ee77b45f9f0d-removebg-preview.png"

const IngredientDetail = () => {
  const location = useLocation();
  const { item } = location.state;
  const {  isMya, setIsMya } = useAuth();


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
  
    item.ingredients.forEach((ingredient) => {
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

  return (
    <div className='min-h-screen flex bg-custom-gradient'>
    <div className="container p-20">
  <h1 
  style={{ textAlign: 'center' }}
  className="text-4xl font-bold mb-10 title1">
    {isMya ? "ပါဝင်ပစ္စည်းအသေးစိတ်တွက်စက်ရန်" : "Ingredient Detail Calculator"}
    </h1>
  <div className="flex flex-wrap">
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
            src={girl}
            alt="img"
            style={{ width: '350px', height: '450px',paddingTop: '20px'}} />
    </div>
    <div className="w-full md:w-1/2 mb-4">
      <h2 className="text-3xl block font-lg font-bold text-yellow-700 mb-2 title1">
      {isMya ? "ပါဝင်ပစ္စည်းများ:" : " Ingredients:"}
       </h2>
      <ul className="list-disc">
        {item.ingredients.map((ingredient) => (
          <li key={ingredient.name} className="mb-10 body1">
            {ingredient.name}: {ingredient.amount * numPeople} {ingredient.unit}
          </li>
        ))}
      </ul>
      
      <button
        onClick={generatePDF}
        className="mt-5 bg-yellow-300 text-black p-3 rounded-md body1"
      > {isMya ? "PDFအဖြစ်ဘောက်ချာထုတ်ရန်" : "Voucher as PDF"}
        
      </button>
     
    </div>
  </div>
</div>
</div>
  )
}
      export default IngredientDetail;
