import React from 'react';
import detail from "../../assets/fc739f95286b81646fa8e719a190ba41.jpg";
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { GiSaltShaker } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

const IngredientDetail = () => {
  const location = useLocation();
  const { props } = location.state;
  const { isMya } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="image-section flex justify-center items-center w-full">
        <div className="w-1/3">
          <img
            src={`http://localhost:4000/${props.image}`}
            alt="img"
            style={{marginTop:'5px'}}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div style={{ textAlign: 'center', width: '50%' }}>
    <h1>{isMya ? props.name_mm : props.name}</h1>
    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
      {isMya ? "ပါဝင်ပစ္စည်းများ" : "Our family Secret Ingredients"}
    </h2>
    <div>
      <ul>
        {(isMya ? props.ingredient : props.ingredient_mm).map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '2px', borderWidth: '2px', borderColor: '#ef4444', padding: '2px', width: '100%' }}>
            <GiSaltShaker /> {item.name} : {item.amount} {item.unit}
          </li>
        ))}
      </ul>
    </div>
    <button
      style={{ backgroundColor: '#ecc94b', color: 'black', paddingTop: '2px', paddingBottom: '2px' }}
      onClick={() => navigate("/IngredientCalculation", { state: { props } })}>
      Ingredients
    </button>
  </div>
</div>


      {/* <div style={{flex:1,padding:30}}>
        <div style={{textAlign:'center', width:'100%',alignItems:'center'}}>
          <h1 >{isMya ? props.name_mm : props.name}</h1>
          <h2 style={{ fontSize:'1.875rem', fontWeight:'bold',marginBottom: '1rem'}}>
            {isMya ? "ပါဝင်ပစ္စည်းများ" : "Our family Secret Ingredients"}
          </h2>
          <div>
          <ul>
            {(isMya ? props.ingredient : props.ingredient_mm).map((item, index) => (
              <li key={index} style={{display:'flex',alignItems:'center',margin: '2px',borderWidth: '2px',borderColor:'#ef4444',padding: '2px',width: '100%'}}>
                <GiSaltShaker /> {item.name} : {item.amount} {item.unit}
              </li>
            ))}
          </ul></div>
          <button
            style={{backgroundColor:'#ecc94b',color: 'black',paddingTop: '2px',paddingBottom: '2px'}}
            onClick={() => navigate("/IngredientCalculation", { state: { props } })}>
            Ingredients
          </button>
        </div>
      </div>  */}
    </div>
  );
};

export default IngredientDetail;
