import React, { useState } from "react";
import "./SingleMeal.css";
import "../../style/global.css";


const OrderMeal = () => {
  const [quantity, setQuantity] = useState(1);


  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      if (quantity === 9) {
      }
      if (quantity === 1) {
      }
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 2) {
      }
      if (quantity === 10) {
      }
    }
  };

  return (
    <div className="main">
        <img className="back-button" alt="img"/>
      <img src alt="pizza" className="img-layout" />
      <div className="texts">
        <div className="meal-wrapper">
          <div className="meal-content">
            <div className="meal-text">
              <div className="meal-title">
                <h1 className="meal-name">Pizza Capricciosa</h1>
                <h2 className="meal-price">11$</h2>
              </div>
              <p className="meal-description">
                Indulge in the classic perfection of Pizza Capricciosa—melted mozzarella, savory ham, mushrooms, and zesty tomato sauce. An Italian delight in every bite!
              </p>
            </div>
            <div className="counter">
              <img src alt="removebutton" className="button" onClick={decreaseQuantity} />
              <h2>{quantity}</h2>
              <img src alt="addbutton" className="button" onClick={increaseQuantity} />
            </div>
          </div>
          <div className="addbutton">
            <h1 className="addbutton-text">ADD TO ORDER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMeal;
