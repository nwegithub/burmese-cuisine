// src/IngredientDetail.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Auth/AuthContext';
import { useLocation } from 'react-router-dom';


const IngredientDetail = () => {

    const location = useLocation();
  const { props } = location.state;
  const { isMya } = useAuth();
    
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

    props.ingredient.forEach((ingredient) => {
      const ingredientData = [
        ingredient.name,
        `${ingredient.amount * numPeople} ${ingredient.unit}`,
      ];
      tableRows.push(ingredientData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    doc.save('ingredient-details.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ingredient Detail Calculator</h1>
      <div className="mb-4">
        <label htmlFor="numPeople" className="block text-gray-700">
          Number of People:
        </label>
        <input
          type="number"
          id="numPeople"
          value={numPeople}
          onChange={handleNumPeopleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5">
          {props.ingredient.map((ingredient) => (
            <li key={ingredient.name} className="mb-2">
              {ingredient.name}: {ingredient.amount * numPeople} {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={generatePDF}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default IngredientDetail;
