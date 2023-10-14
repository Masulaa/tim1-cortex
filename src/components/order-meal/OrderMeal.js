import React, { useState } from "react";
import "./OrderMeal.css";
import "../../style/global.css";
import pizzaImg from "../../images/PizzaCapricciosa.png";
import removebuttongImg from "../../images/RemoveButton.png";
import removebuttonrImg from "../../images/RemoveButton2.png";
import addbuttonrImg from "../../images/AddButton.png";
import addbuttongImg from "../../images/AddButton2.png";
import backButton from "../../images/arrow_back_ios_new.svg";

const OrderMeal = () => {
  const [quantity, setQuantity] = useState(1);
  const [removeImage, setRemoveImage] = useState(removebuttongImg);
  const [addImage, setAddImage] = useState(addbuttonrImg);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      if (quantity === 9) {
        setAddImage(addbuttongImg);
      }
      if (quantity === 1) {
        setRemoveImage(removebuttonrImg);
      }
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 2) {
        setRemoveImage(removebuttongImg);
      }
      if (quantity === 10) {
        setAddImage(addbuttonrImg);
      }
    }
  };

  return (
    <div className="main">
        <img src={backButton} className="back-button" alt="img"/>
      <img src={pizzaImg} alt="pizza" className="img-layout" />
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
              <img src={removeImage} alt="removebutton" className="button" onClick={decreaseQuantity} />
              <h2>{quantity}</h2>
              <img src={addImage} alt="addbutton" className="button" onClick={increaseQuantity} />
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
