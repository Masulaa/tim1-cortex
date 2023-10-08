import React, { useState } from 'react';
import './ChooseMeal.css';
import '../../style/global.css';
import MealsImg from '../../images/hrana.jpg'; 
import DrinksImg from '../../images/pice.jpg'; 

const dummyHrana = [
  {
    imeHrane: "Hamburger",
    gramaza: "150g",
    sastojci: ["Pljeskavica", "cheddar sir", "lepinje", "salata", "kečap", "majonez"],
    cena: "2.20€"
  },
  {
    imeHrane: "Pizza",
    gramaza: "300g",
    sastojci: ["Testo", "pelati", "mozzarella", "šunka", "pečurke", "origano"],
    cena: "4.50€"
  },
  {
    imeHrane: "Salata",
    gramaza: "200g",
    sastojci: ["Miks zelenih salata", "paradajz", "krastavci", "masline", "dresing"],
    cena: "3.00€"
  },
];

const dummyPica = [
  {
    imePica: "Coca cola",
    litraza: "0.5l",
    cena: "1.90€"
  },
  {
    imePica: "Fanta",
    litraza: "0.5l",
    cena: "1.90€"
  },
  {
    imePica: "Ivi",
    litraza: "0.33l",
    cena: "1.70€"
  },

];

const ChooseMeal = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hrana');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const selectedData = selectedCategory === 'Hrana' ? dummyHrana : dummyPica;

  return (
    <div>
      <h2>Izaberite kategoriju:</h2>
      <div className="category-buttons">
        <div
          className={`category-card ${selectedCategory === 'Hrana' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Hrana')}
        >
          <img src={MealsImg} alt="Hrana" />
          <h3>Hrana</h3>
        </div>
        <div
          className={`category-card ${selectedCategory === 'Pice' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Pice')}
        >
          <img src={DrinksImg} alt="Pice" />
          <h3>Pice</h3>
        </div>
      </div>

      <h2>{selectedCategory}</h2>
      <ul>
        {selectedData.map((item, index) => (
          <li key={index}>
            {selectedCategory === 'Hrana' ? (
              <>
                <h3>{item.imeHrane} {item.gramaza}</h3>
                <p>{item.sastojci.join(", ")}</p>
              </>
            ) : (
              <>
                <h3>{item.imePica} {item.litraza}</h3>
              </>
            )}
            <h3>{item.cena}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseMeal;
